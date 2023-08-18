const AWS = require('aws-sdk');

const isDev = process.env.ENV === 'dev';

const accessKeyId = isDev ? 'fake' : undefined;
const secretAccessKey = isDev ? 'fake' : undefined;

const region = isDev ? 'us-fake-1' : process.env.REGION;
const endpoint = isDev
  ? 'http://localhost:62224'
  : `https://dynamodb.${process.env.REGION}.amazonaws.com`;

const awsConfig = {
  accessKeyId,
  secretAccessKey,
  region,
  endpoint,
};

// The suffix used to named the table when deployed is different than when running locally
const tableSuffix = isDev
  ? 'Table'
  : `-${process.env.APPSYNC_API_ID}-${process.env.ENV}`;

const hasAtLeastOnePermission = (roles) => {
  return roles.some((permissions) =>
    Object.keys(permissions)
      .filter((key) => key.startsWith('role_'))
      // Check at least one permission is true since it's possible they are all false
      .some((role) => !!permissions[role]),
  );
};

/*
 * Note: querying dynamodb directly is faster than going through appsync,
 * and I think warranted given the nature of this function. We're fetching all contributor entries,
 * and then manually verifying (and keeping count) of whether it's a contributor or member.
 * Also note that dynamodb at the time of writing does not provide a way to query the number of rows in a table
 * without scanning the entire table. You can query the item count but it's not guaranteed to be fresh (updates roughly every 6 hours)
 */
const getContributorAndMemberCount = async (colonyAddress) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient(awsConfig);

  let nextToken = null;
  // Define the query parameters
  const colonyContributorQueryParams = {
    TableName: `ColonyContributor${tableSuffix}`,
    IndexName: 'byColonyAddress',
    KeyConditionExpression: 'colonyAddress = :colonyAddress',
    ExpressionAttributeValues: {
      ':colonyAddress': colonyAddress,
    },
  };

  const allContributors = [];

  // Perform the query operation, as many times as necessary
  do {
    // eslint-disable-next-line no-await-in-loop
    const contributors = await dynamoDB
      .query(colonyContributorQueryParams)
      .promise();
    allContributors.push(...contributors.Items);
    nextToken = contributors.LastEvaluatedKey;
    colonyContributorQueryParams.ExclusiveStartKey = nextToken;
  } while (nextToken);

  return (
    await Promise.all(
      // For each entry, check if it's a contributor or member
      allContributors.map(
        async ({ contributorAddress, verified: isVerified }) => {
          const rolesQueryParams = {
            TableName: `ColonyRole${tableSuffix}`,
            IndexName: 'byTargetAddress', // The index to query
            KeyConditionExpression: 'targetAddress = :targetAddress', // Query by the targetAddress
            FilterExpression: 'colonyAddress = :colonyAddress', // Filter by the colonyAddress
            ExpressionAttributeValues: {
              ':targetAddress': contributorAddress,
              ':colonyAddress': colonyAddress,
            },
          };

          const reputationQueryParams = {
            TableName: `ContributorReputation${tableSuffix}`,
            IndexName: 'byContributorAddress',
            KeyConditionExpression: 'contributorAddress = :contributorAddress',
            FilterExpression:
              'colonyAddress = :colonyAddress AND reputationRaw <> :zero', // Filter out 0 reputation
            ExpressionAttributeValues: {
              ':contributorAddress': contributorAddress,
              ':colonyAddress': colonyAddress,
              ':zero': '0',
            },
          };

          const userWatchedColoniesQueryParams = {
            TableName: `WatchedColonies${tableSuffix}`,
            KeyConditionExpression: 'id = :contributorAddress',
            // filter by this colony, i.e. is the contributor watching this colony
            FilterExpression: 'colonyAddress = :colonyAddress',
            ExpressionAttributeValues: {
              ':contributorAddress': contributorAddress,
              ':colonyAddress': colonyAddress,
            },
          };

          const roles = await dynamoDB.query(rolesQueryParams).promise();

          const reputation = await dynamoDB
            .query(reputationQueryParams)
            .promise();

          // is contributor
          if (reputation.Items.length) {
            return { contributor: 1, member: 1 };
          }

          if (hasAtLeastOnePermission(roles.Items)) {
            return { contributor: 1, member: 1 };
          }

          // is member
          if (isVerified) {
            return { contributor: 0, member: 1 };
          }

          const watchedColonies = await dynamoDB
            .query(userWatchedColoniesQueryParams)
            .promise();

          if (watchedColonies.Items.length) {
            return { contributor: 0, member: 1 };
          }

          // no roles, rep, not verified and not watching: neither member nor contributor!
          return { contributor: 0, member: 0 };
        },
      ),
    )
  ).reduce(
    (count, { contributor, member }) => {
      /* eslint-disable no-param-reassign */
      count.contributorCount += contributor;
      count.memberCount += member;
      return count;
      /* eslint-enable no-param-reassign */
    },
    { contributorCount: 0, memberCount: 0 },
  );
};

module.exports = {
  getContributorAndMemberCount,
};
