import { TransactionStatus } from '~gql';
import {
  type TransactionType,
  type MessageType,
} from '~redux/immutable/index.ts';

export type TransactionOrMessageGroup = (TransactionType | MessageType)[];

export type TransactionOrMessageGroups = TransactionOrMessageGroup[];

// get the group id (mostly used as a unique identifier for the group)
export const getGroupId = (txOrMessageGroup: TransactionOrMessageGroup) => {
  // Typescripts flow inference totall seems to fall apart here
  if (!txOrMessageGroup[0]) return undefined;
  if ((txOrMessageGroup[0] as TransactionType).group) {
    return Array.isArray((txOrMessageGroup[0] as TransactionType).group!.id)
      ? ((txOrMessageGroup[0] as TransactionType).group!.id as string[]).join(
          '.',
        )
      : ((txOrMessageGroup[0] as TransactionType).group!.id as string);
  }
  return txOrMessageGroup[0].id;
};

// Get the group key (mostly used for i18n)
export const getGroupKey = (txGroup: TransactionOrMessageGroup) => {
  if ((txGroup[0] as TransactionType).group) {
    return `group.${(txGroup[0] as TransactionType).group!.key}`;
  }
  if (
    (txGroup[0] as TransactionType).context &&
    (txGroup[0] as TransactionType).methodName
  ) {
    return `${(txGroup[0] as TransactionType).context}.${
      (txGroup[0] as TransactionType).methodName
    }`;
  }
  return txGroup[0].id;
};

export const findTransactionGroupByKey = (
  txGroups: TransactionOrMessageGroups,
  key: string,
) => txGroups.find((txGroup) => getGroupKey(txGroup) === key);

// Since we are not currently delete old transactions we sometimes need to check
// for the newest one
export const findNewestGroup = (txGroups: TransactionOrMessageGroups) => {
  // @ts-ignore
  txGroups.sort((a, b) => new Date(b[0].createdAt) - new Date(a[0].createdAt));
  return txGroups[0];
};

// Get the index of the first transaction in a group that is ready to sign
export const getActiveTransactionIdx = (txGroup: TransactionOrMessageGroup) => {
  // Select the pending selection so that the user can't sign the next one
  const pendingTransactionIdx = txGroup.findIndex(
    (tx) => tx.status === TransactionStatus.Pending,
  );
  if (pendingTransactionIdx > -1) return pendingTransactionIdx;
  return txGroup.findIndex(
    (tx) =>
      tx.status === TransactionStatus.Ready ||
      tx.status === TransactionStatus.Failed,
  );
};

// Get transaction values to show in title or description
export const getGroupValues = <T>(
  txGroup: T[], // For now, just returns the first transaction if we have one
) => txGroup[0];

// Get the joint status of the group
export const getGroupStatus = (txGroup: TransactionOrMessageGroup) => {
  if (txGroup.some((tx) => tx.status === TransactionStatus.Failed))
    return TransactionStatus.Failed;

  if (txGroup.some((tx) => tx.status === TransactionStatus.Pending))
    return TransactionStatus.Pending;
  if (txGroup.every((tx) => tx.status === TransactionStatus.Succeeded))
    return TransactionStatus.Succeeded;
  return TransactionStatus.Ready;
};

// Get count of all transactions in the redux store
export const transactionCount = (
  txOrMessageGroups: TransactionOrMessageGroups,
) => txOrMessageGroups.reduce((count, group) => count + group.length, 0);

/**
 * @NOTE Determine if we're dealing with a group of Transactions or a group of Messages to be signed.
 * @BODY Based on this we either show a `<TransactionCard />` or a `<MessageCard />`
 */
export const isTxGroup = (
  txOrMessageGroup: TransactionOrMessageGroup,
): txOrMessageGroup is TransactionType[] =>
  /**
   * @NOTE Uses `hasOwnProperty` because if the transaction group contains only one transaction
   * the `context` prop will be set to `undefined`. Typescript will be happy this way
   */
  Object.prototype.hasOwnProperty.call(txOrMessageGroup[0], 'context');

// Get count of all transactions that need signing
export const readyTransactionsCount = (
  txOrMessageGroups: TransactionOrMessageGroups,
) => {
  let readyTransactions = 0;
  txOrMessageGroups.map((txOrMessageGroup) =>
    txOrMessageGroup.map((txOrMessage) => {
      if (
        txOrMessage.status === TransactionStatus.Ready ||
        txOrMessage.status === TransactionStatus.Pending
      ) {
        readyTransactions += 1;
      }
      return false;
    }),
  );
  return readyTransactions;
};
