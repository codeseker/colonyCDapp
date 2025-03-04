import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  AWSDate: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  AWSDateTime: string;
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  AWSEmail: string;
  /** The AWSIPAddress scalar type represents a valid IPv4 or IPv6 address string. */
  AWSIPAddress: any;
  /** The AWSJSON scalar type represents a valid json object serialized as a string. */
  AWSJSON: any;
  /** AWSPhone */
  AWSPhone: any;
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  AWSTime: any;
  /** The AWSTimestamp scalar type represents the number of seconds that have elapsed since 1970-01-01T00:00Z. Timestamps are serialized and deserialized as numbers. Negative values are also accepted and these represent the number of seconds till 1970-01-01T00:00Z. */
  AWSTimestamp: number;
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  AWSURL: string;
};

/** Defines an annotation for actions, motions and decisions */
export type Annotation = {
  __typename?: 'Annotation';
  /** The id of the action it annotates */
  actionId: Scalars['ID'];
  createdAt: Scalars['AWSDateTime'];
  /** The id of the annotation. */
  id: Scalars['ID'];
  /** The IPFS hash, if the annotation was also uploaded to IPFS */
  ipfsHash?: Maybe<Scalars['String']>;
  /** The actual annotation message */
  message: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
};

/**
 * Represents metadata related to a blockchain event
 * Applies to Colonies, Tokens and Events, but not all fields are revlant to all
 * It does not apply to user accounts as they can live on all networks
 */
export type ChainMetadata = {
  __typename?: 'ChainMetadata';
  /** The block number of the event */
  blockNumber?: Maybe<Scalars['Int']>;
  /** The chain ID of the event */
  chainId: Scalars['String'];
  /** The log index of the event */
  logIndex?: Maybe<Scalars['Int']>;
  /** The network the event occurred on */
  network?: Maybe<Network>;
  /** The transaction hash of the event */
  transactionHash?: Maybe<Scalars['String']>;
};

export type ChainMetadataInput = {
  blockNumber?: InputMaybe<Scalars['Int']>;
  chainId: Scalars['String'];
  logIndex?: InputMaybe<Scalars['Int']>;
  network?: InputMaybe<Network>;
  transactionHash?: InputMaybe<Scalars['String']>;
};

export enum ClientType {
  CoinMachineClient = 'CoinMachineClient',
  ColonyClient = 'ColonyClient',
  EvaluatedExpenditureClient = 'EvaluatedExpenditureClient',
  FundingQueueClient = 'FundingQueueClient',
  LightTokenClient = 'LightTokenClient',
  MotionTargetClient = 'MotionTargetClient',
  NetworkClient = 'NetworkClient',
  OneTxPaymentClient = 'OneTxPaymentClient',
  ReputationBootstrapperClient = 'ReputationBootstrapperClient',
  StagedExpenditureClient = 'StagedExpenditureClient',
  StakedExpenditureClient = 'StakedExpenditureClient',
  StreamingPaymentsClient = 'StreamingPaymentsClient',
  TokenClient = 'TokenClient',
  TokenLockingClient = 'TokenLockingClient',
  TokenSupplierClient = 'TokenSupplierClient',
  VestingSimpleClient = 'VestingSimpleClient',
  VotingReputationClient = 'VotingReputationClient',
  WhitelistClient = 'WhitelistClient',
  WrappedTokenClient = 'WrappedTokenClient'
}

/** Represents a Colony within the Colony Network */
export type Colony = {
  __typename?: 'Colony';
  actions?: Maybe<ModelColonyActionConnection>;
  /** Returns a list token balances for each domain and each token that the colony has */
  balances?: Maybe<ColonyBalances>;
  /**
   * Native chain token claim (e.g., Token 0x0000...0000: ETH, xDAI, etc.)
   * This is not an array since only a single token type can be returned
   */
  chainFundsClaim?: Maybe<ColonyChainFundsClaim>;
  /** Metadata related to the chain of the Colony */
  chainMetadata: ChainMetadata;
  /**
   * The main member invite object
   * It is possible to create multiple member invites for a given colony
   * but only one of them is considered the `main` one
   */
  colonyMemberInvite?: Maybe<ColonyMemberInvite>;
  /** ID of the main member invite object */
  colonyMemberInviteCode?: Maybe<Scalars['ID']>;
  createdAt: Scalars['AWSDateTime'];
  domains?: Maybe<ModelDomainConnection>;
  expenditures?: Maybe<ModelExpenditureConnection>;
  /** Global claim delay for expenditures (in seconds) */
  expendituresGlobalClaimDelay?: Maybe<Scalars['String']>;
  extensions?: Maybe<ModelColonyExtensionConnection>;
  fundsClaims?: Maybe<ModelColonyFundsClaimConnection>;
  /** Unique identifier for the Colony (contract address) */
  id: Scalars['ID'];
  /** Time at which the contributors with reputation in the colony were last updated */
  lastUpdatedContributorsWithReputation?: Maybe<Scalars['AWSDateTime']>;
  /** Metadata of the Colony */
  metadata?: Maybe<ColonyMetadata>;
  /** List of motions within the Colony that have unclaimed stakes */
  motionsWithUnclaimedStakes?: Maybe<Array<ColonyUnclaimedStake>>;
  /** (Short) name of the Colony */
  name: Scalars['String'];
  /** The native token of the Colony */
  nativeToken: Token;
  /** The unique address of the native token of the Colony */
  nativeTokenId: Scalars['ID'];
  /** A flag to indicate whether the colony is private */
  private?: Maybe<Scalars['Boolean']>;
  /** The total reputation amount in the colony */
  reputation?: Maybe<Scalars['String']>;
  roles?: Maybe<ModelColonyRoleConnection>;
  /** Status information for the Colony */
  status?: Maybe<ColonyStatus>;
  tokens?: Maybe<ModelColonyTokensConnection>;
  /** Type of the Colony (Regular or Metacolony) */
  type?: Maybe<ColonyType>;
  updatedAt: Scalars['AWSDateTime'];
  /** Version of the Colony */
  version: Scalars['Int'];
};


/** Represents a Colony within the Colony Network */
export type ColonyActionsArgs = {
  filter?: InputMaybe<ModelColonyActionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Represents a Colony within the Colony Network */
export type ColonyDomainsArgs = {
  filter?: InputMaybe<ModelDomainFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nativeId?: InputMaybe<ModelIntKeyConditionInput>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Represents a Colony within the Colony Network */
export type ColonyExpendituresArgs = {
  createdAt?: InputMaybe<ModelStringKeyConditionInput>;
  filter?: InputMaybe<ModelExpenditureFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Represents a Colony within the Colony Network */
export type ColonyExtensionsArgs = {
  filter?: InputMaybe<ModelColonyExtensionFilterInput>;
  hash?: InputMaybe<ModelStringKeyConditionInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Represents a Colony within the Colony Network */
export type ColonyFundsClaimsArgs = {
  filter?: InputMaybe<ModelColonyFundsClaimFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Represents a Colony within the Colony Network */
export type ColonyRolesArgs = {
  filter?: InputMaybe<ModelColonyRoleFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Represents a Colony within the Colony Network */
export type ColonyTokensArgs = {
  filter?: InputMaybe<ModelColonyTokensFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

/** Represents an action performed within a Colony */
export type ColonyAction = {
  __typename?: 'ColonyAction';
  /**
   * The amount involved in the action, if applicable
   * In any case where network fee is involved, this amount excludes it
   */
  amount?: Maybe<Scalars['String']>;
  /** The annotation associated with the action, if there is one */
  annotation?: Maybe<Annotation>;
  /** The id of the associated annotation, if there is one */
  annotationId?: Maybe<Scalars['ID']>;
  /** The block number where the action was recorded */
  blockNumber: Scalars['Int'];
  /** The Colony that the action belongs to */
  colony: Colony;
  colonyActionsId?: Maybe<Scalars['ID']>;
  /** If the action is a Simple Decision, it will have an id that corresponds to a ColonyDecision entry in the database. */
  colonyDecisionId?: Maybe<Scalars['ID']>;
  /** The identifier of the Colony that the action belongs to */
  colonyId: Scalars['ID'];
  /** The timestamp when the action was created */
  createdAt: Scalars['AWSDateTime'];
  /** Corresponding Decision data, if action is a Simple Decision */
  decisionData?: Maybe<ColonyDecision>;
  /** Expenditure associated with the action, if any */
  expenditure?: Maybe<Expenditure>;
  /** ID of the associated expenditure, if any */
  expenditureId?: Maybe<Scalars['ID']>;
  /**
   * Changes to the expenditure slots associated with the action, if any
   * Applicable to `EDIT_EXPENDITURE` action only
   */
  expenditureSlotChanges?: Maybe<ExpenditureSlotChanges>;
  /** The source Domain of the action, if applicable */
  fromDomain?: Maybe<Domain>;
  /** The source Domain identifier, if applicable */
  fromDomainId?: Maybe<Scalars['ID']>;
  /** The native ID of the source funding pot, only applicable for MOVE_FUNDS action */
  fromPotId?: Maybe<Scalars['Int']>;
  /** Unique identifier for the ColonyAction */
  id: Scalars['ID'];
  /** JSON string to pass custom, dynamic event data */
  individualEvents?: Maybe<Scalars['String']>;
  /** The Ethereum address of the action initiator. Can be a user, extension or colony */
  initiatorAddress: Scalars['ID'];
  /** The Colony that initiated the action, if applicable */
  initiatorColony?: Maybe<Colony>;
  /** The ColonyExtension that initiated the action, if applicable */
  initiatorExtension?: Maybe<ColonyExtension>;
  /** The Token contract that initiated the action, if applicable */
  initiatorToken?: Maybe<Token>;
  /** The User who initiated the action, if applicable */
  initiatorUser?: Maybe<User>;
  /** Will be true if the action is a motion */
  isMotion?: Maybe<Scalars['Boolean']>;
  /**
   * Indicates whether the action is a result of a motion being finalized
   * @TODO: Make this field non-nullable
   */
  isMotionFinalization?: Maybe<Scalars['Boolean']>;
  /** Members impacted by the action (used for add/remove verified members) */
  members?: Maybe<Array<Scalars['ID']>>;
  /** Metadata associated with the action (Eg. Custom action title) */
  metadata?: Maybe<ColonyActionMetadata>;
  /** Expanded `ColonyMotion` for the corresponding `motionId` */
  motionData?: Maybe<ColonyMotion>;
  /** Corresponding domainId of the motion */
  motionDomainId?: Maybe<Scalars['Int']>;
  /** The internal database id of the motion */
  motionId?: Maybe<Scalars['ID']>;
  /** The network fee amount, if applicable */
  networkFee?: Maybe<Scalars['String']>;
  /** The resulting new Colony version, if applicable */
  newColonyVersion?: Maybe<Scalars['Int']>;
  /** The native id of the payment */
  paymentId?: Maybe<Scalars['Int']>;
  /** Payment data for multiple OneTxPayments */
  payments?: Maybe<Array<Payment>>;
  /** Colony metadata that is stored temporarily and commited to the database once the corresponding motion passes */
  pendingColonyMetadata?: Maybe<ColonyMetadata>;
  /** Identifier of Colony metadata that is stored temporarily and commited to the database once the corresponding motion passes */
  pendingColonyMetadataId?: Maybe<Scalars['ID']>;
  /** Domain metadata that is stored temporarily and commited to the database once the corresponding motion passes */
  pendingDomainMetadata?: Maybe<DomainMetadata>;
  /** Identifier of domain metadata that is stored temporarily and commited to the database once the corresponding motion passes */
  pendingDomainMetadataId?: Maybe<Scalars['ID']>;
  /** The address of the action recipient, if applicable */
  recipientAddress?: Maybe<Scalars['ID']>;
  /** The corresponding Colony which was involved the action, if applicable */
  recipientColony?: Maybe<Colony>;
  /** The corresponding extension which was involved the action, if applicable */
  recipientExtension?: Maybe<ColonyExtension>;
  /** The address of the token that was received the action, if applicable */
  recipientToken?: Maybe<Token>;
  /** The User who received the action, if applicable */
  recipientUser?: Maybe<User>;
  /** Colony roles that are associated with the action */
  roles?: Maybe<ColonyActionRoles>;
  /** The reputation root hash at the time of the creation of the action */
  rootHash: Scalars['String'];
  /** Safe transactions associated with the action */
  safeTransaction?: Maybe<SafeTransaction>;
  /**
   * Whether to show the motion in the actions list
   * True for (forced) actions. True for motions if staked above 10%
   * @TODO: Refactor this into more granular fields for better searchability
   * Currently it is impossible to tell the reason for the action being hidden from the actions list
   */
  showInActionsList: Scalars['Boolean'];
  /** The target Domain of the action, if applicable */
  toDomain?: Maybe<Domain>;
  /** The target Domain identifier, if applicable */
  toDomainId?: Maybe<Scalars['ID']>;
  /** The native ID of the target funding pot, only applicable for MOVE_FUNDS action */
  toPotId?: Maybe<Scalars['Int']>;
  /** The Token involved in the action, if applicable */
  token?: Maybe<Token>;
  /** The Ethereum address of the token involved in the action, if applicable */
  tokenAddress?: Maybe<Scalars['ID']>;
  /** The type of action performed */
  type: ColonyActionType;
  updatedAt: Scalars['AWSDateTime'];
};

export type ColonyActionMetadata = {
  __typename?: 'ColonyActionMetadata';
  createdAt: Scalars['AWSDateTime'];
  customTitle: Scalars['String'];
  id: Scalars['ID'];
  updatedAt: Scalars['AWSDateTime'];
};

/** Colony Roles that can be involved in an action */
export type ColonyActionRoles = {
  __typename?: 'ColonyActionRoles';
  /** Recovery role */
  role_0?: Maybe<Scalars['Boolean']>;
  /** Root role */
  role_1?: Maybe<Scalars['Boolean']>;
  /** Arbitration role */
  role_2?: Maybe<Scalars['Boolean']>;
  /** Architecture role */
  role_3?: Maybe<Scalars['Boolean']>;
  /** Funding role */
  role_5?: Maybe<Scalars['Boolean']>;
  /** Administration role */
  role_6?: Maybe<Scalars['Boolean']>;
};

export type ColonyActionRolesInput = {
  role_0?: InputMaybe<Scalars['Boolean']>;
  role_1?: InputMaybe<Scalars['Boolean']>;
  role_2?: InputMaybe<Scalars['Boolean']>;
  role_3?: InputMaybe<Scalars['Boolean']>;
  role_5?: InputMaybe<Scalars['Boolean']>;
  role_6?: InputMaybe<Scalars['Boolean']>;
};

/**
 * Variants of Colony Network blockchain events
 *
 * These can all happen in a Colony and will be interpreted by the dApp according to their types
 */
export enum ColonyActionType {
  /** An action related to adding verified members */
  AddVerifiedMembers = 'ADD_VERIFIED_MEMBERS',
  AddVerifiedMembersMotion = 'ADD_VERIFIED_MEMBERS_MOTION',
  /** An action related to canceling an expenditure */
  CancelExpenditure = 'CANCEL_EXPENDITURE',
  /** An action related to a motion to cancel an expenditure */
  CancelExpenditureMotion = 'CANCEL_EXPENDITURE_MOTION',
  /** An action related to editing a Colony's details */
  ColonyEdit = 'COLONY_EDIT',
  /** An action related to editing a Colony's details via a motion */
  ColonyEditMotion = 'COLONY_EDIT_MOTION',
  /** An action related to a creating a Decision within a Colony via a motion */
  CreateDecisionMotion = 'CREATE_DECISION_MOTION',
  /** An action related to creating a domain within a Colony */
  CreateDomain = 'CREATE_DOMAIN',
  /** An action related to creating a domain within a Colony via a motion */
  CreateDomainMotion = 'CREATE_DOMAIN_MOTION',
  /** An action related to creating an expenditure (advanced payment) */
  CreateExpenditure = 'CREATE_EXPENDITURE',
  /** An action related to editing a domain's details */
  EditDomain = 'EDIT_DOMAIN',
  /** An action related to editing a domain's details via a motion */
  EditDomainMotion = 'EDIT_DOMAIN_MOTION',
  /** An action related to editing an expenditure */
  EditExpenditure = 'EDIT_EXPENDITURE',
  /** An action related to creating a motion to edit an expenditure */
  EditExpenditureMotion = 'EDIT_EXPENDITURE_MOTION',
  /** An action related to a domain reputation penalty within a Colony (smite) */
  EmitDomainReputationPenalty = 'EMIT_DOMAIN_REPUTATION_PENALTY',
  /** An action related to a domain reputation penalty within a Colony (smite) via a motion */
  EmitDomainReputationPenaltyMotion = 'EMIT_DOMAIN_REPUTATION_PENALTY_MOTION',
  /** An action related to a domain reputation reward within a Colony */
  EmitDomainReputationReward = 'EMIT_DOMAIN_REPUTATION_REWARD',
  /** An action related to a domain reputation reward within a Colony via a motion */
  EmitDomainReputationRewardMotion = 'EMIT_DOMAIN_REPUTATION_REWARD_MOTION',
  /** An action related to finalizing an expenditure */
  FinalizeExpenditure = 'FINALIZE_EXPENDITURE',
  /** An action related to finalizing an expenditure via a motion */
  FinalizeExpenditureMotion = 'FINALIZE_EXPENDITURE_MOTION',
  /** An action related to creating a motion for funding an expenditure */
  FundExpenditureMotion = 'FUND_EXPENDITURE_MOTION',
  /** A generic or unspecified Colony action */
  Generic = 'GENERIC',
  /** An action related to locking an expenditure */
  LockExpenditure = 'LOCK_EXPENDITURE',
  /** An action related to the creation of safe transactions via Safe Control */
  MakeArbitraryTransaction = 'MAKE_ARBITRARY_TRANSACTION',
  MakeArbitraryTransactionsMotion = 'MAKE_ARBITRARY_TRANSACTIONS_MOTION',
  /** An action related to minting tokens within a Colony */
  MintTokens = 'MINT_TOKENS',
  /** An action related to minting tokens within a Colony via a motion */
  MintTokensMotion = 'MINT_TOKENS_MOTION',
  /** An action related to moving funds between domains */
  MoveFunds = 'MOVE_FUNDS',
  /** An action related to moving funds between domains via a motion */
  MoveFundsMotion = 'MOVE_FUNDS_MOTION',
  /** An action related to making multiple payments within a Colony */
  MultiplePayment = 'MULTIPLE_PAYMENT',
  /** An action related to making multiple payments within a Colony */
  MultiplePaymentMotion = 'MULTIPLE_PAYMENT_MOTION',
  /** An motion action placeholder that should not be used */
  NullMotion = 'NULL_MOTION',
  /** An action related to a payment within a Colony */
  Payment = 'PAYMENT',
  /** An action related to a payment that was created via a motion within a Colony */
  PaymentMotion = 'PAYMENT_MOTION',
  /** An action related to the recovery functionality of a Colony */
  Recovery = 'RECOVERY',
  /** An action related to removing verified members */
  RemoveVerifiedMembers = 'REMOVE_VERIFIED_MEMBERS',
  RemoveVerifiedMembersMotion = 'REMOVE_VERIFIED_MEMBERS_MOTION',
  /** An action related to creating a motion to release an expenditure stage */
  SetExpenditureStateMotion = 'SET_EXPENDITURE_STATE_MOTION',
  /** An action related to setting user roles within a Colony */
  SetUserRoles = 'SET_USER_ROLES',
  /** An action related to setting user roles within a Colony via a motion */
  SetUserRolesMotion = 'SET_USER_ROLES_MOTION',
  /** An action related to unlocking a token within a Colony */
  UnlockToken = 'UNLOCK_TOKEN',
  /** An action related to unlocking a token within a Colony via a motion */
  UnlockTokenMotion = 'UNLOCK_TOKEN_MOTION',
  /** An action related to upgrading a Colony's version */
  VersionUpgrade = 'VERSION_UPGRADE',
  /** An action related to upgrading a Colony's version via a motion */
  VersionUpgradeMotion = 'VERSION_UPGRADE_MOTION',
  /** An action unrelated to the currently viewed Colony */
  WrongColony = 'WRONG_COLONY'
}

/** Represents a Colony balance for a specific domain and token */
export type ColonyBalance = {
  __typename?: 'ColonyBalance';
  /** Balance of the specific token in the domain */
  balance: Scalars['String'];
  /** Domain associated with the Colony Balance */
  domain?: Maybe<Domain>;
  /** Unique identifier for the Colony Balance */
  id: Scalars['ID'];
  /**
   * Token associated with the Colony Balance
   * Note that for the chain native token, name and symbol are empty
   */
  token: Token;
};

export type ColonyBalanceInput = {
  balance: Scalars['String'];
  domain?: InputMaybe<DomainInput>;
  id?: InputMaybe<Scalars['ID']>;
  token: TokenInput;
};

/** Represents a collection of Colony balances */
export type ColonyBalances = {
  __typename?: 'ColonyBalances';
  /** List of Colony balances */
  items?: Maybe<Array<Maybe<ColonyBalance>>>;
};

export type ColonyBalancesInput = {
  items?: InputMaybe<Array<InputMaybe<ColonyBalanceInput>>>;
};

/**
 * Represents a native Colony Chain Funds Claim
 * E.g., Token 0x0000...0000: ETH, xDAI, etc
 */
export type ColonyChainFundsClaim = {
  __typename?: 'ColonyChainFundsClaim';
  /** Amount claimed in the Colony Chain Funds Claim */
  amount: Scalars['String'];
  /** Timestamp when the Chain Funds Claim was created */
  createdAt: Scalars['AWSDateTime'];
  /** Block number when the Chain Funds Claim was created */
  createdAtBlock: Scalars['Int'];
  /** Unique identifier for the Colony Chain Funds Claim */
  id: Scalars['ID'];
  /** Boolean to indicate whether the claim has been claimed or not */
  isClaimed?: Maybe<Scalars['Boolean']>;
  /** Timestamp when the Chain Funds Claim was last updated */
  updatedAt: Scalars['AWSDateTime'];
};

export type ColonyChainFundsClaimInput = {
  amount: Scalars['String'];
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  createdAtBlock: Scalars['Int'];
  id?: InputMaybe<Scalars['ID']>;
  isClaimed?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

/** The ColonyContributor model represents a contributor to the Colony. */
export type ColonyContributor = {
  __typename?: 'ColonyContributor';
  /** Associated colony */
  colony: Colony;
  /** Address of the colony the contributor is under */
  colonyAddress: Scalars['ID'];
  /** The contributor's reputation percentage in the colony */
  colonyReputationPercentage: Scalars['Float'];
  /** The address of the contributor */
  contributorAddress: Scalars['ID'];
  createdAt: Scalars['AWSDateTime'];
  /** Does the contributor have any permission in any domain the colony? */
  hasPermissions?: Maybe<Scalars['Boolean']>;
  /** Does the contributor have any reputation the colony? */
  hasReputation?: Maybe<Scalars['Boolean']>;
  /**
   * Unique identifier
   * Format: <colonyAddress>_<contributorAddress>
   */
  id: Scalars['ID'];
  /** Is the contributor a verified member of the colony? */
  isVerified: Scalars['Boolean'];
  /** Is the contributor watching the colony */
  isWatching?: Maybe<Scalars['Boolean']>;
  reputation?: Maybe<ModelContributorReputationConnection>;
  roles?: Maybe<ModelColonyRoleConnection>;
  /** The type of the contributor */
  type?: Maybe<ContributorType>;
  updatedAt: Scalars['AWSDateTime'];
  /** Associated user, if any */
  user?: Maybe<User>;
};


/** The ColonyContributor model represents a contributor to the Colony. */
export type ColonyContributorReputationArgs = {
  colonyAddress?: InputMaybe<ModelIdKeyConditionInput>;
  filter?: InputMaybe<ModelContributorReputationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** The ColonyContributor model represents a contributor to the Colony. */
export type ColonyContributorRolesArgs = {
  colonyAddress?: InputMaybe<ModelIdKeyConditionInput>;
  filter?: InputMaybe<ModelColonyRoleFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type ColonyDecision = {
  __typename?: 'ColonyDecision';
  action?: Maybe<ColonyAction>;
  actionId: Scalars['ID'];
  colonyAddress: Scalars['String'];
  createdAt: Scalars['AWSDateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  motionDomainId: Scalars['Int'];
  showInDecisionsList: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
  walletAddress: Scalars['String'];
};

/** Represents a single extension installation in a Colony */
export type ColonyExtension = {
  __typename?: 'ColonyExtension';
  /** The Colony that the extension belongs to */
  colony: Colony;
  /** The identifier of the Colony that the extension belongs to (the Colony's address) */
  colonyId: Scalars['ID'];
  createdAt: Scalars['AWSDateTime'];
  /**
   * The unique hash of the extension
   * The hash is generated like so: `keccak256(toUtf8Bytes(extensionName))`, where `extensionName` is the name of the extension contract file in the Colony Network
   */
  hash: Scalars['String'];
  /** Unique identifier for the ColonyExtension */
  id: Scalars['ID'];
  /** The timestamp when the extension was installed */
  installedAt: Scalars['AWSTimestamp'];
  /** The address of the user who installed the extension */
  installedBy: Scalars['String'];
  /** Indicates whether the extension has been removed */
  isDeleted: Scalars['Boolean'];
  /** Indicates whether the extension is deprecated */
  isDeprecated: Scalars['Boolean'];
  /** Indicates whether the extension has been initialized */
  isInitialized: Scalars['Boolean'];
  /** Map of parameters that extension was initialised with */
  params?: Maybe<ExtensionParams>;
  updatedAt: Scalars['AWSDateTime'];
  /** The version number of the extension */
  version: Scalars['Int'];
};

/** Represents a Colony Funds Claim for all ERC20 tokens (except native chain tokens) */
export type ColonyFundsClaim = {
  __typename?: 'ColonyFundsClaim';
  /** Amount claimed in the Colony Funds Claim */
  amount: Scalars['String'];
  colonyFundsClaimTokenId: Scalars['ID'];
  colonyFundsClaimsId?: Maybe<Scalars['ID']>;
  /** Timestamp when the Funds Claim was created */
  createdAt: Scalars['AWSDateTime'];
  /** Block number when the Funds Claim was created */
  createdAtBlock: Scalars['Int'];
  /** Unique identifier for the Colony Funds Claim */
  id: Scalars['ID'];
  /** Boolean to indicate whether the claim has been claimed or not */
  isClaimed?: Maybe<Scalars['Boolean']>;
  /** Token associated with the Colony Funds Claim */
  token: Token;
  updatedAt: Scalars['AWSDateTime'];
};

/** Snapshot of the user's full roles/permissions at a specific block */
export type ColonyHistoricRole = {
  __typename?: 'ColonyHistoricRole';
  /** Block at which the snapshot was taken */
  blockNumber: Scalars['Int'];
  /** Expanded `Colony` model, based on the `colonyId` given */
  colony: Colony;
  /** Unique identifier of the Colony */
  colonyId: Scalars['ID'];
  /** Timestamp at which the database entry was created */
  createdAt: Scalars['AWSDateTime'];
  /** Expanded `Domain` model, based on the `domainId` given */
  domain: Domain;
  /** Unique identifier of the domain */
  domainId: Scalars['ID'];
  /**
   * Unique identifier for the role snapshot
   * Format: `colonyAddress_domainNativeId_userAddress_blockNumber_roles`
   */
  id: Scalars['ID'];
  /** Recovery role */
  role_0?: Maybe<Scalars['Boolean']>;
  /** Root role */
  role_1?: Maybe<Scalars['Boolean']>;
  /** Arbitration role */
  role_2?: Maybe<Scalars['Boolean']>;
  /** Architecture role */
  role_3?: Maybe<Scalars['Boolean']>;
  /** Funding role */
  role_5?: Maybe<Scalars['Boolean']>;
  /** Administration role */
  role_6?: Maybe<Scalars['Boolean']>;
  /** Address of the agent the permission was set for */
  targetAddress?: Maybe<Scalars['ID']>;
  /** Will expand to a `Colony` model if permission was set for another Colony */
  targetColony?: Maybe<Colony>;
  /** Will expand to a `ColonyExtension` model if permission was set for a Colony extension */
  targetExtension?: Maybe<ColonyExtension>;
  /** Will expand to a `Token` model if permission was set for a Token contract */
  targetToken?: Maybe<Token>;
  /** Will expand to a `User` model if permission was set for a user */
  targetUser?: Maybe<User>;
  /** Used for amplify sorting. Set to `SortedHistoricRole` */
  type: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
};

export type ColonyMemberInvite = {
  __typename?: 'ColonyMemberInvite';
  /** Colony associated with the ColonyMemberInvite */
  colony: Colony;
  /** Colony ID associated with the ColonyMemberInvite */
  colonyId: Scalars['ID'];
  createdAt: Scalars['AWSDateTime'];
  /** Self-managed id which is used as the invite code */
  id: Scalars['ID'];
  /** Decrementing count of how many times this invite has been used */
  invitesRemaining: Scalars['Int'];
  updatedAt: Scalars['AWSDateTime'];
};

/** Represents metadata for a Colony */
export type ColonyMetadata = {
  __typename?: 'ColonyMetadata';
  /** URL of the Colony's avatar image */
  avatar?: Maybe<Scalars['String']>;
  /** List of Colony metadata changelog entries */
  changelog?: Maybe<Array<ColonyMetadataChangelog>>;
  createdAt: Scalars['AWSDateTime'];
  /** Description of the colony */
  description?: Maybe<Scalars['String']>;
  /** Display name of the Colony */
  displayName: Scalars['String'];
  /** Temporary data to store while the colony is being created (via the block ingestor) */
  etherealData?: Maybe<ColonyMetadataEtherealData>;
  /** An array of external links to related pages */
  externalLinks?: Maybe<Array<ExternalLink>>;
  /** Unique identifier for the Colony (contract address) */
  id: Scalars['ID'];
  /**
   * Token addresses that were modified in a previous action (motion)
   * Only present on pendingColonyMetadata for consumption in block ingestor
   */
  modifiedTokenAddresses?: Maybe<PendingModifiedTokenAddresses>;
  /** Colony Objective */
  objective?: Maybe<ColonyObjective>;
  /** List of safes that are used within the Colony */
  safes?: Maybe<Array<Safe>>;
  /** URL of the Colony's thumbnail image */
  thumbnail?: Maybe<Scalars['String']>;
  updatedAt: Scalars['AWSDateTime'];
};

/**
 * Represents a changelog entry for Colony metadata
 * This is used to traverse through the history of metadata values and consolidate them into a final state
 */
export type ColonyMetadataChangelog = {
  __typename?: 'ColonyMetadataChangelog';
  /** Indicates whether the avatar has changed */
  hasAvatarChanged: Scalars['Boolean'];
  /** Whether the colony description has changed */
  hasDescriptionChanged?: Maybe<Scalars['Boolean']>;
  /** Whether the colony's objective has changed */
  hasObjectiveChanged?: Maybe<Scalars['Boolean']>;
  /** Whether the colony's external links have changed */
  haveExternalLinksChanged?: Maybe<Scalars['Boolean']>;
  /** Whether tokens have been added or removed from the Colony's token list */
  haveTokensChanged: Scalars['Boolean'];
  /** Display name of the Colony after the change */
  newDisplayName: Scalars['String'];
  /** Whether safes have been added or removed from the Colony's safe list */
  newSafes?: Maybe<Array<Safe>>;
  /** Display name of the Colony before the change */
  oldDisplayName: Scalars['String'];
  oldSafes?: Maybe<Array<Safe>>;
  /** Transaction hash associated with the changelog entry */
  transactionHash: Scalars['String'];
};

export type ColonyMetadataChangelogInput = {
  hasAvatarChanged: Scalars['Boolean'];
  hasDescriptionChanged?: InputMaybe<Scalars['Boolean']>;
  hasObjectiveChanged?: InputMaybe<Scalars['Boolean']>;
  haveExternalLinksChanged?: InputMaybe<Scalars['Boolean']>;
  haveTokensChanged: Scalars['Boolean'];
  newDisplayName: Scalars['String'];
  newSafes?: InputMaybe<Array<SafeInput>>;
  oldDisplayName: Scalars['String'];
  oldSafes?: InputMaybe<Array<SafeInput>>;
  transactionHash: Scalars['String'];
};

export type ColonyMetadataEtherealData = {
  __typename?: 'ColonyMetadataEtherealData';
  colonyAvatar?: Maybe<Scalars['String']>;
  colonyDisplayName: Scalars['String'];
  colonyName: Scalars['String'];
  colonyThumbnail?: Maybe<Scalars['String']>;
  initiatorAddress: Scalars['ID'];
  tokenAvatar?: Maybe<Scalars['String']>;
  tokenThumbnail?: Maybe<Scalars['String']>;
};

export type ColonyMetadataEtherealDataInput = {
  colonyAvatar?: InputMaybe<Scalars['String']>;
  colonyDisplayName: Scalars['String'];
  colonyName: Scalars['String'];
  colonyThumbnail?: InputMaybe<Scalars['String']>;
  initiatorAddress: Scalars['ID'];
  tokenAvatar?: InputMaybe<Scalars['String']>;
  tokenThumbnail?: InputMaybe<Scalars['String']>;
};

/** Represents a Motion within a Colony */
export type ColonyMotion = {
  __typename?: 'ColonyMotion';
  action?: Maybe<ColonyAction>;
  createdAt: Scalars['AWSDateTime'];
  /**
   * Address of the VotingReputation extension
   * Useful to check if we're viewing a "read-only" motion
   */
  createdBy: Scalars['String'];
  /** Edited expenditure slots associated with the motion, if any */
  editedExpenditureSlots?: Maybe<Array<ExpenditureSlot>>;
  /**
   * In case of multicall motion funding an expenditure, array containing
   * the details of tokens and amounts to be funded
   */
  expenditureFunding?: Maybe<Array<ExpenditureFundingItem>>;
  /** Expenditure associated with the motion, if any */
  expenditureId?: Maybe<Scalars['ID']>;
  /** Id of the expenditure stage payment to be released if the motion pass, if any */
  expenditureSlotId?: Maybe<Scalars['Int']>;
  /**
   * An option to manually specify the amount of gas to estimate for the finalization of this motion.
   * Particularly useful for "heavy" actions, such as a multicall.
   */
  gasEstimate: Scalars['String'];
  /** Simple flag indicating whether both sides of staking have been activated */
  hasObjection: Scalars['Boolean'];
  /**
   * The internal database id of the motion
   * To ensure uniqueness, we format as: `chainId-votingRepExtnAddress_nativeMotionId`
   */
  id: Scalars['ID'];
  /** Whether the motion is a Simple Decision */
  isDecision: Scalars['Boolean'];
  /** Whether the motion was finalized or not */
  isFinalized: Scalars['Boolean'];
  messages?: Maybe<ModelMotionMessageConnection>;
  /** Expanded domain in which the motion was created */
  motionDomain: Domain;
  /** Unique identifier of the motions domain in the database */
  motionDomainId: Scalars['ID'];
  /** Staked sides of a motion */
  motionStakes: MotionStakes;
  /** Quick access flages to check the current state of a motion in its lifecycle */
  motionStateHistory: MotionStateHistory;
  /** The on chain id of the domain associated with the motion */
  nativeMotionDomainId: Scalars['String'];
  /** The on chain id of the motion */
  nativeMotionId: Scalars['String'];
  /** The annotation object associated with the objection to the motion, if any */
  objectionAnnotation?: Maybe<Annotation>;
  /** Id of the associated objection annotation, if any */
  objectionAnnotationId?: Maybe<Scalars['ID']>;
  /**
   * Stakes remaining to activate either side of the motion
   * It's a tuple: `[nayRemaining, yayRemaining]`
   */
  remainingStakes: Array<Scalars['String']>;
  /** The amount of reputation that has submitted a vote */
  repSubmitted: Scalars['String'];
  /** The total required stake for one side to be activated */
  requiredStake: Scalars['String'];
  /** Total voting outcome for the motion (accumulated votes) */
  revealedVotes: MotionStakes;
  /** The total amount of reputation (among all users) that can vote for this motion */
  skillRep: Scalars['String'];
  /** List of staker rewards users will be receiving for a motion */
  stakerRewards: Array<StakerRewards>;
  /** The transaction hash of the createMotion action */
  transactionHash: Scalars['ID'];
  updatedAt: Scalars['AWSDateTime'];
  /** The minimum stake that a user has to provide for it to be accepted */
  userMinStake: Scalars['String'];
  /** List of stakes that users have made for a motion */
  usersStakes: Array<UserMotionStakes>;
  /** A list of all of the votes cast within in the motion */
  voterRecord: Array<VoterRecord>;
};


/** Represents a Motion within a Colony */
export type ColonyMotionMessagesArgs = {
  createdAt?: InputMaybe<ModelStringKeyConditionInput>;
  filter?: InputMaybe<ModelMotionMessageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type ColonyObjective = {
  __typename?: 'ColonyObjective';
  /** Description of the objective with a limit of 120 characters */
  description: Scalars['String'];
  /** Number representing how complete the objective is, must be between 0 and 100 */
  progress: Scalars['Int'];
  /** Title of the objective */
  title: Scalars['String'];
};

export type ColonyObjectiveInput = {
  description: Scalars['String'];
  progress: Scalars['Int'];
  title: Scalars['String'];
};

/** A snapshot of the current set of permissions a given address has in a given domain within a Colony */
export type ColonyRole = {
  __typename?: 'ColonyRole';
  /** The colony in which the role was set */
  colonyAddress: Scalars['ID'];
  colonyRolesId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['AWSDateTime'];
  /** Expanded `Domain` model, based on the `domainId` given */
  domain: Domain;
  /** Unique identifier of the domain */
  domainId: Scalars['ID'];
  /**
   * Unique identifier for the role snapshot
   * Format: `<colonyAddress>_<domainNativeId>_<userAddress>_roles`
   */
  id: Scalars['ID'];
  /** Block at which permissions were update last */
  latestBlock: Scalars['Int'];
  /** Recovery role */
  role_0?: Maybe<Scalars['Boolean']>;
  /** Root role */
  role_1?: Maybe<Scalars['Boolean']>;
  /** Arbitration role */
  role_2?: Maybe<Scalars['Boolean']>;
  /** Architecture role */
  role_3?: Maybe<Scalars['Boolean']>;
  /** Funding role */
  role_5?: Maybe<Scalars['Boolean']>;
  /** Administration role */
  role_6?: Maybe<Scalars['Boolean']>;
  /** Address of the agent the permission was set for */
  targetAddress: Scalars['ID'];
  /** Will expand to a `Colony` model if permission was set for another Colony */
  targetColony?: Maybe<Colony>;
  /** Will expand to a `ColonyExtension` model if permission was set for a Colony extension */
  targetExtension?: Maybe<ColonyExtension>;
  /** Will expand to a `Token` model if permission was set for a Token contract */
  targetToken?: Maybe<Token>;
  /** Will expand to a `User` model if permission was set for a user */
  targetUser?: Maybe<User>;
  updatedAt: Scalars['AWSDateTime'];
};

/**
 * Keeps track of the current amount a user has staked in a colony
 * When a user stakes, totalAmount increases. When a user reclaims their stake, totalAmount decreases.
 */
export type ColonyStake = {
  __typename?: 'ColonyStake';
  /** Unique identifier for the Colony */
  colonyId: Scalars['ID'];
  createdAt: Scalars['AWSDateTime'];
  /**
   * Unique identifier for the stake
   * Format: `<userId>_<colonyId>`
   */
  id: Scalars['ID'];
  /** Total staked amount */
  totalAmount: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
  /** Unique identifier for the user */
  userId: Scalars['ID'];
};

/**
 * Represents the status of a Colony
 *
 * This contains important meta information about the Colony's token and other fundamental settings
 */
export type ColonyStatus = {
  __typename?: 'ColonyStatus';
  /** Status information for the Colony's native token */
  nativeToken?: Maybe<NativeTokenStatus>;
  /** Whether the Colony is in recovery mode */
  recovery?: Maybe<Scalars['Boolean']>;
};

/**
 * Input data for a Colony's status information
 *
 * This is set when a Colony is created and can be changed later
 */
export type ColonyStatusInput = {
  /** Status information for the Colony's native token */
  nativeToken?: InputMaybe<NativeTokenStatusInput>;
  /** Whether the Colony is in recovery mode */
  recovery?: InputMaybe<Scalars['Boolean']>;
};

export type ColonyTokens = {
  __typename?: 'ColonyTokens';
  colony: Colony;
  colonyID: Scalars['ID'];
  createdAt: Scalars['AWSDateTime'];
  id: Scalars['ID'];
  token: Token;
  tokenID: Scalars['ID'];
  updatedAt: Scalars['AWSDateTime'];
};

/** Variants of Colony types */
export enum ColonyType {
  /** A regular Colony */
  Colony = 'COLONY',
  /** The MetaColony, which governs the entire Colony Network */
  Metacolony = 'METACOLONY'
}

/** Unclaimed staking rewards for a motion */
export type ColonyUnclaimedStake = {
  __typename?: 'ColonyUnclaimedStake';
  /** The on chain id of the motion */
  motionId: Scalars['String'];
  /** List of unclaimed staking rewards for that motion */
  unclaimedRewards: Array<StakerRewards>;
};

export type ColonyUnclaimedStakeInput = {
  motionId: Scalars['String'];
  unclaimedRewards: Array<StakerRewardsInput>;
};

/** Represents an event triggered by a smart contract within the Colony Network */
export type ContractEvent = {
  __typename?: 'ContractEvent';
  /** Address of the agent who initiated the event */
  agent: Scalars['String'];
  /** Metadata associated with the event's chain */
  chainMetadata: ChainMetadata;
  /** Optional association with a Colony */
  colony?: Maybe<Colony>;
  contractEventColonyId?: Maybe<Scalars['ID']>;
  contractEventDomainId?: Maybe<Scalars['ID']>;
  contractEventTokenId?: Maybe<Scalars['ID']>;
  contractEventUserId?: Maybe<Scalars['ID']>;
  createdAt: Scalars['AWSDateTime'];
  /** Optional association with a Domain */
  domain?: Maybe<Domain>;
  /** Optional encoded arguments as a JSON string */
  encodedArguments?: Maybe<Scalars['String']>;
  /** Unique identifier for the Contract Event, in the format chainID_transactionHash_logIndex */
  id: Scalars['ID'];
  /** Name of the event */
  name: Scalars['String'];
  /** The unique signature of the event */
  signature: Scalars['String'];
  /** Address of the target contract on the receiving end of the event */
  target: Scalars['String'];
  /** Optional association with a Token */
  token?: Maybe<Token>;
  updatedAt: Scalars['AWSDateTime'];
  /** Optional association with a User */
  user?: Maybe<User>;
};

export type ContributorReputation = {
  __typename?: 'ContributorReputation';
  /** The colony the reputation was earned in */
  colonyAddress: Scalars['ID'];
  /** The address of the contributor */
  contributorAddress: Scalars['ID'];
  createdAt: Scalars['AWSDateTime'];
  /** The associated Domain model */
  domain: Domain;
  /** The domain id in which the contributor has reputation */
  domainId: Scalars['ID'];
  /**
   * Unique identifier
   * Format: `<colonyAddress>_<domainNativeId>_<contributorAddress>`
   */
  id: Scalars['ID'];
  /** The percentage of the contributor's reputation in the domain */
  reputationPercentage: Scalars['Float'];
  /** The raw value of the contributor's reputation in the domain */
  reputationRaw: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
};

/** The types of contributor a user can be in a colony */
export enum ContributorType {
  Active = 'ACTIVE',
  Dedicated = 'DEDICATED',
  General = 'GENERAL',
  New = 'NEW',
  Top = 'TOP'
}

export type CreateAnnotationInput = {
  actionId: Scalars['ID'];
  id?: InputMaybe<Scalars['ID']>;
  ipfsHash?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
};

export type CreateColonyActionInput = {
  amount?: InputMaybe<Scalars['String']>;
  annotationId?: InputMaybe<Scalars['ID']>;
  blockNumber: Scalars['Int'];
  colonyActionsId?: InputMaybe<Scalars['ID']>;
  colonyDecisionId?: InputMaybe<Scalars['ID']>;
  colonyId: Scalars['ID'];
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  expenditureId?: InputMaybe<Scalars['ID']>;
  expenditureSlotChanges?: InputMaybe<ExpenditureSlotChangesInput>;
  fromDomainId?: InputMaybe<Scalars['ID']>;
  fromPotId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['ID']>;
  individualEvents?: InputMaybe<Scalars['String']>;
  initiatorAddress: Scalars['ID'];
  isMotion?: InputMaybe<Scalars['Boolean']>;
  isMotionFinalization?: InputMaybe<Scalars['Boolean']>;
  members?: InputMaybe<Array<Scalars['ID']>>;
  motionDomainId?: InputMaybe<Scalars['Int']>;
  motionId?: InputMaybe<Scalars['ID']>;
  networkFee?: InputMaybe<Scalars['String']>;
  newColonyVersion?: InputMaybe<Scalars['Int']>;
  paymentId?: InputMaybe<Scalars['Int']>;
  payments?: InputMaybe<Array<PaymentInput>>;
  pendingColonyMetadataId?: InputMaybe<Scalars['ID']>;
  pendingDomainMetadataId?: InputMaybe<Scalars['ID']>;
  recipientAddress?: InputMaybe<Scalars['ID']>;
  roles?: InputMaybe<ColonyActionRolesInput>;
  rootHash: Scalars['String'];
  showInActionsList: Scalars['Boolean'];
  toDomainId?: InputMaybe<Scalars['ID']>;
  toPotId?: InputMaybe<Scalars['Int']>;
  tokenAddress?: InputMaybe<Scalars['ID']>;
  type: ColonyActionType;
};

export type CreateColonyActionMetadataInput = {
  customTitle: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
};

export type CreateColonyContributorInput = {
  colonyAddress: Scalars['ID'];
  colonyReputationPercentage: Scalars['Float'];
  contributorAddress: Scalars['ID'];
  hasPermissions?: InputMaybe<Scalars['Boolean']>;
  hasReputation?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  isVerified: Scalars['Boolean'];
  isWatching?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<ContributorType>;
};

export type CreateColonyDecisionInput = {
  actionId: Scalars['ID'];
  colonyAddress: Scalars['String'];
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  motionDomainId: Scalars['Int'];
  showInDecisionsList: Scalars['Boolean'];
  title: Scalars['String'];
  walletAddress: Scalars['String'];
};

/** Input data for creating a temporary colony metadata entry */
export type CreateColonyEtherealMetadataInput = {
  /** Colony avatar/thumbnail */
  colonyAvatar?: InputMaybe<Scalars['String']>;
  /** Colony name */
  colonyDisplayName: Scalars['String'];
  /** Colony slug */
  colonyName: Scalars['String'];
  /** Colony avatar/thumbnail */
  colonyThumbnail?: InputMaybe<Scalars['String']>;
  /** User id of creator to associate with further invite codes */
  initiatorAddress: Scalars['ID'];
  /** Invite Code to create Colony */
  inviteCode: Scalars['ID'];
  /** Token avatar/thumbnail */
  tokenAvatar?: InputMaybe<Scalars['String']>;
  /** Token avatar/thumbnail */
  tokenThumbnail?: InputMaybe<Scalars['String']>;
  /** The transaction hash of colony creation transaction */
  transactionHash: Scalars['String'];
};

export type CreateColonyExtensionInput = {
  colonyId: Scalars['ID'];
  hash: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  installedAt: Scalars['AWSTimestamp'];
  installedBy: Scalars['String'];
  isDeleted: Scalars['Boolean'];
  isDeprecated: Scalars['Boolean'];
  isInitialized: Scalars['Boolean'];
  params?: InputMaybe<ExtensionParamsInput>;
  version: Scalars['Int'];
};

export type CreateColonyFundsClaimInput = {
  amount: Scalars['String'];
  colonyFundsClaimTokenId: Scalars['ID'];
  colonyFundsClaimsId?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  createdAtBlock: Scalars['Int'];
  id?: InputMaybe<Scalars['ID']>;
  isClaimed?: InputMaybe<Scalars['Boolean']>;
};

export type CreateColonyHistoricRoleInput = {
  blockNumber: Scalars['Int'];
  colonyId: Scalars['ID'];
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  domainId: Scalars['ID'];
  id?: InputMaybe<Scalars['ID']>;
  role_0?: InputMaybe<Scalars['Boolean']>;
  role_1?: InputMaybe<Scalars['Boolean']>;
  role_2?: InputMaybe<Scalars['Boolean']>;
  role_3?: InputMaybe<Scalars['Boolean']>;
  role_5?: InputMaybe<Scalars['Boolean']>;
  role_6?: InputMaybe<Scalars['Boolean']>;
  targetAddress?: InputMaybe<Scalars['ID']>;
  type: Scalars['String'];
};

export type CreateColonyInput = {
  balances?: InputMaybe<ColonyBalancesInput>;
  chainFundsClaim?: InputMaybe<ColonyChainFundsClaimInput>;
  chainMetadata: ChainMetadataInput;
  colonyMemberInviteCode?: InputMaybe<Scalars['ID']>;
  expendituresGlobalClaimDelay?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  lastUpdatedContributorsWithReputation?: InputMaybe<Scalars['AWSDateTime']>;
  motionsWithUnclaimedStakes?: InputMaybe<Array<ColonyUnclaimedStakeInput>>;
  name: Scalars['String'];
  nativeTokenId: Scalars['ID'];
  private?: InputMaybe<Scalars['Boolean']>;
  reputation?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ColonyStatusInput>;
  type?: InputMaybe<ColonyType>;
  version: Scalars['Int'];
};

export type CreateColonyMemberInviteInput = {
  colonyId: Scalars['ID'];
  id?: InputMaybe<Scalars['ID']>;
  invitesRemaining: Scalars['Int'];
};

export type CreateColonyMetadataInput = {
  avatar?: InputMaybe<Scalars['String']>;
  changelog?: InputMaybe<Array<ColonyMetadataChangelogInput>>;
  description?: InputMaybe<Scalars['String']>;
  displayName: Scalars['String'];
  etherealData?: InputMaybe<ColonyMetadataEtherealDataInput>;
  externalLinks?: InputMaybe<Array<ExternalLinkInput>>;
  id?: InputMaybe<Scalars['ID']>;
  modifiedTokenAddresses?: InputMaybe<PendingModifiedTokenAddressesInput>;
  objective?: InputMaybe<ColonyObjectiveInput>;
  safes?: InputMaybe<Array<SafeInput>>;
  thumbnail?: InputMaybe<Scalars['String']>;
};

export type CreateColonyMotionInput = {
  createdBy: Scalars['String'];
  editedExpenditureSlots?: InputMaybe<Array<ExpenditureSlotInput>>;
  expenditureFunding?: InputMaybe<Array<ExpenditureFundingItemInput>>;
  expenditureId?: InputMaybe<Scalars['ID']>;
  expenditureSlotId?: InputMaybe<Scalars['Int']>;
  gasEstimate: Scalars['String'];
  hasObjection: Scalars['Boolean'];
  id?: InputMaybe<Scalars['ID']>;
  isDecision: Scalars['Boolean'];
  isFinalized: Scalars['Boolean'];
  motionDomainId: Scalars['ID'];
  motionStakes: MotionStakesInput;
  motionStateHistory: MotionStateHistoryInput;
  nativeMotionDomainId: Scalars['String'];
  nativeMotionId: Scalars['String'];
  objectionAnnotationId?: InputMaybe<Scalars['ID']>;
  remainingStakes: Array<Scalars['String']>;
  repSubmitted: Scalars['String'];
  requiredStake: Scalars['String'];
  revealedVotes: MotionStakesInput;
  skillRep: Scalars['String'];
  stakerRewards: Array<StakerRewardsInput>;
  transactionHash: Scalars['ID'];
  userMinStake: Scalars['String'];
  usersStakes: Array<UserMotionStakesInput>;
  voterRecord: Array<VoterRecordInput>;
};

export type CreateColonyRoleInput = {
  colonyAddress: Scalars['ID'];
  colonyRolesId?: InputMaybe<Scalars['ID']>;
  domainId: Scalars['ID'];
  id?: InputMaybe<Scalars['ID']>;
  latestBlock: Scalars['Int'];
  role_0?: InputMaybe<Scalars['Boolean']>;
  role_1?: InputMaybe<Scalars['Boolean']>;
  role_2?: InputMaybe<Scalars['Boolean']>;
  role_3?: InputMaybe<Scalars['Boolean']>;
  role_5?: InputMaybe<Scalars['Boolean']>;
  role_6?: InputMaybe<Scalars['Boolean']>;
  targetAddress: Scalars['ID'];
};

export type CreateColonyStakeInput = {
  colonyId: Scalars['ID'];
  id?: InputMaybe<Scalars['ID']>;
  totalAmount: Scalars['String'];
  userId: Scalars['ID'];
};

export type CreateColonyTokensInput = {
  colonyID: Scalars['ID'];
  id?: InputMaybe<Scalars['ID']>;
  tokenID: Scalars['ID'];
};

export type CreateContractEventInput = {
  agent: Scalars['String'];
  chainMetadata: ChainMetadataInput;
  contractEventColonyId?: InputMaybe<Scalars['ID']>;
  contractEventDomainId?: InputMaybe<Scalars['ID']>;
  contractEventTokenId?: InputMaybe<Scalars['ID']>;
  contractEventUserId?: InputMaybe<Scalars['ID']>;
  encodedArguments?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  signature: Scalars['String'];
  target: Scalars['String'];
};

export type CreateContributorReputationInput = {
  colonyAddress: Scalars['ID'];
  contributorAddress: Scalars['ID'];
  domainId: Scalars['ID'];
  id?: InputMaybe<Scalars['ID']>;
  reputationPercentage: Scalars['Float'];
  reputationRaw: Scalars['String'];
};

export type CreateCurrentNetworkInverseFeeInput = {
  id?: InputMaybe<Scalars['ID']>;
  inverseFee: Scalars['String'];
};

export type CreateCurrentVersionInput = {
  id?: InputMaybe<Scalars['ID']>;
  key: Scalars['String'];
  version: Scalars['Int'];
};

export type CreateDomainInput = {
  colonyId: Scalars['ID'];
  id?: InputMaybe<Scalars['ID']>;
  isRoot: Scalars['Boolean'];
  nativeFundingPotId: Scalars['Int'];
  nativeId: Scalars['Int'];
  nativeSkillId: Scalars['String'];
  reputation?: InputMaybe<Scalars['String']>;
  reputationPercentage?: InputMaybe<Scalars['String']>;
};

export type CreateDomainMetadataInput = {
  changelog?: InputMaybe<Array<DomainMetadataChangelogInput>>;
  color: DomainColor;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
};

export type CreateExpenditureInput = {
  balances?: InputMaybe<Array<ExpenditureBalanceInput>>;
  colonyId: Scalars['ID'];
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  finalizedAt?: InputMaybe<Scalars['AWSTimestamp']>;
  firstEditTransactionHash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  isStaked: Scalars['Boolean'];
  nativeDomainId: Scalars['Int'];
  nativeFundingPotId: Scalars['Int'];
  nativeId: Scalars['Int'];
  ownerAddress: Scalars['ID'];
  slots: Array<ExpenditureSlotInput>;
  status: ExpenditureStatus;
  type: ExpenditureType;
  userStakeId?: InputMaybe<Scalars['ID']>;
};

export type CreateExpenditureMetadataInput = {
  fundFromDomainNativeId: Scalars['Int'];
  id?: InputMaybe<Scalars['ID']>;
  stages?: InputMaybe<Array<ExpenditureStageInput>>;
};

export type CreateExtensionInstallationsCountInput = {
  id?: InputMaybe<Scalars['ID']>;
  oneTxPayment: Scalars['Int'];
  reputationWeighted: Scalars['Int'];
  stagedExpenditure: Scalars['Int'];
  stakedExpenditure: Scalars['Int'];
  streamingPayments: Scalars['Int'];
};

export type CreateIngestorStatsInput = {
  id?: InputMaybe<Scalars['ID']>;
  value: Scalars['String'];
};

export type CreateMotionMessageInput = {
  amount?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  initiatorAddress: Scalars['ID'];
  messageKey: Scalars['String'];
  motionId: Scalars['ID'];
  name: Scalars['String'];
  vote?: InputMaybe<Scalars['String']>;
};

export type CreatePrivateBetaInviteCodeInput = {
  id?: InputMaybe<Scalars['ID']>;
  shareableInvites?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type CreateProfileInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  displayNameChanged?: InputMaybe<Scalars['AWSDateTime']>;
  email?: InputMaybe<Scalars['AWSEmail']>;
  id?: InputMaybe<Scalars['ID']>;
  location?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<ProfileMetadataInput>;
  preferredCurrency?: InputMaybe<SupportedCurrencies>;
  thumbnail?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['AWSURL']>;
};

export type CreateReputationMiningCycleMetadataInput = {
  id?: InputMaybe<Scalars['ID']>;
  lastCompletedAt: Scalars['AWSDateTime'];
};

export type CreateSafeTransactionDataInput = {
  abi?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['String']>;
  contract?: InputMaybe<SimpleTargetInput>;
  contractFunction?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<Scalars['String']>;
  functionParams?: InputMaybe<Array<InputMaybe<FunctionParamInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  nft?: InputMaybe<NftInput>;
  nftData?: InputMaybe<NftDataInput>;
  rawAmount?: InputMaybe<Scalars['String']>;
  recipient?: InputMaybe<SimpleTargetInput>;
  tokenAddress?: InputMaybe<Scalars['ID']>;
  transactionHash: Scalars['ID'];
  transactionType: SafeTransactionType;
};

export type CreateSafeTransactionInput = {
  id?: InputMaybe<Scalars['ID']>;
  safe: SafeInput;
};

export type CreateStreamingPaymentInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  endTime: Scalars['AWSTimestamp'];
  id?: InputMaybe<Scalars['ID']>;
  interval: Scalars['String'];
  nativeDomainId: Scalars['Int'];
  nativeId: Scalars['Int'];
  payouts?: InputMaybe<Array<ExpenditurePayoutInput>>;
  recipientAddress: Scalars['String'];
  startTime: Scalars['AWSTimestamp'];
};

export type CreateStreamingPaymentMetadataInput = {
  endCondition: StreamingPaymentEndCondition;
  id?: InputMaybe<Scalars['ID']>;
  limitAmount?: InputMaybe<Scalars['String']>;
};

export type CreateTokenInput = {
  avatar?: InputMaybe<Scalars['String']>;
  chainMetadata: ChainMetadataInput;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  decimals: Scalars['Int'];
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  symbol: Scalars['String'];
  thumbnail?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TokenType>;
};

export type CreateTransactionInput = {
  blockHash?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  colonyAddress: Scalars['ID'];
  context: ClientType;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  deleted?: InputMaybe<Scalars['Boolean']>;
  deployedContractAddress?: InputMaybe<Scalars['String']>;
  error?: InputMaybe<TransactionErrorInput>;
  eventData?: InputMaybe<Scalars['String']>;
  from: Scalars['ID'];
  gasLimit?: InputMaybe<Scalars['String']>;
  gasPrice?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<TransactionGroupInput>;
  groupId?: InputMaybe<Scalars['ID']>;
  hash?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  identifier?: InputMaybe<Scalars['String']>;
  loadingRelated?: InputMaybe<Scalars['Boolean']>;
  metatransaction: Scalars['Boolean'];
  methodContext?: InputMaybe<Scalars['String']>;
  methodName: Scalars['String'];
  options?: InputMaybe<Scalars['String']>;
  params?: InputMaybe<Scalars['String']>;
  receipt?: InputMaybe<Scalars['String']>;
  status: TransactionStatus;
  title?: InputMaybe<Scalars['String']>;
  titleValues?: InputMaybe<Scalars['String']>;
};

/** Input data for creating a unique user within the Colony Network Use this instead of the automatically generated `CreateUserInput` input type */
export type CreateUniqueUserInput = {
  /** Unique identifier for the user. This is the user's wallet address */
  id: Scalars['ID'];
  /** Profile data for the user */
  profile: ProfileInput;
};

export type CreateUserInput = {
  id?: InputMaybe<Scalars['ID']>;
  profileId?: InputMaybe<Scalars['ID']>;
  userPrivateBetaInviteCodeId?: InputMaybe<Scalars['ID']>;
};

export type CreateUserStakeInput = {
  actionId: Scalars['ID'];
  amount: Scalars['String'];
  colonyAddress: Scalars['ID'];
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  isClaimed: Scalars['Boolean'];
  isForfeited?: InputMaybe<Scalars['Boolean']>;
  userAddress: Scalars['ID'];
};

export type CreateUserTokensInput = {
  id?: InputMaybe<Scalars['ID']>;
  tokenID: Scalars['ID'];
  userID: Scalars['ID'];
};

/**
 * The current inverse of the network fee (in wei)
 * (divide 1 by it and get the actual network fee)
 */
export type CurrentNetworkInverseFee = {
  __typename?: 'CurrentNetworkInverseFee';
  createdAt: Scalars['AWSDateTime'];
  /** Unique identifier for the network fee */
  id: Scalars['ID'];
  /** The inverse fee */
  inverseFee: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
};

/** Represents the current version of an entity in the system */
export type CurrentVersion = {
  __typename?: 'CurrentVersion';
  createdAt: Scalars['AWSDateTime'];
  /** Unique identifier for the CurrentVersion */
  id: Scalars['ID'];
  /** The key used to look up the current version */
  key: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
  /** The current version number */
  version: Scalars['Int'];
};

export type DeleteAnnotationInput = {
  id: Scalars['ID'];
};

export type DeleteColonyActionInput = {
  id: Scalars['ID'];
};

export type DeleteColonyActionMetadataInput = {
  id: Scalars['ID'];
};

export type DeleteColonyContributorInput = {
  id: Scalars['ID'];
};

export type DeleteColonyDecisionInput = {
  id: Scalars['ID'];
};

export type DeleteColonyExtensionInput = {
  id: Scalars['ID'];
};

export type DeleteColonyFundsClaimInput = {
  id: Scalars['ID'];
};

export type DeleteColonyHistoricRoleInput = {
  id: Scalars['ID'];
};

export type DeleteColonyInput = {
  id: Scalars['ID'];
};

export type DeleteColonyMemberInviteInput = {
  id: Scalars['ID'];
};

export type DeleteColonyMetadataInput = {
  id: Scalars['ID'];
};

export type DeleteColonyMotionInput = {
  id: Scalars['ID'];
};

export type DeleteColonyRoleInput = {
  id: Scalars['ID'];
};

export type DeleteColonyStakeInput = {
  id: Scalars['ID'];
};

export type DeleteColonyTokensInput = {
  id: Scalars['ID'];
};

export type DeleteContractEventInput = {
  id: Scalars['ID'];
};

export type DeleteContributorReputationInput = {
  id: Scalars['ID'];
};

export type DeleteCurrentNetworkInverseFeeInput = {
  id: Scalars['ID'];
};

export type DeleteCurrentVersionInput = {
  id: Scalars['ID'];
};

export type DeleteDomainInput = {
  id: Scalars['ID'];
};

export type DeleteDomainMetadataInput = {
  id: Scalars['ID'];
};

export type DeleteExpenditureInput = {
  id: Scalars['ID'];
};

export type DeleteExpenditureMetadataInput = {
  id: Scalars['ID'];
};

export type DeleteExtensionInstallationsCountInput = {
  id: Scalars['ID'];
};

export type DeleteIngestorStatsInput = {
  id: Scalars['ID'];
};

export type DeleteMotionMessageInput = {
  id: Scalars['ID'];
};

export type DeletePrivateBetaInviteCodeInput = {
  id: Scalars['ID'];
};

export type DeleteProfileInput = {
  id: Scalars['ID'];
};

export type DeleteReputationMiningCycleMetadataInput = {
  id: Scalars['ID'];
};

export type DeleteSafeTransactionDataInput = {
  id: Scalars['ID'];
};

export type DeleteSafeTransactionInput = {
  id: Scalars['ID'];
};

export type DeleteStreamingPaymentInput = {
  id: Scalars['ID'];
};

export type DeleteStreamingPaymentMetadataInput = {
  id: Scalars['ID'];
};

export type DeleteTokenInput = {
  id: Scalars['ID'];
};

export type DeleteTransactionInput = {
  id: Scalars['ID'];
};

export type DeleteUserInput = {
  id: Scalars['ID'];
};

export type DeleteUserStakeInput = {
  id: Scalars['ID'];
};

export type DeleteUserTokensInput = {
  id: Scalars['ID'];
};

/** Represents a Domain within the Colony Network */
export type Domain = {
  __typename?: 'Domain';
  /** Colony associated with the Domain */
  colony: Colony;
  /** Colony ID associated with the Domain */
  colonyId: Scalars['ID'];
  createdAt: Scalars['AWSDateTime'];
  /**
   * Unique identifier for the Domain
   * This should be in the following format: `colonyAddress_nativeId`
   * The native id is the auto-incrementing integer that is assigned to a domain from the contract on creation
   */
  id: Scalars['ID'];
  /** Indicates whether the Domain is the root domain (ID 1) */
  isRoot: Scalars['Boolean'];
  /** Metadata of the Domain */
  metadata?: Maybe<DomainMetadata>;
  /**
   * Native funding pot ID of the Domain
   * The native funding pot ID is assigned to a domain from the contract on creation
   */
  nativeFundingPotId: Scalars['Int'];
  /**
   * Native ID of the Domain
   * The native id is the auto-incrementing integer that is assigned to a domain from the contract on creation
   */
  nativeId: Scalars['Int'];
  /**
   * Native skill ID of the Domain
   * The native skill ID is assigned to a domain from the contract on creation
   */
  nativeSkillId: Scalars['String'];
  /** The amount of reputation in the domain */
  reputation?: Maybe<Scalars['String']>;
  /** The amount of reputation in the domain, as a percentage of the total in the colony */
  reputationPercentage?: Maybe<Scalars['String']>;
  updatedAt: Scalars['AWSDateTime'];
};

/** Variants of available domain colors as used in the dApp */
export enum DomainColor {
  /** An aqua color */
  Aqua = 'AQUA',
  /** A black color */
  Black = 'BLACK',
  /** A blue color */
  Blue = 'BLUE',
  /** A blue-grey(ish) color */
  BlueGrey = 'BLUE_GREY',
  /** An emerald green color */
  EmeraldGreen = 'EMERALD_GREEN',
  /** A gold color */
  Gold = 'GOLD',
  /** A green color */
  Green = 'GREEN',
  /** A light pink color */
  LightPink = 'LIGHT_PINK',
  /** A magenta color */
  Magenta = 'MAGENTA',
  /** An orange color */
  Orange = 'ORANGE',
  /** A pale indigo color */
  Periwinkle = 'PERIWINKLE',
  /** A pink color */
  Pink = 'PINK',
  /** A purple color */
  Purple = 'PURPLE',
  /** A purple-grey(ish) color */
  PurpleGrey = 'PURPLE_GREY',
  /** A red color */
  Red = 'RED',
  /** The default domain color for the root domain. Only used by the root by default and cannot be selected by the user. */
  Root = 'ROOT',
  /** A yellow color */
  Yellow = 'YELLOW'
}

/** Input type for specifying a Domain */
export type DomainInput = {
  /** Unique identifier for the Domain */
  id: Scalars['ID'];
};

/** Represents metadata for a Domain */
export type DomainMetadata = {
  __typename?: 'DomainMetadata';
  /** List of Domain metadata changelog entries */
  changelog?: Maybe<Array<DomainMetadataChangelog>>;
  /** Color associated with the Domain */
  color: DomainColor;
  createdAt: Scalars['AWSDateTime'];
  /** Description of the Domain */
  description?: Maybe<Scalars['String']>;
  /**
   * Unique identifier for the Domain metadata
   * This field is referenced by Domain id, so has to be in the same format: colonyAddress_nativeId
   */
  id: Scalars['ID'];
  /** Name of the Domain */
  name: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
};

/** Represents a changelog entry for Domain metadata */
export type DomainMetadataChangelog = {
  __typename?: 'DomainMetadataChangelog';
  /** Color of the Domain after the change */
  newColor: DomainColor;
  /** Description of the Domain after the change */
  newDescription?: Maybe<Scalars['String']>;
  /** Name of the Domain after the change */
  newName: Scalars['String'];
  /** Color of the Domain before the change */
  oldColor: DomainColor;
  /** Description of the Domain before the change */
  oldDescription?: Maybe<Scalars['String']>;
  /** Name of the Domain before the change */
  oldName: Scalars['String'];
  /** Transaction hash associated with the changelog entry */
  transactionHash: Scalars['String'];
};

export type DomainMetadataChangelogInput = {
  newColor: DomainColor;
  newDescription?: InputMaybe<Scalars['String']>;
  newName: Scalars['String'];
  oldColor: DomainColor;
  oldDescription?: InputMaybe<Scalars['String']>;
  oldName: Scalars['String'];
  transactionHash: Scalars['String'];
};

export type Expenditure = {
  __typename?: 'Expenditure';
  actions?: Maybe<ModelColonyActionConnection>;
  /** Array containing balances of tokens in the expenditure */
  balances?: Maybe<Array<ExpenditureBalance>>;
  /** The Colony to which the expenditure belongs */
  colony: Colony;
  /** Colony ID (address) to which the expenditure belongs */
  colonyId: Scalars['ID'];
  createdAt: Scalars['AWSDateTime'];
  /** The timestamp at which the expenditure was finalized */
  finalizedAt?: Maybe<Scalars['AWSTimestamp']>;
  /** Hash of the first transaction that contained ExpenditurePayoutSet event */
  firstEditTransactionHash?: Maybe<Scalars['String']>;
  /**
   * Unique identifier for the role snapshot
   * Self-managed, format: `colonyId_nativeExpenditureId`
   */
  id: Scalars['ID'];
  /** Indicates whether the expenditure was staked for */
  isStaked: Scalars['Boolean'];
  /**
   * Optional metadata linked to the expenditure
   * It contains client-side data that is not stored on chain
   */
  metadata?: Maybe<ExpenditureMetadata>;
  motions?: Maybe<ModelColonyMotionConnection>;
  /** Native (contract) ID of the expenditure domain */
  nativeDomainId: Scalars['Int'];
  /** Native (contract) ID of the funding pot of the expenditure */
  nativeFundingPotId: Scalars['Int'];
  /** Native (contract) ID of the expenditure */
  nativeId: Scalars['Int'];
  /** Address of the expenditure owner, it can be a user or an extension */
  ownerAddress: Scalars['ID'];
  /** Array containing expenditure slots */
  slots: Array<ExpenditureSlot>;
  /** Status of the expenditure */
  status: ExpenditureStatus;
  type: ExpenditureType;
  updatedAt: Scalars['AWSDateTime'];
  /** User stake associated with the expenditure, if any */
  userStake?: Maybe<UserStake>;
  /** ID of the user stake associated with the expenditure, if any */
  userStakeId?: Maybe<Scalars['ID']>;
};


export type ExpenditureActionsArgs = {
  filter?: InputMaybe<ModelColonyActionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type ExpenditureMotionsArgs = {
  filter?: InputMaybe<ModelColonyMotionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type ExpenditureBalance = {
  __typename?: 'ExpenditureBalance';
  amount: Scalars['String'];
  tokenAddress: Scalars['ID'];
};

export type ExpenditureBalanceInput = {
  amount: Scalars['String'];
  tokenAddress: Scalars['ID'];
};

export type ExpenditureFundingItem = {
  __typename?: 'ExpenditureFundingItem';
  /** The amount of the token to be funded */
  amount: Scalars['String'];
  /** The token address of the token to be funded */
  tokenAddress: Scalars['String'];
};

export type ExpenditureFundingItemInput = {
  amount: Scalars['String'];
  tokenAddress: Scalars['String'];
};

export type ExpenditureMetadata = {
  __typename?: 'ExpenditureMetadata';
  createdAt: Scalars['AWSDateTime'];
  fundFromDomainNativeId: Scalars['Int'];
  id: Scalars['ID'];
  stages?: Maybe<Array<ExpenditureStage>>;
  updatedAt: Scalars['AWSDateTime'];
};

export type ExpenditurePayout = {
  __typename?: 'ExpenditurePayout';
  /** Payout amount, excluding network fee */
  amount: Scalars['String'];
  isClaimed: Scalars['Boolean'];
  /**
   * Network fee amount
   * @TODO: Make this a non-nullable field once existing data is updated
   */
  networkFee?: Maybe<Scalars['String']>;
  tokenAddress: Scalars['ID'];
};

export type ExpenditurePayoutInput = {
  amount: Scalars['String'];
  isClaimed: Scalars['Boolean'];
  networkFee?: InputMaybe<Scalars['String']>;
  tokenAddress: Scalars['ID'];
};

/**
 * Represents a slot of an expenditure
 * Each expenditure can have multiple slots, with a single recipients and multiple payouts (in different token addresses)
 */
export type ExpenditureSlot = {
  __typename?: 'ExpenditureSlot';
  /** Slot claim delay (in seconds) */
  claimDelay?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  payoutModifier?: Maybe<Scalars['Int']>;
  payouts?: Maybe<Array<ExpenditurePayout>>;
  recipientAddress?: Maybe<Scalars['String']>;
};

export type ExpenditureSlotChanges = {
  __typename?: 'ExpenditureSlotChanges';
  newSlots: Array<ExpenditureSlot>;
  oldSlots: Array<ExpenditureSlot>;
};

export type ExpenditureSlotChangesInput = {
  newSlots: Array<ExpenditureSlotInput>;
  oldSlots: Array<ExpenditureSlotInput>;
};

export type ExpenditureSlotInput = {
  claimDelay?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  payoutModifier?: InputMaybe<Scalars['Int']>;
  payouts?: InputMaybe<Array<ExpenditurePayoutInput>>;
  recipientAddress?: InputMaybe<Scalars['String']>;
};

export type ExpenditureStage = {
  __typename?: 'ExpenditureStage';
  isReleased: Scalars['Boolean'];
  name: Scalars['String'];
  slotId: Scalars['Int'];
};

export type ExpenditureStageInput = {
  isReleased: Scalars['Boolean'];
  name: Scalars['String'];
  slotId: Scalars['Int'];
};

export enum ExpenditureStatus {
  Cancelled = 'CANCELLED',
  Draft = 'DRAFT',
  Finalized = 'FINALIZED',
  Locked = 'LOCKED'
}

export enum ExpenditureType {
  PaymentBuilder = 'PAYMENT_BUILDER',
  Staged = 'STAGED'
}

export type ExtensionInstallationsCount = {
  __typename?: 'ExtensionInstallationsCount';
  createdAt: Scalars['AWSDateTime'];
  /** The model id. It's the chain id the of the colony the extension belongs to */
  id: Scalars['ID'];
  oneTxPayment: Scalars['Int'];
  reputationWeighted: Scalars['Int'];
  stagedExpenditure: Scalars['Int'];
  stakedExpenditure: Scalars['Int'];
  streamingPayments: Scalars['Int'];
  updatedAt: Scalars['AWSDateTime'];
};

/** Map of parameters that extensions are initialised with */
export type ExtensionParams = {
  __typename?: 'ExtensionParams';
  /** Initialization parameters for the `StakedExpenditure` extension */
  stakedExpenditure?: Maybe<StakedExpenditureParams>;
  /** Initialization parameters for the `VotingReputation` extension */
  votingReputation?: Maybe<VotingReputationParams>;
};

export type ExtensionParamsInput = {
  stakedExpenditure?: InputMaybe<StakedExpenditureParamsInput>;
  votingReputation?: InputMaybe<VotingReputationParamsInput>;
};

export type ExternalLink = {
  __typename?: 'ExternalLink';
  link: Scalars['String'];
  name: ExternalLinks;
};

export type ExternalLinkInput = {
  link: Scalars['String'];
  name: ExternalLinks;
};

export enum ExternalLinks {
  Custom = 'Custom',
  Discord = 'Discord',
  Facebook = 'Facebook',
  Github = 'Github',
  Instagram = 'Instagram',
  Telegram = 'Telegram',
  Twitter = 'Twitter',
  Whitepaper = 'Whitepaper',
  Youtube = 'Youtube'
}

export enum FilteringMethod {
  /** Apply an intersection filter */
  Intersection = 'INTERSECTION',
  /** Apply a union filter */
  Union = 'UNION'
}

export type FunctionParam = {
  __typename?: 'FunctionParam';
  name: Scalars['String'];
  type: Scalars['String'];
  value: Scalars['String'];
};

export type FunctionParamInput = {
  name: Scalars['String'];
  type: Scalars['String'];
  value: Scalars['String'];
};

/** Input data for retrieving the state of a motion (i.e. the current period) */
export type GetMotionStateInput = {
  /** The Ethereum address of the Colony */
  colonyAddress: Scalars['String'];
  /** The internal id of the motion in the database */
  databaseMotionId: Scalars['String'];
};

/** Input data for retrieving the timeout of the current period the motion is in */
export type GetMotionTimeoutPeriodsInput = {
  /** The Ethereum address of the user who voted */
  colonyAddress: Scalars['String'];
  /** The on chain id of the motion */
  motionId: Scalars['String'];
};

/**
 * A return type that contains the timeout periods the motion can be in
 * Represented via a string-integer in milliseconds. Will report 0 for periods that are elapsed and will show the accumulated time for later periods
 */
export type GetMotionTimeoutPeriodsReturn = {
  __typename?: 'GetMotionTimeoutPeriodsReturn';
  /** Time left in escalation period */
  timeLeftToEscalate: Scalars['String'];
  /** Time left in reveal period */
  timeLeftToReveal: Scalars['String'];
  /** Time left in staking period */
  timeLeftToStake: Scalars['String'];
  /** Time left in voting period */
  timeLeftToVote: Scalars['String'];
};

export type GetSafeTransactionStatusInput = {
  chainId: Scalars['String'];
  transactionHash: Scalars['String'];
};

/**
 * Input data for a user's reputation within a Domain in a Colony. If no `domainId` is passed, the Root Domain is used
 * A `rootHash` can be provided, to get reputation at a certain point in the past
 */
export type GetUserReputationInput = {
  /** The Ethereum address of the Colony */
  colonyAddress: Scalars['String'];
  /** The ID of the Domain within the Colony. If not provided, defaults to the Root Domain */
  domainId?: InputMaybe<Scalars['Int']>;
  /** The root hash of the reputation tree at a specific point in time */
  rootHash?: InputMaybe<Scalars['String']>;
  /** The Ethereum wallet address of the user */
  walletAddress: Scalars['String'];
};

/** Input data for retrieving a user's token balance for a specific token */
export type GetUserTokenBalanceInput = {
  /** The Colony address */
  colonyAddress: Scalars['String'];
  /** The address of the token */
  tokenAddress: Scalars['String'];
  /** The wallet address of the user */
  walletAddress: Scalars['String'];
};

/** A return type representing the breakdown of a user's token balance */
export type GetUserTokenBalanceReturn = {
  __typename?: 'GetUserTokenBalanceReturn';
  /**
   * The active portion of the user's token balance
   * This is the balance that is approved for the Colony Network to use (e.g. for governance)
   */
  activeBalance?: Maybe<Scalars['String']>;
  /** The total token balance, including inactive, locked, and active balances */
  balance?: Maybe<Scalars['String']>;
  /**
   * The inactive portion of the user's token balance
   * This is the balance of a token that is in a users wallet but can't be used by the Colony Network (e.g. for governance)
   */
  inactiveBalance?: Maybe<Scalars['String']>;
  /**
   * The locked portion of the user's token balance
   * This is the balance of a token that is staked (e.g. in motions)
   */
  lockedBalance?: Maybe<Scalars['String']>;
  /**
   * The pending portion of the user's token balance
   * These are tokens that have been sent to the wallet, but are inaccessible until all locks are cleared and then these tokens are claimed
   */
  pendingBalance?: Maybe<Scalars['String']>;
};

/** Input data for retrieving the voting rewards for a user within a finished motion */
export type GetVoterRewardsInput = {
  /** The Ethereum address of the Colony */
  colonyAddress: Scalars['String'];
  /** The on chain id of the motion */
  motionId: Scalars['String'];
  /** The on chain id of the domain in which the motion was created */
  nativeMotionDomainId: Scalars['String'];
  /** The root hash of the reputation tree at the time the motion was created */
  rootHash: Scalars['String'];
  /** The Ethereum address of the user who voted */
  voterAddress: Scalars['String'];
};

/** Model storing block ingestor stats, as key-value entries */
export type IngestorStats = {
  __typename?: 'IngestorStats';
  createdAt: Scalars['AWSDateTime'];
  /** Unique identifier of the ingestor stats */
  id: Scalars['ID'];
  updatedAt: Scalars['AWSDateTime'];
  /** JSON string to pass custom, dynamic values */
  value: Scalars['String'];
};

export type ModelAnnotationConditionInput = {
  actionId?: InputMaybe<ModelIdInput>;
  and?: InputMaybe<Array<InputMaybe<ModelAnnotationConditionInput>>>;
  ipfsHash?: InputMaybe<ModelStringInput>;
  message?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelAnnotationConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelAnnotationConditionInput>>>;
};

export type ModelAnnotationConnection = {
  __typename?: 'ModelAnnotationConnection';
  items: Array<Maybe<Annotation>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelAnnotationFilterInput = {
  actionId?: InputMaybe<ModelIdInput>;
  and?: InputMaybe<Array<InputMaybe<ModelAnnotationFilterInput>>>;
  id?: InputMaybe<ModelIdInput>;
  ipfsHash?: InputMaybe<ModelStringInput>;
  message?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelAnnotationFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelAnnotationFilterInput>>>;
};

export enum ModelAttributeTypes {
  Null = '_null',
  Binary = 'binary',
  BinarySet = 'binarySet',
  Bool = 'bool',
  List = 'list',
  Map = 'map',
  Number = 'number',
  NumberSet = 'numberSet',
  String = 'string',
  StringSet = 'stringSet'
}

export type ModelBooleanInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type ModelClientTypeInput = {
  eq?: InputMaybe<ClientType>;
  ne?: InputMaybe<ClientType>;
};

export type ModelColonyActionConditionInput = {
  amount?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelColonyActionConditionInput>>>;
  annotationId?: InputMaybe<ModelIdInput>;
  blockNumber?: InputMaybe<ModelIntInput>;
  colonyActionsId?: InputMaybe<ModelIdInput>;
  colonyDecisionId?: InputMaybe<ModelIdInput>;
  colonyId?: InputMaybe<ModelIdInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  expenditureId?: InputMaybe<ModelIdInput>;
  fromDomainId?: InputMaybe<ModelIdInput>;
  fromPotId?: InputMaybe<ModelIntInput>;
  individualEvents?: InputMaybe<ModelStringInput>;
  initiatorAddress?: InputMaybe<ModelIdInput>;
  isMotion?: InputMaybe<ModelBooleanInput>;
  isMotionFinalization?: InputMaybe<ModelBooleanInput>;
  members?: InputMaybe<ModelIdInput>;
  motionDomainId?: InputMaybe<ModelIntInput>;
  motionId?: InputMaybe<ModelIdInput>;
  networkFee?: InputMaybe<ModelStringInput>;
  newColonyVersion?: InputMaybe<ModelIntInput>;
  not?: InputMaybe<ModelColonyActionConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyActionConditionInput>>>;
  paymentId?: InputMaybe<ModelIntInput>;
  pendingColonyMetadataId?: InputMaybe<ModelIdInput>;
  pendingDomainMetadataId?: InputMaybe<ModelIdInput>;
  recipientAddress?: InputMaybe<ModelIdInput>;
  rootHash?: InputMaybe<ModelStringInput>;
  showInActionsList?: InputMaybe<ModelBooleanInput>;
  toDomainId?: InputMaybe<ModelIdInput>;
  toPotId?: InputMaybe<ModelIntInput>;
  tokenAddress?: InputMaybe<ModelIdInput>;
  type?: InputMaybe<ModelColonyActionTypeInput>;
};

export type ModelColonyActionConnection = {
  __typename?: 'ModelColonyActionConnection';
  items: Array<Maybe<ColonyAction>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelColonyActionFilterInput = {
  amount?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelColonyActionFilterInput>>>;
  annotationId?: InputMaybe<ModelIdInput>;
  blockNumber?: InputMaybe<ModelIntInput>;
  colonyActionsId?: InputMaybe<ModelIdInput>;
  colonyDecisionId?: InputMaybe<ModelIdInput>;
  colonyId?: InputMaybe<ModelIdInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  expenditureId?: InputMaybe<ModelIdInput>;
  fromDomainId?: InputMaybe<ModelIdInput>;
  fromPotId?: InputMaybe<ModelIntInput>;
  id?: InputMaybe<ModelIdInput>;
  individualEvents?: InputMaybe<ModelStringInput>;
  initiatorAddress?: InputMaybe<ModelIdInput>;
  isMotion?: InputMaybe<ModelBooleanInput>;
  isMotionFinalization?: InputMaybe<ModelBooleanInput>;
  members?: InputMaybe<ModelIdInput>;
  motionDomainId?: InputMaybe<ModelIntInput>;
  motionId?: InputMaybe<ModelIdInput>;
  networkFee?: InputMaybe<ModelStringInput>;
  newColonyVersion?: InputMaybe<ModelIntInput>;
  not?: InputMaybe<ModelColonyActionFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyActionFilterInput>>>;
  paymentId?: InputMaybe<ModelIntInput>;
  pendingColonyMetadataId?: InputMaybe<ModelIdInput>;
  pendingDomainMetadataId?: InputMaybe<ModelIdInput>;
  recipientAddress?: InputMaybe<ModelIdInput>;
  rootHash?: InputMaybe<ModelStringInput>;
  showInActionsList?: InputMaybe<ModelBooleanInput>;
  toDomainId?: InputMaybe<ModelIdInput>;
  toPotId?: InputMaybe<ModelIntInput>;
  tokenAddress?: InputMaybe<ModelIdInput>;
  type?: InputMaybe<ModelColonyActionTypeInput>;
};

export type ModelColonyActionMetadataConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelColonyActionMetadataConditionInput>>>;
  customTitle?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelColonyActionMetadataConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyActionMetadataConditionInput>>>;
};

export type ModelColonyActionMetadataConnection = {
  __typename?: 'ModelColonyActionMetadataConnection';
  items: Array<Maybe<ColonyActionMetadata>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelColonyActionMetadataFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelColonyActionMetadataFilterInput>>>;
  customTitle?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelColonyActionMetadataFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyActionMetadataFilterInput>>>;
};

export type ModelColonyActionTypeInput = {
  eq?: InputMaybe<ColonyActionType>;
  ne?: InputMaybe<ColonyActionType>;
};

export type ModelColonyConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelColonyConditionInput>>>;
  colonyMemberInviteCode?: InputMaybe<ModelIdInput>;
  expendituresGlobalClaimDelay?: InputMaybe<ModelStringInput>;
  lastUpdatedContributorsWithReputation?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  nativeTokenId?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelColonyConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyConditionInput>>>;
  private?: InputMaybe<ModelBooleanInput>;
  reputation?: InputMaybe<ModelStringInput>;
  type?: InputMaybe<ModelColonyTypeInput>;
  version?: InputMaybe<ModelIntInput>;
};

export type ModelColonyConnection = {
  __typename?: 'ModelColonyConnection';
  items: Array<Maybe<Colony>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelColonyContributorConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelColonyContributorConditionInput>>>;
  colonyAddress?: InputMaybe<ModelIdInput>;
  colonyReputationPercentage?: InputMaybe<ModelFloatInput>;
  contributorAddress?: InputMaybe<ModelIdInput>;
  hasPermissions?: InputMaybe<ModelBooleanInput>;
  hasReputation?: InputMaybe<ModelBooleanInput>;
  isVerified?: InputMaybe<ModelBooleanInput>;
  isWatching?: InputMaybe<ModelBooleanInput>;
  not?: InputMaybe<ModelColonyContributorConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyContributorConditionInput>>>;
  type?: InputMaybe<ModelContributorTypeInput>;
};

export type ModelColonyContributorConnection = {
  __typename?: 'ModelColonyContributorConnection';
  items: Array<Maybe<ColonyContributor>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelColonyContributorFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelColonyContributorFilterInput>>>;
  colonyAddress?: InputMaybe<ModelIdInput>;
  colonyReputationPercentage?: InputMaybe<ModelFloatInput>;
  contributorAddress?: InputMaybe<ModelIdInput>;
  hasPermissions?: InputMaybe<ModelBooleanInput>;
  hasReputation?: InputMaybe<ModelBooleanInput>;
  id?: InputMaybe<ModelIdInput>;
  isVerified?: InputMaybe<ModelBooleanInput>;
  isWatching?: InputMaybe<ModelBooleanInput>;
  not?: InputMaybe<ModelColonyContributorFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyContributorFilterInput>>>;
  type?: InputMaybe<ModelContributorTypeInput>;
};

export type ModelColonyDecisionConditionInput = {
  actionId?: InputMaybe<ModelIdInput>;
  and?: InputMaybe<Array<InputMaybe<ModelColonyDecisionConditionInput>>>;
  colonyAddress?: InputMaybe<ModelStringInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  motionDomainId?: InputMaybe<ModelIntInput>;
  not?: InputMaybe<ModelColonyDecisionConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyDecisionConditionInput>>>;
  showInDecisionsList?: InputMaybe<ModelBooleanInput>;
  title?: InputMaybe<ModelStringInput>;
  walletAddress?: InputMaybe<ModelStringInput>;
};

export type ModelColonyDecisionConnection = {
  __typename?: 'ModelColonyDecisionConnection';
  items: Array<Maybe<ColonyDecision>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelColonyDecisionFilterInput = {
  actionId?: InputMaybe<ModelIdInput>;
  and?: InputMaybe<Array<InputMaybe<ModelColonyDecisionFilterInput>>>;
  colonyAddress?: InputMaybe<ModelStringInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  motionDomainId?: InputMaybe<ModelIntInput>;
  not?: InputMaybe<ModelColonyDecisionFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyDecisionFilterInput>>>;
  showInDecisionsList?: InputMaybe<ModelBooleanInput>;
  title?: InputMaybe<ModelStringInput>;
  walletAddress?: InputMaybe<ModelStringInput>;
};

export type ModelColonyExtensionConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelColonyExtensionConditionInput>>>;
  colonyId?: InputMaybe<ModelIdInput>;
  hash?: InputMaybe<ModelStringInput>;
  installedAt?: InputMaybe<ModelIntInput>;
  installedBy?: InputMaybe<ModelStringInput>;
  isDeleted?: InputMaybe<ModelBooleanInput>;
  isDeprecated?: InputMaybe<ModelBooleanInput>;
  isInitialized?: InputMaybe<ModelBooleanInput>;
  not?: InputMaybe<ModelColonyExtensionConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyExtensionConditionInput>>>;
  version?: InputMaybe<ModelIntInput>;
};

export type ModelColonyExtensionConnection = {
  __typename?: 'ModelColonyExtensionConnection';
  items: Array<Maybe<ColonyExtension>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelColonyExtensionFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelColonyExtensionFilterInput>>>;
  colonyId?: InputMaybe<ModelIdInput>;
  hash?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  installedAt?: InputMaybe<ModelIntInput>;
  installedBy?: InputMaybe<ModelStringInput>;
  isDeleted?: InputMaybe<ModelBooleanInput>;
  isDeprecated?: InputMaybe<ModelBooleanInput>;
  isInitialized?: InputMaybe<ModelBooleanInput>;
  not?: InputMaybe<ModelColonyExtensionFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyExtensionFilterInput>>>;
  version?: InputMaybe<ModelIntInput>;
};

export type ModelColonyFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelColonyFilterInput>>>;
  colonyMemberInviteCode?: InputMaybe<ModelIdInput>;
  expendituresGlobalClaimDelay?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  lastUpdatedContributorsWithReputation?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  nativeTokenId?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelColonyFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyFilterInput>>>;
  private?: InputMaybe<ModelBooleanInput>;
  reputation?: InputMaybe<ModelStringInput>;
  type?: InputMaybe<ModelColonyTypeInput>;
  version?: InputMaybe<ModelIntInput>;
};

export type ModelColonyFundsClaimConditionInput = {
  amount?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelColonyFundsClaimConditionInput>>>;
  colonyFundsClaimTokenId?: InputMaybe<ModelIdInput>;
  colonyFundsClaimsId?: InputMaybe<ModelIdInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  createdAtBlock?: InputMaybe<ModelIntInput>;
  isClaimed?: InputMaybe<ModelBooleanInput>;
  not?: InputMaybe<ModelColonyFundsClaimConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyFundsClaimConditionInput>>>;
};

export type ModelColonyFundsClaimConnection = {
  __typename?: 'ModelColonyFundsClaimConnection';
  items: Array<Maybe<ColonyFundsClaim>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelColonyFundsClaimFilterInput = {
  amount?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelColonyFundsClaimFilterInput>>>;
  colonyFundsClaimTokenId?: InputMaybe<ModelIdInput>;
  colonyFundsClaimsId?: InputMaybe<ModelIdInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  createdAtBlock?: InputMaybe<ModelIntInput>;
  id?: InputMaybe<ModelIdInput>;
  isClaimed?: InputMaybe<ModelBooleanInput>;
  not?: InputMaybe<ModelColonyFundsClaimFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyFundsClaimFilterInput>>>;
};

export type ModelColonyHistoricRoleConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelColonyHistoricRoleConditionInput>>>;
  blockNumber?: InputMaybe<ModelIntInput>;
  colonyId?: InputMaybe<ModelIdInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  domainId?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelColonyHistoricRoleConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyHistoricRoleConditionInput>>>;
  role_0?: InputMaybe<ModelBooleanInput>;
  role_1?: InputMaybe<ModelBooleanInput>;
  role_2?: InputMaybe<ModelBooleanInput>;
  role_3?: InputMaybe<ModelBooleanInput>;
  role_5?: InputMaybe<ModelBooleanInput>;
  role_6?: InputMaybe<ModelBooleanInput>;
  targetAddress?: InputMaybe<ModelIdInput>;
  type?: InputMaybe<ModelStringInput>;
};

export type ModelColonyHistoricRoleConnection = {
  __typename?: 'ModelColonyHistoricRoleConnection';
  items: Array<Maybe<ColonyHistoricRole>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelColonyHistoricRoleFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelColonyHistoricRoleFilterInput>>>;
  blockNumber?: InputMaybe<ModelIntInput>;
  colonyId?: InputMaybe<ModelIdInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  domainId?: InputMaybe<ModelIdInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelColonyHistoricRoleFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyHistoricRoleFilterInput>>>;
  role_0?: InputMaybe<ModelBooleanInput>;
  role_1?: InputMaybe<ModelBooleanInput>;
  role_2?: InputMaybe<ModelBooleanInput>;
  role_3?: InputMaybe<ModelBooleanInput>;
  role_5?: InputMaybe<ModelBooleanInput>;
  role_6?: InputMaybe<ModelBooleanInput>;
  targetAddress?: InputMaybe<ModelIdInput>;
  type?: InputMaybe<ModelStringInput>;
};

export type ModelColonyMemberInviteConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelColonyMemberInviteConditionInput>>>;
  colonyId?: InputMaybe<ModelIdInput>;
  invitesRemaining?: InputMaybe<ModelIntInput>;
  not?: InputMaybe<ModelColonyMemberInviteConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyMemberInviteConditionInput>>>;
};

export type ModelColonyMemberInviteConnection = {
  __typename?: 'ModelColonyMemberInviteConnection';
  items: Array<Maybe<ColonyMemberInvite>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelColonyMemberInviteFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelColonyMemberInviteFilterInput>>>;
  colonyId?: InputMaybe<ModelIdInput>;
  id?: InputMaybe<ModelIdInput>;
  invitesRemaining?: InputMaybe<ModelIntInput>;
  not?: InputMaybe<ModelColonyMemberInviteFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyMemberInviteFilterInput>>>;
};

export type ModelColonyMetadataConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelColonyMetadataConditionInput>>>;
  avatar?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  displayName?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelColonyMetadataConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyMetadataConditionInput>>>;
  thumbnail?: InputMaybe<ModelStringInput>;
};

export type ModelColonyMetadataConnection = {
  __typename?: 'ModelColonyMetadataConnection';
  items: Array<Maybe<ColonyMetadata>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelColonyMetadataFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelColonyMetadataFilterInput>>>;
  avatar?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  displayName?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelColonyMetadataFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyMetadataFilterInput>>>;
  thumbnail?: InputMaybe<ModelStringInput>;
};

export type ModelColonyMotionConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelColonyMotionConditionInput>>>;
  createdBy?: InputMaybe<ModelStringInput>;
  expenditureId?: InputMaybe<ModelIdInput>;
  expenditureSlotId?: InputMaybe<ModelIntInput>;
  gasEstimate?: InputMaybe<ModelStringInput>;
  hasObjection?: InputMaybe<ModelBooleanInput>;
  isDecision?: InputMaybe<ModelBooleanInput>;
  isFinalized?: InputMaybe<ModelBooleanInput>;
  motionDomainId?: InputMaybe<ModelIdInput>;
  nativeMotionDomainId?: InputMaybe<ModelStringInput>;
  nativeMotionId?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelColonyMotionConditionInput>;
  objectionAnnotationId?: InputMaybe<ModelIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyMotionConditionInput>>>;
  remainingStakes?: InputMaybe<ModelStringInput>;
  repSubmitted?: InputMaybe<ModelStringInput>;
  requiredStake?: InputMaybe<ModelStringInput>;
  skillRep?: InputMaybe<ModelStringInput>;
  transactionHash?: InputMaybe<ModelIdInput>;
  userMinStake?: InputMaybe<ModelStringInput>;
};

export type ModelColonyMotionConnection = {
  __typename?: 'ModelColonyMotionConnection';
  items: Array<Maybe<ColonyMotion>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelColonyMotionFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelColonyMotionFilterInput>>>;
  createdBy?: InputMaybe<ModelStringInput>;
  expenditureId?: InputMaybe<ModelIdInput>;
  expenditureSlotId?: InputMaybe<ModelIntInput>;
  gasEstimate?: InputMaybe<ModelStringInput>;
  hasObjection?: InputMaybe<ModelBooleanInput>;
  id?: InputMaybe<ModelIdInput>;
  isDecision?: InputMaybe<ModelBooleanInput>;
  isFinalized?: InputMaybe<ModelBooleanInput>;
  motionDomainId?: InputMaybe<ModelIdInput>;
  nativeMotionDomainId?: InputMaybe<ModelStringInput>;
  nativeMotionId?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelColonyMotionFilterInput>;
  objectionAnnotationId?: InputMaybe<ModelIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyMotionFilterInput>>>;
  remainingStakes?: InputMaybe<ModelStringInput>;
  repSubmitted?: InputMaybe<ModelStringInput>;
  requiredStake?: InputMaybe<ModelStringInput>;
  skillRep?: InputMaybe<ModelStringInput>;
  transactionHash?: InputMaybe<ModelIdInput>;
  userMinStake?: InputMaybe<ModelStringInput>;
};

export type ModelColonyRoleConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelColonyRoleConditionInput>>>;
  colonyAddress?: InputMaybe<ModelIdInput>;
  colonyRolesId?: InputMaybe<ModelIdInput>;
  domainId?: InputMaybe<ModelIdInput>;
  latestBlock?: InputMaybe<ModelIntInput>;
  not?: InputMaybe<ModelColonyRoleConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyRoleConditionInput>>>;
  role_0?: InputMaybe<ModelBooleanInput>;
  role_1?: InputMaybe<ModelBooleanInput>;
  role_2?: InputMaybe<ModelBooleanInput>;
  role_3?: InputMaybe<ModelBooleanInput>;
  role_5?: InputMaybe<ModelBooleanInput>;
  role_6?: InputMaybe<ModelBooleanInput>;
  targetAddress?: InputMaybe<ModelIdInput>;
};

export type ModelColonyRoleConnection = {
  __typename?: 'ModelColonyRoleConnection';
  items: Array<Maybe<ColonyRole>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelColonyRoleFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelColonyRoleFilterInput>>>;
  colonyAddress?: InputMaybe<ModelIdInput>;
  colonyRolesId?: InputMaybe<ModelIdInput>;
  domainId?: InputMaybe<ModelIdInput>;
  id?: InputMaybe<ModelIdInput>;
  latestBlock?: InputMaybe<ModelIntInput>;
  not?: InputMaybe<ModelColonyRoleFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyRoleFilterInput>>>;
  role_0?: InputMaybe<ModelBooleanInput>;
  role_1?: InputMaybe<ModelBooleanInput>;
  role_2?: InputMaybe<ModelBooleanInput>;
  role_3?: InputMaybe<ModelBooleanInput>;
  role_5?: InputMaybe<ModelBooleanInput>;
  role_6?: InputMaybe<ModelBooleanInput>;
  targetAddress?: InputMaybe<ModelIdInput>;
};

export type ModelColonyStakeConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelColonyStakeConditionInput>>>;
  colonyId?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelColonyStakeConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyStakeConditionInput>>>;
  totalAmount?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelColonyStakeConnection = {
  __typename?: 'ModelColonyStakeConnection';
  items: Array<Maybe<ColonyStake>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelColonyStakeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelColonyStakeFilterInput>>>;
  colonyId?: InputMaybe<ModelIdInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelColonyStakeFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyStakeFilterInput>>>;
  totalAmount?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelColonyTokensConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelColonyTokensConditionInput>>>;
  colonyID?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelColonyTokensConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyTokensConditionInput>>>;
  tokenID?: InputMaybe<ModelIdInput>;
};

export type ModelColonyTokensConnection = {
  __typename?: 'ModelColonyTokensConnection';
  items: Array<Maybe<ColonyTokens>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelColonyTokensFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelColonyTokensFilterInput>>>;
  colonyID?: InputMaybe<ModelIdInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelColonyTokensFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelColonyTokensFilterInput>>>;
  tokenID?: InputMaybe<ModelIdInput>;
};

export type ModelColonyTypeInput = {
  eq?: InputMaybe<ColonyType>;
  ne?: InputMaybe<ColonyType>;
};

export type ModelContractEventConditionInput = {
  agent?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelContractEventConditionInput>>>;
  contractEventColonyId?: InputMaybe<ModelIdInput>;
  contractEventDomainId?: InputMaybe<ModelIdInput>;
  contractEventTokenId?: InputMaybe<ModelIdInput>;
  contractEventUserId?: InputMaybe<ModelIdInput>;
  encodedArguments?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelContractEventConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelContractEventConditionInput>>>;
  signature?: InputMaybe<ModelStringInput>;
  target?: InputMaybe<ModelStringInput>;
};

export type ModelContractEventConnection = {
  __typename?: 'ModelContractEventConnection';
  items: Array<Maybe<ContractEvent>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelContractEventFilterInput = {
  agent?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelContractEventFilterInput>>>;
  contractEventColonyId?: InputMaybe<ModelIdInput>;
  contractEventDomainId?: InputMaybe<ModelIdInput>;
  contractEventTokenId?: InputMaybe<ModelIdInput>;
  contractEventUserId?: InputMaybe<ModelIdInput>;
  encodedArguments?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelContractEventFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelContractEventFilterInput>>>;
  signature?: InputMaybe<ModelStringInput>;
  target?: InputMaybe<ModelStringInput>;
};

export type ModelContributorReputationConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelContributorReputationConditionInput>>>;
  colonyAddress?: InputMaybe<ModelIdInput>;
  contributorAddress?: InputMaybe<ModelIdInput>;
  domainId?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelContributorReputationConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelContributorReputationConditionInput>>>;
  reputationPercentage?: InputMaybe<ModelFloatInput>;
  reputationRaw?: InputMaybe<ModelStringInput>;
};

export type ModelContributorReputationConnection = {
  __typename?: 'ModelContributorReputationConnection';
  items: Array<Maybe<ContributorReputation>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelContributorReputationFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelContributorReputationFilterInput>>>;
  colonyAddress?: InputMaybe<ModelIdInput>;
  contributorAddress?: InputMaybe<ModelIdInput>;
  domainId?: InputMaybe<ModelIdInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelContributorReputationFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelContributorReputationFilterInput>>>;
  reputationPercentage?: InputMaybe<ModelFloatInput>;
  reputationRaw?: InputMaybe<ModelStringInput>;
};

export type ModelContributorTypeInput = {
  eq?: InputMaybe<ContributorType>;
  ne?: InputMaybe<ContributorType>;
};

export type ModelCurrentNetworkInverseFeeConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelCurrentNetworkInverseFeeConditionInput>>>;
  inverseFee?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelCurrentNetworkInverseFeeConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelCurrentNetworkInverseFeeConditionInput>>>;
};

export type ModelCurrentNetworkInverseFeeConnection = {
  __typename?: 'ModelCurrentNetworkInverseFeeConnection';
  items: Array<Maybe<CurrentNetworkInverseFee>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelCurrentNetworkInverseFeeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelCurrentNetworkInverseFeeFilterInput>>>;
  id?: InputMaybe<ModelIdInput>;
  inverseFee?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelCurrentNetworkInverseFeeFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelCurrentNetworkInverseFeeFilterInput>>>;
};

export type ModelCurrentVersionConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelCurrentVersionConditionInput>>>;
  key?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelCurrentVersionConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelCurrentVersionConditionInput>>>;
  version?: InputMaybe<ModelIntInput>;
};

export type ModelCurrentVersionConnection = {
  __typename?: 'ModelCurrentVersionConnection';
  items: Array<Maybe<CurrentVersion>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelCurrentVersionFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelCurrentVersionFilterInput>>>;
  id?: InputMaybe<ModelIdInput>;
  key?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelCurrentVersionFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelCurrentVersionFilterInput>>>;
  version?: InputMaybe<ModelIntInput>;
};

export type ModelDomainColorInput = {
  eq?: InputMaybe<DomainColor>;
  ne?: InputMaybe<DomainColor>;
};

export type ModelDomainConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelDomainConditionInput>>>;
  colonyId?: InputMaybe<ModelIdInput>;
  isRoot?: InputMaybe<ModelBooleanInput>;
  nativeFundingPotId?: InputMaybe<ModelIntInput>;
  nativeId?: InputMaybe<ModelIntInput>;
  nativeSkillId?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelDomainConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelDomainConditionInput>>>;
  reputation?: InputMaybe<ModelStringInput>;
  reputationPercentage?: InputMaybe<ModelStringInput>;
};

export type ModelDomainConnection = {
  __typename?: 'ModelDomainConnection';
  items: Array<Maybe<Domain>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelDomainFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelDomainFilterInput>>>;
  colonyId?: InputMaybe<ModelIdInput>;
  id?: InputMaybe<ModelIdInput>;
  isRoot?: InputMaybe<ModelBooleanInput>;
  nativeFundingPotId?: InputMaybe<ModelIntInput>;
  nativeId?: InputMaybe<ModelIntInput>;
  nativeSkillId?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelDomainFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelDomainFilterInput>>>;
  reputation?: InputMaybe<ModelStringInput>;
  reputationPercentage?: InputMaybe<ModelStringInput>;
};

export type ModelDomainMetadataConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelDomainMetadataConditionInput>>>;
  color?: InputMaybe<ModelDomainColorInput>;
  description?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelDomainMetadataConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelDomainMetadataConditionInput>>>;
};

export type ModelDomainMetadataConnection = {
  __typename?: 'ModelDomainMetadataConnection';
  items: Array<Maybe<DomainMetadata>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelDomainMetadataFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelDomainMetadataFilterInput>>>;
  color?: InputMaybe<ModelDomainColorInput>;
  description?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelDomainMetadataFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelDomainMetadataFilterInput>>>;
};

export type ModelExpenditureConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelExpenditureConditionInput>>>;
  colonyId?: InputMaybe<ModelIdInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  finalizedAt?: InputMaybe<ModelIntInput>;
  firstEditTransactionHash?: InputMaybe<ModelStringInput>;
  isStaked?: InputMaybe<ModelBooleanInput>;
  nativeDomainId?: InputMaybe<ModelIntInput>;
  nativeFundingPotId?: InputMaybe<ModelIntInput>;
  nativeId?: InputMaybe<ModelIntInput>;
  not?: InputMaybe<ModelExpenditureConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelExpenditureConditionInput>>>;
  ownerAddress?: InputMaybe<ModelIdInput>;
  status?: InputMaybe<ModelExpenditureStatusInput>;
  type?: InputMaybe<ModelExpenditureTypeInput>;
  userStakeId?: InputMaybe<ModelIdInput>;
};

export type ModelExpenditureConnection = {
  __typename?: 'ModelExpenditureConnection';
  items: Array<Maybe<Expenditure>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelExpenditureFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelExpenditureFilterInput>>>;
  colonyId?: InputMaybe<ModelIdInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  finalizedAt?: InputMaybe<ModelIntInput>;
  firstEditTransactionHash?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  isStaked?: InputMaybe<ModelBooleanInput>;
  nativeDomainId?: InputMaybe<ModelIntInput>;
  nativeFundingPotId?: InputMaybe<ModelIntInput>;
  nativeId?: InputMaybe<ModelIntInput>;
  not?: InputMaybe<ModelExpenditureFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelExpenditureFilterInput>>>;
  ownerAddress?: InputMaybe<ModelIdInput>;
  status?: InputMaybe<ModelExpenditureStatusInput>;
  type?: InputMaybe<ModelExpenditureTypeInput>;
  userStakeId?: InputMaybe<ModelIdInput>;
};

export type ModelExpenditureMetadataConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelExpenditureMetadataConditionInput>>>;
  fundFromDomainNativeId?: InputMaybe<ModelIntInput>;
  not?: InputMaybe<ModelExpenditureMetadataConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelExpenditureMetadataConditionInput>>>;
};

export type ModelExpenditureMetadataConnection = {
  __typename?: 'ModelExpenditureMetadataConnection';
  items: Array<Maybe<ExpenditureMetadata>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelExpenditureMetadataFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelExpenditureMetadataFilterInput>>>;
  fundFromDomainNativeId?: InputMaybe<ModelIntInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelExpenditureMetadataFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelExpenditureMetadataFilterInput>>>;
};

export type ModelExpenditureStatusInput = {
  eq?: InputMaybe<ExpenditureStatus>;
  ne?: InputMaybe<ExpenditureStatus>;
};

export type ModelExpenditureTypeInput = {
  eq?: InputMaybe<ExpenditureType>;
  ne?: InputMaybe<ExpenditureType>;
};

export type ModelExtensionInstallationsCountConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelExtensionInstallationsCountConditionInput>>>;
  not?: InputMaybe<ModelExtensionInstallationsCountConditionInput>;
  oneTxPayment?: InputMaybe<ModelIntInput>;
  or?: InputMaybe<Array<InputMaybe<ModelExtensionInstallationsCountConditionInput>>>;
  reputationWeighted?: InputMaybe<ModelIntInput>;
  stagedExpenditure?: InputMaybe<ModelIntInput>;
  stakedExpenditure?: InputMaybe<ModelIntInput>;
  streamingPayments?: InputMaybe<ModelIntInput>;
};

export type ModelExtensionInstallationsCountConnection = {
  __typename?: 'ModelExtensionInstallationsCountConnection';
  items: Array<Maybe<ExtensionInstallationsCount>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelExtensionInstallationsCountFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelExtensionInstallationsCountFilterInput>>>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelExtensionInstallationsCountFilterInput>;
  oneTxPayment?: InputMaybe<ModelIntInput>;
  or?: InputMaybe<Array<InputMaybe<ModelExtensionInstallationsCountFilterInput>>>;
  reputationWeighted?: InputMaybe<ModelIntInput>;
  stagedExpenditure?: InputMaybe<ModelIntInput>;
  stakedExpenditure?: InputMaybe<ModelIntInput>;
  streamingPayments?: InputMaybe<ModelIntInput>;
};

export type ModelFloatInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
};

export type ModelFloatKeyConditionInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
};

export type ModelIdInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelIdKeyConditionInput = {
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
};

export type ModelIngestorStatsConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelIngestorStatsConditionInput>>>;
  not?: InputMaybe<ModelIngestorStatsConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelIngestorStatsConditionInput>>>;
  value?: InputMaybe<ModelStringInput>;
};

export type ModelIngestorStatsConnection = {
  __typename?: 'ModelIngestorStatsConnection';
  items: Array<Maybe<IngestorStats>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelIngestorStatsFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelIngestorStatsFilterInput>>>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelIngestorStatsFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelIngestorStatsFilterInput>>>;
  value?: InputMaybe<ModelStringInput>;
};

export type ModelIntInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export type ModelIntKeyConditionInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
};

export type ModelMotionMessageConditionInput = {
  amount?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelMotionMessageConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  initiatorAddress?: InputMaybe<ModelIdInput>;
  messageKey?: InputMaybe<ModelStringInput>;
  motionId?: InputMaybe<ModelIdInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelMotionMessageConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelMotionMessageConditionInput>>>;
  vote?: InputMaybe<ModelStringInput>;
};

export type ModelMotionMessageConnection = {
  __typename?: 'ModelMotionMessageConnection';
  items: Array<Maybe<MotionMessage>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelMotionMessageFilterInput = {
  amount?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelMotionMessageFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  initiatorAddress?: InputMaybe<ModelIdInput>;
  messageKey?: InputMaybe<ModelStringInput>;
  motionId?: InputMaybe<ModelIdInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelMotionMessageFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelMotionMessageFilterInput>>>;
  vote?: InputMaybe<ModelStringInput>;
};

export type ModelPrivateBetaInviteCodeConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelPrivateBetaInviteCodeConditionInput>>>;
  not?: InputMaybe<ModelPrivateBetaInviteCodeConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelPrivateBetaInviteCodeConditionInput>>>;
  shareableInvites?: InputMaybe<ModelIntInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelPrivateBetaInviteCodeConnection = {
  __typename?: 'ModelPrivateBetaInviteCodeConnection';
  items: Array<Maybe<PrivateBetaInviteCode>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelPrivateBetaInviteCodeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelPrivateBetaInviteCodeFilterInput>>>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelPrivateBetaInviteCodeFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelPrivateBetaInviteCodeFilterInput>>>;
  shareableInvites?: InputMaybe<ModelIntInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelProfileConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelProfileConditionInput>>>;
  avatar?: InputMaybe<ModelStringInput>;
  bio?: InputMaybe<ModelStringInput>;
  displayName?: InputMaybe<ModelStringInput>;
  displayNameChanged?: InputMaybe<ModelStringInput>;
  email?: InputMaybe<ModelStringInput>;
  location?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelProfileConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProfileConditionInput>>>;
  preferredCurrency?: InputMaybe<ModelSupportedCurrenciesInput>;
  thumbnail?: InputMaybe<ModelStringInput>;
  website?: InputMaybe<ModelStringInput>;
};

export type ModelProfileConnection = {
  __typename?: 'ModelProfileConnection';
  items: Array<Maybe<Profile>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelProfileFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelProfileFilterInput>>>;
  avatar?: InputMaybe<ModelStringInput>;
  bio?: InputMaybe<ModelStringInput>;
  displayName?: InputMaybe<ModelStringInput>;
  displayNameChanged?: InputMaybe<ModelStringInput>;
  email?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  location?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelProfileFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProfileFilterInput>>>;
  preferredCurrency?: InputMaybe<ModelSupportedCurrenciesInput>;
  thumbnail?: InputMaybe<ModelStringInput>;
  website?: InputMaybe<ModelStringInput>;
};

export type ModelReputationMiningCycleMetadataConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelReputationMiningCycleMetadataConditionInput>>>;
  lastCompletedAt?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelReputationMiningCycleMetadataConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelReputationMiningCycleMetadataConditionInput>>>;
};

export type ModelReputationMiningCycleMetadataConnection = {
  __typename?: 'ModelReputationMiningCycleMetadataConnection';
  items: Array<Maybe<ReputationMiningCycleMetadata>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelReputationMiningCycleMetadataFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelReputationMiningCycleMetadataFilterInput>>>;
  id?: InputMaybe<ModelIdInput>;
  lastCompletedAt?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelReputationMiningCycleMetadataFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelReputationMiningCycleMetadataFilterInput>>>;
};

export type ModelSafeTransactionConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSafeTransactionConditionInput>>>;
  not?: InputMaybe<ModelSafeTransactionConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSafeTransactionConditionInput>>>;
};

export type ModelSafeTransactionConnection = {
  __typename?: 'ModelSafeTransactionConnection';
  items: Array<Maybe<SafeTransaction>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelSafeTransactionDataConditionInput = {
  abi?: InputMaybe<ModelStringInput>;
  amount?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSafeTransactionDataConditionInput>>>;
  contractFunction?: InputMaybe<ModelStringInput>;
  data?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelSafeTransactionDataConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSafeTransactionDataConditionInput>>>;
  rawAmount?: InputMaybe<ModelStringInput>;
  tokenAddress?: InputMaybe<ModelIdInput>;
  transactionHash?: InputMaybe<ModelIdInput>;
  transactionType?: InputMaybe<ModelSafeTransactionTypeInput>;
};

export type ModelSafeTransactionDataConnection = {
  __typename?: 'ModelSafeTransactionDataConnection';
  items: Array<Maybe<SafeTransactionData>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelSafeTransactionDataFilterInput = {
  abi?: InputMaybe<ModelStringInput>;
  amount?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSafeTransactionDataFilterInput>>>;
  contractFunction?: InputMaybe<ModelStringInput>;
  data?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelSafeTransactionDataFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSafeTransactionDataFilterInput>>>;
  rawAmount?: InputMaybe<ModelStringInput>;
  tokenAddress?: InputMaybe<ModelIdInput>;
  transactionHash?: InputMaybe<ModelIdInput>;
  transactionType?: InputMaybe<ModelSafeTransactionTypeInput>;
};

export type ModelSafeTransactionFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSafeTransactionFilterInput>>>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelSafeTransactionFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSafeTransactionFilterInput>>>;
};

export type ModelSafeTransactionTypeInput = {
  eq?: InputMaybe<SafeTransactionType>;
  ne?: InputMaybe<SafeTransactionType>;
};

export type ModelSizeInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type ModelStreamingPaymentConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelStreamingPaymentConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  endTime?: InputMaybe<ModelIntInput>;
  interval?: InputMaybe<ModelStringInput>;
  nativeDomainId?: InputMaybe<ModelIntInput>;
  nativeId?: InputMaybe<ModelIntInput>;
  not?: InputMaybe<ModelStreamingPaymentConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelStreamingPaymentConditionInput>>>;
  recipientAddress?: InputMaybe<ModelStringInput>;
  startTime?: InputMaybe<ModelIntInput>;
};

export type ModelStreamingPaymentConnection = {
  __typename?: 'ModelStreamingPaymentConnection';
  items: Array<Maybe<StreamingPayment>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelStreamingPaymentEndConditionInput = {
  eq?: InputMaybe<StreamingPaymentEndCondition>;
  ne?: InputMaybe<StreamingPaymentEndCondition>;
};

export type ModelStreamingPaymentFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelStreamingPaymentFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  endTime?: InputMaybe<ModelIntInput>;
  id?: InputMaybe<ModelIdInput>;
  interval?: InputMaybe<ModelStringInput>;
  nativeDomainId?: InputMaybe<ModelIntInput>;
  nativeId?: InputMaybe<ModelIntInput>;
  not?: InputMaybe<ModelStreamingPaymentFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelStreamingPaymentFilterInput>>>;
  recipientAddress?: InputMaybe<ModelStringInput>;
  startTime?: InputMaybe<ModelIntInput>;
};

export type ModelStreamingPaymentMetadataConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelStreamingPaymentMetadataConditionInput>>>;
  endCondition?: InputMaybe<ModelStreamingPaymentEndConditionInput>;
  limitAmount?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelStreamingPaymentMetadataConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelStreamingPaymentMetadataConditionInput>>>;
};

export type ModelStreamingPaymentMetadataConnection = {
  __typename?: 'ModelStreamingPaymentMetadataConnection';
  items: Array<Maybe<StreamingPaymentMetadata>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelStreamingPaymentMetadataFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelStreamingPaymentMetadataFilterInput>>>;
  endCondition?: InputMaybe<ModelStreamingPaymentEndConditionInput>;
  id?: InputMaybe<ModelIdInput>;
  limitAmount?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelStreamingPaymentMetadataFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelStreamingPaymentMetadataFilterInput>>>;
};

export type ModelStringInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelStringKeyConditionInput = {
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
};

export type ModelSubscriptionAnnotationFilterInput = {
  actionId?: InputMaybe<ModelSubscriptionIdInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionAnnotationFilterInput>>>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  ipfsHash?: InputMaybe<ModelSubscriptionStringInput>;
  message?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionAnnotationFilterInput>>>;
};

export type ModelSubscriptionBooleanInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export type ModelSubscriptionColonyActionFilterInput = {
  amount?: InputMaybe<ModelSubscriptionStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyActionFilterInput>>>;
  annotationId?: InputMaybe<ModelSubscriptionIdInput>;
  blockNumber?: InputMaybe<ModelSubscriptionIntInput>;
  colonyDecisionId?: InputMaybe<ModelSubscriptionIdInput>;
  colonyId?: InputMaybe<ModelSubscriptionIdInput>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  expenditureId?: InputMaybe<ModelSubscriptionIdInput>;
  fromDomainId?: InputMaybe<ModelSubscriptionIdInput>;
  fromPotId?: InputMaybe<ModelSubscriptionIntInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  individualEvents?: InputMaybe<ModelSubscriptionStringInput>;
  initiatorAddress?: InputMaybe<ModelSubscriptionIdInput>;
  isMotion?: InputMaybe<ModelSubscriptionBooleanInput>;
  isMotionFinalization?: InputMaybe<ModelSubscriptionBooleanInput>;
  members?: InputMaybe<ModelSubscriptionIdInput>;
  motionDomainId?: InputMaybe<ModelSubscriptionIntInput>;
  motionId?: InputMaybe<ModelSubscriptionIdInput>;
  networkFee?: InputMaybe<ModelSubscriptionStringInput>;
  newColonyVersion?: InputMaybe<ModelSubscriptionIntInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyActionFilterInput>>>;
  paymentId?: InputMaybe<ModelSubscriptionIntInput>;
  pendingColonyMetadataId?: InputMaybe<ModelSubscriptionIdInput>;
  pendingDomainMetadataId?: InputMaybe<ModelSubscriptionIdInput>;
  recipientAddress?: InputMaybe<ModelSubscriptionIdInput>;
  rootHash?: InputMaybe<ModelSubscriptionStringInput>;
  showInActionsList?: InputMaybe<ModelSubscriptionBooleanInput>;
  toDomainId?: InputMaybe<ModelSubscriptionIdInput>;
  toPotId?: InputMaybe<ModelSubscriptionIntInput>;
  tokenAddress?: InputMaybe<ModelSubscriptionIdInput>;
  type?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionColonyActionMetadataFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyActionMetadataFilterInput>>>;
  customTitle?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyActionMetadataFilterInput>>>;
};

export type ModelSubscriptionColonyContributorFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyContributorFilterInput>>>;
  colonyAddress?: InputMaybe<ModelSubscriptionIdInput>;
  colonyReputationPercentage?: InputMaybe<ModelSubscriptionFloatInput>;
  contributorAddress?: InputMaybe<ModelSubscriptionIdInput>;
  hasPermissions?: InputMaybe<ModelSubscriptionBooleanInput>;
  hasReputation?: InputMaybe<ModelSubscriptionBooleanInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  isVerified?: InputMaybe<ModelSubscriptionBooleanInput>;
  isWatching?: InputMaybe<ModelSubscriptionBooleanInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyContributorFilterInput>>>;
  type?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionColonyDecisionFilterInput = {
  actionId?: InputMaybe<ModelSubscriptionIdInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyDecisionFilterInput>>>;
  colonyAddress?: InputMaybe<ModelSubscriptionStringInput>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  description?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  motionDomainId?: InputMaybe<ModelSubscriptionIntInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyDecisionFilterInput>>>;
  showInDecisionsList?: InputMaybe<ModelSubscriptionBooleanInput>;
  title?: InputMaybe<ModelSubscriptionStringInput>;
  walletAddress?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionColonyExtensionFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyExtensionFilterInput>>>;
  colonyId?: InputMaybe<ModelSubscriptionIdInput>;
  hash?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  installedAt?: InputMaybe<ModelSubscriptionIntInput>;
  installedBy?: InputMaybe<ModelSubscriptionStringInput>;
  isDeleted?: InputMaybe<ModelSubscriptionBooleanInput>;
  isDeprecated?: InputMaybe<ModelSubscriptionBooleanInput>;
  isInitialized?: InputMaybe<ModelSubscriptionBooleanInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyExtensionFilterInput>>>;
  version?: InputMaybe<ModelSubscriptionIntInput>;
};

export type ModelSubscriptionColonyFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyFilterInput>>>;
  colonyMemberInviteCode?: InputMaybe<ModelSubscriptionIdInput>;
  expendituresGlobalClaimDelay?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  lastUpdatedContributorsWithReputation?: InputMaybe<ModelSubscriptionStringInput>;
  name?: InputMaybe<ModelSubscriptionStringInput>;
  nativeTokenId?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyFilterInput>>>;
  private?: InputMaybe<ModelSubscriptionBooleanInput>;
  reputation?: InputMaybe<ModelSubscriptionStringInput>;
  type?: InputMaybe<ModelSubscriptionStringInput>;
  version?: InputMaybe<ModelSubscriptionIntInput>;
};

export type ModelSubscriptionColonyFundsClaimFilterInput = {
  amount?: InputMaybe<ModelSubscriptionStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyFundsClaimFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  createdAtBlock?: InputMaybe<ModelSubscriptionIntInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  isClaimed?: InputMaybe<ModelSubscriptionBooleanInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyFundsClaimFilterInput>>>;
};

export type ModelSubscriptionColonyHistoricRoleFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyHistoricRoleFilterInput>>>;
  blockNumber?: InputMaybe<ModelSubscriptionIntInput>;
  colonyId?: InputMaybe<ModelSubscriptionIdInput>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  domainId?: InputMaybe<ModelSubscriptionIdInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyHistoricRoleFilterInput>>>;
  role_0?: InputMaybe<ModelSubscriptionBooleanInput>;
  role_1?: InputMaybe<ModelSubscriptionBooleanInput>;
  role_2?: InputMaybe<ModelSubscriptionBooleanInput>;
  role_3?: InputMaybe<ModelSubscriptionBooleanInput>;
  role_5?: InputMaybe<ModelSubscriptionBooleanInput>;
  role_6?: InputMaybe<ModelSubscriptionBooleanInput>;
  targetAddress?: InputMaybe<ModelSubscriptionIdInput>;
  type?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionColonyMemberInviteFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyMemberInviteFilterInput>>>;
  colonyId?: InputMaybe<ModelSubscriptionIdInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  invitesRemaining?: InputMaybe<ModelSubscriptionIntInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyMemberInviteFilterInput>>>;
};

export type ModelSubscriptionColonyMetadataFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyMetadataFilterInput>>>;
  avatar?: InputMaybe<ModelSubscriptionStringInput>;
  description?: InputMaybe<ModelSubscriptionStringInput>;
  displayName?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyMetadataFilterInput>>>;
  thumbnail?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionColonyMotionFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyMotionFilterInput>>>;
  createdBy?: InputMaybe<ModelSubscriptionStringInput>;
  expenditureId?: InputMaybe<ModelSubscriptionIdInput>;
  expenditureSlotId?: InputMaybe<ModelSubscriptionIntInput>;
  gasEstimate?: InputMaybe<ModelSubscriptionStringInput>;
  hasObjection?: InputMaybe<ModelSubscriptionBooleanInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  isDecision?: InputMaybe<ModelSubscriptionBooleanInput>;
  isFinalized?: InputMaybe<ModelSubscriptionBooleanInput>;
  motionDomainId?: InputMaybe<ModelSubscriptionIdInput>;
  nativeMotionDomainId?: InputMaybe<ModelSubscriptionStringInput>;
  nativeMotionId?: InputMaybe<ModelSubscriptionStringInput>;
  objectionAnnotationId?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyMotionFilterInput>>>;
  remainingStakes?: InputMaybe<ModelSubscriptionStringInput>;
  repSubmitted?: InputMaybe<ModelSubscriptionStringInput>;
  requiredStake?: InputMaybe<ModelSubscriptionStringInput>;
  skillRep?: InputMaybe<ModelSubscriptionStringInput>;
  transactionHash?: InputMaybe<ModelSubscriptionIdInput>;
  userMinStake?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionColonyRoleFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyRoleFilterInput>>>;
  colonyAddress?: InputMaybe<ModelSubscriptionIdInput>;
  domainId?: InputMaybe<ModelSubscriptionIdInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  latestBlock?: InputMaybe<ModelSubscriptionIntInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyRoleFilterInput>>>;
  role_0?: InputMaybe<ModelSubscriptionBooleanInput>;
  role_1?: InputMaybe<ModelSubscriptionBooleanInput>;
  role_2?: InputMaybe<ModelSubscriptionBooleanInput>;
  role_3?: InputMaybe<ModelSubscriptionBooleanInput>;
  role_5?: InputMaybe<ModelSubscriptionBooleanInput>;
  role_6?: InputMaybe<ModelSubscriptionBooleanInput>;
  targetAddress?: InputMaybe<ModelSubscriptionIdInput>;
};

export type ModelSubscriptionColonyStakeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyStakeFilterInput>>>;
  colonyId?: InputMaybe<ModelSubscriptionIdInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyStakeFilterInput>>>;
  totalAmount?: InputMaybe<ModelSubscriptionStringInput>;
  userId?: InputMaybe<ModelSubscriptionIdInput>;
};

export type ModelSubscriptionColonyTokensFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyTokensFilterInput>>>;
  colonyID?: InputMaybe<ModelSubscriptionIdInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionColonyTokensFilterInput>>>;
  tokenID?: InputMaybe<ModelSubscriptionIdInput>;
};

export type ModelSubscriptionContractEventFilterInput = {
  agent?: InputMaybe<ModelSubscriptionStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionContractEventFilterInput>>>;
  encodedArguments?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  name?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionContractEventFilterInput>>>;
  signature?: InputMaybe<ModelSubscriptionStringInput>;
  target?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionContributorReputationFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionContributorReputationFilterInput>>>;
  colonyAddress?: InputMaybe<ModelSubscriptionIdInput>;
  contributorAddress?: InputMaybe<ModelSubscriptionIdInput>;
  domainId?: InputMaybe<ModelSubscriptionIdInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionContributorReputationFilterInput>>>;
  reputationPercentage?: InputMaybe<ModelSubscriptionFloatInput>;
  reputationRaw?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionCurrentNetworkInverseFeeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionCurrentNetworkInverseFeeFilterInput>>>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  inverseFee?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionCurrentNetworkInverseFeeFilterInput>>>;
};

export type ModelSubscriptionCurrentVersionFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionCurrentVersionFilterInput>>>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  key?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionCurrentVersionFilterInput>>>;
  version?: InputMaybe<ModelSubscriptionIntInput>;
};

export type ModelSubscriptionDomainFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionDomainFilterInput>>>;
  colonyId?: InputMaybe<ModelSubscriptionIdInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  isRoot?: InputMaybe<ModelSubscriptionBooleanInput>;
  nativeFundingPotId?: InputMaybe<ModelSubscriptionIntInput>;
  nativeId?: InputMaybe<ModelSubscriptionIntInput>;
  nativeSkillId?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionDomainFilterInput>>>;
  reputation?: InputMaybe<ModelSubscriptionStringInput>;
  reputationPercentage?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionDomainMetadataFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionDomainMetadataFilterInput>>>;
  color?: InputMaybe<ModelSubscriptionStringInput>;
  description?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  name?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionDomainMetadataFilterInput>>>;
};

export type ModelSubscriptionExpenditureFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionExpenditureFilterInput>>>;
  colonyId?: InputMaybe<ModelSubscriptionIdInput>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  finalizedAt?: InputMaybe<ModelSubscriptionIntInput>;
  firstEditTransactionHash?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  isStaked?: InputMaybe<ModelSubscriptionBooleanInput>;
  nativeDomainId?: InputMaybe<ModelSubscriptionIntInput>;
  nativeFundingPotId?: InputMaybe<ModelSubscriptionIntInput>;
  nativeId?: InputMaybe<ModelSubscriptionIntInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionExpenditureFilterInput>>>;
  ownerAddress?: InputMaybe<ModelSubscriptionIdInput>;
  status?: InputMaybe<ModelSubscriptionStringInput>;
  type?: InputMaybe<ModelSubscriptionStringInput>;
  userStakeId?: InputMaybe<ModelSubscriptionIdInput>;
};

export type ModelSubscriptionExpenditureMetadataFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionExpenditureMetadataFilterInput>>>;
  fundFromDomainNativeId?: InputMaybe<ModelSubscriptionIntInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionExpenditureMetadataFilterInput>>>;
};

export type ModelSubscriptionExtensionInstallationsCountFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionExtensionInstallationsCountFilterInput>>>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  oneTxPayment?: InputMaybe<ModelSubscriptionIntInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionExtensionInstallationsCountFilterInput>>>;
  reputationWeighted?: InputMaybe<ModelSubscriptionIntInput>;
  stagedExpenditure?: InputMaybe<ModelSubscriptionIntInput>;
  stakedExpenditure?: InputMaybe<ModelSubscriptionIntInput>;
  streamingPayments?: InputMaybe<ModelSubscriptionIntInput>;
};

export type ModelSubscriptionFloatInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  eq?: InputMaybe<Scalars['Float']>;
  ge?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  le?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ModelSubscriptionIdInput = {
  beginsWith?: InputMaybe<Scalars['ID']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  ge?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  le?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  notContains?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ModelSubscriptionIngestorStatsFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionIngestorStatsFilterInput>>>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionIngestorStatsFilterInput>>>;
  value?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionIntInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  eq?: InputMaybe<Scalars['Int']>;
  ge?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  le?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ModelSubscriptionMotionMessageFilterInput = {
  amount?: InputMaybe<ModelSubscriptionStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionMotionMessageFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  initiatorAddress?: InputMaybe<ModelSubscriptionIdInput>;
  messageKey?: InputMaybe<ModelSubscriptionStringInput>;
  motionId?: InputMaybe<ModelSubscriptionIdInput>;
  name?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionMotionMessageFilterInput>>>;
  vote?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionPrivateBetaInviteCodeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionPrivateBetaInviteCodeFilterInput>>>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionPrivateBetaInviteCodeFilterInput>>>;
  shareableInvites?: InputMaybe<ModelSubscriptionIntInput>;
  userId?: InputMaybe<ModelSubscriptionIdInput>;
};

export type ModelSubscriptionProfileFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionProfileFilterInput>>>;
  avatar?: InputMaybe<ModelSubscriptionStringInput>;
  bio?: InputMaybe<ModelSubscriptionStringInput>;
  displayName?: InputMaybe<ModelSubscriptionStringInput>;
  displayNameChanged?: InputMaybe<ModelSubscriptionStringInput>;
  email?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  location?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionProfileFilterInput>>>;
  preferredCurrency?: InputMaybe<ModelSubscriptionStringInput>;
  thumbnail?: InputMaybe<ModelSubscriptionStringInput>;
  website?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionReputationMiningCycleMetadataFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionReputationMiningCycleMetadataFilterInput>>>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  lastCompletedAt?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionReputationMiningCycleMetadataFilterInput>>>;
};

export type ModelSubscriptionSafeTransactionDataFilterInput = {
  abi?: InputMaybe<ModelSubscriptionStringInput>;
  amount?: InputMaybe<ModelSubscriptionStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionSafeTransactionDataFilterInput>>>;
  contractFunction?: InputMaybe<ModelSubscriptionStringInput>;
  data?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionSafeTransactionDataFilterInput>>>;
  rawAmount?: InputMaybe<ModelSubscriptionStringInput>;
  tokenAddress?: InputMaybe<ModelSubscriptionIdInput>;
  transactionHash?: InputMaybe<ModelSubscriptionIdInput>;
  transactionType?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionSafeTransactionFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionSafeTransactionFilterInput>>>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionSafeTransactionFilterInput>>>;
};

export type ModelSubscriptionStreamingPaymentFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionStreamingPaymentFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  endTime?: InputMaybe<ModelSubscriptionIntInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  interval?: InputMaybe<ModelSubscriptionStringInput>;
  nativeDomainId?: InputMaybe<ModelSubscriptionIntInput>;
  nativeId?: InputMaybe<ModelSubscriptionIntInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionStreamingPaymentFilterInput>>>;
  recipientAddress?: InputMaybe<ModelSubscriptionStringInput>;
  startTime?: InputMaybe<ModelSubscriptionIntInput>;
};

export type ModelSubscriptionStreamingPaymentMetadataFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionStreamingPaymentMetadataFilterInput>>>;
  endCondition?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  limitAmount?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionStreamingPaymentMetadataFilterInput>>>;
};

export type ModelSubscriptionStringInput = {
  beginsWith?: InputMaybe<Scalars['String']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  ge?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  le?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ModelSubscriptionTokenFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionTokenFilterInput>>>;
  avatar?: InputMaybe<ModelSubscriptionStringInput>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  decimals?: InputMaybe<ModelSubscriptionIntInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  name?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionTokenFilterInput>>>;
  symbol?: InputMaybe<ModelSubscriptionStringInput>;
  thumbnail?: InputMaybe<ModelSubscriptionStringInput>;
  type?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionTransactionFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionTransactionFilterInput>>>;
  blockHash?: InputMaybe<ModelSubscriptionStringInput>;
  blockNumber?: InputMaybe<ModelSubscriptionIntInput>;
  colonyAddress?: InputMaybe<ModelSubscriptionIdInput>;
  context?: InputMaybe<ModelSubscriptionStringInput>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  deleted?: InputMaybe<ModelSubscriptionBooleanInput>;
  deployedContractAddress?: InputMaybe<ModelSubscriptionStringInput>;
  eventData?: InputMaybe<ModelSubscriptionStringInput>;
  from?: InputMaybe<ModelSubscriptionIdInput>;
  gasLimit?: InputMaybe<ModelSubscriptionStringInput>;
  gasPrice?: InputMaybe<ModelSubscriptionStringInput>;
  groupId?: InputMaybe<ModelSubscriptionIdInput>;
  hash?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  identifier?: InputMaybe<ModelSubscriptionStringInput>;
  loadingRelated?: InputMaybe<ModelSubscriptionBooleanInput>;
  metatransaction?: InputMaybe<ModelSubscriptionBooleanInput>;
  methodContext?: InputMaybe<ModelSubscriptionStringInput>;
  methodName?: InputMaybe<ModelSubscriptionStringInput>;
  options?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionTransactionFilterInput>>>;
  params?: InputMaybe<ModelSubscriptionStringInput>;
  receipt?: InputMaybe<ModelSubscriptionStringInput>;
  status?: InputMaybe<ModelSubscriptionStringInput>;
  title?: InputMaybe<ModelSubscriptionStringInput>;
  titleValues?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionUserFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionUserFilterInput>>>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionUserFilterInput>>>;
  profileId?: InputMaybe<ModelSubscriptionIdInput>;
};

export type ModelSubscriptionUserStakeFilterInput = {
  actionId?: InputMaybe<ModelSubscriptionIdInput>;
  amount?: InputMaybe<ModelSubscriptionStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionUserStakeFilterInput>>>;
  colonyAddress?: InputMaybe<ModelSubscriptionIdInput>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  isClaimed?: InputMaybe<ModelSubscriptionBooleanInput>;
  isForfeited?: InputMaybe<ModelSubscriptionBooleanInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionUserStakeFilterInput>>>;
  userAddress?: InputMaybe<ModelSubscriptionIdInput>;
};

export type ModelSubscriptionUserTokensFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionUserTokensFilterInput>>>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionUserTokensFilterInput>>>;
  tokenID?: InputMaybe<ModelSubscriptionIdInput>;
  userID?: InputMaybe<ModelSubscriptionIdInput>;
};

export type ModelSupportedCurrenciesInput = {
  eq?: InputMaybe<SupportedCurrencies>;
  ne?: InputMaybe<SupportedCurrencies>;
};

export type ModelTokenConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelTokenConditionInput>>>;
  avatar?: InputMaybe<ModelStringInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  decimals?: InputMaybe<ModelIntInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelTokenConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelTokenConditionInput>>>;
  symbol?: InputMaybe<ModelStringInput>;
  thumbnail?: InputMaybe<ModelStringInput>;
  type?: InputMaybe<ModelTokenTypeInput>;
};

export type ModelTokenConnection = {
  __typename?: 'ModelTokenConnection';
  items: Array<Maybe<Token>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelTokenFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelTokenFilterInput>>>;
  avatar?: InputMaybe<ModelStringInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  decimals?: InputMaybe<ModelIntInput>;
  id?: InputMaybe<ModelIdInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelTokenFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelTokenFilterInput>>>;
  symbol?: InputMaybe<ModelStringInput>;
  thumbnail?: InputMaybe<ModelStringInput>;
  type?: InputMaybe<ModelTokenTypeInput>;
};

export type ModelTokenTypeInput = {
  eq?: InputMaybe<TokenType>;
  ne?: InputMaybe<TokenType>;
};

export type ModelTransactionConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelTransactionConditionInput>>>;
  blockHash?: InputMaybe<ModelStringInput>;
  blockNumber?: InputMaybe<ModelIntInput>;
  colonyAddress?: InputMaybe<ModelIdInput>;
  context?: InputMaybe<ModelClientTypeInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  deleted?: InputMaybe<ModelBooleanInput>;
  deployedContractAddress?: InputMaybe<ModelStringInput>;
  eventData?: InputMaybe<ModelStringInput>;
  from?: InputMaybe<ModelIdInput>;
  gasLimit?: InputMaybe<ModelStringInput>;
  gasPrice?: InputMaybe<ModelStringInput>;
  groupId?: InputMaybe<ModelIdInput>;
  hash?: InputMaybe<ModelStringInput>;
  identifier?: InputMaybe<ModelStringInput>;
  loadingRelated?: InputMaybe<ModelBooleanInput>;
  metatransaction?: InputMaybe<ModelBooleanInput>;
  methodContext?: InputMaybe<ModelStringInput>;
  methodName?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelTransactionConditionInput>;
  options?: InputMaybe<ModelStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelTransactionConditionInput>>>;
  params?: InputMaybe<ModelStringInput>;
  receipt?: InputMaybe<ModelStringInput>;
  status?: InputMaybe<ModelTransactionStatusInput>;
  title?: InputMaybe<ModelStringInput>;
  titleValues?: InputMaybe<ModelStringInput>;
};

export type ModelTransactionConnection = {
  __typename?: 'ModelTransactionConnection';
  items: Array<Maybe<Transaction>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelTransactionFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelTransactionFilterInput>>>;
  blockHash?: InputMaybe<ModelStringInput>;
  blockNumber?: InputMaybe<ModelIntInput>;
  colonyAddress?: InputMaybe<ModelIdInput>;
  context?: InputMaybe<ModelClientTypeInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  deleted?: InputMaybe<ModelBooleanInput>;
  deployedContractAddress?: InputMaybe<ModelStringInput>;
  eventData?: InputMaybe<ModelStringInput>;
  from?: InputMaybe<ModelIdInput>;
  gasLimit?: InputMaybe<ModelStringInput>;
  gasPrice?: InputMaybe<ModelStringInput>;
  groupId?: InputMaybe<ModelIdInput>;
  hash?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  identifier?: InputMaybe<ModelStringInput>;
  loadingRelated?: InputMaybe<ModelBooleanInput>;
  metatransaction?: InputMaybe<ModelBooleanInput>;
  methodContext?: InputMaybe<ModelStringInput>;
  methodName?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelTransactionFilterInput>;
  options?: InputMaybe<ModelStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelTransactionFilterInput>>>;
  params?: InputMaybe<ModelStringInput>;
  receipt?: InputMaybe<ModelStringInput>;
  status?: InputMaybe<ModelTransactionStatusInput>;
  title?: InputMaybe<ModelStringInput>;
  titleValues?: InputMaybe<ModelStringInput>;
};

export type ModelTransactionStatusInput = {
  eq?: InputMaybe<TransactionStatus>;
  ne?: InputMaybe<TransactionStatus>;
};

export type ModelUserConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelUserConditionInput>>>;
  not?: InputMaybe<ModelUserConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelUserConditionInput>>>;
  profileId?: InputMaybe<ModelIdInput>;
  userPrivateBetaInviteCodeId?: InputMaybe<ModelIdInput>;
};

export type ModelUserConnection = {
  __typename?: 'ModelUserConnection';
  items: Array<Maybe<User>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelUserFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelUserFilterInput>>>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelUserFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelUserFilterInput>>>;
  profileId?: InputMaybe<ModelIdInput>;
  userPrivateBetaInviteCodeId?: InputMaybe<ModelIdInput>;
};

export type ModelUserStakeConditionInput = {
  actionId?: InputMaybe<ModelIdInput>;
  amount?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelUserStakeConditionInput>>>;
  colonyAddress?: InputMaybe<ModelIdInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  isClaimed?: InputMaybe<ModelBooleanInput>;
  isForfeited?: InputMaybe<ModelBooleanInput>;
  not?: InputMaybe<ModelUserStakeConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelUserStakeConditionInput>>>;
  userAddress?: InputMaybe<ModelIdInput>;
};

export type ModelUserStakeConnection = {
  __typename?: 'ModelUserStakeConnection';
  items: Array<Maybe<UserStake>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelUserStakeFilterInput = {
  actionId?: InputMaybe<ModelIdInput>;
  amount?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelUserStakeFilterInput>>>;
  colonyAddress?: InputMaybe<ModelIdInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  isClaimed?: InputMaybe<ModelBooleanInput>;
  isForfeited?: InputMaybe<ModelBooleanInput>;
  not?: InputMaybe<ModelUserStakeFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelUserStakeFilterInput>>>;
  userAddress?: InputMaybe<ModelIdInput>;
};

export type ModelUserTokensConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelUserTokensConditionInput>>>;
  not?: InputMaybe<ModelUserTokensConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelUserTokensConditionInput>>>;
  tokenID?: InputMaybe<ModelIdInput>;
  userID?: InputMaybe<ModelIdInput>;
};

export type ModelUserTokensConnection = {
  __typename?: 'ModelUserTokensConnection';
  items: Array<Maybe<UserTokens>>;
  nextToken?: Maybe<Scalars['String']>;
};

export type ModelUserTokensFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelUserTokensFilterInput>>>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelUserTokensFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelUserTokensFilterInput>>>;
  tokenID?: InputMaybe<ModelIdInput>;
  userID?: InputMaybe<ModelIdInput>;
};

/** A status update message for a motion (will appear in the motion's timeline) */
export type MotionMessage = {
  __typename?: 'MotionMessage';
  /** Token amount relevant to the status update (if applicable) */
  amount?: Maybe<Scalars['String']>;
  /** Timestamp of when the status update was created in the database */
  createdAt: Scalars['AWSDateTime'];
  id: Scalars['ID'];
  /**
   * Wallet address of the initiator of the status update
   * The zero address is used for messages that don't have an initiator (system messages)
   */
  initiatorAddress: Scalars['ID'];
  /** Extended user object for given initiatorAddress */
  initiatorUser?: Maybe<User>;
  /** Unique id for the message */
  messageKey: Scalars['String'];
  /** The internal database id of the motion */
  motionId: Scalars['ID'];
  /** Internal name of the status update event (e.g. `MotionCreated`, `MotionStaked`, etc.) */
  name: Scalars['String'];
  updatedAt: Scalars['AWSDateTime'];
  /** Cast vote attached to the status update (if applicable) */
  vote?: Maybe<Scalars['String']>;
};

/** Input used to create a motion status update message */
export type MotionMessageInput = {
  /** Token amount relevant to the status update (if applicable) */
  amount?: InputMaybe<Scalars['String']>;
  /**
   * Wallet address of the initiator of the status update
   * The zero address is used for messages that don't have an initiator (system messages)
   */
  initiatorAddress: Scalars['String'];
  /** Unique id for the message */
  messageKey: Scalars['String'];
  /** Internal name of the status update event (e.g. `MotionCreated`, `MotionStaked`, etc.) */
  name: Scalars['String'];
  /** Cast vote attached to the status update (if applicable) */
  vote?: InputMaybe<Scalars['String']>;
};

/** Staked sides of a motion */
export type MotionStakeValues = {
  __typename?: 'MotionStakeValues';
  /** Number of votes against this motion */
  nay: Scalars['String'];
  /** Number of votes for this motion */
  yay: Scalars['String'];
};

/** Input type for modifying the staked side of a motion */
export type MotionStakeValuesInput = {
  /** Number of votes against this motion */
  nay: Scalars['String'];
  /** Number of votes for this motion */
  yay: Scalars['String'];
};

/** Staked sides of a motion */
export type MotionStakes = {
  __typename?: 'MotionStakes';
  /** Values in percentage of the total stakes */
  percentage: MotionStakeValues;
  /** Absolute values denominated in the native token */
  raw: MotionStakeValues;
};

/** Input used to modify the staked sides of a motion */
export type MotionStakesInput = {
  /** Values in percentage of the total stakes */
  percentage: MotionStakeValuesInput;
  /** Absolute values denominated in the native token */
  raw: MotionStakeValuesInput;
};

/** Quick access flages to check the current state of a motion in its lifecycle */
export type MotionStateHistory = {
  __typename?: 'MotionStateHistory';
  /** The timestamp when all votes were revealed */
  allVotesRevealedAt?: Maybe<Scalars['AWSDateTime']>;
  /** The timestamp when all votes were submitted */
  allVotesSubmittedAt?: Maybe<Scalars['AWSDateTime']>;
  /** The timestamp when the motion ended (Passed or failed) */
  endedAt?: Maybe<Scalars['AWSDateTime']>;
  /** The timestamp when the motion was finalized */
  finalizedAt?: Maybe<Scalars['AWSDateTime']>;
  /** Whether the motion has failed */
  hasFailed: Scalars['Boolean'];
  /** Whether the motion has failed and cannot be finalized (e.g. if it doesn't get staked) */
  hasFailedNotFinalizable: Scalars['Boolean'];
  /** Whether the motion has passed */
  hasPassed: Scalars['Boolean'];
  /** Voting period is elapsed */
  hasVoted: Scalars['Boolean'];
  /** Motion is in reveal phase (votes are being revealed) */
  inRevealPhase: Scalars['Boolean'];
  /** The timestamp when the NAY side was fully staked */
  naySideFullyStakedAt?: Maybe<Scalars['AWSDateTime']>;
  /** The timestamp when the YAY side was fully staked */
  yaySideFullyStakedAt?: Maybe<Scalars['AWSDateTime']>;
};

/** Input used to change the current state of a motion */
export type MotionStateHistoryInput = {
  /** The timestamp when all votes were revealed */
  allVotesRevealedAt?: InputMaybe<Scalars['AWSDateTime']>;
  /** The timestamp when all votes were submitted */
  allVotesSubmittedAt?: InputMaybe<Scalars['AWSDateTime']>;
  /** The timestamp when the motion ended (Passed or failed) */
  endedAt?: InputMaybe<Scalars['AWSDateTime']>;
  /** The timestamp when the motion was finalized */
  finalizedAt?: InputMaybe<Scalars['AWSDateTime']>;
  /** Whether the motion has failed */
  hasFailed: Scalars['Boolean'];
  /** Whether the motion has failed and cannot be finalized (e.g. if it doesn't get staked) */
  hasFailedNotFinalizable: Scalars['Boolean'];
  /** Whether the motion has passed */
  hasPassed: Scalars['Boolean'];
  /** Voting period is elapsed */
  hasVoted: Scalars['Boolean'];
  /** Motion is in reveal phase (votes are being revealed) */
  inRevealPhase: Scalars['Boolean'];
  /** The timestamp when the NAY side was fully staked */
  naySideFullyStakedAt?: InputMaybe<Scalars['AWSDateTime']>;
  /** The timestamp when the YAY side was fully staked */
  yaySideFullyStakedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

/** Root mutation type */
export type Mutation = {
  __typename?: 'Mutation';
  createAnnotation?: Maybe<Annotation>;
  createColony?: Maybe<Colony>;
  createColonyAction?: Maybe<ColonyAction>;
  createColonyActionMetadata?: Maybe<ColonyActionMetadata>;
  createColonyContributor?: Maybe<ColonyContributor>;
  createColonyDecision?: Maybe<ColonyDecision>;
  /** Create temporary metadata entry for an upcoming colony (that will be created by the ingestor) */
  createColonyEtherealMetadata?: Maybe<ColonyMetadata>;
  createColonyExtension?: Maybe<ColonyExtension>;
  createColonyFundsClaim?: Maybe<ColonyFundsClaim>;
  createColonyHistoricRole?: Maybe<ColonyHistoricRole>;
  createColonyMemberInvite?: Maybe<ColonyMemberInvite>;
  createColonyMetadata?: Maybe<ColonyMetadata>;
  createColonyMotion?: Maybe<ColonyMotion>;
  createColonyRole?: Maybe<ColonyRole>;
  createColonyStake?: Maybe<ColonyStake>;
  createColonyTokens?: Maybe<ColonyTokens>;
  createContractEvent?: Maybe<ContractEvent>;
  createContributorReputation?: Maybe<ContributorReputation>;
  createCurrentNetworkInverseFee?: Maybe<CurrentNetworkInverseFee>;
  createCurrentVersion?: Maybe<CurrentVersion>;
  createDomain?: Maybe<Domain>;
  createDomainMetadata?: Maybe<DomainMetadata>;
  createExpenditure?: Maybe<Expenditure>;
  createExpenditureMetadata?: Maybe<ExpenditureMetadata>;
  createExtensionInstallationsCount?: Maybe<ExtensionInstallationsCount>;
  createIngestorStats?: Maybe<IngestorStats>;
  createMotionMessage?: Maybe<MotionMessage>;
  createPrivateBetaInviteCode?: Maybe<PrivateBetaInviteCode>;
  createProfile?: Maybe<Profile>;
  createReputationMiningCycleMetadata?: Maybe<ReputationMiningCycleMetadata>;
  createSafeTransaction?: Maybe<SafeTransaction>;
  createSafeTransactionData?: Maybe<SafeTransactionData>;
  createStreamingPayment?: Maybe<StreamingPayment>;
  createStreamingPaymentMetadata?: Maybe<StreamingPaymentMetadata>;
  createToken?: Maybe<Token>;
  createTransaction?: Maybe<Transaction>;
  /** Create a unique user within the Colony Network. Use this instead of the automatically generated `createUser` mutation */
  createUniqueUser?: Maybe<User>;
  createUser?: Maybe<User>;
  createUserStake?: Maybe<UserStake>;
  createUserTokens?: Maybe<UserTokens>;
  deleteAnnotation?: Maybe<Annotation>;
  deleteColony?: Maybe<Colony>;
  deleteColonyAction?: Maybe<ColonyAction>;
  deleteColonyActionMetadata?: Maybe<ColonyActionMetadata>;
  deleteColonyContributor?: Maybe<ColonyContributor>;
  deleteColonyDecision?: Maybe<ColonyDecision>;
  deleteColonyExtension?: Maybe<ColonyExtension>;
  deleteColonyFundsClaim?: Maybe<ColonyFundsClaim>;
  deleteColonyHistoricRole?: Maybe<ColonyHistoricRole>;
  deleteColonyMemberInvite?: Maybe<ColonyMemberInvite>;
  deleteColonyMetadata?: Maybe<ColonyMetadata>;
  deleteColonyMotion?: Maybe<ColonyMotion>;
  deleteColonyRole?: Maybe<ColonyRole>;
  deleteColonyStake?: Maybe<ColonyStake>;
  deleteColonyTokens?: Maybe<ColonyTokens>;
  deleteContractEvent?: Maybe<ContractEvent>;
  deleteContributorReputation?: Maybe<ContributorReputation>;
  deleteCurrentNetworkInverseFee?: Maybe<CurrentNetworkInverseFee>;
  deleteCurrentVersion?: Maybe<CurrentVersion>;
  deleteDomain?: Maybe<Domain>;
  deleteDomainMetadata?: Maybe<DomainMetadata>;
  deleteExpenditure?: Maybe<Expenditure>;
  deleteExpenditureMetadata?: Maybe<ExpenditureMetadata>;
  deleteExtensionInstallationsCount?: Maybe<ExtensionInstallationsCount>;
  deleteIngestorStats?: Maybe<IngestorStats>;
  deleteMotionMessage?: Maybe<MotionMessage>;
  deletePrivateBetaInviteCode?: Maybe<PrivateBetaInviteCode>;
  deleteProfile?: Maybe<Profile>;
  deleteReputationMiningCycleMetadata?: Maybe<ReputationMiningCycleMetadata>;
  deleteSafeTransaction?: Maybe<SafeTransaction>;
  deleteSafeTransactionData?: Maybe<SafeTransactionData>;
  deleteStreamingPayment?: Maybe<StreamingPayment>;
  deleteStreamingPaymentMetadata?: Maybe<StreamingPaymentMetadata>;
  deleteToken?: Maybe<Token>;
  deleteTransaction?: Maybe<Transaction>;
  deleteUser?: Maybe<User>;
  deleteUserStake?: Maybe<UserStake>;
  deleteUserTokens?: Maybe<UserTokens>;
  updateAnnotation?: Maybe<Annotation>;
  updateColony?: Maybe<Colony>;
  updateColonyAction?: Maybe<ColonyAction>;
  updateColonyActionMetadata?: Maybe<ColonyActionMetadata>;
  updateColonyContributor?: Maybe<ColonyContributor>;
  updateColonyDecision?: Maybe<ColonyDecision>;
  updateColonyExtension?: Maybe<ColonyExtension>;
  updateColonyFundsClaim?: Maybe<ColonyFundsClaim>;
  updateColonyHistoricRole?: Maybe<ColonyHistoricRole>;
  updateColonyMemberInvite?: Maybe<ColonyMemberInvite>;
  updateColonyMetadata?: Maybe<ColonyMetadata>;
  updateColonyMotion?: Maybe<ColonyMotion>;
  updateColonyRole?: Maybe<ColonyRole>;
  updateColonyStake?: Maybe<ColonyStake>;
  updateColonyTokens?: Maybe<ColonyTokens>;
  updateContractEvent?: Maybe<ContractEvent>;
  updateContributorReputation?: Maybe<ContributorReputation>;
  /** Update contributors with reputation in the database for a colony */
  updateContributorsWithReputation?: Maybe<Scalars['Boolean']>;
  updateCurrentNetworkInverseFee?: Maybe<CurrentNetworkInverseFee>;
  updateCurrentVersion?: Maybe<CurrentVersion>;
  updateDomain?: Maybe<Domain>;
  updateDomainMetadata?: Maybe<DomainMetadata>;
  updateExpenditure?: Maybe<Expenditure>;
  updateExpenditureMetadata?: Maybe<ExpenditureMetadata>;
  updateExtensionInstallationsCount?: Maybe<ExtensionInstallationsCount>;
  updateIngestorStats?: Maybe<IngestorStats>;
  updateMotionMessage?: Maybe<MotionMessage>;
  updatePrivateBetaInviteCode?: Maybe<PrivateBetaInviteCode>;
  updateProfile?: Maybe<Profile>;
  updateReputationMiningCycleMetadata?: Maybe<ReputationMiningCycleMetadata>;
  updateSafeTransaction?: Maybe<SafeTransaction>;
  updateSafeTransactionData?: Maybe<SafeTransactionData>;
  updateStreamingPayment?: Maybe<StreamingPayment>;
  updateStreamingPaymentMetadata?: Maybe<StreamingPaymentMetadata>;
  updateToken?: Maybe<Token>;
  updateTransaction?: Maybe<Transaction>;
  updateUser?: Maybe<User>;
  updateUserStake?: Maybe<UserStake>;
  updateUserTokens?: Maybe<UserTokens>;
  /** Validates the user invite code and adds the user as a colony contributor */
  validateUserInvite?: Maybe<Scalars['Boolean']>;
};


/** Root mutation type */
export type MutationCreateAnnotationArgs = {
  condition?: InputMaybe<ModelAnnotationConditionInput>;
  input: CreateAnnotationInput;
};


/** Root mutation type */
export type MutationCreateColonyArgs = {
  condition?: InputMaybe<ModelColonyConditionInput>;
  input: CreateColonyInput;
};


/** Root mutation type */
export type MutationCreateColonyActionArgs = {
  condition?: InputMaybe<ModelColonyActionConditionInput>;
  input: CreateColonyActionInput;
};


/** Root mutation type */
export type MutationCreateColonyActionMetadataArgs = {
  condition?: InputMaybe<ModelColonyActionMetadataConditionInput>;
  input: CreateColonyActionMetadataInput;
};


/** Root mutation type */
export type MutationCreateColonyContributorArgs = {
  condition?: InputMaybe<ModelColonyContributorConditionInput>;
  input: CreateColonyContributorInput;
};


/** Root mutation type */
export type MutationCreateColonyDecisionArgs = {
  condition?: InputMaybe<ModelColonyDecisionConditionInput>;
  input: CreateColonyDecisionInput;
};


/** Root mutation type */
export type MutationCreateColonyEtherealMetadataArgs = {
  input: CreateColonyEtherealMetadataInput;
};


/** Root mutation type */
export type MutationCreateColonyExtensionArgs = {
  condition?: InputMaybe<ModelColonyExtensionConditionInput>;
  input: CreateColonyExtensionInput;
};


/** Root mutation type */
export type MutationCreateColonyFundsClaimArgs = {
  condition?: InputMaybe<ModelColonyFundsClaimConditionInput>;
  input: CreateColonyFundsClaimInput;
};


/** Root mutation type */
export type MutationCreateColonyHistoricRoleArgs = {
  condition?: InputMaybe<ModelColonyHistoricRoleConditionInput>;
  input: CreateColonyHistoricRoleInput;
};


/** Root mutation type */
export type MutationCreateColonyMemberInviteArgs = {
  condition?: InputMaybe<ModelColonyMemberInviteConditionInput>;
  input: CreateColonyMemberInviteInput;
};


/** Root mutation type */
export type MutationCreateColonyMetadataArgs = {
  condition?: InputMaybe<ModelColonyMetadataConditionInput>;
  input: CreateColonyMetadataInput;
};


/** Root mutation type */
export type MutationCreateColonyMotionArgs = {
  condition?: InputMaybe<ModelColonyMotionConditionInput>;
  input: CreateColonyMotionInput;
};


/** Root mutation type */
export type MutationCreateColonyRoleArgs = {
  condition?: InputMaybe<ModelColonyRoleConditionInput>;
  input: CreateColonyRoleInput;
};


/** Root mutation type */
export type MutationCreateColonyStakeArgs = {
  condition?: InputMaybe<ModelColonyStakeConditionInput>;
  input: CreateColonyStakeInput;
};


/** Root mutation type */
export type MutationCreateColonyTokensArgs = {
  condition?: InputMaybe<ModelColonyTokensConditionInput>;
  input: CreateColonyTokensInput;
};


/** Root mutation type */
export type MutationCreateContractEventArgs = {
  condition?: InputMaybe<ModelContractEventConditionInput>;
  input: CreateContractEventInput;
};


/** Root mutation type */
export type MutationCreateContributorReputationArgs = {
  condition?: InputMaybe<ModelContributorReputationConditionInput>;
  input: CreateContributorReputationInput;
};


/** Root mutation type */
export type MutationCreateCurrentNetworkInverseFeeArgs = {
  condition?: InputMaybe<ModelCurrentNetworkInverseFeeConditionInput>;
  input: CreateCurrentNetworkInverseFeeInput;
};


/** Root mutation type */
export type MutationCreateCurrentVersionArgs = {
  condition?: InputMaybe<ModelCurrentVersionConditionInput>;
  input: CreateCurrentVersionInput;
};


/** Root mutation type */
export type MutationCreateDomainArgs = {
  condition?: InputMaybe<ModelDomainConditionInput>;
  input: CreateDomainInput;
};


/** Root mutation type */
export type MutationCreateDomainMetadataArgs = {
  condition?: InputMaybe<ModelDomainMetadataConditionInput>;
  input: CreateDomainMetadataInput;
};


/** Root mutation type */
export type MutationCreateExpenditureArgs = {
  condition?: InputMaybe<ModelExpenditureConditionInput>;
  input: CreateExpenditureInput;
};


/** Root mutation type */
export type MutationCreateExpenditureMetadataArgs = {
  condition?: InputMaybe<ModelExpenditureMetadataConditionInput>;
  input: CreateExpenditureMetadataInput;
};


/** Root mutation type */
export type MutationCreateExtensionInstallationsCountArgs = {
  condition?: InputMaybe<ModelExtensionInstallationsCountConditionInput>;
  input: CreateExtensionInstallationsCountInput;
};


/** Root mutation type */
export type MutationCreateIngestorStatsArgs = {
  condition?: InputMaybe<ModelIngestorStatsConditionInput>;
  input: CreateIngestorStatsInput;
};


/** Root mutation type */
export type MutationCreateMotionMessageArgs = {
  condition?: InputMaybe<ModelMotionMessageConditionInput>;
  input: CreateMotionMessageInput;
};


/** Root mutation type */
export type MutationCreatePrivateBetaInviteCodeArgs = {
  condition?: InputMaybe<ModelPrivateBetaInviteCodeConditionInput>;
  input: CreatePrivateBetaInviteCodeInput;
};


/** Root mutation type */
export type MutationCreateProfileArgs = {
  condition?: InputMaybe<ModelProfileConditionInput>;
  input: CreateProfileInput;
};


/** Root mutation type */
export type MutationCreateReputationMiningCycleMetadataArgs = {
  condition?: InputMaybe<ModelReputationMiningCycleMetadataConditionInput>;
  input: CreateReputationMiningCycleMetadataInput;
};


/** Root mutation type */
export type MutationCreateSafeTransactionArgs = {
  condition?: InputMaybe<ModelSafeTransactionConditionInput>;
  input: CreateSafeTransactionInput;
};


/** Root mutation type */
export type MutationCreateSafeTransactionDataArgs = {
  condition?: InputMaybe<ModelSafeTransactionDataConditionInput>;
  input: CreateSafeTransactionDataInput;
};


/** Root mutation type */
export type MutationCreateStreamingPaymentArgs = {
  condition?: InputMaybe<ModelStreamingPaymentConditionInput>;
  input: CreateStreamingPaymentInput;
};


/** Root mutation type */
export type MutationCreateStreamingPaymentMetadataArgs = {
  condition?: InputMaybe<ModelStreamingPaymentMetadataConditionInput>;
  input: CreateStreamingPaymentMetadataInput;
};


/** Root mutation type */
export type MutationCreateTokenArgs = {
  condition?: InputMaybe<ModelTokenConditionInput>;
  input: CreateTokenInput;
};


/** Root mutation type */
export type MutationCreateTransactionArgs = {
  condition?: InputMaybe<ModelTransactionConditionInput>;
  input: CreateTransactionInput;
};


/** Root mutation type */
export type MutationCreateUniqueUserArgs = {
  input?: InputMaybe<CreateUniqueUserInput>;
};


/** Root mutation type */
export type MutationCreateUserArgs = {
  condition?: InputMaybe<ModelUserConditionInput>;
  input: CreateUserInput;
};


/** Root mutation type */
export type MutationCreateUserStakeArgs = {
  condition?: InputMaybe<ModelUserStakeConditionInput>;
  input: CreateUserStakeInput;
};


/** Root mutation type */
export type MutationCreateUserTokensArgs = {
  condition?: InputMaybe<ModelUserTokensConditionInput>;
  input: CreateUserTokensInput;
};


/** Root mutation type */
export type MutationDeleteAnnotationArgs = {
  condition?: InputMaybe<ModelAnnotationConditionInput>;
  input: DeleteAnnotationInput;
};


/** Root mutation type */
export type MutationDeleteColonyArgs = {
  condition?: InputMaybe<ModelColonyConditionInput>;
  input: DeleteColonyInput;
};


/** Root mutation type */
export type MutationDeleteColonyActionArgs = {
  condition?: InputMaybe<ModelColonyActionConditionInput>;
  input: DeleteColonyActionInput;
};


/** Root mutation type */
export type MutationDeleteColonyActionMetadataArgs = {
  condition?: InputMaybe<ModelColonyActionMetadataConditionInput>;
  input: DeleteColonyActionMetadataInput;
};


/** Root mutation type */
export type MutationDeleteColonyContributorArgs = {
  condition?: InputMaybe<ModelColonyContributorConditionInput>;
  input: DeleteColonyContributorInput;
};


/** Root mutation type */
export type MutationDeleteColonyDecisionArgs = {
  condition?: InputMaybe<ModelColonyDecisionConditionInput>;
  input: DeleteColonyDecisionInput;
};


/** Root mutation type */
export type MutationDeleteColonyExtensionArgs = {
  condition?: InputMaybe<ModelColonyExtensionConditionInput>;
  input: DeleteColonyExtensionInput;
};


/** Root mutation type */
export type MutationDeleteColonyFundsClaimArgs = {
  condition?: InputMaybe<ModelColonyFundsClaimConditionInput>;
  input: DeleteColonyFundsClaimInput;
};


/** Root mutation type */
export type MutationDeleteColonyHistoricRoleArgs = {
  condition?: InputMaybe<ModelColonyHistoricRoleConditionInput>;
  input: DeleteColonyHistoricRoleInput;
};


/** Root mutation type */
export type MutationDeleteColonyMemberInviteArgs = {
  condition?: InputMaybe<ModelColonyMemberInviteConditionInput>;
  input: DeleteColonyMemberInviteInput;
};


/** Root mutation type */
export type MutationDeleteColonyMetadataArgs = {
  condition?: InputMaybe<ModelColonyMetadataConditionInput>;
  input: DeleteColonyMetadataInput;
};


/** Root mutation type */
export type MutationDeleteColonyMotionArgs = {
  condition?: InputMaybe<ModelColonyMotionConditionInput>;
  input: DeleteColonyMotionInput;
};


/** Root mutation type */
export type MutationDeleteColonyRoleArgs = {
  condition?: InputMaybe<ModelColonyRoleConditionInput>;
  input: DeleteColonyRoleInput;
};


/** Root mutation type */
export type MutationDeleteColonyStakeArgs = {
  condition?: InputMaybe<ModelColonyStakeConditionInput>;
  input: DeleteColonyStakeInput;
};


/** Root mutation type */
export type MutationDeleteColonyTokensArgs = {
  condition?: InputMaybe<ModelColonyTokensConditionInput>;
  input: DeleteColonyTokensInput;
};


/** Root mutation type */
export type MutationDeleteContractEventArgs = {
  condition?: InputMaybe<ModelContractEventConditionInput>;
  input: DeleteContractEventInput;
};


/** Root mutation type */
export type MutationDeleteContributorReputationArgs = {
  condition?: InputMaybe<ModelContributorReputationConditionInput>;
  input: DeleteContributorReputationInput;
};


/** Root mutation type */
export type MutationDeleteCurrentNetworkInverseFeeArgs = {
  condition?: InputMaybe<ModelCurrentNetworkInverseFeeConditionInput>;
  input: DeleteCurrentNetworkInverseFeeInput;
};


/** Root mutation type */
export type MutationDeleteCurrentVersionArgs = {
  condition?: InputMaybe<ModelCurrentVersionConditionInput>;
  input: DeleteCurrentVersionInput;
};


/** Root mutation type */
export type MutationDeleteDomainArgs = {
  condition?: InputMaybe<ModelDomainConditionInput>;
  input: DeleteDomainInput;
};


/** Root mutation type */
export type MutationDeleteDomainMetadataArgs = {
  condition?: InputMaybe<ModelDomainMetadataConditionInput>;
  input: DeleteDomainMetadataInput;
};


/** Root mutation type */
export type MutationDeleteExpenditureArgs = {
  condition?: InputMaybe<ModelExpenditureConditionInput>;
  input: DeleteExpenditureInput;
};


/** Root mutation type */
export type MutationDeleteExpenditureMetadataArgs = {
  condition?: InputMaybe<ModelExpenditureMetadataConditionInput>;
  input: DeleteExpenditureMetadataInput;
};


/** Root mutation type */
export type MutationDeleteExtensionInstallationsCountArgs = {
  condition?: InputMaybe<ModelExtensionInstallationsCountConditionInput>;
  input: DeleteExtensionInstallationsCountInput;
};


/** Root mutation type */
export type MutationDeleteIngestorStatsArgs = {
  condition?: InputMaybe<ModelIngestorStatsConditionInput>;
  input: DeleteIngestorStatsInput;
};


/** Root mutation type */
export type MutationDeleteMotionMessageArgs = {
  condition?: InputMaybe<ModelMotionMessageConditionInput>;
  input: DeleteMotionMessageInput;
};


/** Root mutation type */
export type MutationDeletePrivateBetaInviteCodeArgs = {
  condition?: InputMaybe<ModelPrivateBetaInviteCodeConditionInput>;
  input: DeletePrivateBetaInviteCodeInput;
};


/** Root mutation type */
export type MutationDeleteProfileArgs = {
  condition?: InputMaybe<ModelProfileConditionInput>;
  input: DeleteProfileInput;
};


/** Root mutation type */
export type MutationDeleteReputationMiningCycleMetadataArgs = {
  condition?: InputMaybe<ModelReputationMiningCycleMetadataConditionInput>;
  input: DeleteReputationMiningCycleMetadataInput;
};


/** Root mutation type */
export type MutationDeleteSafeTransactionArgs = {
  condition?: InputMaybe<ModelSafeTransactionConditionInput>;
  input: DeleteSafeTransactionInput;
};


/** Root mutation type */
export type MutationDeleteSafeTransactionDataArgs = {
  condition?: InputMaybe<ModelSafeTransactionDataConditionInput>;
  input: DeleteSafeTransactionDataInput;
};


/** Root mutation type */
export type MutationDeleteStreamingPaymentArgs = {
  condition?: InputMaybe<ModelStreamingPaymentConditionInput>;
  input: DeleteStreamingPaymentInput;
};


/** Root mutation type */
export type MutationDeleteStreamingPaymentMetadataArgs = {
  condition?: InputMaybe<ModelStreamingPaymentMetadataConditionInput>;
  input: DeleteStreamingPaymentMetadataInput;
};


/** Root mutation type */
export type MutationDeleteTokenArgs = {
  condition?: InputMaybe<ModelTokenConditionInput>;
  input: DeleteTokenInput;
};


/** Root mutation type */
export type MutationDeleteTransactionArgs = {
  condition?: InputMaybe<ModelTransactionConditionInput>;
  input: DeleteTransactionInput;
};


/** Root mutation type */
export type MutationDeleteUserArgs = {
  condition?: InputMaybe<ModelUserConditionInput>;
  input: DeleteUserInput;
};


/** Root mutation type */
export type MutationDeleteUserStakeArgs = {
  condition?: InputMaybe<ModelUserStakeConditionInput>;
  input: DeleteUserStakeInput;
};


/** Root mutation type */
export type MutationDeleteUserTokensArgs = {
  condition?: InputMaybe<ModelUserTokensConditionInput>;
  input: DeleteUserTokensInput;
};


/** Root mutation type */
export type MutationUpdateAnnotationArgs = {
  condition?: InputMaybe<ModelAnnotationConditionInput>;
  input: UpdateAnnotationInput;
};


/** Root mutation type */
export type MutationUpdateColonyArgs = {
  condition?: InputMaybe<ModelColonyConditionInput>;
  input: UpdateColonyInput;
};


/** Root mutation type */
export type MutationUpdateColonyActionArgs = {
  condition?: InputMaybe<ModelColonyActionConditionInput>;
  input: UpdateColonyActionInput;
};


/** Root mutation type */
export type MutationUpdateColonyActionMetadataArgs = {
  condition?: InputMaybe<ModelColonyActionMetadataConditionInput>;
  input: UpdateColonyActionMetadataInput;
};


/** Root mutation type */
export type MutationUpdateColonyContributorArgs = {
  condition?: InputMaybe<ModelColonyContributorConditionInput>;
  input: UpdateColonyContributorInput;
};


/** Root mutation type */
export type MutationUpdateColonyDecisionArgs = {
  condition?: InputMaybe<ModelColonyDecisionConditionInput>;
  input: UpdateColonyDecisionInput;
};


/** Root mutation type */
export type MutationUpdateColonyExtensionArgs = {
  condition?: InputMaybe<ModelColonyExtensionConditionInput>;
  input: UpdateColonyExtensionInput;
};


/** Root mutation type */
export type MutationUpdateColonyFundsClaimArgs = {
  condition?: InputMaybe<ModelColonyFundsClaimConditionInput>;
  input: UpdateColonyFundsClaimInput;
};


/** Root mutation type */
export type MutationUpdateColonyHistoricRoleArgs = {
  condition?: InputMaybe<ModelColonyHistoricRoleConditionInput>;
  input: UpdateColonyHistoricRoleInput;
};


/** Root mutation type */
export type MutationUpdateColonyMemberInviteArgs = {
  condition?: InputMaybe<ModelColonyMemberInviteConditionInput>;
  input: UpdateColonyMemberInviteInput;
};


/** Root mutation type */
export type MutationUpdateColonyMetadataArgs = {
  condition?: InputMaybe<ModelColonyMetadataConditionInput>;
  input: UpdateColonyMetadataInput;
};


/** Root mutation type */
export type MutationUpdateColonyMotionArgs = {
  condition?: InputMaybe<ModelColonyMotionConditionInput>;
  input: UpdateColonyMotionInput;
};


/** Root mutation type */
export type MutationUpdateColonyRoleArgs = {
  condition?: InputMaybe<ModelColonyRoleConditionInput>;
  input: UpdateColonyRoleInput;
};


/** Root mutation type */
export type MutationUpdateColonyStakeArgs = {
  condition?: InputMaybe<ModelColonyStakeConditionInput>;
  input: UpdateColonyStakeInput;
};


/** Root mutation type */
export type MutationUpdateColonyTokensArgs = {
  condition?: InputMaybe<ModelColonyTokensConditionInput>;
  input: UpdateColonyTokensInput;
};


/** Root mutation type */
export type MutationUpdateContractEventArgs = {
  condition?: InputMaybe<ModelContractEventConditionInput>;
  input: UpdateContractEventInput;
};


/** Root mutation type */
export type MutationUpdateContributorReputationArgs = {
  condition?: InputMaybe<ModelContributorReputationConditionInput>;
  input: UpdateContributorReputationInput;
};


/** Root mutation type */
export type MutationUpdateContributorsWithReputationArgs = {
  input: UpdateContributorsWithReputationInput;
};


/** Root mutation type */
export type MutationUpdateCurrentNetworkInverseFeeArgs = {
  condition?: InputMaybe<ModelCurrentNetworkInverseFeeConditionInput>;
  input: UpdateCurrentNetworkInverseFeeInput;
};


/** Root mutation type */
export type MutationUpdateCurrentVersionArgs = {
  condition?: InputMaybe<ModelCurrentVersionConditionInput>;
  input: UpdateCurrentVersionInput;
};


/** Root mutation type */
export type MutationUpdateDomainArgs = {
  condition?: InputMaybe<ModelDomainConditionInput>;
  input: UpdateDomainInput;
};


/** Root mutation type */
export type MutationUpdateDomainMetadataArgs = {
  condition?: InputMaybe<ModelDomainMetadataConditionInput>;
  input: UpdateDomainMetadataInput;
};


/** Root mutation type */
export type MutationUpdateExpenditureArgs = {
  condition?: InputMaybe<ModelExpenditureConditionInput>;
  input: UpdateExpenditureInput;
};


/** Root mutation type */
export type MutationUpdateExpenditureMetadataArgs = {
  condition?: InputMaybe<ModelExpenditureMetadataConditionInput>;
  input: UpdateExpenditureMetadataInput;
};


/** Root mutation type */
export type MutationUpdateExtensionInstallationsCountArgs = {
  condition?: InputMaybe<ModelExtensionInstallationsCountConditionInput>;
  input: UpdateExtensionInstallationsCountInput;
};


/** Root mutation type */
export type MutationUpdateIngestorStatsArgs = {
  condition?: InputMaybe<ModelIngestorStatsConditionInput>;
  input: UpdateIngestorStatsInput;
};


/** Root mutation type */
export type MutationUpdateMotionMessageArgs = {
  condition?: InputMaybe<ModelMotionMessageConditionInput>;
  input: UpdateMotionMessageInput;
};


/** Root mutation type */
export type MutationUpdatePrivateBetaInviteCodeArgs = {
  condition?: InputMaybe<ModelPrivateBetaInviteCodeConditionInput>;
  input: UpdatePrivateBetaInviteCodeInput;
};


/** Root mutation type */
export type MutationUpdateProfileArgs = {
  condition?: InputMaybe<ModelProfileConditionInput>;
  input: UpdateProfileInput;
};


/** Root mutation type */
export type MutationUpdateReputationMiningCycleMetadataArgs = {
  condition?: InputMaybe<ModelReputationMiningCycleMetadataConditionInput>;
  input: UpdateReputationMiningCycleMetadataInput;
};


/** Root mutation type */
export type MutationUpdateSafeTransactionArgs = {
  condition?: InputMaybe<ModelSafeTransactionConditionInput>;
  input: UpdateSafeTransactionInput;
};


/** Root mutation type */
export type MutationUpdateSafeTransactionDataArgs = {
  condition?: InputMaybe<ModelSafeTransactionDataConditionInput>;
  input: UpdateSafeTransactionDataInput;
};


/** Root mutation type */
export type MutationUpdateStreamingPaymentArgs = {
  condition?: InputMaybe<ModelStreamingPaymentConditionInput>;
  input: UpdateStreamingPaymentInput;
};


/** Root mutation type */
export type MutationUpdateStreamingPaymentMetadataArgs = {
  condition?: InputMaybe<ModelStreamingPaymentMetadataConditionInput>;
  input: UpdateStreamingPaymentMetadataInput;
};


/** Root mutation type */
export type MutationUpdateTokenArgs = {
  condition?: InputMaybe<ModelTokenConditionInput>;
  input: UpdateTokenInput;
};


/** Root mutation type */
export type MutationUpdateTransactionArgs = {
  condition?: InputMaybe<ModelTransactionConditionInput>;
  input: UpdateTransactionInput;
};


/** Root mutation type */
export type MutationUpdateUserArgs = {
  condition?: InputMaybe<ModelUserConditionInput>;
  input: UpdateUserInput;
};


/** Root mutation type */
export type MutationUpdateUserStakeArgs = {
  condition?: InputMaybe<ModelUserStakeConditionInput>;
  input: UpdateUserStakeInput;
};


/** Root mutation type */
export type MutationUpdateUserTokensArgs = {
  condition?: InputMaybe<ModelUserTokensConditionInput>;
  input: UpdateUserTokensInput;
};


/** Root mutation type */
export type MutationValidateUserInviteArgs = {
  input: ValidateUserInviteInput;
};

export type Nft = {
  __typename?: 'NFT';
  id: Scalars['String'];
  profile: NftProfile;
  walletAddress: Scalars['String'];
};

export type NftData = {
  __typename?: 'NFTData';
  address: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  imageUri?: Maybe<Scalars['String']>;
  logoUri: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  tokenName: Scalars['String'];
  tokenSymbol: Scalars['String'];
  uri: Scalars['String'];
};

export type NftDataInput = {
  address: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  imageUri?: InputMaybe<Scalars['String']>;
  logoUri: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  tokenName: Scalars['String'];
  tokenSymbol: Scalars['String'];
  uri: Scalars['String'];
};

export type NftInput = {
  id: Scalars['String'];
  profile: NftProfileInput;
  walletAddress: Scalars['String'];
};

export type NftProfile = {
  __typename?: 'NFTProfile';
  displayName: Scalars['String'];
};

export type NftProfileInput = {
  displayName: Scalars['String'];
};

/**
 * Represents the status of a Colony's native token
 * Colonies can have different types of native tokens in various modes. Here we define some important properties that the dApp uses to enable or disable certain features or views. This is set when a Colony is created and can be changed later
 */
export type NativeTokenStatus = {
  __typename?: 'NativeTokenStatus';
  /** Whether the user has permissions to mint new tokens */
  mintable?: Maybe<Scalars['Boolean']>;
  /** Whether the native token can be unlocked */
  unlockable?: Maybe<Scalars['Boolean']>;
  /** Whether the native token is unlocked */
  unlocked?: Maybe<Scalars['Boolean']>;
};

/** Colonies can have different types of native tokens in various modes. Here we define some important properties that the dApp uses to enable or disable certain features or views. This is set when a Colony is created and can be changed later */
export type NativeTokenStatusInput = {
  /** Whether the native token is mintable */
  mintable?: InputMaybe<Scalars['Boolean']>;
  /** Whether the native token can be unlocked */
  unlockable?: InputMaybe<Scalars['Boolean']>;
  /** Whether the native token is unlocked */
  unlocked?: InputMaybe<Scalars['Boolean']>;
};

/** Variants of supported Ethereum networks */
export enum Network {
  /** Local development network using Ganache */
  Ganache = 'GANACHE',
  /** Gnosis Chain network */
  Gnosis = 'GNOSIS',
  /** Fork of Gnosis Chain for QA purposes */
  Gnosisfork = 'GNOSISFORK',
  /** Ethereum Goerli test network */
  Goerli = 'GOERLI',
  /** Ethereum Mainnet */
  Mainnet = 'MAINNET'
}

export type Payment = {
  __typename?: 'Payment';
  /** Payment amount, excluding network fee */
  amount: Scalars['String'];
  /** Network fee amount */
  networkFee?: Maybe<Scalars['String']>;
  recipientAddress: Scalars['String'];
  tokenAddress: Scalars['String'];
};

export type PaymentInput = {
  amount: Scalars['String'];
  networkFee?: InputMaybe<Scalars['String']>;
  recipientAddress: Scalars['String'];
  tokenAddress: Scalars['String'];
};

/** Colony token modifications that are stored temporarily and commited to the database once the corresponding motion passes */
export type PendingModifiedTokenAddresses = {
  __typename?: 'PendingModifiedTokenAddresses';
  /** List of tokens that were added to the Colony's token list */
  added?: Maybe<Array<Scalars['String']>>;
  /** List of tokens that were removed from the Colony's token list */
  removed?: Maybe<Array<Scalars['String']>>;
};

export type PendingModifiedTokenAddressesInput = {
  added?: InputMaybe<Array<Scalars['String']>>;
  removed?: InputMaybe<Array<Scalars['String']>>;
};

export type PrivateBetaInviteCode = {
  __typename?: 'PrivateBetaInviteCode';
  createdAt: Scalars['AWSDateTime'];
  /** The id functions as the invite code */
  id: Scalars['ID'];
  /**
   * This tracks the amount of invites this invite code is also allowed to generate
   * The default value relates to the initial user and their subsequent invitee
   */
  shareableInvites?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['AWSDateTime'];
  /** User ID associated with the Invite */
  userId?: Maybe<Scalars['ID']>;
};

/** Represents a user's profile within the Colony Network */
export type Profile = {
  __typename?: 'Profile';
  /** URL of the user's avatar image */
  avatar?: Maybe<Scalars['String']>;
  /** User's bio information */
  bio?: Maybe<Scalars['String']>;
  createdAt: Scalars['AWSDateTime'];
  /** Display name of the user */
  displayName?: Maybe<Scalars['String']>;
  /** Date displayName was changed */
  displayNameChanged?: Maybe<Scalars['AWSDateTime']>;
  /** User's email address */
  email?: Maybe<Scalars['AWSEmail']>;
  /** Unique identifier for the user's profile */
  id: Scalars['ID'];
  /** User's location information */
  location?: Maybe<Scalars['String']>;
  /** Metadata associated with the user's profile */
  meta?: Maybe<ProfileMetadata>;
  /** A user's prefered currency, for conversion purposes */
  preferredCurrency?: Maybe<SupportedCurrencies>;
  /** URL of the user's thumbnail image */
  thumbnail?: Maybe<Scalars['String']>;
  updatedAt: Scalars['AWSDateTime'];
  /** The user associated with this profile */
  user: User;
  /** URL of the user's website */
  website?: Maybe<Scalars['AWSURL']>;
};

/** Input data to use when creating or changing a user profile */
export type ProfileInput = {
  /** The URL of the user's avatar image */
  avatar?: InputMaybe<Scalars['String']>;
  /** A short description or biography of the user. */
  bio?: InputMaybe<Scalars['String']>;
  /** The display name of the user */
  displayName?: InputMaybe<Scalars['String']>;
  /** The user's email address */
  email?: InputMaybe<Scalars['AWSEmail']>;
  /** The unique identifier for the user profile */
  id?: InputMaybe<Scalars['ID']>;
  /** The user's location (e.g., city or country) */
  location?: InputMaybe<Scalars['String']>;
  /** Any additional metadata or settings related to the user profile */
  meta?: InputMaybe<ProfileMetadataInput>;
  /** The URL of the user's thumbnail image */
  thumbnail?: InputMaybe<Scalars['String']>;
  /** The user's personal or professional website */
  website?: InputMaybe<Scalars['AWSURL']>;
};

/** Represents metadata for a user's profile. Mostly user specific settings */
export type ProfileMetadata = {
  __typename?: 'ProfileMetadata';
  /** The URL of the user's custom RPC node */
  customRpc?: Maybe<Scalars['String']>;
  /** A flag to indicate whether the user has enabled the decentralized mode */
  decentralizedModeEnabled?: Maybe<Scalars['Boolean']>;
  /** A flag to indicate whether the user has enabled metatransactions */
  metatransactionsEnabled?: Maybe<Scalars['Boolean']>;
};

/** Input data for a user's profile metadata */
export type ProfileMetadataInput = {
  /** The URL of the user's custom RPC node */
  customRpc?: InputMaybe<Scalars['String']>;
  /** A flag to indicate whether the user has enabled the decentralized mode */
  decentralizedModeEnabled?: InputMaybe<Scalars['Boolean']>;
  /** A flag to indicate whether the user has enabled metatransactions */
  metatransactionsEnabled?: InputMaybe<Scalars['Boolean']>;
};

/** Root query type */
export type Query = {
  __typename?: 'Query';
  getActionByExpenditureId?: Maybe<ModelColonyActionConnection>;
  getActionsByColony?: Maybe<ModelColonyActionConnection>;
  getAnnotation?: Maybe<Annotation>;
  getColoniesByNativeTokenId?: Maybe<ModelColonyConnection>;
  getColony?: Maybe<Colony>;
  getColonyAction?: Maybe<ColonyAction>;
  getColonyActionByMotionId?: Maybe<ModelColonyActionConnection>;
  getColonyActionMetadata?: Maybe<ColonyActionMetadata>;
  getColonyByAddress?: Maybe<ModelColonyConnection>;
  getColonyByName?: Maybe<ModelColonyConnection>;
  getColonyByType?: Maybe<ModelColonyConnection>;
  getColonyContributor?: Maybe<ColonyContributor>;
  getColonyDecision?: Maybe<ColonyDecision>;
  getColonyDecisionByActionId?: Maybe<ModelColonyDecisionConnection>;
  getColonyDecisionByColonyAddress?: Maybe<ModelColonyDecisionConnection>;
  getColonyExtension?: Maybe<ColonyExtension>;
  getColonyFundsClaim?: Maybe<ColonyFundsClaim>;
  getColonyHistoricRole?: Maybe<ColonyHistoricRole>;
  getColonyHistoricRoleByDate?: Maybe<ModelColonyHistoricRoleConnection>;
  getColonyMemberInvite?: Maybe<ColonyMemberInvite>;
  getColonyMetadata?: Maybe<ColonyMetadata>;
  getColonyMotion?: Maybe<ColonyMotion>;
  getColonyRole?: Maybe<ColonyRole>;
  getColonyStake?: Maybe<ColonyStake>;
  getColonyStakeByUserAddress?: Maybe<ModelColonyStakeConnection>;
  getColonyTokens?: Maybe<ColonyTokens>;
  getContractEvent?: Maybe<ContractEvent>;
  getContributorReputation?: Maybe<ContributorReputation>;
  getContributorsByAddress?: Maybe<ModelColonyContributorConnection>;
  getContributorsByColony?: Maybe<ModelColonyContributorConnection>;
  getCurrentNetworkInverseFee?: Maybe<CurrentNetworkInverseFee>;
  getCurrentVersion?: Maybe<CurrentVersion>;
  getCurrentVersionByKey?: Maybe<ModelCurrentVersionConnection>;
  getDomain?: Maybe<Domain>;
  getDomainMetadata?: Maybe<DomainMetadata>;
  getExpenditure?: Maybe<Expenditure>;
  getExpenditureMetadata?: Maybe<ExpenditureMetadata>;
  getExpendituresByColony?: Maybe<ModelExpenditureConnection>;
  getExpendituresByNativeFundingPotIdAndColony?: Maybe<ModelExpenditureConnection>;
  getExtensionByColonyAndHash?: Maybe<ModelColonyExtensionConnection>;
  getExtensionInstallationsCount?: Maybe<ExtensionInstallationsCount>;
  getExtensionsByHash?: Maybe<ModelColonyExtensionConnection>;
  getIngestorStats?: Maybe<IngestorStats>;
  getMotionByExpenditureId?: Maybe<ModelColonyMotionConnection>;
  getMotionByTransactionHash?: Maybe<ModelColonyMotionConnection>;
  getMotionMessage?: Maybe<MotionMessage>;
  getMotionMessageByMotionId?: Maybe<ModelMotionMessageConnection>;
  /** Get the state of a motion (i.e. the current period) */
  getMotionState: Scalars['Int'];
  /** Get the timeout for the current period of a motion */
  getMotionTimeoutPeriods?: Maybe<GetMotionTimeoutPeriodsReturn>;
  getPrivateBetaInviteCode?: Maybe<PrivateBetaInviteCode>;
  getProfile?: Maybe<Profile>;
  getProfileByEmail?: Maybe<ModelProfileConnection>;
  getProfileByUsername?: Maybe<ModelProfileConnection>;
  getReputationMiningCycleMetadata?: Maybe<ReputationMiningCycleMetadata>;
  getRoleByDomainAndColony?: Maybe<ModelColonyRoleConnection>;
  getRoleByTargetAddressAndColony?: Maybe<ModelColonyRoleConnection>;
  getSafeTransaction?: Maybe<SafeTransaction>;
  getSafeTransactionData?: Maybe<SafeTransactionData>;
  getSafeTransactionStatus?: Maybe<Array<Scalars['String']>>;
  getStreamingPayment?: Maybe<StreamingPayment>;
  getStreamingPaymentMetadata?: Maybe<StreamingPaymentMetadata>;
  getToken?: Maybe<Token>;
  getTokenByAddress?: Maybe<ModelTokenConnection>;
  /** Fetch a token's information. Tries to get the data from the DB first, if that fails, resolves to get data from chain */
  getTokenFromEverywhere?: Maybe<TokenFromEverywhereReturn>;
  getTokensByType?: Maybe<ModelTokenConnection>;
  getTransaction?: Maybe<Transaction>;
  getTransactionsByUser?: Maybe<ModelTransactionConnection>;
  getTransactionsByUserAndGroup?: Maybe<ModelTransactionConnection>;
  getUser?: Maybe<User>;
  getUserByAddress?: Maybe<ModelUserConnection>;
  /** Retrieve a user's reputation within a specific domain in a Colony */
  getUserReputation?: Maybe<Scalars['String']>;
  getUserReputationInColony?: Maybe<ModelContributorReputationConnection>;
  getUserStake?: Maybe<UserStake>;
  getUserStakes?: Maybe<ModelUserStakeConnection>;
  /** Retrieve a user's token balance for a specific token */
  getUserTokenBalance?: Maybe<GetUserTokenBalanceReturn>;
  getUserTokens?: Maybe<UserTokens>;
  /** Get the voting reward for a user and a motion */
  getVoterRewards?: Maybe<VoterRewardsReturn>;
  listAnnotations?: Maybe<ModelAnnotationConnection>;
  listColonies?: Maybe<ModelColonyConnection>;
  listColonyActionMetadata?: Maybe<ModelColonyActionMetadataConnection>;
  listColonyActions?: Maybe<ModelColonyActionConnection>;
  listColonyContributors?: Maybe<ModelColonyContributorConnection>;
  listColonyDecisions?: Maybe<ModelColonyDecisionConnection>;
  listColonyExtensions?: Maybe<ModelColonyExtensionConnection>;
  listColonyFundsClaims?: Maybe<ModelColonyFundsClaimConnection>;
  listColonyHistoricRoles?: Maybe<ModelColonyHistoricRoleConnection>;
  listColonyMemberInvites?: Maybe<ModelColonyMemberInviteConnection>;
  listColonyMetadata?: Maybe<ModelColonyMetadataConnection>;
  listColonyMotions?: Maybe<ModelColonyMotionConnection>;
  listColonyRoles?: Maybe<ModelColonyRoleConnection>;
  listColonyStakes?: Maybe<ModelColonyStakeConnection>;
  listColonyTokens?: Maybe<ModelColonyTokensConnection>;
  listContractEvents?: Maybe<ModelContractEventConnection>;
  listContributorReputations?: Maybe<ModelContributorReputationConnection>;
  listCurrentNetworkInverseFees?: Maybe<ModelCurrentNetworkInverseFeeConnection>;
  listCurrentVersions?: Maybe<ModelCurrentVersionConnection>;
  listDomainMetadata?: Maybe<ModelDomainMetadataConnection>;
  listDomains?: Maybe<ModelDomainConnection>;
  listExpenditureMetadata?: Maybe<ModelExpenditureMetadataConnection>;
  listExpenditures?: Maybe<ModelExpenditureConnection>;
  listExtensionInstallationsCounts?: Maybe<ModelExtensionInstallationsCountConnection>;
  listIngestorStats?: Maybe<ModelIngestorStatsConnection>;
  listMotionMessages?: Maybe<ModelMotionMessageConnection>;
  listPrivateBetaInviteCodes?: Maybe<ModelPrivateBetaInviteCodeConnection>;
  listProfiles?: Maybe<ModelProfileConnection>;
  listReputationMiningCycleMetadata?: Maybe<ModelReputationMiningCycleMetadataConnection>;
  listSafeTransactionData?: Maybe<ModelSafeTransactionDataConnection>;
  listSafeTransactions?: Maybe<ModelSafeTransactionConnection>;
  listStreamingPaymentMetadata?: Maybe<ModelStreamingPaymentMetadataConnection>;
  listStreamingPayments?: Maybe<ModelStreamingPaymentConnection>;
  listTokens?: Maybe<ModelTokenConnection>;
  listTransactions?: Maybe<ModelTransactionConnection>;
  listUserStakes?: Maybe<ModelUserStakeConnection>;
  listUserTokens?: Maybe<ModelUserTokensConnection>;
  listUsers?: Maybe<ModelUserConnection>;
  searchColonyActions?: Maybe<SearchableColonyActionConnection>;
  searchColonyContributors?: Maybe<SearchableColonyContributorConnection>;
};


/** Root query type */
export type QueryGetActionByExpenditureIdArgs = {
  expenditureId: Scalars['ID'];
  filter?: InputMaybe<ModelColonyActionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Root query type */
export type QueryGetActionsByColonyArgs = {
  colonyId: Scalars['ID'];
  createdAt?: InputMaybe<ModelStringKeyConditionInput>;
  filter?: InputMaybe<ModelColonyActionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Root query type */
export type QueryGetAnnotationArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetColoniesByNativeTokenIdArgs = {
  filter?: InputMaybe<ModelColonyFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nativeTokenId: Scalars['ID'];
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Root query type */
export type QueryGetColonyArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetColonyActionArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetColonyActionByMotionIdArgs = {
  filter?: InputMaybe<ModelColonyActionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  motionId: Scalars['ID'];
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Root query type */
export type QueryGetColonyActionMetadataArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetColonyByAddressArgs = {
  filter?: InputMaybe<ModelColonyFilterInput>;
  id: Scalars['ID'];
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Root query type */
export type QueryGetColonyByNameArgs = {
  filter?: InputMaybe<ModelColonyFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Root query type */
export type QueryGetColonyByTypeArgs = {
  filter?: InputMaybe<ModelColonyFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  type: ColonyType;
};


/** Root query type */
export type QueryGetColonyContributorArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetColonyDecisionArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetColonyDecisionByActionIdArgs = {
  actionId: Scalars['ID'];
  filter?: InputMaybe<ModelColonyDecisionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Root query type */
export type QueryGetColonyDecisionByColonyAddressArgs = {
  colonyAddress: Scalars['String'];
  createdAt?: InputMaybe<ModelStringKeyConditionInput>;
  filter?: InputMaybe<ModelColonyDecisionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Root query type */
export type QueryGetColonyExtensionArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetColonyFundsClaimArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetColonyHistoricRoleArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetColonyHistoricRoleByDateArgs = {
  createdAt?: InputMaybe<ModelStringKeyConditionInput>;
  filter?: InputMaybe<ModelColonyHistoricRoleFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  type: Scalars['String'];
};


/** Root query type */
export type QueryGetColonyMemberInviteArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetColonyMetadataArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetColonyMotionArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetColonyRoleArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetColonyStakeArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetColonyStakeByUserAddressArgs = {
  colonyId?: InputMaybe<ModelIdKeyConditionInput>;
  filter?: InputMaybe<ModelColonyStakeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  userId: Scalars['ID'];
};


/** Root query type */
export type QueryGetColonyTokensArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetContractEventArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetContributorReputationArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetContributorsByAddressArgs = {
  colonyReputationPercentage?: InputMaybe<ModelFloatKeyConditionInput>;
  contributorAddress: Scalars['ID'];
  filter?: InputMaybe<ModelColonyContributorFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Root query type */
export type QueryGetContributorsByColonyArgs = {
  colonyAddress: Scalars['ID'];
  colonyReputationPercentage?: InputMaybe<ModelFloatKeyConditionInput>;
  filter?: InputMaybe<ModelColonyContributorFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Root query type */
export type QueryGetCurrentNetworkInverseFeeArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetCurrentVersionArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetCurrentVersionByKeyArgs = {
  filter?: InputMaybe<ModelCurrentVersionFilterInput>;
  key: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Root query type */
export type QueryGetDomainArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetDomainMetadataArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetExpenditureArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetExpenditureMetadataArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetExpendituresByColonyArgs = {
  colonyId: Scalars['ID'];
  createdAt?: InputMaybe<ModelStringKeyConditionInput>;
  filter?: InputMaybe<ModelExpenditureFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Root query type */
export type QueryGetExpendituresByNativeFundingPotIdAndColonyArgs = {
  colonyId?: InputMaybe<ModelIdKeyConditionInput>;
  filter?: InputMaybe<ModelExpenditureFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nativeFundingPotId: Scalars['Int'];
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Root query type */
export type QueryGetExtensionByColonyAndHashArgs = {
  colonyId: Scalars['ID'];
  filter?: InputMaybe<ModelColonyExtensionFilterInput>;
  hash?: InputMaybe<ModelStringKeyConditionInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Root query type */
export type QueryGetExtensionInstallationsCountArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetExtensionsByHashArgs = {
  filter?: InputMaybe<ModelColonyExtensionFilterInput>;
  hash: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Root query type */
export type QueryGetIngestorStatsArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetMotionByExpenditureIdArgs = {
  expenditureId: Scalars['ID'];
  filter?: InputMaybe<ModelColonyMotionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Root query type */
export type QueryGetMotionByTransactionHashArgs = {
  filter?: InputMaybe<ModelColonyMotionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  transactionHash: Scalars['ID'];
};


/** Root query type */
export type QueryGetMotionMessageArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetMotionMessageByMotionIdArgs = {
  createdAt?: InputMaybe<ModelStringKeyConditionInput>;
  filter?: InputMaybe<ModelMotionMessageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  motionId: Scalars['ID'];
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Root query type */
export type QueryGetMotionStateArgs = {
  input?: InputMaybe<GetMotionStateInput>;
};


/** Root query type */
export type QueryGetMotionTimeoutPeriodsArgs = {
  input?: InputMaybe<GetMotionTimeoutPeriodsInput>;
};


/** Root query type */
export type QueryGetPrivateBetaInviteCodeArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetProfileArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetProfileByEmailArgs = {
  email: Scalars['AWSEmail'];
  filter?: InputMaybe<ModelProfileFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Root query type */
export type QueryGetProfileByUsernameArgs = {
  displayName: Scalars['String'];
  filter?: InputMaybe<ModelProfileFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Root query type */
export type QueryGetReputationMiningCycleMetadataArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetRoleByDomainAndColonyArgs = {
  colonyAddress?: InputMaybe<ModelIdKeyConditionInput>;
  domainId: Scalars['ID'];
  filter?: InputMaybe<ModelColonyRoleFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Root query type */
export type QueryGetRoleByTargetAddressAndColonyArgs = {
  colonyAddress?: InputMaybe<ModelIdKeyConditionInput>;
  filter?: InputMaybe<ModelColonyRoleFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  targetAddress: Scalars['ID'];
};


/** Root query type */
export type QueryGetSafeTransactionArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetSafeTransactionDataArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetSafeTransactionStatusArgs = {
  input?: InputMaybe<GetSafeTransactionStatusInput>;
};


/** Root query type */
export type QueryGetStreamingPaymentArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetStreamingPaymentMetadataArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetTokenArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetTokenByAddressArgs = {
  filter?: InputMaybe<ModelTokenFilterInput>;
  id: Scalars['ID'];
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Root query type */
export type QueryGetTokenFromEverywhereArgs = {
  input?: InputMaybe<TokenFromEverywhereArguments>;
};


/** Root query type */
export type QueryGetTokensByTypeArgs = {
  filter?: InputMaybe<ModelTokenFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  type: TokenType;
};


/** Root query type */
export type QueryGetTransactionArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetTransactionsByUserArgs = {
  createdAt?: InputMaybe<ModelStringKeyConditionInput>;
  filter?: InputMaybe<ModelTransactionFilterInput>;
  from: Scalars['ID'];
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Root query type */
export type QueryGetTransactionsByUserAndGroupArgs = {
  filter?: InputMaybe<ModelTransactionFilterInput>;
  from?: InputMaybe<ModelIdKeyConditionInput>;
  groupId: Scalars['ID'];
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Root query type */
export type QueryGetUserArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetUserByAddressArgs = {
  filter?: InputMaybe<ModelUserFilterInput>;
  id: Scalars['ID'];
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Root query type */
export type QueryGetUserReputationArgs = {
  input?: InputMaybe<GetUserReputationInput>;
};


/** Root query type */
export type QueryGetUserReputationInColonyArgs = {
  colonyAddress?: InputMaybe<ModelIdKeyConditionInput>;
  contributorAddress: Scalars['ID'];
  filter?: InputMaybe<ModelContributorReputationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Root query type */
export type QueryGetUserStakeArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetUserStakesArgs = {
  createdAt?: InputMaybe<ModelStringKeyConditionInput>;
  filter?: InputMaybe<ModelUserStakeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  userAddress: Scalars['ID'];
};


/** Root query type */
export type QueryGetUserTokenBalanceArgs = {
  input?: InputMaybe<GetUserTokenBalanceInput>;
};


/** Root query type */
export type QueryGetUserTokensArgs = {
  id: Scalars['ID'];
};


/** Root query type */
export type QueryGetVoterRewardsArgs = {
  input?: InputMaybe<GetVoterRewardsInput>;
};


/** Root query type */
export type QueryListAnnotationsArgs = {
  filter?: InputMaybe<ModelAnnotationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListColoniesArgs = {
  filter?: InputMaybe<ModelColonyFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListColonyActionMetadataArgs = {
  filter?: InputMaybe<ModelColonyActionMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListColonyActionsArgs = {
  filter?: InputMaybe<ModelColonyActionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListColonyContributorsArgs = {
  filter?: InputMaybe<ModelColonyContributorFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListColonyDecisionsArgs = {
  filter?: InputMaybe<ModelColonyDecisionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListColonyExtensionsArgs = {
  filter?: InputMaybe<ModelColonyExtensionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListColonyFundsClaimsArgs = {
  filter?: InputMaybe<ModelColonyFundsClaimFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListColonyHistoricRolesArgs = {
  filter?: InputMaybe<ModelColonyHistoricRoleFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListColonyMemberInvitesArgs = {
  filter?: InputMaybe<ModelColonyMemberInviteFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListColonyMetadataArgs = {
  filter?: InputMaybe<ModelColonyMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListColonyMotionsArgs = {
  filter?: InputMaybe<ModelColonyMotionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListColonyRolesArgs = {
  filter?: InputMaybe<ModelColonyRoleFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListColonyStakesArgs = {
  filter?: InputMaybe<ModelColonyStakeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListColonyTokensArgs = {
  filter?: InputMaybe<ModelColonyTokensFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListContractEventsArgs = {
  filter?: InputMaybe<ModelContractEventFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListContributorReputationsArgs = {
  filter?: InputMaybe<ModelContributorReputationFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListCurrentNetworkInverseFeesArgs = {
  filter?: InputMaybe<ModelCurrentNetworkInverseFeeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListCurrentVersionsArgs = {
  filter?: InputMaybe<ModelCurrentVersionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListDomainMetadataArgs = {
  filter?: InputMaybe<ModelDomainMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListDomainsArgs = {
  filter?: InputMaybe<ModelDomainFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListExpenditureMetadataArgs = {
  filter?: InputMaybe<ModelExpenditureMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListExpendituresArgs = {
  filter?: InputMaybe<ModelExpenditureFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListExtensionInstallationsCountsArgs = {
  filter?: InputMaybe<ModelExtensionInstallationsCountFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListIngestorStatsArgs = {
  filter?: InputMaybe<ModelIngestorStatsFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListMotionMessagesArgs = {
  filter?: InputMaybe<ModelMotionMessageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListPrivateBetaInviteCodesArgs = {
  filter?: InputMaybe<ModelPrivateBetaInviteCodeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListProfilesArgs = {
  filter?: InputMaybe<ModelProfileFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListReputationMiningCycleMetadataArgs = {
  filter?: InputMaybe<ModelReputationMiningCycleMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListSafeTransactionDataArgs = {
  filter?: InputMaybe<ModelSafeTransactionDataFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListSafeTransactionsArgs = {
  filter?: InputMaybe<ModelSafeTransactionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListStreamingPaymentMetadataArgs = {
  filter?: InputMaybe<ModelStreamingPaymentMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListStreamingPaymentsArgs = {
  filter?: InputMaybe<ModelStreamingPaymentFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListTokensArgs = {
  filter?: InputMaybe<ModelTokenFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListTransactionsArgs = {
  filter?: InputMaybe<ModelTransactionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListUserStakesArgs = {
  filter?: InputMaybe<ModelUserStakeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListUserTokensArgs = {
  filter?: InputMaybe<ModelUserTokensFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QueryListUsersArgs = {
  filter?: InputMaybe<ModelUserFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
};


/** Root query type */
export type QuerySearchColonyActionsArgs = {
  aggregates?: InputMaybe<Array<InputMaybe<SearchableColonyActionAggregationInput>>>;
  filter?: InputMaybe<SearchableColonyActionFilterInput>;
  from?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<SearchableColonyActionSortInput>>>;
};


/** Root query type */
export type QuerySearchColonyContributorsArgs = {
  aggregates?: InputMaybe<Array<InputMaybe<SearchableColonyContributorAggregationInput>>>;
  filter?: InputMaybe<SearchableColonyContributorFilterInput>;
  from?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<Array<InputMaybe<SearchableColonyContributorSortInput>>>;
};

export type ReputationMiningCycleMetadata = {
  __typename?: 'ReputationMiningCycleMetadata';
  createdAt: Scalars['AWSDateTime'];
  id: Scalars['ID'];
  /** The timestamp of the most recent reputation mining cycle completion. */
  lastCompletedAt: Scalars['AWSDateTime'];
  updatedAt: Scalars['AWSDateTime'];
};

export type Safe = {
  __typename?: 'Safe';
  address: Scalars['String'];
  chainId: Scalars['String'];
  moduleContractAddress: Scalars['String'];
  name: Scalars['String'];
};

export type SafeInput = {
  address: Scalars['String'];
  chainId: Scalars['String'];
  moduleContractAddress: Scalars['String'];
  name: Scalars['String'];
};

export type SafeTransaction = {
  __typename?: 'SafeTransaction';
  createdAt: Scalars['AWSDateTime'];
  id: Scalars['ID'];
  safe: Safe;
  transactions?: Maybe<ModelSafeTransactionDataConnection>;
  updatedAt: Scalars['AWSDateTime'];
};


export type SafeTransactionTransactionsArgs = {
  filter?: InputMaybe<ModelSafeTransactionDataFilterInput>;
  id?: InputMaybe<ModelIdKeyConditionInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export type SafeTransactionData = {
  __typename?: 'SafeTransactionData';
  abi?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['String']>;
  contract?: Maybe<SimpleTarget>;
  contractFunction?: Maybe<Scalars['String']>;
  createdAt: Scalars['AWSDateTime'];
  data?: Maybe<Scalars['String']>;
  functionParams?: Maybe<Array<Maybe<FunctionParam>>>;
  id: Scalars['ID'];
  nft?: Maybe<Nft>;
  nftData?: Maybe<NftData>;
  rawAmount?: Maybe<Scalars['String']>;
  recipient?: Maybe<SimpleTarget>;
  token?: Maybe<Token>;
  tokenAddress?: Maybe<Scalars['ID']>;
  transactionHash: Scalars['ID'];
  transactionType: SafeTransactionType;
  updatedAt: Scalars['AWSDateTime'];
};

export enum SafeTransactionType {
  ContractInteraction = 'CONTRACT_INTERACTION',
  RawTransaction = 'RAW_TRANSACTION',
  TransferFunds = 'TRANSFER_FUNDS',
  TransferNft = 'TRANSFER_NFT'
}

export type SearchableAggregateBucketResult = {
  __typename?: 'SearchableAggregateBucketResult';
  buckets?: Maybe<Array<Maybe<SearchableAggregateBucketResultItem>>>;
};

export type SearchableAggregateBucketResultItem = {
  __typename?: 'SearchableAggregateBucketResultItem';
  doc_count: Scalars['Int'];
  key: Scalars['String'];
};

export type SearchableAggregateGenericResult = SearchableAggregateBucketResult | SearchableAggregateScalarResult;

export type SearchableAggregateResult = {
  __typename?: 'SearchableAggregateResult';
  name: Scalars['String'];
  result?: Maybe<SearchableAggregateGenericResult>;
};

export type SearchableAggregateScalarResult = {
  __typename?: 'SearchableAggregateScalarResult';
  value: Scalars['Float'];
};

export enum SearchableAggregateType {
  Avg = 'avg',
  Max = 'max',
  Min = 'min',
  Sum = 'sum',
  Terms = 'terms'
}

export type SearchableBooleanFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
};

export enum SearchableColonyActionAggregateField {
  Amount = 'amount',
  AnnotationId = 'annotationId',
  BlockNumber = 'blockNumber',
  ColonyActionsId = 'colonyActionsId',
  ColonyDecisionId = 'colonyDecisionId',
  ColonyId = 'colonyId',
  CreatedAt = 'createdAt',
  ExpenditureId = 'expenditureId',
  FromDomainId = 'fromDomainId',
  FromPotId = 'fromPotId',
  Id = 'id',
  IndividualEvents = 'individualEvents',
  InitiatorAddress = 'initiatorAddress',
  IsMotion = 'isMotion',
  IsMotionFinalization = 'isMotionFinalization',
  Members = 'members',
  MotionDomainId = 'motionDomainId',
  MotionId = 'motionId',
  NetworkFee = 'networkFee',
  NewColonyVersion = 'newColonyVersion',
  PaymentId = 'paymentId',
  PendingColonyMetadataId = 'pendingColonyMetadataId',
  PendingDomainMetadataId = 'pendingDomainMetadataId',
  RecipientAddress = 'recipientAddress',
  RootHash = 'rootHash',
  ShowInActionsList = 'showInActionsList',
  ToDomainId = 'toDomainId',
  ToPotId = 'toPotId',
  TokenAddress = 'tokenAddress',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type SearchableColonyActionAggregationInput = {
  field: SearchableColonyActionAggregateField;
  name: Scalars['String'];
  type: SearchableAggregateType;
};

export type SearchableColonyActionConnection = {
  __typename?: 'SearchableColonyActionConnection';
  aggregateItems: Array<Maybe<SearchableAggregateResult>>;
  items: Array<Maybe<ColonyAction>>;
  nextToken?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
};

export type SearchableColonyActionFilterInput = {
  amount?: InputMaybe<SearchableStringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<SearchableColonyActionFilterInput>>>;
  annotationId?: InputMaybe<SearchableIdFilterInput>;
  blockNumber?: InputMaybe<SearchableIntFilterInput>;
  colonyActionsId?: InputMaybe<SearchableIdFilterInput>;
  colonyDecisionId?: InputMaybe<SearchableIdFilterInput>;
  colonyId?: InputMaybe<SearchableIdFilterInput>;
  createdAt?: InputMaybe<SearchableStringFilterInput>;
  expenditureId?: InputMaybe<SearchableIdFilterInput>;
  fromDomainId?: InputMaybe<SearchableIdFilterInput>;
  fromPotId?: InputMaybe<SearchableIntFilterInput>;
  id?: InputMaybe<SearchableIdFilterInput>;
  individualEvents?: InputMaybe<SearchableStringFilterInput>;
  initiatorAddress?: InputMaybe<SearchableIdFilterInput>;
  isMotion?: InputMaybe<SearchableBooleanFilterInput>;
  isMotionFinalization?: InputMaybe<SearchableBooleanFilterInput>;
  members?: InputMaybe<SearchableIdFilterInput>;
  motionDomainId?: InputMaybe<SearchableIntFilterInput>;
  motionId?: InputMaybe<SearchableIdFilterInput>;
  networkFee?: InputMaybe<SearchableStringFilterInput>;
  newColonyVersion?: InputMaybe<SearchableIntFilterInput>;
  not?: InputMaybe<SearchableColonyActionFilterInput>;
  or?: InputMaybe<Array<InputMaybe<SearchableColonyActionFilterInput>>>;
  paymentId?: InputMaybe<SearchableIntFilterInput>;
  pendingColonyMetadataId?: InputMaybe<SearchableIdFilterInput>;
  pendingDomainMetadataId?: InputMaybe<SearchableIdFilterInput>;
  recipientAddress?: InputMaybe<SearchableIdFilterInput>;
  rootHash?: InputMaybe<SearchableStringFilterInput>;
  showInActionsList?: InputMaybe<SearchableBooleanFilterInput>;
  toDomainId?: InputMaybe<SearchableIdFilterInput>;
  toPotId?: InputMaybe<SearchableIntFilterInput>;
  tokenAddress?: InputMaybe<SearchableIdFilterInput>;
  type?: InputMaybe<SearchableStringFilterInput>;
  updatedAt?: InputMaybe<SearchableStringFilterInput>;
};

export type SearchableColonyActionSortInput = {
  direction?: InputMaybe<SearchableSortDirection>;
  field?: InputMaybe<SearchableColonyActionSortableFields>;
};

export enum SearchableColonyActionSortableFields {
  Amount = 'amount',
  AnnotationId = 'annotationId',
  BlockNumber = 'blockNumber',
  ColonyActionsId = 'colonyActionsId',
  ColonyDecisionId = 'colonyDecisionId',
  ColonyId = 'colonyId',
  CreatedAt = 'createdAt',
  ExpenditureId = 'expenditureId',
  FromDomainId = 'fromDomainId',
  FromPotId = 'fromPotId',
  Id = 'id',
  IndividualEvents = 'individualEvents',
  InitiatorAddress = 'initiatorAddress',
  IsMotion = 'isMotion',
  IsMotionFinalization = 'isMotionFinalization',
  Members = 'members',
  MotionDomainId = 'motionDomainId',
  MotionId = 'motionId',
  NetworkFee = 'networkFee',
  NewColonyVersion = 'newColonyVersion',
  PaymentId = 'paymentId',
  PendingColonyMetadataId = 'pendingColonyMetadataId',
  PendingDomainMetadataId = 'pendingDomainMetadataId',
  RecipientAddress = 'recipientAddress',
  RootHash = 'rootHash',
  ShowInActionsList = 'showInActionsList',
  ToDomainId = 'toDomainId',
  ToPotId = 'toPotId',
  TokenAddress = 'tokenAddress',
  UpdatedAt = 'updatedAt'
}

export enum SearchableColonyContributorAggregateField {
  ColonyAddress = 'colonyAddress',
  ColonyReputationPercentage = 'colonyReputationPercentage',
  ContributorAddress = 'contributorAddress',
  CreatedAt = 'createdAt',
  HasPermissions = 'hasPermissions',
  HasReputation = 'hasReputation',
  Id = 'id',
  IsVerified = 'isVerified',
  IsWatching = 'isWatching',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type SearchableColonyContributorAggregationInput = {
  field: SearchableColonyContributorAggregateField;
  name: Scalars['String'];
  type: SearchableAggregateType;
};

export type SearchableColonyContributorConnection = {
  __typename?: 'SearchableColonyContributorConnection';
  aggregateItems: Array<Maybe<SearchableAggregateResult>>;
  items: Array<Maybe<ColonyContributor>>;
  nextToken?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
};

export type SearchableColonyContributorFilterInput = {
  and?: InputMaybe<Array<InputMaybe<SearchableColonyContributorFilterInput>>>;
  colonyAddress?: InputMaybe<SearchableIdFilterInput>;
  colonyReputationPercentage?: InputMaybe<SearchableFloatFilterInput>;
  contributorAddress?: InputMaybe<SearchableIdFilterInput>;
  createdAt?: InputMaybe<SearchableStringFilterInput>;
  hasPermissions?: InputMaybe<SearchableBooleanFilterInput>;
  hasReputation?: InputMaybe<SearchableBooleanFilterInput>;
  id?: InputMaybe<SearchableIdFilterInput>;
  isVerified?: InputMaybe<SearchableBooleanFilterInput>;
  isWatching?: InputMaybe<SearchableBooleanFilterInput>;
  not?: InputMaybe<SearchableColonyContributorFilterInput>;
  or?: InputMaybe<Array<InputMaybe<SearchableColonyContributorFilterInput>>>;
  type?: InputMaybe<SearchableStringFilterInput>;
  updatedAt?: InputMaybe<SearchableStringFilterInput>;
};

export type SearchableColonyContributorSortInput = {
  direction?: InputMaybe<SearchableSortDirection>;
  field?: InputMaybe<SearchableColonyContributorSortableFields>;
};

export enum SearchableColonyContributorSortableFields {
  ColonyAddress = 'colonyAddress',
  ColonyReputationPercentage = 'colonyReputationPercentage',
  ContributorAddress = 'contributorAddress',
  CreatedAt = 'createdAt',
  HasPermissions = 'hasPermissions',
  HasReputation = 'hasReputation',
  Id = 'id',
  IsVerified = 'isVerified',
  IsWatching = 'isWatching',
  UpdatedAt = 'updatedAt'
}

export type SearchableFloatFilterInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  range?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type SearchableIdFilterInput = {
  eq?: InputMaybe<Scalars['ID']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  match?: InputMaybe<Scalars['ID']>;
  matchPhrase?: InputMaybe<Scalars['ID']>;
  matchPhrasePrefix?: InputMaybe<Scalars['ID']>;
  multiMatch?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  range?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  regexp?: InputMaybe<Scalars['ID']>;
  wildcard?: InputMaybe<Scalars['ID']>;
};

export type SearchableIntFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  range?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export enum SearchableSortDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type SearchableStringFilterInput = {
  eq?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  match?: InputMaybe<Scalars['String']>;
  matchPhrase?: InputMaybe<Scalars['String']>;
  matchPhrasePrefix?: InputMaybe<Scalars['String']>;
  multiMatch?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  range?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regexp?: InputMaybe<Scalars['String']>;
  wildcard?: InputMaybe<Scalars['String']>;
};

export type SimpleTarget = {
  __typename?: 'SimpleTarget';
  id: Scalars['String'];
  profile: SimpleTargetProfile;
  walletAddress: Scalars['String'];
};

export type SimpleTargetInput = {
  id: Scalars['String'];
  profile: SimpleTargetProfileInput;
  walletAddress: Scalars['String'];
};

export type SimpleTargetProfile = {
  __typename?: 'SimpleTargetProfile';
  avatarHash?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
};

export type SimpleTargetProfileInput = {
  avatarHash?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
};

/** Variants of sorting methods for a member list */
export enum SortingMethod {
  /** Sort members by highest reputation */
  ByHighestRep = 'BY_HIGHEST_REP',
  /** Sort members by having fewer permissions */
  ByLessPermissions = 'BY_LESS_PERMISSIONS',
  /** Sort members by lowest reputation */
  ByLowestRep = 'BY_LOWEST_REP',
  /** Sort members by having more permissions */
  ByMorePermissions = 'BY_MORE_PERMISSIONS'
}

export type StakedExpenditureParams = {
  __typename?: 'StakedExpenditureParams';
  stakeFraction: Scalars['String'];
};

export type StakedExpenditureParamsInput = {
  stakeFraction: Scalars['String'];
};

/** Staker rewards of a user for a motion */
export type StakerRewards = {
  __typename?: 'StakerRewards';
  /** The user's wallet address */
  address: Scalars['String'];
  /** Whether the voter reward is already claimed or not */
  isClaimed: Scalars['Boolean'];
  /** Rewards associated with the staked sides of a motion */
  rewards: MotionStakeValues;
};

/** Input used to modify the staker rewards of a user for a motion */
export type StakerRewardsInput = {
  /** The user's wallet address */
  address: Scalars['String'];
  /** Whether the voter reward is already claimed or not */
  isClaimed: Scalars['Boolean'];
  /** Rewards associated with the staked sides of a motion */
  rewards: MotionStakeValuesInput;
};

export type StreamingPayment = {
  __typename?: 'StreamingPayment';
  createdAt: Scalars['AWSDateTime'];
  endTime: Scalars['AWSTimestamp'];
  id: Scalars['ID'];
  interval: Scalars['String'];
  metadata?: Maybe<StreamingPaymentMetadata>;
  nativeDomainId: Scalars['Int'];
  nativeId: Scalars['Int'];
  payouts?: Maybe<Array<ExpenditurePayout>>;
  recipientAddress: Scalars['String'];
  startTime: Scalars['AWSTimestamp'];
  updatedAt: Scalars['AWSDateTime'];
};

export enum StreamingPaymentEndCondition {
  FixedTime = 'FIXED_TIME',
  LimitReached = 'LIMIT_REACHED',
  WhenCancelled = 'WHEN_CANCELLED'
}

export type StreamingPaymentMetadata = {
  __typename?: 'StreamingPaymentMetadata';
  createdAt: Scalars['AWSDateTime'];
  endCondition: StreamingPaymentEndCondition;
  id: Scalars['ID'];
  limitAmount?: Maybe<Scalars['String']>;
  updatedAt: Scalars['AWSDateTime'];
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateAnnotation?: Maybe<Annotation>;
  onCreateColony?: Maybe<Colony>;
  onCreateColonyAction?: Maybe<ColonyAction>;
  onCreateColonyActionMetadata?: Maybe<ColonyActionMetadata>;
  onCreateColonyContributor?: Maybe<ColonyContributor>;
  onCreateColonyDecision?: Maybe<ColonyDecision>;
  onCreateColonyExtension?: Maybe<ColonyExtension>;
  onCreateColonyFundsClaim?: Maybe<ColonyFundsClaim>;
  onCreateColonyHistoricRole?: Maybe<ColonyHistoricRole>;
  onCreateColonyMemberInvite?: Maybe<ColonyMemberInvite>;
  onCreateColonyMetadata?: Maybe<ColonyMetadata>;
  onCreateColonyMotion?: Maybe<ColonyMotion>;
  onCreateColonyRole?: Maybe<ColonyRole>;
  onCreateColonyStake?: Maybe<ColonyStake>;
  onCreateColonyTokens?: Maybe<ColonyTokens>;
  onCreateContractEvent?: Maybe<ContractEvent>;
  onCreateContributorReputation?: Maybe<ContributorReputation>;
  onCreateCurrentNetworkInverseFee?: Maybe<CurrentNetworkInverseFee>;
  onCreateCurrentVersion?: Maybe<CurrentVersion>;
  onCreateDomain?: Maybe<Domain>;
  onCreateDomainMetadata?: Maybe<DomainMetadata>;
  onCreateExpenditure?: Maybe<Expenditure>;
  onCreateExpenditureMetadata?: Maybe<ExpenditureMetadata>;
  onCreateExtensionInstallationsCount?: Maybe<ExtensionInstallationsCount>;
  onCreateIngestorStats?: Maybe<IngestorStats>;
  onCreateMotionMessage?: Maybe<MotionMessage>;
  onCreatePrivateBetaInviteCode?: Maybe<PrivateBetaInviteCode>;
  onCreateProfile?: Maybe<Profile>;
  onCreateReputationMiningCycleMetadata?: Maybe<ReputationMiningCycleMetadata>;
  onCreateSafeTransaction?: Maybe<SafeTransaction>;
  onCreateSafeTransactionData?: Maybe<SafeTransactionData>;
  onCreateStreamingPayment?: Maybe<StreamingPayment>;
  onCreateStreamingPaymentMetadata?: Maybe<StreamingPaymentMetadata>;
  onCreateToken?: Maybe<Token>;
  onCreateTransaction?: Maybe<Transaction>;
  onCreateUser?: Maybe<User>;
  onCreateUserStake?: Maybe<UserStake>;
  onCreateUserTokens?: Maybe<UserTokens>;
  onDeleteAnnotation?: Maybe<Annotation>;
  onDeleteColony?: Maybe<Colony>;
  onDeleteColonyAction?: Maybe<ColonyAction>;
  onDeleteColonyActionMetadata?: Maybe<ColonyActionMetadata>;
  onDeleteColonyContributor?: Maybe<ColonyContributor>;
  onDeleteColonyDecision?: Maybe<ColonyDecision>;
  onDeleteColonyExtension?: Maybe<ColonyExtension>;
  onDeleteColonyFundsClaim?: Maybe<ColonyFundsClaim>;
  onDeleteColonyHistoricRole?: Maybe<ColonyHistoricRole>;
  onDeleteColonyMemberInvite?: Maybe<ColonyMemberInvite>;
  onDeleteColonyMetadata?: Maybe<ColonyMetadata>;
  onDeleteColonyMotion?: Maybe<ColonyMotion>;
  onDeleteColonyRole?: Maybe<ColonyRole>;
  onDeleteColonyStake?: Maybe<ColonyStake>;
  onDeleteColonyTokens?: Maybe<ColonyTokens>;
  onDeleteContractEvent?: Maybe<ContractEvent>;
  onDeleteContributorReputation?: Maybe<ContributorReputation>;
  onDeleteCurrentNetworkInverseFee?: Maybe<CurrentNetworkInverseFee>;
  onDeleteCurrentVersion?: Maybe<CurrentVersion>;
  onDeleteDomain?: Maybe<Domain>;
  onDeleteDomainMetadata?: Maybe<DomainMetadata>;
  onDeleteExpenditure?: Maybe<Expenditure>;
  onDeleteExpenditureMetadata?: Maybe<ExpenditureMetadata>;
  onDeleteExtensionInstallationsCount?: Maybe<ExtensionInstallationsCount>;
  onDeleteIngestorStats?: Maybe<IngestorStats>;
  onDeleteMotionMessage?: Maybe<MotionMessage>;
  onDeletePrivateBetaInviteCode?: Maybe<PrivateBetaInviteCode>;
  onDeleteProfile?: Maybe<Profile>;
  onDeleteReputationMiningCycleMetadata?: Maybe<ReputationMiningCycleMetadata>;
  onDeleteSafeTransaction?: Maybe<SafeTransaction>;
  onDeleteSafeTransactionData?: Maybe<SafeTransactionData>;
  onDeleteStreamingPayment?: Maybe<StreamingPayment>;
  onDeleteStreamingPaymentMetadata?: Maybe<StreamingPaymentMetadata>;
  onDeleteToken?: Maybe<Token>;
  onDeleteTransaction?: Maybe<Transaction>;
  onDeleteUser?: Maybe<User>;
  onDeleteUserStake?: Maybe<UserStake>;
  onDeleteUserTokens?: Maybe<UserTokens>;
  onUpdateAnnotation?: Maybe<Annotation>;
  onUpdateColony?: Maybe<Colony>;
  onUpdateColonyAction?: Maybe<ColonyAction>;
  onUpdateColonyActionMetadata?: Maybe<ColonyActionMetadata>;
  onUpdateColonyContributor?: Maybe<ColonyContributor>;
  onUpdateColonyDecision?: Maybe<ColonyDecision>;
  onUpdateColonyExtension?: Maybe<ColonyExtension>;
  onUpdateColonyFundsClaim?: Maybe<ColonyFundsClaim>;
  onUpdateColonyHistoricRole?: Maybe<ColonyHistoricRole>;
  onUpdateColonyMemberInvite?: Maybe<ColonyMemberInvite>;
  onUpdateColonyMetadata?: Maybe<ColonyMetadata>;
  onUpdateColonyMotion?: Maybe<ColonyMotion>;
  onUpdateColonyRole?: Maybe<ColonyRole>;
  onUpdateColonyStake?: Maybe<ColonyStake>;
  onUpdateColonyTokens?: Maybe<ColonyTokens>;
  onUpdateContractEvent?: Maybe<ContractEvent>;
  onUpdateContributorReputation?: Maybe<ContributorReputation>;
  onUpdateCurrentNetworkInverseFee?: Maybe<CurrentNetworkInverseFee>;
  onUpdateCurrentVersion?: Maybe<CurrentVersion>;
  onUpdateDomain?: Maybe<Domain>;
  onUpdateDomainMetadata?: Maybe<DomainMetadata>;
  onUpdateExpenditure?: Maybe<Expenditure>;
  onUpdateExpenditureMetadata?: Maybe<ExpenditureMetadata>;
  onUpdateExtensionInstallationsCount?: Maybe<ExtensionInstallationsCount>;
  onUpdateIngestorStats?: Maybe<IngestorStats>;
  onUpdateMotionMessage?: Maybe<MotionMessage>;
  onUpdatePrivateBetaInviteCode?: Maybe<PrivateBetaInviteCode>;
  onUpdateProfile?: Maybe<Profile>;
  onUpdateReputationMiningCycleMetadata?: Maybe<ReputationMiningCycleMetadata>;
  onUpdateSafeTransaction?: Maybe<SafeTransaction>;
  onUpdateSafeTransactionData?: Maybe<SafeTransactionData>;
  onUpdateStreamingPayment?: Maybe<StreamingPayment>;
  onUpdateStreamingPaymentMetadata?: Maybe<StreamingPaymentMetadata>;
  onUpdateToken?: Maybe<Token>;
  onUpdateTransaction?: Maybe<Transaction>;
  onUpdateUser?: Maybe<User>;
  onUpdateUserStake?: Maybe<UserStake>;
  onUpdateUserTokens?: Maybe<UserTokens>;
};


export type SubscriptionOnCreateAnnotationArgs = {
  filter?: InputMaybe<ModelSubscriptionAnnotationFilterInput>;
};


export type SubscriptionOnCreateColonyArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyFilterInput>;
};


export type SubscriptionOnCreateColonyActionArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyActionFilterInput>;
};


export type SubscriptionOnCreateColonyActionMetadataArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyActionMetadataFilterInput>;
};


export type SubscriptionOnCreateColonyContributorArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyContributorFilterInput>;
};


export type SubscriptionOnCreateColonyDecisionArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyDecisionFilterInput>;
};


export type SubscriptionOnCreateColonyExtensionArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyExtensionFilterInput>;
};


export type SubscriptionOnCreateColonyFundsClaimArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyFundsClaimFilterInput>;
};


export type SubscriptionOnCreateColonyHistoricRoleArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyHistoricRoleFilterInput>;
};


export type SubscriptionOnCreateColonyMemberInviteArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyMemberInviteFilterInput>;
};


export type SubscriptionOnCreateColonyMetadataArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyMetadataFilterInput>;
};


export type SubscriptionOnCreateColonyMotionArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyMotionFilterInput>;
};


export type SubscriptionOnCreateColonyRoleArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyRoleFilterInput>;
};


export type SubscriptionOnCreateColonyStakeArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyStakeFilterInput>;
};


export type SubscriptionOnCreateColonyTokensArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyTokensFilterInput>;
};


export type SubscriptionOnCreateContractEventArgs = {
  filter?: InputMaybe<ModelSubscriptionContractEventFilterInput>;
};


export type SubscriptionOnCreateContributorReputationArgs = {
  filter?: InputMaybe<ModelSubscriptionContributorReputationFilterInput>;
};


export type SubscriptionOnCreateCurrentNetworkInverseFeeArgs = {
  filter?: InputMaybe<ModelSubscriptionCurrentNetworkInverseFeeFilterInput>;
};


export type SubscriptionOnCreateCurrentVersionArgs = {
  filter?: InputMaybe<ModelSubscriptionCurrentVersionFilterInput>;
};


export type SubscriptionOnCreateDomainArgs = {
  filter?: InputMaybe<ModelSubscriptionDomainFilterInput>;
};


export type SubscriptionOnCreateDomainMetadataArgs = {
  filter?: InputMaybe<ModelSubscriptionDomainMetadataFilterInput>;
};


export type SubscriptionOnCreateExpenditureArgs = {
  filter?: InputMaybe<ModelSubscriptionExpenditureFilterInput>;
};


export type SubscriptionOnCreateExpenditureMetadataArgs = {
  filter?: InputMaybe<ModelSubscriptionExpenditureMetadataFilterInput>;
};


export type SubscriptionOnCreateExtensionInstallationsCountArgs = {
  filter?: InputMaybe<ModelSubscriptionExtensionInstallationsCountFilterInput>;
};


export type SubscriptionOnCreateIngestorStatsArgs = {
  filter?: InputMaybe<ModelSubscriptionIngestorStatsFilterInput>;
};


export type SubscriptionOnCreateMotionMessageArgs = {
  filter?: InputMaybe<ModelSubscriptionMotionMessageFilterInput>;
};


export type SubscriptionOnCreatePrivateBetaInviteCodeArgs = {
  filter?: InputMaybe<ModelSubscriptionPrivateBetaInviteCodeFilterInput>;
};


export type SubscriptionOnCreateProfileArgs = {
  filter?: InputMaybe<ModelSubscriptionProfileFilterInput>;
};


export type SubscriptionOnCreateReputationMiningCycleMetadataArgs = {
  filter?: InputMaybe<ModelSubscriptionReputationMiningCycleMetadataFilterInput>;
};


export type SubscriptionOnCreateSafeTransactionArgs = {
  filter?: InputMaybe<ModelSubscriptionSafeTransactionFilterInput>;
};


export type SubscriptionOnCreateSafeTransactionDataArgs = {
  filter?: InputMaybe<ModelSubscriptionSafeTransactionDataFilterInput>;
};


export type SubscriptionOnCreateStreamingPaymentArgs = {
  filter?: InputMaybe<ModelSubscriptionStreamingPaymentFilterInput>;
};


export type SubscriptionOnCreateStreamingPaymentMetadataArgs = {
  filter?: InputMaybe<ModelSubscriptionStreamingPaymentMetadataFilterInput>;
};


export type SubscriptionOnCreateTokenArgs = {
  filter?: InputMaybe<ModelSubscriptionTokenFilterInput>;
};


export type SubscriptionOnCreateTransactionArgs = {
  filter?: InputMaybe<ModelSubscriptionTransactionFilterInput>;
};


export type SubscriptionOnCreateUserArgs = {
  filter?: InputMaybe<ModelSubscriptionUserFilterInput>;
};


export type SubscriptionOnCreateUserStakeArgs = {
  filter?: InputMaybe<ModelSubscriptionUserStakeFilterInput>;
};


export type SubscriptionOnCreateUserTokensArgs = {
  filter?: InputMaybe<ModelSubscriptionUserTokensFilterInput>;
};


export type SubscriptionOnDeleteAnnotationArgs = {
  filter?: InputMaybe<ModelSubscriptionAnnotationFilterInput>;
};


export type SubscriptionOnDeleteColonyArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyFilterInput>;
};


export type SubscriptionOnDeleteColonyActionArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyActionFilterInput>;
};


export type SubscriptionOnDeleteColonyActionMetadataArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyActionMetadataFilterInput>;
};


export type SubscriptionOnDeleteColonyContributorArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyContributorFilterInput>;
};


export type SubscriptionOnDeleteColonyDecisionArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyDecisionFilterInput>;
};


export type SubscriptionOnDeleteColonyExtensionArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyExtensionFilterInput>;
};


export type SubscriptionOnDeleteColonyFundsClaimArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyFundsClaimFilterInput>;
};


export type SubscriptionOnDeleteColonyHistoricRoleArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyHistoricRoleFilterInput>;
};


export type SubscriptionOnDeleteColonyMemberInviteArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyMemberInviteFilterInput>;
};


export type SubscriptionOnDeleteColonyMetadataArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyMetadataFilterInput>;
};


export type SubscriptionOnDeleteColonyMotionArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyMotionFilterInput>;
};


export type SubscriptionOnDeleteColonyRoleArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyRoleFilterInput>;
};


export type SubscriptionOnDeleteColonyStakeArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyStakeFilterInput>;
};


export type SubscriptionOnDeleteColonyTokensArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyTokensFilterInput>;
};


export type SubscriptionOnDeleteContractEventArgs = {
  filter?: InputMaybe<ModelSubscriptionContractEventFilterInput>;
};


export type SubscriptionOnDeleteContributorReputationArgs = {
  filter?: InputMaybe<ModelSubscriptionContributorReputationFilterInput>;
};


export type SubscriptionOnDeleteCurrentNetworkInverseFeeArgs = {
  filter?: InputMaybe<ModelSubscriptionCurrentNetworkInverseFeeFilterInput>;
};


export type SubscriptionOnDeleteCurrentVersionArgs = {
  filter?: InputMaybe<ModelSubscriptionCurrentVersionFilterInput>;
};


export type SubscriptionOnDeleteDomainArgs = {
  filter?: InputMaybe<ModelSubscriptionDomainFilterInput>;
};


export type SubscriptionOnDeleteDomainMetadataArgs = {
  filter?: InputMaybe<ModelSubscriptionDomainMetadataFilterInput>;
};


export type SubscriptionOnDeleteExpenditureArgs = {
  filter?: InputMaybe<ModelSubscriptionExpenditureFilterInput>;
};


export type SubscriptionOnDeleteExpenditureMetadataArgs = {
  filter?: InputMaybe<ModelSubscriptionExpenditureMetadataFilterInput>;
};


export type SubscriptionOnDeleteExtensionInstallationsCountArgs = {
  filter?: InputMaybe<ModelSubscriptionExtensionInstallationsCountFilterInput>;
};


export type SubscriptionOnDeleteIngestorStatsArgs = {
  filter?: InputMaybe<ModelSubscriptionIngestorStatsFilterInput>;
};


export type SubscriptionOnDeleteMotionMessageArgs = {
  filter?: InputMaybe<ModelSubscriptionMotionMessageFilterInput>;
};


export type SubscriptionOnDeletePrivateBetaInviteCodeArgs = {
  filter?: InputMaybe<ModelSubscriptionPrivateBetaInviteCodeFilterInput>;
};


export type SubscriptionOnDeleteProfileArgs = {
  filter?: InputMaybe<ModelSubscriptionProfileFilterInput>;
};


export type SubscriptionOnDeleteReputationMiningCycleMetadataArgs = {
  filter?: InputMaybe<ModelSubscriptionReputationMiningCycleMetadataFilterInput>;
};


export type SubscriptionOnDeleteSafeTransactionArgs = {
  filter?: InputMaybe<ModelSubscriptionSafeTransactionFilterInput>;
};


export type SubscriptionOnDeleteSafeTransactionDataArgs = {
  filter?: InputMaybe<ModelSubscriptionSafeTransactionDataFilterInput>;
};


export type SubscriptionOnDeleteStreamingPaymentArgs = {
  filter?: InputMaybe<ModelSubscriptionStreamingPaymentFilterInput>;
};


export type SubscriptionOnDeleteStreamingPaymentMetadataArgs = {
  filter?: InputMaybe<ModelSubscriptionStreamingPaymentMetadataFilterInput>;
};


export type SubscriptionOnDeleteTokenArgs = {
  filter?: InputMaybe<ModelSubscriptionTokenFilterInput>;
};


export type SubscriptionOnDeleteTransactionArgs = {
  filter?: InputMaybe<ModelSubscriptionTransactionFilterInput>;
};


export type SubscriptionOnDeleteUserArgs = {
  filter?: InputMaybe<ModelSubscriptionUserFilterInput>;
};


export type SubscriptionOnDeleteUserStakeArgs = {
  filter?: InputMaybe<ModelSubscriptionUserStakeFilterInput>;
};


export type SubscriptionOnDeleteUserTokensArgs = {
  filter?: InputMaybe<ModelSubscriptionUserTokensFilterInput>;
};


export type SubscriptionOnUpdateAnnotationArgs = {
  filter?: InputMaybe<ModelSubscriptionAnnotationFilterInput>;
};


export type SubscriptionOnUpdateColonyArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyFilterInput>;
};


export type SubscriptionOnUpdateColonyActionArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyActionFilterInput>;
};


export type SubscriptionOnUpdateColonyActionMetadataArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyActionMetadataFilterInput>;
};


export type SubscriptionOnUpdateColonyContributorArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyContributorFilterInput>;
};


export type SubscriptionOnUpdateColonyDecisionArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyDecisionFilterInput>;
};


export type SubscriptionOnUpdateColonyExtensionArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyExtensionFilterInput>;
};


export type SubscriptionOnUpdateColonyFundsClaimArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyFundsClaimFilterInput>;
};


export type SubscriptionOnUpdateColonyHistoricRoleArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyHistoricRoleFilterInput>;
};


export type SubscriptionOnUpdateColonyMemberInviteArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyMemberInviteFilterInput>;
};


export type SubscriptionOnUpdateColonyMetadataArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyMetadataFilterInput>;
};


export type SubscriptionOnUpdateColonyMotionArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyMotionFilterInput>;
};


export type SubscriptionOnUpdateColonyRoleArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyRoleFilterInput>;
};


export type SubscriptionOnUpdateColonyStakeArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyStakeFilterInput>;
};


export type SubscriptionOnUpdateColonyTokensArgs = {
  filter?: InputMaybe<ModelSubscriptionColonyTokensFilterInput>;
};


export type SubscriptionOnUpdateContractEventArgs = {
  filter?: InputMaybe<ModelSubscriptionContractEventFilterInput>;
};


export type SubscriptionOnUpdateContributorReputationArgs = {
  filter?: InputMaybe<ModelSubscriptionContributorReputationFilterInput>;
};


export type SubscriptionOnUpdateCurrentNetworkInverseFeeArgs = {
  filter?: InputMaybe<ModelSubscriptionCurrentNetworkInverseFeeFilterInput>;
};


export type SubscriptionOnUpdateCurrentVersionArgs = {
  filter?: InputMaybe<ModelSubscriptionCurrentVersionFilterInput>;
};


export type SubscriptionOnUpdateDomainArgs = {
  filter?: InputMaybe<ModelSubscriptionDomainFilterInput>;
};


export type SubscriptionOnUpdateDomainMetadataArgs = {
  filter?: InputMaybe<ModelSubscriptionDomainMetadataFilterInput>;
};


export type SubscriptionOnUpdateExpenditureArgs = {
  filter?: InputMaybe<ModelSubscriptionExpenditureFilterInput>;
};


export type SubscriptionOnUpdateExpenditureMetadataArgs = {
  filter?: InputMaybe<ModelSubscriptionExpenditureMetadataFilterInput>;
};


export type SubscriptionOnUpdateExtensionInstallationsCountArgs = {
  filter?: InputMaybe<ModelSubscriptionExtensionInstallationsCountFilterInput>;
};


export type SubscriptionOnUpdateIngestorStatsArgs = {
  filter?: InputMaybe<ModelSubscriptionIngestorStatsFilterInput>;
};


export type SubscriptionOnUpdateMotionMessageArgs = {
  filter?: InputMaybe<ModelSubscriptionMotionMessageFilterInput>;
};


export type SubscriptionOnUpdatePrivateBetaInviteCodeArgs = {
  filter?: InputMaybe<ModelSubscriptionPrivateBetaInviteCodeFilterInput>;
};


export type SubscriptionOnUpdateProfileArgs = {
  filter?: InputMaybe<ModelSubscriptionProfileFilterInput>;
};


export type SubscriptionOnUpdateReputationMiningCycleMetadataArgs = {
  filter?: InputMaybe<ModelSubscriptionReputationMiningCycleMetadataFilterInput>;
};


export type SubscriptionOnUpdateSafeTransactionArgs = {
  filter?: InputMaybe<ModelSubscriptionSafeTransactionFilterInput>;
};


export type SubscriptionOnUpdateSafeTransactionDataArgs = {
  filter?: InputMaybe<ModelSubscriptionSafeTransactionDataFilterInput>;
};


export type SubscriptionOnUpdateStreamingPaymentArgs = {
  filter?: InputMaybe<ModelSubscriptionStreamingPaymentFilterInput>;
};


export type SubscriptionOnUpdateStreamingPaymentMetadataArgs = {
  filter?: InputMaybe<ModelSubscriptionStreamingPaymentMetadataFilterInput>;
};


export type SubscriptionOnUpdateTokenArgs = {
  filter?: InputMaybe<ModelSubscriptionTokenFilterInput>;
};


export type SubscriptionOnUpdateTransactionArgs = {
  filter?: InputMaybe<ModelSubscriptionTransactionFilterInput>;
};


export type SubscriptionOnUpdateUserArgs = {
  filter?: InputMaybe<ModelSubscriptionUserFilterInput>;
};


export type SubscriptionOnUpdateUserStakeArgs = {
  filter?: InputMaybe<ModelSubscriptionUserStakeFilterInput>;
};


export type SubscriptionOnUpdateUserTokensArgs = {
  filter?: InputMaybe<ModelSubscriptionUserTokensFilterInput>;
};

/** Represents the currencies/tokens that users' balances can be converted to (for display purposes) */
export enum SupportedCurrencies {
  Brl = 'BRL',
  Cad = 'CAD',
  Clny = 'CLNY',
  Eth = 'ETH',
  Eur = 'EUR',
  Gbp = 'GBP',
  Inr = 'INR',
  Jpy = 'JPY',
  Krw = 'KRW',
  Usd = 'USD'
}

/** Represents an ERC20-compatible token that is used by Colonies and users */
export type Token = {
  __typename?: 'Token';
  /** URL of the token's avatar image (logo) */
  avatar?: Maybe<Scalars['String']>;
  /** Metadata related to the chain of the token */
  chainMetadata: ChainMetadata;
  colonies?: Maybe<ModelColonyTokensConnection>;
  /** Timestamp of the token model's creation in the database */
  createdAt: Scalars['AWSDateTime'];
  /** Decimal precision of the token */
  decimals: Scalars['Int'];
  /** Unique identifier for the token (contract address) */
  id: Scalars['ID'];
  /** Name of the token */
  name: Scalars['String'];
  /** Symbol of the token */
  symbol: Scalars['String'];
  /** URL of the token's thumbnail image (Small logo) */
  thumbnail?: Maybe<Scalars['String']>;
  /** Type of the token. See `TokenType` for more information */
  type?: Maybe<TokenType>;
  updatedAt: Scalars['AWSDateTime'];
  users?: Maybe<ModelUserTokensConnection>;
};


/** Represents an ERC20-compatible token that is used by Colonies and users */
export type TokenColoniesArgs = {
  filter?: InputMaybe<ModelColonyTokensFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Represents an ERC20-compatible token that is used by Colonies and users */
export type TokenUsersArgs = {
  filter?: InputMaybe<ModelUserTokensFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

/** Input data for fetching a token's information from DB or chain */
export type TokenFromEverywhereArguments = {
  /** The URL of the token image */
  avatar?: InputMaybe<Scalars['String']>;
  network?: InputMaybe<Scalars['String']>;
  /** The URL of the token thumbnail image */
  thumbnail?: InputMaybe<Scalars['String']>;
  /** Address of the token on the blockchain */
  tokenAddress: Scalars['String'];
};

/** Return type for tokens gotten from DB or from chain */
export type TokenFromEverywhereReturn = {
  __typename?: 'TokenFromEverywhereReturn';
  /** List of tokens found */
  items?: Maybe<Array<Maybe<Token>>>;
};

/** Input type for specifying a Token */
export type TokenInput = {
  /** Unique identifier for the Token */
  id: Scalars['ID'];
};

/**
 * Variants of different token types a Colony can use
 * As Colonies can use multiple tokens and even own tokens (BYOT), we need to differentiate
 */
export enum TokenType {
  /** The native token of the Chain used (e.g. ETH on mainnet or xDAI on Gnosis-Chain) */
  ChainNative = 'CHAIN_NATIVE',
  /** A (ERC20-compatible) token that was deployed with Colony. It has a few more features, like minting through the Colony itself */
  Colony = 'COLONY',
  /** An ERC20-compatible token */
  Erc20 = 'ERC20'
}

/** Represents a transaction made in a colony by a user */
export type Transaction = {
  __typename?: 'Transaction';
  /** The block hash of the transaction */
  blockHash?: Maybe<Scalars['String']>;
  /** The block number of the transaction */
  blockNumber?: Maybe<Scalars['Int']>;
  /** The colony the transaction was made in */
  colonyAddress: Scalars['ID'];
  /** The contract the transaction was made on */
  context: ClientType;
  /** Time the transaction was created */
  createdAt: Scalars['AWSDateTime'];
  /** Is the transaction cancelled? */
  deleted?: Maybe<Scalars['Boolean']>;
  /** A contract address associated with a successful transaction */
  deployedContractAddress?: Maybe<Scalars['String']>;
  /** The error associated with the transaction, if any */
  error?: Maybe<TransactionError>;
  /** Event data associated with a successful transaction */
  eventData?: Maybe<Scalars['String']>;
  /** The sender of the transaction */
  from: Scalars['ID'];
  /** The transaction's gas limit */
  gasLimit?: Maybe<Scalars['String']>;
  /** The transaction's gas price */
  gasPrice?: Maybe<Scalars['String']>;
  /** The group to which the transaction belongs, if any */
  group?: Maybe<TransactionGroup>;
  /** The id of the group to which the transaction belongs, if any */
  groupId?: Maybe<Scalars['ID']>;
  /** The transaction hash */
  hash?: Maybe<Scalars['String']>;
  /** Transaction id */
  id: Scalars['ID'];
  /** An identifier for the transaction */
  identifier?: Maybe<Scalars['String']>;
  /** True if a related transaction is loading */
  loadingRelated?: Maybe<Scalars['Boolean']>;
  /** True if the transaction is a metatransaction */
  metatransaction: Scalars['Boolean'];
  /** Context in which method is used e.g. setOneTxRole */
  methodContext?: Maybe<Scalars['String']>;
  /** The name of the contract method used */
  methodName: Scalars['String'];
  /** Options associated with the transaction */
  options?: Maybe<Scalars['String']>;
  /** The params the transaction was called with */
  params?: Maybe<Scalars['String']>;
  /** Transaction receipt */
  receipt?: Maybe<Scalars['String']>;
  /** The current status of the transaction */
  status: TransactionStatus;
  /** A title to show in the UI */
  title?: Maybe<Scalars['String']>;
  /** Title values for FormatJS interpolation */
  titleValues?: Maybe<Scalars['String']>;
  updatedAt: Scalars['AWSDateTime'];
};

export type TransactionError = {
  __typename?: 'TransactionError';
  message: Scalars['String'];
  type: TransactionErrors;
};

export type TransactionErrorInput = {
  message: Scalars['String'];
  type: TransactionErrors;
};

export enum TransactionErrors {
  Estimate = 'ESTIMATE',
  EventData = 'EVENT_DATA',
  Receipt = 'RECEIPT',
  Send = 'SEND',
  Unsuccessful = 'UNSUCCESSFUL'
}

export type TransactionGroup = {
  __typename?: 'TransactionGroup';
  description?: Maybe<Scalars['String']>;
  descriptionValues?: Maybe<Scalars['String']>;
  groupId: Scalars['String'];
  id: Scalars['String'];
  index: Scalars['Int'];
  key: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  titleValues?: Maybe<Scalars['String']>;
};

export type TransactionGroupInput = {
  description?: InputMaybe<Scalars['String']>;
  descriptionValues?: InputMaybe<Scalars['String']>;
  groupId: Scalars['String'];
  id: Scalars['String'];
  index: Scalars['Int'];
  key: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  titleValues?: InputMaybe<Scalars['String']>;
};

export enum TransactionStatus {
  Created = 'CREATED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Ready = 'READY',
  Succeeded = 'SUCCEEDED'
}

export type UpdateAnnotationInput = {
  actionId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  ipfsHash?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
};

export type UpdateColonyActionInput = {
  amount?: InputMaybe<Scalars['String']>;
  annotationId?: InputMaybe<Scalars['ID']>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  colonyActionsId?: InputMaybe<Scalars['ID']>;
  colonyDecisionId?: InputMaybe<Scalars['ID']>;
  colonyId?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  expenditureId?: InputMaybe<Scalars['ID']>;
  expenditureSlotChanges?: InputMaybe<ExpenditureSlotChangesInput>;
  fromDomainId?: InputMaybe<Scalars['ID']>;
  fromPotId?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  individualEvents?: InputMaybe<Scalars['String']>;
  initiatorAddress?: InputMaybe<Scalars['ID']>;
  isMotion?: InputMaybe<Scalars['Boolean']>;
  isMotionFinalization?: InputMaybe<Scalars['Boolean']>;
  members?: InputMaybe<Array<Scalars['ID']>>;
  motionDomainId?: InputMaybe<Scalars['Int']>;
  motionId?: InputMaybe<Scalars['ID']>;
  networkFee?: InputMaybe<Scalars['String']>;
  newColonyVersion?: InputMaybe<Scalars['Int']>;
  paymentId?: InputMaybe<Scalars['Int']>;
  payments?: InputMaybe<Array<PaymentInput>>;
  pendingColonyMetadataId?: InputMaybe<Scalars['ID']>;
  pendingDomainMetadataId?: InputMaybe<Scalars['ID']>;
  recipientAddress?: InputMaybe<Scalars['ID']>;
  roles?: InputMaybe<ColonyActionRolesInput>;
  rootHash?: InputMaybe<Scalars['String']>;
  showInActionsList?: InputMaybe<Scalars['Boolean']>;
  toDomainId?: InputMaybe<Scalars['ID']>;
  toPotId?: InputMaybe<Scalars['Int']>;
  tokenAddress?: InputMaybe<Scalars['ID']>;
  type?: InputMaybe<ColonyActionType>;
};

export type UpdateColonyActionMetadataInput = {
  customTitle?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type UpdateColonyContributorInput = {
  colonyAddress?: InputMaybe<Scalars['ID']>;
  colonyReputationPercentage?: InputMaybe<Scalars['Float']>;
  contributorAddress?: InputMaybe<Scalars['ID']>;
  hasPermissions?: InputMaybe<Scalars['Boolean']>;
  hasReputation?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  isVerified?: InputMaybe<Scalars['Boolean']>;
  isWatching?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<ContributorType>;
};

export type UpdateColonyDecisionInput = {
  actionId?: InputMaybe<Scalars['ID']>;
  colonyAddress?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  motionDomainId?: InputMaybe<Scalars['Int']>;
  showInDecisionsList?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  walletAddress?: InputMaybe<Scalars['String']>;
};

export type UpdateColonyExtensionInput = {
  colonyId?: InputMaybe<Scalars['ID']>;
  hash?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  installedAt?: InputMaybe<Scalars['AWSTimestamp']>;
  installedBy?: InputMaybe<Scalars['String']>;
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  isDeprecated?: InputMaybe<Scalars['Boolean']>;
  isInitialized?: InputMaybe<Scalars['Boolean']>;
  params?: InputMaybe<ExtensionParamsInput>;
  version?: InputMaybe<Scalars['Int']>;
};

export type UpdateColonyFundsClaimInput = {
  amount?: InputMaybe<Scalars['String']>;
  colonyFundsClaimTokenId?: InputMaybe<Scalars['ID']>;
  colonyFundsClaimsId?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  createdAtBlock?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  isClaimed?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateColonyHistoricRoleInput = {
  blockNumber?: InputMaybe<Scalars['Int']>;
  colonyId?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  domainId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  role_0?: InputMaybe<Scalars['Boolean']>;
  role_1?: InputMaybe<Scalars['Boolean']>;
  role_2?: InputMaybe<Scalars['Boolean']>;
  role_3?: InputMaybe<Scalars['Boolean']>;
  role_5?: InputMaybe<Scalars['Boolean']>;
  role_6?: InputMaybe<Scalars['Boolean']>;
  targetAddress?: InputMaybe<Scalars['ID']>;
  type?: InputMaybe<Scalars['String']>;
};

export type UpdateColonyInput = {
  balances?: InputMaybe<ColonyBalancesInput>;
  chainFundsClaim?: InputMaybe<ColonyChainFundsClaimInput>;
  chainMetadata?: InputMaybe<ChainMetadataInput>;
  colonyMemberInviteCode?: InputMaybe<Scalars['ID']>;
  expendituresGlobalClaimDelay?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  lastUpdatedContributorsWithReputation?: InputMaybe<Scalars['AWSDateTime']>;
  motionsWithUnclaimedStakes?: InputMaybe<Array<ColonyUnclaimedStakeInput>>;
  name?: InputMaybe<Scalars['String']>;
  nativeTokenId?: InputMaybe<Scalars['ID']>;
  private?: InputMaybe<Scalars['Boolean']>;
  reputation?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ColonyStatusInput>;
  type?: InputMaybe<ColonyType>;
  version?: InputMaybe<Scalars['Int']>;
};

export type UpdateColonyMemberInviteInput = {
  colonyId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  invitesRemaining?: InputMaybe<Scalars['Int']>;
};

export type UpdateColonyMetadataInput = {
  avatar?: InputMaybe<Scalars['String']>;
  changelog?: InputMaybe<Array<ColonyMetadataChangelogInput>>;
  description?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  etherealData?: InputMaybe<ColonyMetadataEtherealDataInput>;
  externalLinks?: InputMaybe<Array<ExternalLinkInput>>;
  id: Scalars['ID'];
  modifiedTokenAddresses?: InputMaybe<PendingModifiedTokenAddressesInput>;
  objective?: InputMaybe<ColonyObjectiveInput>;
  safes?: InputMaybe<Array<SafeInput>>;
  thumbnail?: InputMaybe<Scalars['String']>;
};

export type UpdateColonyMotionInput = {
  createdBy?: InputMaybe<Scalars['String']>;
  editedExpenditureSlots?: InputMaybe<Array<ExpenditureSlotInput>>;
  expenditureFunding?: InputMaybe<Array<ExpenditureFundingItemInput>>;
  expenditureId?: InputMaybe<Scalars['ID']>;
  expenditureSlotId?: InputMaybe<Scalars['Int']>;
  gasEstimate?: InputMaybe<Scalars['String']>;
  hasObjection?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  isDecision?: InputMaybe<Scalars['Boolean']>;
  isFinalized?: InputMaybe<Scalars['Boolean']>;
  motionDomainId?: InputMaybe<Scalars['ID']>;
  motionStakes?: InputMaybe<MotionStakesInput>;
  motionStateHistory?: InputMaybe<MotionStateHistoryInput>;
  nativeMotionDomainId?: InputMaybe<Scalars['String']>;
  nativeMotionId?: InputMaybe<Scalars['String']>;
  objectionAnnotationId?: InputMaybe<Scalars['ID']>;
  remainingStakes?: InputMaybe<Array<Scalars['String']>>;
  repSubmitted?: InputMaybe<Scalars['String']>;
  requiredStake?: InputMaybe<Scalars['String']>;
  revealedVotes?: InputMaybe<MotionStakesInput>;
  skillRep?: InputMaybe<Scalars['String']>;
  stakerRewards?: InputMaybe<Array<StakerRewardsInput>>;
  transactionHash?: InputMaybe<Scalars['ID']>;
  userMinStake?: InputMaybe<Scalars['String']>;
  usersStakes?: InputMaybe<Array<UserMotionStakesInput>>;
  voterRecord?: InputMaybe<Array<VoterRecordInput>>;
};

export type UpdateColonyRoleInput = {
  colonyAddress?: InputMaybe<Scalars['ID']>;
  colonyRolesId?: InputMaybe<Scalars['ID']>;
  domainId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  latestBlock?: InputMaybe<Scalars['Int']>;
  role_0?: InputMaybe<Scalars['Boolean']>;
  role_1?: InputMaybe<Scalars['Boolean']>;
  role_2?: InputMaybe<Scalars['Boolean']>;
  role_3?: InputMaybe<Scalars['Boolean']>;
  role_5?: InputMaybe<Scalars['Boolean']>;
  role_6?: InputMaybe<Scalars['Boolean']>;
  targetAddress?: InputMaybe<Scalars['ID']>;
};

export type UpdateColonyStakeInput = {
  colonyId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  totalAmount?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type UpdateColonyTokensInput = {
  colonyID?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  tokenID?: InputMaybe<Scalars['ID']>;
};

export type UpdateContractEventInput = {
  agent?: InputMaybe<Scalars['String']>;
  chainMetadata?: InputMaybe<ChainMetadataInput>;
  contractEventColonyId?: InputMaybe<Scalars['ID']>;
  contractEventDomainId?: InputMaybe<Scalars['ID']>;
  contractEventTokenId?: InputMaybe<Scalars['ID']>;
  contractEventUserId?: InputMaybe<Scalars['ID']>;
  encodedArguments?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  signature?: InputMaybe<Scalars['String']>;
  target?: InputMaybe<Scalars['String']>;
};

export type UpdateContributorReputationInput = {
  colonyAddress?: InputMaybe<Scalars['ID']>;
  contributorAddress?: InputMaybe<Scalars['ID']>;
  domainId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  reputationPercentage?: InputMaybe<Scalars['Float']>;
  reputationRaw?: InputMaybe<Scalars['String']>;
};

export type UpdateContributorsWithReputationInput = {
  /** The colony address */
  colonyAddress?: InputMaybe<Scalars['String']>;
};

export type UpdateCurrentNetworkInverseFeeInput = {
  id: Scalars['ID'];
  inverseFee?: InputMaybe<Scalars['String']>;
};

export type UpdateCurrentVersionInput = {
  id: Scalars['ID'];
  key?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['Int']>;
};

export type UpdateDomainInput = {
  colonyId?: InputMaybe<Scalars['ID']>;
  id: Scalars['ID'];
  isRoot?: InputMaybe<Scalars['Boolean']>;
  nativeFundingPotId?: InputMaybe<Scalars['Int']>;
  nativeId?: InputMaybe<Scalars['Int']>;
  nativeSkillId?: InputMaybe<Scalars['String']>;
  reputation?: InputMaybe<Scalars['String']>;
  reputationPercentage?: InputMaybe<Scalars['String']>;
};

export type UpdateDomainMetadataInput = {
  changelog?: InputMaybe<Array<DomainMetadataChangelogInput>>;
  color?: InputMaybe<DomainColor>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateExpenditureInput = {
  balances?: InputMaybe<Array<ExpenditureBalanceInput>>;
  colonyId?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  finalizedAt?: InputMaybe<Scalars['AWSTimestamp']>;
  firstEditTransactionHash?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  isStaked?: InputMaybe<Scalars['Boolean']>;
  nativeDomainId?: InputMaybe<Scalars['Int']>;
  nativeFundingPotId?: InputMaybe<Scalars['Int']>;
  nativeId?: InputMaybe<Scalars['Int']>;
  ownerAddress?: InputMaybe<Scalars['ID']>;
  slots?: InputMaybe<Array<ExpenditureSlotInput>>;
  status?: InputMaybe<ExpenditureStatus>;
  type?: InputMaybe<ExpenditureType>;
  userStakeId?: InputMaybe<Scalars['ID']>;
};

export type UpdateExpenditureMetadataInput = {
  fundFromDomainNativeId?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  stages?: InputMaybe<Array<ExpenditureStageInput>>;
};

/**
 * Input data for updating an extension's information within a Colony, based on the Colony ID and extension hash
 * The hash is generated like so: `keccak256(toUtf8Bytes(extensionName))`, where `extensionName` is the name of the extension contract file in the Colony Network
 */
export type UpdateExtensionByColonyAndHashInput = {
  /** The unique identifier for the Colony */
  colonyId: Scalars['ID'];
  /** The hash of the extension to be updated */
  hash: Scalars['String'];
  /** The timestamp when the extension was installed */
  installedAt?: InputMaybe<Scalars['AWSTimestamp']>;
  /** The Ethereum address of the user who installed the extension */
  installedBy?: InputMaybe<Scalars['String']>;
  /** A flag to indicate whether the extension is deleted */
  isDeleted?: InputMaybe<Scalars['Boolean']>;
  /** A flag to indicate whether the extension is deprecated */
  isDeprecated?: InputMaybe<Scalars['Boolean']>;
  /** A flag to indicate whether the extension is initialized */
  isInitialized?: InputMaybe<Scalars['Boolean']>;
  /** The version of the extension */
  version?: InputMaybe<Scalars['Int']>;
};

export type UpdateExtensionInstallationsCountInput = {
  id: Scalars['ID'];
  oneTxPayment?: InputMaybe<Scalars['Int']>;
  reputationWeighted?: InputMaybe<Scalars['Int']>;
  stagedExpenditure?: InputMaybe<Scalars['Int']>;
  stakedExpenditure?: InputMaybe<Scalars['Int']>;
  streamingPayments?: InputMaybe<Scalars['Int']>;
};

export type UpdateIngestorStatsInput = {
  id: Scalars['ID'];
  value?: InputMaybe<Scalars['String']>;
};

export type UpdateMotionMessageInput = {
  amount?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
  initiatorAddress?: InputMaybe<Scalars['ID']>;
  messageKey?: InputMaybe<Scalars['String']>;
  motionId?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  vote?: InputMaybe<Scalars['String']>;
};

export type UpdatePrivateBetaInviteCodeInput = {
  id: Scalars['ID'];
  shareableInvites?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type UpdateProfileInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  displayName?: InputMaybe<Scalars['String']>;
  displayNameChanged?: InputMaybe<Scalars['AWSDateTime']>;
  email?: InputMaybe<Scalars['AWSEmail']>;
  id: Scalars['ID'];
  location?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<ProfileMetadataInput>;
  preferredCurrency?: InputMaybe<SupportedCurrencies>;
  thumbnail?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['AWSURL']>;
};

export type UpdateReputationMiningCycleMetadataInput = {
  id: Scalars['ID'];
  lastCompletedAt?: InputMaybe<Scalars['AWSDateTime']>;
};

export type UpdateSafeTransactionDataInput = {
  abi?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['String']>;
  contract?: InputMaybe<SimpleTargetInput>;
  contractFunction?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<Scalars['String']>;
  functionParams?: InputMaybe<Array<InputMaybe<FunctionParamInput>>>;
  id: Scalars['ID'];
  nft?: InputMaybe<NftInput>;
  nftData?: InputMaybe<NftDataInput>;
  rawAmount?: InputMaybe<Scalars['String']>;
  recipient?: InputMaybe<SimpleTargetInput>;
  tokenAddress?: InputMaybe<Scalars['ID']>;
  transactionHash?: InputMaybe<Scalars['ID']>;
  transactionType?: InputMaybe<SafeTransactionType>;
};

export type UpdateSafeTransactionInput = {
  id: Scalars['ID'];
  safe?: InputMaybe<SafeInput>;
};

export type UpdateStreamingPaymentInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  endTime?: InputMaybe<Scalars['AWSTimestamp']>;
  id: Scalars['ID'];
  interval?: InputMaybe<Scalars['String']>;
  nativeDomainId?: InputMaybe<Scalars['Int']>;
  nativeId?: InputMaybe<Scalars['Int']>;
  payouts?: InputMaybe<Array<ExpenditurePayoutInput>>;
  recipientAddress?: InputMaybe<Scalars['String']>;
  startTime?: InputMaybe<Scalars['AWSTimestamp']>;
};

export type UpdateStreamingPaymentMetadataInput = {
  endCondition?: InputMaybe<StreamingPaymentEndCondition>;
  id: Scalars['ID'];
  limitAmount?: InputMaybe<Scalars['String']>;
};

export type UpdateTokenInput = {
  avatar?: InputMaybe<Scalars['String']>;
  chainMetadata?: InputMaybe<ChainMetadataInput>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  decimals?: InputMaybe<Scalars['Int']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TokenType>;
};

export type UpdateTransactionInput = {
  blockHash?: InputMaybe<Scalars['String']>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  colonyAddress?: InputMaybe<Scalars['ID']>;
  context?: InputMaybe<ClientType>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  deleted?: InputMaybe<Scalars['Boolean']>;
  deployedContractAddress?: InputMaybe<Scalars['String']>;
  error?: InputMaybe<TransactionErrorInput>;
  eventData?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['ID']>;
  gasLimit?: InputMaybe<Scalars['String']>;
  gasPrice?: InputMaybe<Scalars['String']>;
  group?: InputMaybe<TransactionGroupInput>;
  groupId?: InputMaybe<Scalars['ID']>;
  hash?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  identifier?: InputMaybe<Scalars['String']>;
  loadingRelated?: InputMaybe<Scalars['Boolean']>;
  metatransaction?: InputMaybe<Scalars['Boolean']>;
  methodContext?: InputMaybe<Scalars['String']>;
  methodName?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<Scalars['String']>;
  params?: InputMaybe<Scalars['String']>;
  receipt?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<TransactionStatus>;
  title?: InputMaybe<Scalars['String']>;
  titleValues?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  id: Scalars['ID'];
  profileId?: InputMaybe<Scalars['ID']>;
  userPrivateBetaInviteCodeId?: InputMaybe<Scalars['ID']>;
};

export type UpdateUserStakeInput = {
  actionId?: InputMaybe<Scalars['ID']>;
  amount?: InputMaybe<Scalars['String']>;
  colonyAddress?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']>;
  id: Scalars['ID'];
  isClaimed?: InputMaybe<Scalars['Boolean']>;
  isForfeited?: InputMaybe<Scalars['Boolean']>;
  userAddress?: InputMaybe<Scalars['ID']>;
};

export type UpdateUserTokensInput = {
  id: Scalars['ID'];
  tokenID?: InputMaybe<Scalars['ID']>;
  userID?: InputMaybe<Scalars['ID']>;
};

/** Represents a User within the Colony Network */
export type User = {
  __typename?: 'User';
  createdAt: Scalars['AWSDateTime'];
  /** Unique identifier for the user (wallet address) */
  id: Scalars['ID'];
  /** A user who has been invited by colony will be able to pass on the private beta invite */
  privateBetaInviteCode?: Maybe<PrivateBetaInviteCode>;
  /** Profile information of the user */
  profile?: Maybe<Profile>;
  /** Profile ID associated with the user */
  profileId?: Maybe<Scalars['ID']>;
  roles?: Maybe<ModelColonyRoleConnection>;
  stakes?: Maybe<ModelColonyStakeConnection>;
  tokens?: Maybe<ModelUserTokensConnection>;
  transactionHistory?: Maybe<ModelTransactionConnection>;
  updatedAt: Scalars['AWSDateTime'];
  userPrivateBetaInviteCodeId?: Maybe<Scalars['ID']>;
};


/** Represents a User within the Colony Network */
export type UserRolesArgs = {
  colonyAddress?: InputMaybe<ModelIdKeyConditionInput>;
  filter?: InputMaybe<ModelColonyRoleFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Represents a User within the Colony Network */
export type UserStakesArgs = {
  colonyId?: InputMaybe<ModelIdKeyConditionInput>;
  filter?: InputMaybe<ModelColonyStakeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Represents a User within the Colony Network */
export type UserTokensArgs = {
  filter?: InputMaybe<ModelUserTokensFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


/** Represents a User within the Colony Network */
export type UserTransactionHistoryArgs = {
  createdAt?: InputMaybe<ModelStringKeyConditionInput>;
  filter?: InputMaybe<ModelTransactionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

/** Stakes that a user has made for a motion */
export type UserMotionStakes = {
  __typename?: 'UserMotionStakes';
  /** The user's wallet address */
  address: Scalars['String'];
  /** Stake values */
  stakes: MotionStakes;
};

/** Input used to modify the stakes of a user for a motion */
export type UserMotionStakesInput = {
  /** The user's wallet address */
  address: Scalars['String'];
  /** Stake values */
  stakes: MotionStakesInput;
};

export type UserStake = {
  __typename?: 'UserStake';
  action?: Maybe<ColonyAction>;
  actionId: Scalars['ID'];
  amount: Scalars['String'];
  colonyAddress: Scalars['ID'];
  createdAt: Scalars['AWSDateTime'];
  /** Self-managed, formatted as userAddress_transactionHash, where transactionHash is the hash of the transaction that is being staked for */
  id: Scalars['ID'];
  isClaimed: Scalars['Boolean'];
  /** Only applicable for expenditure stakes, indicates if the creator's stake was forfeited when expenditure was cancelled */
  isForfeited?: Maybe<Scalars['Boolean']>;
  updatedAt: Scalars['AWSDateTime'];
  user: User;
  userAddress: Scalars['ID'];
};

export type UserTokens = {
  __typename?: 'UserTokens';
  createdAt: Scalars['AWSDateTime'];
  id: Scalars['ID'];
  token: Token;
  tokenID: Scalars['ID'];
  updatedAt: Scalars['AWSDateTime'];
  user: User;
  userID: Scalars['ID'];
};

export type ValidateUserInviteInput = {
  /** The colony address */
  colonyAddress: Scalars['ID'];
  /** The invite code */
  inviteCode: Scalars['ID'];
  /** The user's wallet address */
  userAddress: Scalars['ID'];
};

/** A voter record of a user for a motion */
export type VoterRecord = {
  __typename?: 'VoterRecord';
  /** The user's wallet address */
  address: Scalars['String'];
  /**
   * The actual vote (yay or nay)
   * nullable since we don't know the vote until it's revealed
   */
  vote?: Maybe<Scalars['Int']>;
  /** The voting weight denominated by the user's reputation */
  voteCount: Scalars['String'];
};

/** Input used to modify a voter record of a user for a motion */
export type VoterRecordInput = {
  /** The user's wallet address */
  address: Scalars['String'];
  /**
   * The actual vote (yay or nay)
   * nullable since we don't know the vote until it's revealed
   */
  vote?: InputMaybe<Scalars['Int']>;
  /** The voting weight denominated by the user's reputation */
  voteCount: Scalars['String'];
};

/**
 * A return type that contains the voting reward for a user and a motion
 * `min` and `max` specify the potential reward range when the actual reward is unknown (before the _reveal_ phase)
 */
export type VoterRewardsReturn = {
  __typename?: 'VoterRewardsReturn';
  /**
   * The maximum possible reward amount
   * Only useful before the _reveal_ phase, when the actual amount is known
   */
  max: Scalars['String'];
  /**
   * The minimum possible reward amount
   * Only useful before the _reveal_ phase, when the actual amount is known
   */
  min: Scalars['String'];
  /** The actual reward amount */
  reward: Scalars['String'];
};

/**
 * Parameters that were set when installing the VotingReputation extension
 * For more info see [here](https://docs.colony.io/colonysdk/api/classes/VotingReputation#extension-parameters)
 */
export type VotingReputationParams = {
  __typename?: 'VotingReputationParams';
  /** Time that the escalation period will last (in seconds) */
  escalationPeriod: Scalars['String'];
  /** Percentage of the total reputation that voted should end the voting period */
  maxVoteFraction: Scalars['String'];
  /** Time that the reveal period will last (in seconds) */
  revealPeriod: Scalars['String'];
  /** Time that the staking period will last (in seconds) */
  stakePeriod: Scalars['String'];
  /** Time that the voting period will last (in seconds) */
  submitPeriod: Scalars['String'];
  /** Percentage of the team's reputation that needs to be staked ot activate either side of the motion */
  totalStakeFraction: Scalars['String'];
  /** Minimum percentage of the total stake that each user has to provide */
  userMinStakeFraction: Scalars['String'];
  /** Percentage of the losing side's stake that is awarded to the voters */
  voterRewardFraction: Scalars['String'];
};

export type VotingReputationParamsInput = {
  escalationPeriod: Scalars['String'];
  maxVoteFraction: Scalars['String'];
  revealPeriod: Scalars['String'];
  stakePeriod: Scalars['String'];
  submitPeriod: Scalars['String'];
  totalStakeFraction: Scalars['String'];
  userMinStakeFraction: Scalars['String'];
  voterRewardFraction: Scalars['String'];
};

export type ColonyActionFragment = { __typename?: 'ColonyAction', type: ColonyActionType, blockNumber: number, initiatorAddress: string, recipientAddress?: string | null, amount?: string | null, tokenAddress?: string | null, createdAt: string, newColonyVersion?: number | null, individualEvents?: string | null, isMotion?: boolean | null, showInActionsList: boolean, members?: Array<string> | null, rootHash: string, expenditureId?: string | null, transactionHash: string, colonyAddress: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', displayName?: string | null, displayNameChanged?: string | null, avatar?: string | null, thumbnail?: string | null } | null } | null, initiatorColony?: { __typename?: 'Colony', name: string, version: number, reputation?: string | null, expendituresGlobalClaimDelay?: string | null, private?: boolean | null, colonyAddress: string, metadata?: { __typename?: 'ColonyMetadata', avatar?: string | null, displayName: string, thumbnail?: string | null, description?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', link: string, name: ExternalLinks }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null, nativeToken: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string }, status?: { __typename?: 'ColonyStatus', recovery?: boolean | null, nativeToken?: { __typename?: 'NativeTokenStatus', mintable?: boolean | null, unlockable?: boolean | null, unlocked?: boolean | null } | null } | null, chainMetadata: { __typename?: 'ChainMetadata', chainId: string, network?: Network | null }, tokens?: { __typename?: 'ModelColonyTokensConnection', items: Array<{ __typename?: 'ColonyTokens', colonyTokensId: string, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, motionsWithUnclaimedStakes?: Array<{ __typename?: 'ColonyUnclaimedStake', motionId: string, unclaimedRewards: Array<{ __typename?: 'StakerRewards', address: string, rewards: { __typename?: 'MotionStakeValues', nay: string, yay: string } }> }> | null, domains?: { __typename?: 'ModelDomainConnection', items: Array<{ __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null> } | null, balances?: { __typename?: 'ColonyBalances', items?: Array<{ __typename?: 'ColonyBalance', id: string, balance: string, domain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> | null } | null, fundsClaims?: { __typename?: 'ModelColonyFundsClaimConnection', items: Array<{ __typename?: 'ColonyFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, chainFundsClaim?: { __typename?: 'ColonyChainFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null } | null, roles?: { __typename?: 'ModelColonyRoleConnection', items: Array<{ __typename?: 'ColonyRole', id: string, targetAddress: string, role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null, domain: { __typename?: 'Domain', id: string, nativeId: number } } | null> } | null, colonyMemberInvite?: { __typename?: 'ColonyMemberInvite', id: string, invitesRemaining: number } | null } | null, initiatorExtension?: { __typename?: 'ColonyExtension', hash: string, installedBy: string, installedAt: number, isDeprecated: boolean, isDeleted: boolean, isInitialized: boolean, address: string, colonyAddress: string, currentVersion: number, params?: { __typename?: 'ExtensionParams', votingReputation?: { __typename?: 'VotingReputationParams', maxVoteFraction: string, totalStakeFraction: string, voterRewardFraction: string, userMinStakeFraction: string, stakePeriod: string, submitPeriod: string, revealPeriod: string, escalationPeriod: string } | null, stakedExpenditure?: { __typename?: 'StakedExpenditureParams', stakeFraction: string } | null } | null } | null, initiatorToken?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, recipientUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', displayName?: string | null, displayNameChanged?: string | null, avatar?: string | null, thumbnail?: string | null } | null } | null, recipientColony?: { __typename?: 'Colony', name: string, version: number, reputation?: string | null, expendituresGlobalClaimDelay?: string | null, private?: boolean | null, colonyAddress: string, metadata?: { __typename?: 'ColonyMetadata', avatar?: string | null, displayName: string, thumbnail?: string | null, description?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', link: string, name: ExternalLinks }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null, nativeToken: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string }, status?: { __typename?: 'ColonyStatus', recovery?: boolean | null, nativeToken?: { __typename?: 'NativeTokenStatus', mintable?: boolean | null, unlockable?: boolean | null, unlocked?: boolean | null } | null } | null, chainMetadata: { __typename?: 'ChainMetadata', chainId: string, network?: Network | null }, tokens?: { __typename?: 'ModelColonyTokensConnection', items: Array<{ __typename?: 'ColonyTokens', colonyTokensId: string, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, motionsWithUnclaimedStakes?: Array<{ __typename?: 'ColonyUnclaimedStake', motionId: string, unclaimedRewards: Array<{ __typename?: 'StakerRewards', address: string, rewards: { __typename?: 'MotionStakeValues', nay: string, yay: string } }> }> | null, domains?: { __typename?: 'ModelDomainConnection', items: Array<{ __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null> } | null, balances?: { __typename?: 'ColonyBalances', items?: Array<{ __typename?: 'ColonyBalance', id: string, balance: string, domain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> | null } | null, fundsClaims?: { __typename?: 'ModelColonyFundsClaimConnection', items: Array<{ __typename?: 'ColonyFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, chainFundsClaim?: { __typename?: 'ColonyChainFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null } | null, roles?: { __typename?: 'ModelColonyRoleConnection', items: Array<{ __typename?: 'ColonyRole', id: string, targetAddress: string, role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null, domain: { __typename?: 'Domain', id: string, nativeId: number } } | null> } | null, colonyMemberInvite?: { __typename?: 'ColonyMemberInvite', id: string, invitesRemaining: number } | null } | null, recipientExtension?: { __typename?: 'ColonyExtension', hash: string, installedBy: string, installedAt: number, isDeprecated: boolean, isDeleted: boolean, isInitialized: boolean, address: string, colonyAddress: string, currentVersion: number, params?: { __typename?: 'ExtensionParams', votingReputation?: { __typename?: 'VotingReputationParams', maxVoteFraction: string, totalStakeFraction: string, voterRewardFraction: string, userMinStakeFraction: string, stakePeriod: string, submitPeriod: string, revealPeriod: string, escalationPeriod: string } | null, stakedExpenditure?: { __typename?: 'StakedExpenditureParams', stakeFraction: string } | null } | null } | null, recipientToken?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, token?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, fromDomain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, toDomain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, roles?: { __typename?: 'ColonyActionRoles', role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null } | null, payments?: Array<{ __typename?: 'Payment', amount: string, tokenAddress: string, recipientAddress: string }> | null, motionData?: { __typename?: 'ColonyMotion', remainingStakes: Array<string>, userMinStake: string, requiredStake: string, nativeMotionDomainId: string, isFinalized: boolean, skillRep: string, repSubmitted: string, hasObjection: boolean, isDecision: boolean, gasEstimate: string, transactionHash: string, createdAt: string, databaseMotionId: string, motionId: string, motionStakes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } }, usersStakes: Array<{ __typename?: 'UserMotionStakes', address: string, stakes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } } }>, motionDomain: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null }, stakerRewards: Array<{ __typename?: 'StakerRewards', address: string, isClaimed: boolean, rewards: { __typename?: 'MotionStakeValues', yay: string, nay: string } }>, voterRecord: Array<{ __typename?: 'VoterRecord', address: string, voteCount: string, vote?: number | null }>, revealedVotes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } }, motionStateHistory: { __typename?: 'MotionStateHistory', hasVoted: boolean, hasPassed: boolean, hasFailed: boolean, hasFailedNotFinalizable: boolean, inRevealPhase: boolean, yaySideFullyStakedAt?: string | null, naySideFullyStakedAt?: string | null, allVotesSubmittedAt?: string | null, allVotesRevealedAt?: string | null, endedAt?: string | null, finalizedAt?: string | null }, messages?: { __typename?: 'ModelMotionMessageConnection', items: Array<{ __typename?: 'MotionMessage', initiatorAddress: string, name: string, messageKey: string, vote?: string | null, amount?: string | null, createdAt: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null, objectionAnnotation?: { __typename?: 'Annotation', createdAt: string, message: string } | null, action?: { __typename?: 'ColonyAction', type: ColonyActionType } | null } | null, colony: { __typename?: 'Colony', colonyAddress: string, nativeToken: { __typename?: 'Token', nativeTokenDecimals: number, nativeTokenSymbol: string, tokenAddress: string }, tokens?: { __typename?: 'ModelColonyTokensConnection', items: Array<{ __typename?: 'ColonyTokens', colonyTokensId: string, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, metadata?: { __typename?: 'ColonyMetadata', displayName: string, avatar?: string | null, description?: string | null, thumbnail?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', name: ExternalLinks, link: string }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null }, pendingDomainMetadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null, pendingColonyMetadata?: { __typename?: 'ColonyMetadata', displayName: string, avatar?: string | null, description?: string | null, thumbnail?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', name: ExternalLinks, link: string }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null, annotation?: { __typename?: 'Annotation', createdAt: string, message: string } | null, decisionData?: { __typename?: 'ColonyDecision', title: string, description: string, motionDomainId: number, walletAddress: string, createdAt: string, actionId: string, colonyAddress: string } | null, safeTransaction?: { __typename?: 'SafeTransaction', id: string, safe: { __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }, transactions?: { __typename?: 'ModelSafeTransactionDataConnection', items: Array<{ __typename?: 'SafeTransactionData', transactionType: SafeTransactionType, amount?: string | null, rawAmount?: string | null, data?: string | null, abi?: string | null, contractFunction?: string | null, token?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, recipient?: { __typename?: 'SimpleTarget', id: string, walletAddress: string, profile: { __typename?: 'SimpleTargetProfile', avatarHash?: string | null, displayName?: string | null } } | null, contract?: { __typename?: 'SimpleTarget', id: string, walletAddress: string, profile: { __typename?: 'SimpleTargetProfile', avatarHash?: string | null, displayName?: string | null } } | null, nft?: { __typename?: 'NFT', id: string, walletAddress: string, profile: { __typename?: 'NFTProfile', displayName: string } } | null, nftData?: { __typename?: 'NFTData', address: string, description?: string | null, id: string, imageUri?: string | null, logoUri: string, name?: string | null, tokenName: string, tokenSymbol: string, uri: string } | null, functionParams?: Array<{ __typename?: 'FunctionParam', name: string, type: string, value: string } | null> | null } | null> } | null } | null, metadata?: { __typename?: 'ColonyActionMetadata', customTitle: string } | null };

export type AnnotationFragment = { __typename?: 'Annotation', createdAt: string, message: string };

export type MotionStakeValuesFragment = { __typename?: 'MotionStakeValues', yay: string, nay: string };

export type UserMotionStakesFragment = { __typename?: 'UserMotionStakes', address: string, stakes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } } };

export type ColonyMotionFragment = { __typename?: 'ColonyMotion', remainingStakes: Array<string>, userMinStake: string, requiredStake: string, nativeMotionDomainId: string, isFinalized: boolean, skillRep: string, repSubmitted: string, hasObjection: boolean, isDecision: boolean, gasEstimate: string, transactionHash: string, createdAt: string, databaseMotionId: string, motionId: string, motionStakes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } }, usersStakes: Array<{ __typename?: 'UserMotionStakes', address: string, stakes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } } }>, motionDomain: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null }, stakerRewards: Array<{ __typename?: 'StakerRewards', address: string, isClaimed: boolean, rewards: { __typename?: 'MotionStakeValues', yay: string, nay: string } }>, voterRecord: Array<{ __typename?: 'VoterRecord', address: string, voteCount: string, vote?: number | null }>, revealedVotes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } }, motionStateHistory: { __typename?: 'MotionStateHistory', hasVoted: boolean, hasPassed: boolean, hasFailed: boolean, hasFailedNotFinalizable: boolean, inRevealPhase: boolean, yaySideFullyStakedAt?: string | null, naySideFullyStakedAt?: string | null, allVotesSubmittedAt?: string | null, allVotesRevealedAt?: string | null, endedAt?: string | null, finalizedAt?: string | null }, messages?: { __typename?: 'ModelMotionMessageConnection', items: Array<{ __typename?: 'MotionMessage', initiatorAddress: string, name: string, messageKey: string, vote?: string | null, amount?: string | null, createdAt: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null, objectionAnnotation?: { __typename?: 'Annotation', createdAt: string, message: string } | null, action?: { __typename?: 'ColonyAction', type: ColonyActionType } | null };

export type MotionMessageFragment = { __typename?: 'MotionMessage', initiatorAddress: string, name: string, messageKey: string, vote?: string | null, amount?: string | null, createdAt: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null };

export type VoterRecordFragment = { __typename?: 'VoterRecord', address: string, voteCount: string, vote?: number | null };

export type MotionStakesFragment = { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } };

export type ColonyDecisionFragment = { __typename?: 'ColonyDecision', title: string, description: string, motionDomainId: number, walletAddress: string, createdAt: string, actionId: string, colonyAddress: string };

export type ColonyFragment = { __typename?: 'Colony', name: string, version: number, reputation?: string | null, expendituresGlobalClaimDelay?: string | null, private?: boolean | null, colonyAddress: string, nativeToken: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string }, status?: { __typename?: 'ColonyStatus', recovery?: boolean | null, nativeToken?: { __typename?: 'NativeTokenStatus', mintable?: boolean | null, unlockable?: boolean | null, unlocked?: boolean | null } | null } | null, chainMetadata: { __typename?: 'ChainMetadata', chainId: string, network?: Network | null }, tokens?: { __typename?: 'ModelColonyTokensConnection', items: Array<{ __typename?: 'ColonyTokens', colonyTokensId: string, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, motionsWithUnclaimedStakes?: Array<{ __typename?: 'ColonyUnclaimedStake', motionId: string, unclaimedRewards: Array<{ __typename?: 'StakerRewards', address: string, rewards: { __typename?: 'MotionStakeValues', nay: string, yay: string } }> }> | null, domains?: { __typename?: 'ModelDomainConnection', items: Array<{ __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null> } | null, balances?: { __typename?: 'ColonyBalances', items?: Array<{ __typename?: 'ColonyBalance', id: string, balance: string, domain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> | null } | null, fundsClaims?: { __typename?: 'ModelColonyFundsClaimConnection', items: Array<{ __typename?: 'ColonyFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, chainFundsClaim?: { __typename?: 'ColonyChainFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null } | null, metadata?: { __typename?: 'ColonyMetadata', displayName: string, avatar?: string | null, description?: string | null, thumbnail?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', name: ExternalLinks, link: string }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null, roles?: { __typename?: 'ModelColonyRoleConnection', items: Array<{ __typename?: 'ColonyRole', id: string, targetAddress: string, role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null, domain: { __typename?: 'Domain', id: string, nativeId: number } } | null> } | null, colonyMemberInvite?: { __typename?: 'ColonyMemberInvite', id: string, invitesRemaining: number } | null };

export type PublicColonyFragment = { __typename?: 'Colony', name: string, colonyAddress: string, metadata?: { __typename?: 'ColonyMetadata', avatar?: string | null, displayName: string, thumbnail?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', link: string, name: ExternalLinks }> | null } | null };

export type ColonyTokensConnectionFragment = { __typename?: 'ModelColonyTokensConnection', items: Array<{ __typename?: 'ColonyTokens', colonyTokensId: string, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> };

export type UnclaimedStakesFragment = { __typename?: 'ColonyUnclaimedStake', motionId: string, unclaimedRewards: Array<{ __typename?: 'StakerRewards', address: string, rewards: { __typename?: 'MotionStakeValues', nay: string, yay: string } }> };

export type ColonyMetadataFragment = { __typename?: 'ColonyMetadata', displayName: string, avatar?: string | null, description?: string | null, thumbnail?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', name: ExternalLinks, link: string }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null };

export type ColonyBalancesFragment = { __typename?: 'ColonyBalances', items?: Array<{ __typename?: 'ColonyBalance', id: string, balance: string, domain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> | null };

export type ColonyBalanceFragment = { __typename?: 'ColonyBalance', id: string, balance: string, domain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } };

export type FundsClaimFragment = { __typename?: 'ColonyFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } };

export type ChainFundsClaimFragment = { __typename?: 'ColonyChainFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null };

export type ColonyRoleFragment = { __typename?: 'ColonyRole', id: string, targetAddress: string, role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null, domain: { __typename?: 'Domain', id: string, nativeId: number } };

export type SafeFragment = { __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string };

export type ColonyObjectiveFragment = { __typename?: 'ColonyObjective', title: string, description: string, progress: number };

export type JoinedColonyFragment = { __typename?: 'Colony', name: string, colonyAddress: string, metadata?: { __typename?: 'ColonyMetadata', displayName: string, avatar?: string | null, description?: string | null, thumbnail?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', name: ExternalLinks, link: string }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null, chainMetadata: { __typename?: 'ChainMetadata', chainId: string, network?: Network | null } };

export type ContributorReputationFragment = { __typename?: 'ContributorReputation', reputationPercentage: number, reputationRaw: string, domainId: string, id: string, domain: { __typename?: 'Domain', id: string, nativeId: number, metadata?: { __typename?: 'DomainMetadata', name: string } | null } };

export type ContributorRolesFragment = { __typename?: 'ColonyRole', domainId: string, role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null, id: string, domain: { __typename?: 'Domain', id: string, nativeId: number, metadata?: { __typename?: 'DomainMetadata', name: string } | null } };

export type ColonyContributorFragment = { __typename?: 'ColonyContributor', contributorAddress: string, isVerified: boolean, hasPermissions?: boolean | null, hasReputation?: boolean | null, isWatching?: boolean | null, colonyReputationPercentage: number, type?: ContributorType | null, roles?: { __typename?: 'ModelColonyRoleConnection', items: Array<{ __typename?: 'ColonyRole', domainId: string, role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null, id: string, domain: { __typename?: 'Domain', id: string, nativeId: number, metadata?: { __typename?: 'DomainMetadata', name: string } | null } } | null> } | null, reputation?: { __typename?: 'ModelContributorReputationConnection', items: Array<{ __typename?: 'ContributorReputation', reputationPercentage: number, reputationRaw: string, domainId: string, id: string, domain: { __typename?: 'Domain', id: string, nativeId: number, metadata?: { __typename?: 'DomainMetadata', name: string } | null } } | null> } | null, user?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null } | null };

export type DomainFragment = { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null };

export type DomainMetadataFragment = { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null };

export type ExpenditureFragment = { __typename?: 'Expenditure', id: string, nativeId: number, ownerAddress: string, status: ExpenditureStatus, nativeFundingPotId: number, nativeDomainId: number, finalizedAt?: number | null, type: ExpenditureType, isStaked: boolean, slots: Array<{ __typename?: 'ExpenditureSlot', id: number, recipientAddress?: string | null, claimDelay?: string | null, payoutModifier?: number | null, payouts?: Array<{ __typename?: 'ExpenditurePayout', tokenAddress: string, amount: string, isClaimed: boolean, networkFee?: string | null }> | null }>, metadata?: { __typename?: 'ExpenditureMetadata', fundFromDomainNativeId: number, stages?: Array<{ __typename?: 'ExpenditureStage', slotId: number, name: string, isReleased: boolean }> | null } | null, motions?: { __typename?: 'ModelColonyMotionConnection', items: Array<{ __typename?: 'ColonyMotion', expenditureSlotId?: number | null, remainingStakes: Array<string>, userMinStake: string, requiredStake: string, nativeMotionDomainId: string, isFinalized: boolean, skillRep: string, repSubmitted: string, hasObjection: boolean, isDecision: boolean, gasEstimate: string, transactionHash: string, createdAt: string, databaseMotionId: string, motionId: string, motionStakes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } }, usersStakes: Array<{ __typename?: 'UserMotionStakes', address: string, stakes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } } }>, motionDomain: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null }, stakerRewards: Array<{ __typename?: 'StakerRewards', address: string, isClaimed: boolean, rewards: { __typename?: 'MotionStakeValues', yay: string, nay: string } }>, voterRecord: Array<{ __typename?: 'VoterRecord', address: string, voteCount: string, vote?: number | null }>, revealedVotes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } }, motionStateHistory: { __typename?: 'MotionStateHistory', hasVoted: boolean, hasPassed: boolean, hasFailed: boolean, hasFailedNotFinalizable: boolean, inRevealPhase: boolean, yaySideFullyStakedAt?: string | null, naySideFullyStakedAt?: string | null, allVotesSubmittedAt?: string | null, allVotesRevealedAt?: string | null, endedAt?: string | null, finalizedAt?: string | null }, messages?: { __typename?: 'ModelMotionMessageConnection', items: Array<{ __typename?: 'MotionMessage', initiatorAddress: string, name: string, messageKey: string, vote?: string | null, amount?: string | null, createdAt: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null, objectionAnnotation?: { __typename?: 'Annotation', createdAt: string, message: string } | null, action?: { __typename?: 'ColonyAction', type: ColonyActionType } | null } | null> } | null, balances?: Array<{ __typename?: 'ExpenditureBalance', tokenAddress: string, amount: string }> | null, lockingActions?: { __typename?: 'ModelColonyActionConnection', items: Array<{ __typename?: 'ColonyAction', id: string, initiatorAddress: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null, fundingActions?: { __typename?: 'ModelColonyActionConnection', items: Array<{ __typename?: 'ColonyAction', id: string, initiatorAddress: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null, finalizingActions?: { __typename?: 'ModelColonyActionConnection', items: Array<{ __typename?: 'ColonyAction', id: string, initiatorAddress: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null, cancellingActions?: { __typename?: 'ModelColonyActionConnection', items: Array<{ __typename?: 'ColonyAction', id: string, initiatorAddress: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null, editingActions?: { __typename?: 'ModelColonyActionConnection', items: Array<{ __typename?: 'ColonyAction', id: string, initiatorAddress: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null };

export type ExpenditureSlotFragment = { __typename?: 'ExpenditureSlot', id: number, recipientAddress?: string | null, claimDelay?: string | null, payoutModifier?: number | null, payouts?: Array<{ __typename?: 'ExpenditurePayout', tokenAddress: string, amount: string, isClaimed: boolean, networkFee?: string | null }> | null };

export type ExpenditurePayoutFragment = { __typename?: 'ExpenditurePayout', tokenAddress: string, amount: string, isClaimed: boolean, networkFee?: string | null };

export type ExpenditureStageFragment = { __typename?: 'ExpenditureStage', slotId: number, name: string, isReleased: boolean };

export type ExpenditureBalanceFragment = { __typename?: 'ExpenditureBalance', tokenAddress: string, amount: string };

export type ExpenditureActionFragment = { __typename?: 'ColonyAction', id: string, initiatorAddress: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null };

export type ExtensionFragment = { __typename?: 'ColonyExtension', hash: string, installedBy: string, installedAt: number, isDeprecated: boolean, isDeleted: boolean, isInitialized: boolean, address: string, colonyAddress: string, currentVersion: number, params?: { __typename?: 'ExtensionParams', votingReputation?: { __typename?: 'VotingReputationParams', maxVoteFraction: string, totalStakeFraction: string, voterRewardFraction: string, userMinStakeFraction: string, stakePeriod: string, submitPeriod: string, revealPeriod: string, escalationPeriod: string } | null, stakedExpenditure?: { __typename?: 'StakedExpenditureParams', stakeFraction: string } | null } | null };

export type ExtensionDisplayFragmentFragment = { __typename?: 'ColonyExtension', hash: string, address: string };

export type NftDataFragment = { __typename?: 'NFTData', address: string, description?: string | null, id: string, imageUri?: string | null, logoUri: string, name?: string | null, tokenName: string, tokenSymbol: string, uri: string };

export type FunctionParamFragment = { __typename?: 'FunctionParam', name: string, type: string, value: string };

export type SafeTransactionDataFragment = { __typename?: 'SafeTransactionData', transactionType: SafeTransactionType, amount?: string | null, rawAmount?: string | null, data?: string | null, abi?: string | null, contractFunction?: string | null, token?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, recipient?: { __typename?: 'SimpleTarget', id: string, walletAddress: string, profile: { __typename?: 'SimpleTargetProfile', avatarHash?: string | null, displayName?: string | null } } | null, contract?: { __typename?: 'SimpleTarget', id: string, walletAddress: string, profile: { __typename?: 'SimpleTargetProfile', avatarHash?: string | null, displayName?: string | null } } | null, nft?: { __typename?: 'NFT', id: string, walletAddress: string, profile: { __typename?: 'NFTProfile', displayName: string } } | null, nftData?: { __typename?: 'NFTData', address: string, description?: string | null, id: string, imageUri?: string | null, logoUri: string, name?: string | null, tokenName: string, tokenSymbol: string, uri: string } | null, functionParams?: Array<{ __typename?: 'FunctionParam', name: string, type: string, value: string } | null> | null };

export type SafeTransactionFragment = { __typename?: 'SafeTransaction', id: string, safe: { __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }, transactions?: { __typename?: 'ModelSafeTransactionDataConnection', items: Array<{ __typename?: 'SafeTransactionData', transactionType: SafeTransactionType, amount?: string | null, rawAmount?: string | null, data?: string | null, abi?: string | null, contractFunction?: string | null, token?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, recipient?: { __typename?: 'SimpleTarget', id: string, walletAddress: string, profile: { __typename?: 'SimpleTargetProfile', avatarHash?: string | null, displayName?: string | null } } | null, contract?: { __typename?: 'SimpleTarget', id: string, walletAddress: string, profile: { __typename?: 'SimpleTargetProfile', avatarHash?: string | null, displayName?: string | null } } | null, nft?: { __typename?: 'NFT', id: string, walletAddress: string, profile: { __typename?: 'NFTProfile', displayName: string } } | null, nftData?: { __typename?: 'NFTData', address: string, description?: string | null, id: string, imageUri?: string | null, logoUri: string, name?: string | null, tokenName: string, tokenSymbol: string, uri: string } | null, functionParams?: Array<{ __typename?: 'FunctionParam', name: string, type: string, value: string } | null> | null } | null> } | null };

export type UserStakeFragment = { __typename?: 'UserStake', id: string, amount: string, isClaimed: boolean, createdAt: string, action?: { __typename?: 'ColonyAction', type: ColonyActionType, blockNumber: number, initiatorAddress: string, recipientAddress?: string | null, amount?: string | null, tokenAddress?: string | null, createdAt: string, newColonyVersion?: number | null, individualEvents?: string | null, isMotion?: boolean | null, showInActionsList: boolean, members?: Array<string> | null, rootHash: string, expenditureId?: string | null, transactionHash: string, colonyAddress: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', displayName?: string | null, displayNameChanged?: string | null, avatar?: string | null, thumbnail?: string | null } | null } | null, initiatorColony?: { __typename?: 'Colony', name: string, version: number, reputation?: string | null, expendituresGlobalClaimDelay?: string | null, private?: boolean | null, colonyAddress: string, metadata?: { __typename?: 'ColonyMetadata', avatar?: string | null, displayName: string, thumbnail?: string | null, description?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', link: string, name: ExternalLinks }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null, nativeToken: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string }, status?: { __typename?: 'ColonyStatus', recovery?: boolean | null, nativeToken?: { __typename?: 'NativeTokenStatus', mintable?: boolean | null, unlockable?: boolean | null, unlocked?: boolean | null } | null } | null, chainMetadata: { __typename?: 'ChainMetadata', chainId: string, network?: Network | null }, tokens?: { __typename?: 'ModelColonyTokensConnection', items: Array<{ __typename?: 'ColonyTokens', colonyTokensId: string, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, motionsWithUnclaimedStakes?: Array<{ __typename?: 'ColonyUnclaimedStake', motionId: string, unclaimedRewards: Array<{ __typename?: 'StakerRewards', address: string, rewards: { __typename?: 'MotionStakeValues', nay: string, yay: string } }> }> | null, domains?: { __typename?: 'ModelDomainConnection', items: Array<{ __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null> } | null, balances?: { __typename?: 'ColonyBalances', items?: Array<{ __typename?: 'ColonyBalance', id: string, balance: string, domain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> | null } | null, fundsClaims?: { __typename?: 'ModelColonyFundsClaimConnection', items: Array<{ __typename?: 'ColonyFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, chainFundsClaim?: { __typename?: 'ColonyChainFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null } | null, roles?: { __typename?: 'ModelColonyRoleConnection', items: Array<{ __typename?: 'ColonyRole', id: string, targetAddress: string, role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null, domain: { __typename?: 'Domain', id: string, nativeId: number } } | null> } | null, colonyMemberInvite?: { __typename?: 'ColonyMemberInvite', id: string, invitesRemaining: number } | null } | null, initiatorExtension?: { __typename?: 'ColonyExtension', hash: string, installedBy: string, installedAt: number, isDeprecated: boolean, isDeleted: boolean, isInitialized: boolean, address: string, colonyAddress: string, currentVersion: number, params?: { __typename?: 'ExtensionParams', votingReputation?: { __typename?: 'VotingReputationParams', maxVoteFraction: string, totalStakeFraction: string, voterRewardFraction: string, userMinStakeFraction: string, stakePeriod: string, submitPeriod: string, revealPeriod: string, escalationPeriod: string } | null, stakedExpenditure?: { __typename?: 'StakedExpenditureParams', stakeFraction: string } | null } | null } | null, initiatorToken?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, recipientUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', displayName?: string | null, displayNameChanged?: string | null, avatar?: string | null, thumbnail?: string | null } | null } | null, recipientColony?: { __typename?: 'Colony', name: string, version: number, reputation?: string | null, expendituresGlobalClaimDelay?: string | null, private?: boolean | null, colonyAddress: string, metadata?: { __typename?: 'ColonyMetadata', avatar?: string | null, displayName: string, thumbnail?: string | null, description?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', link: string, name: ExternalLinks }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null, nativeToken: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string }, status?: { __typename?: 'ColonyStatus', recovery?: boolean | null, nativeToken?: { __typename?: 'NativeTokenStatus', mintable?: boolean | null, unlockable?: boolean | null, unlocked?: boolean | null } | null } | null, chainMetadata: { __typename?: 'ChainMetadata', chainId: string, network?: Network | null }, tokens?: { __typename?: 'ModelColonyTokensConnection', items: Array<{ __typename?: 'ColonyTokens', colonyTokensId: string, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, motionsWithUnclaimedStakes?: Array<{ __typename?: 'ColonyUnclaimedStake', motionId: string, unclaimedRewards: Array<{ __typename?: 'StakerRewards', address: string, rewards: { __typename?: 'MotionStakeValues', nay: string, yay: string } }> }> | null, domains?: { __typename?: 'ModelDomainConnection', items: Array<{ __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null> } | null, balances?: { __typename?: 'ColonyBalances', items?: Array<{ __typename?: 'ColonyBalance', id: string, balance: string, domain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> | null } | null, fundsClaims?: { __typename?: 'ModelColonyFundsClaimConnection', items: Array<{ __typename?: 'ColonyFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, chainFundsClaim?: { __typename?: 'ColonyChainFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null } | null, roles?: { __typename?: 'ModelColonyRoleConnection', items: Array<{ __typename?: 'ColonyRole', id: string, targetAddress: string, role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null, domain: { __typename?: 'Domain', id: string, nativeId: number } } | null> } | null, colonyMemberInvite?: { __typename?: 'ColonyMemberInvite', id: string, invitesRemaining: number } | null } | null, recipientExtension?: { __typename?: 'ColonyExtension', hash: string, installedBy: string, installedAt: number, isDeprecated: boolean, isDeleted: boolean, isInitialized: boolean, address: string, colonyAddress: string, currentVersion: number, params?: { __typename?: 'ExtensionParams', votingReputation?: { __typename?: 'VotingReputationParams', maxVoteFraction: string, totalStakeFraction: string, voterRewardFraction: string, userMinStakeFraction: string, stakePeriod: string, submitPeriod: string, revealPeriod: string, escalationPeriod: string } | null, stakedExpenditure?: { __typename?: 'StakedExpenditureParams', stakeFraction: string } | null } | null } | null, recipientToken?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, token?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, fromDomain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, toDomain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, roles?: { __typename?: 'ColonyActionRoles', role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null } | null, payments?: Array<{ __typename?: 'Payment', amount: string, tokenAddress: string, recipientAddress: string }> | null, motionData?: { __typename?: 'ColonyMotion', remainingStakes: Array<string>, userMinStake: string, requiredStake: string, nativeMotionDomainId: string, isFinalized: boolean, skillRep: string, repSubmitted: string, hasObjection: boolean, isDecision: boolean, gasEstimate: string, transactionHash: string, createdAt: string, databaseMotionId: string, motionId: string, motionStakes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } }, usersStakes: Array<{ __typename?: 'UserMotionStakes', address: string, stakes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } } }>, motionDomain: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null }, stakerRewards: Array<{ __typename?: 'StakerRewards', address: string, isClaimed: boolean, rewards: { __typename?: 'MotionStakeValues', yay: string, nay: string } }>, voterRecord: Array<{ __typename?: 'VoterRecord', address: string, voteCount: string, vote?: number | null }>, revealedVotes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } }, motionStateHistory: { __typename?: 'MotionStateHistory', hasVoted: boolean, hasPassed: boolean, hasFailed: boolean, hasFailedNotFinalizable: boolean, inRevealPhase: boolean, yaySideFullyStakedAt?: string | null, naySideFullyStakedAt?: string | null, allVotesSubmittedAt?: string | null, allVotesRevealedAt?: string | null, endedAt?: string | null, finalizedAt?: string | null }, messages?: { __typename?: 'ModelMotionMessageConnection', items: Array<{ __typename?: 'MotionMessage', initiatorAddress: string, name: string, messageKey: string, vote?: string | null, amount?: string | null, createdAt: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null, objectionAnnotation?: { __typename?: 'Annotation', createdAt: string, message: string } | null, action?: { __typename?: 'ColonyAction', type: ColonyActionType } | null } | null, colony: { __typename?: 'Colony', colonyAddress: string, nativeToken: { __typename?: 'Token', nativeTokenDecimals: number, nativeTokenSymbol: string, tokenAddress: string }, tokens?: { __typename?: 'ModelColonyTokensConnection', items: Array<{ __typename?: 'ColonyTokens', colonyTokensId: string, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, metadata?: { __typename?: 'ColonyMetadata', displayName: string, avatar?: string | null, description?: string | null, thumbnail?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', name: ExternalLinks, link: string }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null }, pendingDomainMetadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null, pendingColonyMetadata?: { __typename?: 'ColonyMetadata', displayName: string, avatar?: string | null, description?: string | null, thumbnail?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', name: ExternalLinks, link: string }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null, annotation?: { __typename?: 'Annotation', createdAt: string, message: string } | null, decisionData?: { __typename?: 'ColonyDecision', title: string, description: string, motionDomainId: number, walletAddress: string, createdAt: string, actionId: string, colonyAddress: string } | null, safeTransaction?: { __typename?: 'SafeTransaction', id: string, safe: { __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }, transactions?: { __typename?: 'ModelSafeTransactionDataConnection', items: Array<{ __typename?: 'SafeTransactionData', transactionType: SafeTransactionType, amount?: string | null, rawAmount?: string | null, data?: string | null, abi?: string | null, contractFunction?: string | null, token?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, recipient?: { __typename?: 'SimpleTarget', id: string, walletAddress: string, profile: { __typename?: 'SimpleTargetProfile', avatarHash?: string | null, displayName?: string | null } } | null, contract?: { __typename?: 'SimpleTarget', id: string, walletAddress: string, profile: { __typename?: 'SimpleTargetProfile', avatarHash?: string | null, displayName?: string | null } } | null, nft?: { __typename?: 'NFT', id: string, walletAddress: string, profile: { __typename?: 'NFTProfile', displayName: string } } | null, nftData?: { __typename?: 'NFTData', address: string, description?: string | null, id: string, imageUri?: string | null, logoUri: string, name?: string | null, tokenName: string, tokenSymbol: string, uri: string } | null, functionParams?: Array<{ __typename?: 'FunctionParam', name: string, type: string, value: string } | null> | null } | null> } | null } | null, metadata?: { __typename?: 'ColonyActionMetadata', customTitle: string } | null } | null };

export type TokenFragment = { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string };

export type UserTokenBalanceDataFragment = { __typename?: 'GetUserTokenBalanceReturn', balance?: string | null, inactiveBalance?: string | null, lockedBalance?: string | null, activeBalance?: string | null, pendingBalance?: string | null };

export type NativeTokenStatusFragment = { __typename?: 'NativeTokenStatus', mintable?: boolean | null, unlockable?: boolean | null, unlocked?: boolean | null };

export type TransactionFragment = { __typename?: 'Transaction', id: string, context: ClientType, createdAt: string, from: string, colonyAddress: string, params?: string | null, groupId?: string | null, hash?: string | null, methodContext?: string | null, methodName: string, status: TransactionStatus, metatransaction: boolean, title?: string | null, titleValues?: string | null, options?: string | null, group?: { __typename?: 'TransactionGroup', id: string, groupId: string, key: string, index: number, description?: string | null, descriptionValues?: string | null, title?: string | null, titleValues?: string | null } | null };

export type UserFragment = { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null };

export type UserDisplayFragment = { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', displayName?: string | null, displayNameChanged?: string | null, avatar?: string | null, thumbnail?: string | null } | null };

export type ProfileFragment = { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null };

export type CreateColonyActionMetadataMutationVariables = Exact<{
  input: CreateColonyActionMetadataInput;
}>;


export type CreateColonyActionMetadataMutation = { __typename?: 'Mutation', createColonyActionMetadata?: { __typename?: 'ColonyActionMetadata', id: string } | null };

export type CreateAnnotationMutationVariables = Exact<{
  input: CreateAnnotationInput;
}>;


export type CreateAnnotationMutation = { __typename?: 'Mutation', createAnnotation?: { __typename?: 'Annotation', id: string } | null };

export type CreateColonyEtherealMetadataMutationVariables = Exact<{
  input: CreateColonyEtherealMetadataInput;
}>;


export type CreateColonyEtherealMetadataMutation = { __typename?: 'Mutation', createColonyEtherealMetadata?: { __typename?: 'ColonyMetadata', id: string } | null };

export type CreateColonyMetadataMutationVariables = Exact<{
  input: CreateColonyMetadataInput;
}>;


export type CreateColonyMetadataMutation = { __typename?: 'Mutation', createColonyMetadata?: { __typename?: 'ColonyMetadata', id: string } | null };

export type UpdateColonyMetadataMutationVariables = Exact<{
  input: UpdateColonyMetadataInput;
}>;


export type UpdateColonyMetadataMutation = { __typename?: 'Mutation', updateColonyMetadata?: { __typename?: 'ColonyMetadata', id: string } | null };

export type ValidateUserInviteMutationVariables = Exact<{
  input: ValidateUserInviteInput;
}>;


export type ValidateUserInviteMutation = { __typename?: 'Mutation', validateUserInvite?: boolean | null };

export type UpdateContributorsWithReputationMutationVariables = Exact<{
  colonyAddress?: InputMaybe<Scalars['String']>;
}>;


export type UpdateContributorsWithReputationMutation = { __typename?: 'Mutation', updateContributorsWithReputation?: boolean | null };

export type CreateColonyContributorMutationVariables = Exact<{
  input: CreateColonyContributorInput;
}>;


export type CreateColonyContributorMutation = { __typename?: 'Mutation', createColonyContributor?: { __typename?: 'ColonyContributor', id: string, isWatching?: boolean | null } | null };

export type UpdateColonyContributorMutationVariables = Exact<{
  input: UpdateColonyContributorInput;
}>;


export type UpdateColonyContributorMutation = { __typename?: 'Mutation', updateColonyContributor?: { __typename?: 'ColonyContributor', id: string, isWatching?: boolean | null } | null };

export type CreateColonyDecisionMutationVariables = Exact<{
  input: CreateColonyDecisionInput;
}>;


export type CreateColonyDecisionMutation = { __typename?: 'Mutation', createColonyDecision?: { __typename?: 'ColonyDecision', id: string } | null };

export type CreateDomainMetadataMutationVariables = Exact<{
  input: CreateDomainMetadataInput;
}>;


export type CreateDomainMetadataMutation = { __typename?: 'Mutation', createDomainMetadata?: { __typename?: 'DomainMetadata', id: string } | null };

export type UpdateDomainMetadataMutationVariables = Exact<{
  input: UpdateDomainMetadataInput;
}>;


export type UpdateDomainMetadataMutation = { __typename?: 'Mutation', updateDomainMetadata?: { __typename?: 'DomainMetadata', id: string } | null };

export type CreateExpenditureMetadataMutationVariables = Exact<{
  input: CreateExpenditureMetadataInput;
}>;


export type CreateExpenditureMetadataMutation = { __typename?: 'Mutation', createExpenditureMetadata?: { __typename?: 'ExpenditureMetadata', id: string } | null };

export type CreateStreamingPaymentMetadataMutationVariables = Exact<{
  input: CreateStreamingPaymentMetadataInput;
}>;


export type CreateStreamingPaymentMetadataMutation = { __typename?: 'Mutation', createStreamingPaymentMetadata?: { __typename?: 'StreamingPaymentMetadata', id: string } | null };

export type CreateSafeTransactionMutationVariables = Exact<{
  input: CreateSafeTransactionInput;
}>;


export type CreateSafeTransactionMutation = { __typename?: 'Mutation', createSafeTransaction?: { __typename?: 'SafeTransaction', id: string } | null };

export type CreateSafeTransactionDataMutationVariables = Exact<{
  input: CreateSafeTransactionDataInput;
}>;


export type CreateSafeTransactionDataMutation = { __typename?: 'Mutation', createSafeTransactionData?: { __typename?: 'SafeTransactionData', id: string } | null };

export type CreateColonyTokensMutationVariables = Exact<{
  input: CreateColonyTokensInput;
}>;


export type CreateColonyTokensMutation = { __typename?: 'Mutation', createColonyTokens?: { __typename?: 'ColonyTokens', id: string } | null };

export type DeleteColonyTokensMutationVariables = Exact<{
  input: DeleteColonyTokensInput;
}>;


export type DeleteColonyTokensMutation = { __typename?: 'Mutation', deleteColonyTokens?: { __typename?: 'ColonyTokens', id: string } | null };

export type CreateTransactionMutationVariables = Exact<{
  input: CreateTransactionInput;
}>;


export type CreateTransactionMutation = { __typename?: 'Mutation', createTransaction?: { __typename?: 'Transaction', id: string } | null };

export type UpdateTransactionMutationVariables = Exact<{
  input: UpdateTransactionInput;
}>;


export type UpdateTransactionMutation = { __typename?: 'Mutation', updateTransaction?: { __typename?: 'Transaction', id: string } | null };

export type CreateUniqueUserMutationVariables = Exact<{
  input: CreateUniqueUserInput;
}>;


export type CreateUniqueUserMutation = { __typename?: 'Mutation', createUniqueUser?: { __typename?: 'User', id: string } | null };

export type UpdateUserProfileMutationVariables = Exact<{
  input: UpdateProfileInput;
}>;


export type UpdateUserProfileMutation = { __typename?: 'Mutation', updateProfile?: { __typename?: 'Profile', id: string, avatar?: string | null, bio?: string | null, displayName?: string | null, location?: string | null, website?: string | null, email?: string | null } | null };

export type GetColonyActionsQueryVariables = Exact<{
  colonyAddress: Scalars['ID'];
  nextToken?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  filter?: InputMaybe<ModelColonyActionFilterInput>;
}>;


export type GetColonyActionsQuery = { __typename?: 'Query', getActionsByColony?: { __typename?: 'ModelColonyActionConnection', nextToken?: string | null, items: Array<{ __typename?: 'ColonyAction', type: ColonyActionType, blockNumber: number, initiatorAddress: string, recipientAddress?: string | null, amount?: string | null, tokenAddress?: string | null, createdAt: string, newColonyVersion?: number | null, individualEvents?: string | null, isMotion?: boolean | null, showInActionsList: boolean, members?: Array<string> | null, rootHash: string, expenditureId?: string | null, transactionHash: string, colonyAddress: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', displayName?: string | null, displayNameChanged?: string | null, avatar?: string | null, thumbnail?: string | null } | null } | null, initiatorColony?: { __typename?: 'Colony', name: string, version: number, reputation?: string | null, expendituresGlobalClaimDelay?: string | null, private?: boolean | null, colonyAddress: string, metadata?: { __typename?: 'ColonyMetadata', avatar?: string | null, displayName: string, thumbnail?: string | null, description?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', link: string, name: ExternalLinks }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null, nativeToken: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string }, status?: { __typename?: 'ColonyStatus', recovery?: boolean | null, nativeToken?: { __typename?: 'NativeTokenStatus', mintable?: boolean | null, unlockable?: boolean | null, unlocked?: boolean | null } | null } | null, chainMetadata: { __typename?: 'ChainMetadata', chainId: string, network?: Network | null }, tokens?: { __typename?: 'ModelColonyTokensConnection', items: Array<{ __typename?: 'ColonyTokens', colonyTokensId: string, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, motionsWithUnclaimedStakes?: Array<{ __typename?: 'ColonyUnclaimedStake', motionId: string, unclaimedRewards: Array<{ __typename?: 'StakerRewards', address: string, rewards: { __typename?: 'MotionStakeValues', nay: string, yay: string } }> }> | null, domains?: { __typename?: 'ModelDomainConnection', items: Array<{ __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null> } | null, balances?: { __typename?: 'ColonyBalances', items?: Array<{ __typename?: 'ColonyBalance', id: string, balance: string, domain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> | null } | null, fundsClaims?: { __typename?: 'ModelColonyFundsClaimConnection', items: Array<{ __typename?: 'ColonyFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, chainFundsClaim?: { __typename?: 'ColonyChainFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null } | null, roles?: { __typename?: 'ModelColonyRoleConnection', items: Array<{ __typename?: 'ColonyRole', id: string, targetAddress: string, role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null, domain: { __typename?: 'Domain', id: string, nativeId: number } } | null> } | null, colonyMemberInvite?: { __typename?: 'ColonyMemberInvite', id: string, invitesRemaining: number } | null } | null, initiatorExtension?: { __typename?: 'ColonyExtension', hash: string, installedBy: string, installedAt: number, isDeprecated: boolean, isDeleted: boolean, isInitialized: boolean, address: string, colonyAddress: string, currentVersion: number, params?: { __typename?: 'ExtensionParams', votingReputation?: { __typename?: 'VotingReputationParams', maxVoteFraction: string, totalStakeFraction: string, voterRewardFraction: string, userMinStakeFraction: string, stakePeriod: string, submitPeriod: string, revealPeriod: string, escalationPeriod: string } | null, stakedExpenditure?: { __typename?: 'StakedExpenditureParams', stakeFraction: string } | null } | null } | null, initiatorToken?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, recipientUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', displayName?: string | null, displayNameChanged?: string | null, avatar?: string | null, thumbnail?: string | null } | null } | null, recipientColony?: { __typename?: 'Colony', name: string, version: number, reputation?: string | null, expendituresGlobalClaimDelay?: string | null, private?: boolean | null, colonyAddress: string, metadata?: { __typename?: 'ColonyMetadata', avatar?: string | null, displayName: string, thumbnail?: string | null, description?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', link: string, name: ExternalLinks }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null, nativeToken: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string }, status?: { __typename?: 'ColonyStatus', recovery?: boolean | null, nativeToken?: { __typename?: 'NativeTokenStatus', mintable?: boolean | null, unlockable?: boolean | null, unlocked?: boolean | null } | null } | null, chainMetadata: { __typename?: 'ChainMetadata', chainId: string, network?: Network | null }, tokens?: { __typename?: 'ModelColonyTokensConnection', items: Array<{ __typename?: 'ColonyTokens', colonyTokensId: string, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, motionsWithUnclaimedStakes?: Array<{ __typename?: 'ColonyUnclaimedStake', motionId: string, unclaimedRewards: Array<{ __typename?: 'StakerRewards', address: string, rewards: { __typename?: 'MotionStakeValues', nay: string, yay: string } }> }> | null, domains?: { __typename?: 'ModelDomainConnection', items: Array<{ __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null> } | null, balances?: { __typename?: 'ColonyBalances', items?: Array<{ __typename?: 'ColonyBalance', id: string, balance: string, domain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> | null } | null, fundsClaims?: { __typename?: 'ModelColonyFundsClaimConnection', items: Array<{ __typename?: 'ColonyFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, chainFundsClaim?: { __typename?: 'ColonyChainFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null } | null, roles?: { __typename?: 'ModelColonyRoleConnection', items: Array<{ __typename?: 'ColonyRole', id: string, targetAddress: string, role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null, domain: { __typename?: 'Domain', id: string, nativeId: number } } | null> } | null, colonyMemberInvite?: { __typename?: 'ColonyMemberInvite', id: string, invitesRemaining: number } | null } | null, recipientExtension?: { __typename?: 'ColonyExtension', hash: string, installedBy: string, installedAt: number, isDeprecated: boolean, isDeleted: boolean, isInitialized: boolean, address: string, colonyAddress: string, currentVersion: number, params?: { __typename?: 'ExtensionParams', votingReputation?: { __typename?: 'VotingReputationParams', maxVoteFraction: string, totalStakeFraction: string, voterRewardFraction: string, userMinStakeFraction: string, stakePeriod: string, submitPeriod: string, revealPeriod: string, escalationPeriod: string } | null, stakedExpenditure?: { __typename?: 'StakedExpenditureParams', stakeFraction: string } | null } | null } | null, recipientToken?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, token?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, fromDomain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, toDomain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, roles?: { __typename?: 'ColonyActionRoles', role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null } | null, payments?: Array<{ __typename?: 'Payment', amount: string, tokenAddress: string, recipientAddress: string }> | null, motionData?: { __typename?: 'ColonyMotion', remainingStakes: Array<string>, userMinStake: string, requiredStake: string, nativeMotionDomainId: string, isFinalized: boolean, skillRep: string, repSubmitted: string, hasObjection: boolean, isDecision: boolean, gasEstimate: string, transactionHash: string, createdAt: string, databaseMotionId: string, motionId: string, motionStakes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } }, usersStakes: Array<{ __typename?: 'UserMotionStakes', address: string, stakes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } } }>, motionDomain: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null }, stakerRewards: Array<{ __typename?: 'StakerRewards', address: string, isClaimed: boolean, rewards: { __typename?: 'MotionStakeValues', yay: string, nay: string } }>, voterRecord: Array<{ __typename?: 'VoterRecord', address: string, voteCount: string, vote?: number | null }>, revealedVotes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } }, motionStateHistory: { __typename?: 'MotionStateHistory', hasVoted: boolean, hasPassed: boolean, hasFailed: boolean, hasFailedNotFinalizable: boolean, inRevealPhase: boolean, yaySideFullyStakedAt?: string | null, naySideFullyStakedAt?: string | null, allVotesSubmittedAt?: string | null, allVotesRevealedAt?: string | null, endedAt?: string | null, finalizedAt?: string | null }, messages?: { __typename?: 'ModelMotionMessageConnection', items: Array<{ __typename?: 'MotionMessage', initiatorAddress: string, name: string, messageKey: string, vote?: string | null, amount?: string | null, createdAt: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null, objectionAnnotation?: { __typename?: 'Annotation', createdAt: string, message: string } | null, action?: { __typename?: 'ColonyAction', type: ColonyActionType } | null } | null, colony: { __typename?: 'Colony', colonyAddress: string, nativeToken: { __typename?: 'Token', nativeTokenDecimals: number, nativeTokenSymbol: string, tokenAddress: string }, tokens?: { __typename?: 'ModelColonyTokensConnection', items: Array<{ __typename?: 'ColonyTokens', colonyTokensId: string, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, metadata?: { __typename?: 'ColonyMetadata', displayName: string, avatar?: string | null, description?: string | null, thumbnail?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', name: ExternalLinks, link: string }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null }, pendingDomainMetadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null, pendingColonyMetadata?: { __typename?: 'ColonyMetadata', displayName: string, avatar?: string | null, description?: string | null, thumbnail?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', name: ExternalLinks, link: string }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null, annotation?: { __typename?: 'Annotation', createdAt: string, message: string } | null, decisionData?: { __typename?: 'ColonyDecision', title: string, description: string, motionDomainId: number, walletAddress: string, createdAt: string, actionId: string, colonyAddress: string } | null, safeTransaction?: { __typename?: 'SafeTransaction', id: string, safe: { __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }, transactions?: { __typename?: 'ModelSafeTransactionDataConnection', items: Array<{ __typename?: 'SafeTransactionData', transactionType: SafeTransactionType, amount?: string | null, rawAmount?: string | null, data?: string | null, abi?: string | null, contractFunction?: string | null, token?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, recipient?: { __typename?: 'SimpleTarget', id: string, walletAddress: string, profile: { __typename?: 'SimpleTargetProfile', avatarHash?: string | null, displayName?: string | null } } | null, contract?: { __typename?: 'SimpleTarget', id: string, walletAddress: string, profile: { __typename?: 'SimpleTargetProfile', avatarHash?: string | null, displayName?: string | null } } | null, nft?: { __typename?: 'NFT', id: string, walletAddress: string, profile: { __typename?: 'NFTProfile', displayName: string } } | null, nftData?: { __typename?: 'NFTData', address: string, description?: string | null, id: string, imageUri?: string | null, logoUri: string, name?: string | null, tokenName: string, tokenSymbol: string, uri: string } | null, functionParams?: Array<{ __typename?: 'FunctionParam', name: string, type: string, value: string } | null> | null } | null> } | null } | null, metadata?: { __typename?: 'ColonyActionMetadata', customTitle: string } | null } | null> } | null };

export type GetColonyActionQueryVariables = Exact<{
  transactionHash: Scalars['ID'];
}>;


export type GetColonyActionQuery = { __typename?: 'Query', getColonyAction?: { __typename?: 'ColonyAction', type: ColonyActionType, blockNumber: number, initiatorAddress: string, recipientAddress?: string | null, amount?: string | null, tokenAddress?: string | null, createdAt: string, newColonyVersion?: number | null, individualEvents?: string | null, isMotion?: boolean | null, showInActionsList: boolean, members?: Array<string> | null, rootHash: string, expenditureId?: string | null, transactionHash: string, colonyAddress: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', displayName?: string | null, displayNameChanged?: string | null, avatar?: string | null, thumbnail?: string | null } | null } | null, initiatorColony?: { __typename?: 'Colony', name: string, version: number, reputation?: string | null, expendituresGlobalClaimDelay?: string | null, private?: boolean | null, colonyAddress: string, metadata?: { __typename?: 'ColonyMetadata', avatar?: string | null, displayName: string, thumbnail?: string | null, description?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', link: string, name: ExternalLinks }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null, nativeToken: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string }, status?: { __typename?: 'ColonyStatus', recovery?: boolean | null, nativeToken?: { __typename?: 'NativeTokenStatus', mintable?: boolean | null, unlockable?: boolean | null, unlocked?: boolean | null } | null } | null, chainMetadata: { __typename?: 'ChainMetadata', chainId: string, network?: Network | null }, tokens?: { __typename?: 'ModelColonyTokensConnection', items: Array<{ __typename?: 'ColonyTokens', colonyTokensId: string, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, motionsWithUnclaimedStakes?: Array<{ __typename?: 'ColonyUnclaimedStake', motionId: string, unclaimedRewards: Array<{ __typename?: 'StakerRewards', address: string, rewards: { __typename?: 'MotionStakeValues', nay: string, yay: string } }> }> | null, domains?: { __typename?: 'ModelDomainConnection', items: Array<{ __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null> } | null, balances?: { __typename?: 'ColonyBalances', items?: Array<{ __typename?: 'ColonyBalance', id: string, balance: string, domain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> | null } | null, fundsClaims?: { __typename?: 'ModelColonyFundsClaimConnection', items: Array<{ __typename?: 'ColonyFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, chainFundsClaim?: { __typename?: 'ColonyChainFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null } | null, roles?: { __typename?: 'ModelColonyRoleConnection', items: Array<{ __typename?: 'ColonyRole', id: string, targetAddress: string, role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null, domain: { __typename?: 'Domain', id: string, nativeId: number } } | null> } | null, colonyMemberInvite?: { __typename?: 'ColonyMemberInvite', id: string, invitesRemaining: number } | null } | null, initiatorExtension?: { __typename?: 'ColonyExtension', hash: string, installedBy: string, installedAt: number, isDeprecated: boolean, isDeleted: boolean, isInitialized: boolean, address: string, colonyAddress: string, currentVersion: number, params?: { __typename?: 'ExtensionParams', votingReputation?: { __typename?: 'VotingReputationParams', maxVoteFraction: string, totalStakeFraction: string, voterRewardFraction: string, userMinStakeFraction: string, stakePeriod: string, submitPeriod: string, revealPeriod: string, escalationPeriod: string } | null, stakedExpenditure?: { __typename?: 'StakedExpenditureParams', stakeFraction: string } | null } | null } | null, initiatorToken?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, recipientUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', displayName?: string | null, displayNameChanged?: string | null, avatar?: string | null, thumbnail?: string | null } | null } | null, recipientColony?: { __typename?: 'Colony', name: string, version: number, reputation?: string | null, expendituresGlobalClaimDelay?: string | null, private?: boolean | null, colonyAddress: string, metadata?: { __typename?: 'ColonyMetadata', avatar?: string | null, displayName: string, thumbnail?: string | null, description?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', link: string, name: ExternalLinks }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null, nativeToken: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string }, status?: { __typename?: 'ColonyStatus', recovery?: boolean | null, nativeToken?: { __typename?: 'NativeTokenStatus', mintable?: boolean | null, unlockable?: boolean | null, unlocked?: boolean | null } | null } | null, chainMetadata: { __typename?: 'ChainMetadata', chainId: string, network?: Network | null }, tokens?: { __typename?: 'ModelColonyTokensConnection', items: Array<{ __typename?: 'ColonyTokens', colonyTokensId: string, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, motionsWithUnclaimedStakes?: Array<{ __typename?: 'ColonyUnclaimedStake', motionId: string, unclaimedRewards: Array<{ __typename?: 'StakerRewards', address: string, rewards: { __typename?: 'MotionStakeValues', nay: string, yay: string } }> }> | null, domains?: { __typename?: 'ModelDomainConnection', items: Array<{ __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null> } | null, balances?: { __typename?: 'ColonyBalances', items?: Array<{ __typename?: 'ColonyBalance', id: string, balance: string, domain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> | null } | null, fundsClaims?: { __typename?: 'ModelColonyFundsClaimConnection', items: Array<{ __typename?: 'ColonyFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, chainFundsClaim?: { __typename?: 'ColonyChainFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null } | null, roles?: { __typename?: 'ModelColonyRoleConnection', items: Array<{ __typename?: 'ColonyRole', id: string, targetAddress: string, role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null, domain: { __typename?: 'Domain', id: string, nativeId: number } } | null> } | null, colonyMemberInvite?: { __typename?: 'ColonyMemberInvite', id: string, invitesRemaining: number } | null } | null, recipientExtension?: { __typename?: 'ColonyExtension', hash: string, installedBy: string, installedAt: number, isDeprecated: boolean, isDeleted: boolean, isInitialized: boolean, address: string, colonyAddress: string, currentVersion: number, params?: { __typename?: 'ExtensionParams', votingReputation?: { __typename?: 'VotingReputationParams', maxVoteFraction: string, totalStakeFraction: string, voterRewardFraction: string, userMinStakeFraction: string, stakePeriod: string, submitPeriod: string, revealPeriod: string, escalationPeriod: string } | null, stakedExpenditure?: { __typename?: 'StakedExpenditureParams', stakeFraction: string } | null } | null } | null, recipientToken?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, token?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, fromDomain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, toDomain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, roles?: { __typename?: 'ColonyActionRoles', role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null } | null, payments?: Array<{ __typename?: 'Payment', amount: string, tokenAddress: string, recipientAddress: string }> | null, motionData?: { __typename?: 'ColonyMotion', remainingStakes: Array<string>, userMinStake: string, requiredStake: string, nativeMotionDomainId: string, isFinalized: boolean, skillRep: string, repSubmitted: string, hasObjection: boolean, isDecision: boolean, gasEstimate: string, transactionHash: string, createdAt: string, databaseMotionId: string, motionId: string, motionStakes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } }, usersStakes: Array<{ __typename?: 'UserMotionStakes', address: string, stakes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } } }>, motionDomain: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null }, stakerRewards: Array<{ __typename?: 'StakerRewards', address: string, isClaimed: boolean, rewards: { __typename?: 'MotionStakeValues', yay: string, nay: string } }>, voterRecord: Array<{ __typename?: 'VoterRecord', address: string, voteCount: string, vote?: number | null }>, revealedVotes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } }, motionStateHistory: { __typename?: 'MotionStateHistory', hasVoted: boolean, hasPassed: boolean, hasFailed: boolean, hasFailedNotFinalizable: boolean, inRevealPhase: boolean, yaySideFullyStakedAt?: string | null, naySideFullyStakedAt?: string | null, allVotesSubmittedAt?: string | null, allVotesRevealedAt?: string | null, endedAt?: string | null, finalizedAt?: string | null }, messages?: { __typename?: 'ModelMotionMessageConnection', items: Array<{ __typename?: 'MotionMessage', initiatorAddress: string, name: string, messageKey: string, vote?: string | null, amount?: string | null, createdAt: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null, objectionAnnotation?: { __typename?: 'Annotation', createdAt: string, message: string } | null, action?: { __typename?: 'ColonyAction', type: ColonyActionType } | null } | null, colony: { __typename?: 'Colony', colonyAddress: string, nativeToken: { __typename?: 'Token', nativeTokenDecimals: number, nativeTokenSymbol: string, tokenAddress: string }, tokens?: { __typename?: 'ModelColonyTokensConnection', items: Array<{ __typename?: 'ColonyTokens', colonyTokensId: string, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, metadata?: { __typename?: 'ColonyMetadata', displayName: string, avatar?: string | null, description?: string | null, thumbnail?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', name: ExternalLinks, link: string }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null }, pendingDomainMetadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null, pendingColonyMetadata?: { __typename?: 'ColonyMetadata', displayName: string, avatar?: string | null, description?: string | null, thumbnail?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', name: ExternalLinks, link: string }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null, annotation?: { __typename?: 'Annotation', createdAt: string, message: string } | null, decisionData?: { __typename?: 'ColonyDecision', title: string, description: string, motionDomainId: number, walletAddress: string, createdAt: string, actionId: string, colonyAddress: string } | null, safeTransaction?: { __typename?: 'SafeTransaction', id: string, safe: { __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }, transactions?: { __typename?: 'ModelSafeTransactionDataConnection', items: Array<{ __typename?: 'SafeTransactionData', transactionType: SafeTransactionType, amount?: string | null, rawAmount?: string | null, data?: string | null, abi?: string | null, contractFunction?: string | null, token?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, recipient?: { __typename?: 'SimpleTarget', id: string, walletAddress: string, profile: { __typename?: 'SimpleTargetProfile', avatarHash?: string | null, displayName?: string | null } } | null, contract?: { __typename?: 'SimpleTarget', id: string, walletAddress: string, profile: { __typename?: 'SimpleTargetProfile', avatarHash?: string | null, displayName?: string | null } } | null, nft?: { __typename?: 'NFT', id: string, walletAddress: string, profile: { __typename?: 'NFTProfile', displayName: string } } | null, nftData?: { __typename?: 'NFTData', address: string, description?: string | null, id: string, imageUri?: string | null, logoUri: string, name?: string | null, tokenName: string, tokenSymbol: string, uri: string } | null, functionParams?: Array<{ __typename?: 'FunctionParam', name: string, type: string, value: string } | null> | null } | null> } | null } | null, metadata?: { __typename?: 'ColonyActionMetadata', customTitle: string } | null } | null };

export type GetColonyMotionQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetColonyMotionQuery = { __typename?: 'Query', getColonyMotion?: { __typename?: 'ColonyMotion', remainingStakes: Array<string>, userMinStake: string, requiredStake: string, nativeMotionDomainId: string, isFinalized: boolean, skillRep: string, repSubmitted: string, hasObjection: boolean, isDecision: boolean, gasEstimate: string, transactionHash: string, createdAt: string, databaseMotionId: string, motionId: string, motionStakes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } }, usersStakes: Array<{ __typename?: 'UserMotionStakes', address: string, stakes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } } }>, motionDomain: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null }, stakerRewards: Array<{ __typename?: 'StakerRewards', address: string, isClaimed: boolean, rewards: { __typename?: 'MotionStakeValues', yay: string, nay: string } }>, voterRecord: Array<{ __typename?: 'VoterRecord', address: string, voteCount: string, vote?: number | null }>, revealedVotes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } }, motionStateHistory: { __typename?: 'MotionStateHistory', hasVoted: boolean, hasPassed: boolean, hasFailed: boolean, hasFailedNotFinalizable: boolean, inRevealPhase: boolean, yaySideFullyStakedAt?: string | null, naySideFullyStakedAt?: string | null, allVotesSubmittedAt?: string | null, allVotesRevealedAt?: string | null, endedAt?: string | null, finalizedAt?: string | null }, messages?: { __typename?: 'ModelMotionMessageConnection', items: Array<{ __typename?: 'MotionMessage', initiatorAddress: string, name: string, messageKey: string, vote?: string | null, amount?: string | null, createdAt: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null, objectionAnnotation?: { __typename?: 'Annotation', createdAt: string, message: string } | null, action?: { __typename?: 'ColonyAction', type: ColonyActionType } | null } | null };

export type GetMotionTransactionHashQueryVariables = Exact<{
  motionId: Scalars['ID'];
}>;


export type GetMotionTransactionHashQuery = { __typename?: 'Query', getColonyActionByMotionId?: { __typename?: 'ModelColonyActionConnection', items: Array<{ __typename?: 'ColonyAction', id: string } | null> } | null };

export type GetSafeTransactionStatusQueryVariables = Exact<{
  input: GetSafeTransactionStatusInput;
}>;


export type GetSafeTransactionStatusQuery = { __typename?: 'Query', getSafeTransactionStatus?: Array<string> | null };

export type GetTotalColonyActionsQueryVariables = Exact<{
  filter?: InputMaybe<SearchableColonyActionFilterInput>;
}>;


export type GetTotalColonyActionsQuery = { __typename?: 'Query', searchColonyActions?: { __typename?: 'SearchableColonyActionConnection', total?: number | null } | null };

export type GetTotalColonyDomainActionsQueryVariables = Exact<{
  colonyId: Scalars['ID'];
}>;


export type GetTotalColonyDomainActionsQuery = { __typename?: 'Query', searchColonyActions?: { __typename?: 'SearchableColonyActionConnection', aggregateItems: Array<{ __typename?: 'SearchableAggregateResult', result?: { __typename: 'SearchableAggregateBucketResult', buckets?: Array<{ __typename?: 'SearchableAggregateBucketResultItem', key: string, docCount: number } | null> | null } | { __typename?: 'SearchableAggregateScalarResult' } | null } | null> } | null };

export type SearchActionsQueryVariables = Exact<{
  nextToken?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<SearchableColonyActionFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SearchableColonyActionSortInput>> | InputMaybe<SearchableColonyActionSortInput>>;
}>;


export type SearchActionsQuery = { __typename?: 'Query', searchColonyActions?: { __typename?: 'SearchableColonyActionConnection', nextToken?: string | null, items: Array<{ __typename?: 'ColonyAction', type: ColonyActionType, blockNumber: number, initiatorAddress: string, recipientAddress?: string | null, amount?: string | null, tokenAddress?: string | null, createdAt: string, newColonyVersion?: number | null, individualEvents?: string | null, isMotion?: boolean | null, showInActionsList: boolean, members?: Array<string> | null, rootHash: string, expenditureId?: string | null, transactionHash: string, colonyAddress: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', displayName?: string | null, displayNameChanged?: string | null, avatar?: string | null, thumbnail?: string | null } | null } | null, initiatorColony?: { __typename?: 'Colony', name: string, version: number, reputation?: string | null, expendituresGlobalClaimDelay?: string | null, private?: boolean | null, colonyAddress: string, metadata?: { __typename?: 'ColonyMetadata', avatar?: string | null, displayName: string, thumbnail?: string | null, description?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', link: string, name: ExternalLinks }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null, nativeToken: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string }, status?: { __typename?: 'ColonyStatus', recovery?: boolean | null, nativeToken?: { __typename?: 'NativeTokenStatus', mintable?: boolean | null, unlockable?: boolean | null, unlocked?: boolean | null } | null } | null, chainMetadata: { __typename?: 'ChainMetadata', chainId: string, network?: Network | null }, tokens?: { __typename?: 'ModelColonyTokensConnection', items: Array<{ __typename?: 'ColonyTokens', colonyTokensId: string, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, motionsWithUnclaimedStakes?: Array<{ __typename?: 'ColonyUnclaimedStake', motionId: string, unclaimedRewards: Array<{ __typename?: 'StakerRewards', address: string, rewards: { __typename?: 'MotionStakeValues', nay: string, yay: string } }> }> | null, domains?: { __typename?: 'ModelDomainConnection', items: Array<{ __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null> } | null, balances?: { __typename?: 'ColonyBalances', items?: Array<{ __typename?: 'ColonyBalance', id: string, balance: string, domain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> | null } | null, fundsClaims?: { __typename?: 'ModelColonyFundsClaimConnection', items: Array<{ __typename?: 'ColonyFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, chainFundsClaim?: { __typename?: 'ColonyChainFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null } | null, roles?: { __typename?: 'ModelColonyRoleConnection', items: Array<{ __typename?: 'ColonyRole', id: string, targetAddress: string, role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null, domain: { __typename?: 'Domain', id: string, nativeId: number } } | null> } | null, colonyMemberInvite?: { __typename?: 'ColonyMemberInvite', id: string, invitesRemaining: number } | null } | null, initiatorExtension?: { __typename?: 'ColonyExtension', hash: string, installedBy: string, installedAt: number, isDeprecated: boolean, isDeleted: boolean, isInitialized: boolean, address: string, colonyAddress: string, currentVersion: number, params?: { __typename?: 'ExtensionParams', votingReputation?: { __typename?: 'VotingReputationParams', maxVoteFraction: string, totalStakeFraction: string, voterRewardFraction: string, userMinStakeFraction: string, stakePeriod: string, submitPeriod: string, revealPeriod: string, escalationPeriod: string } | null, stakedExpenditure?: { __typename?: 'StakedExpenditureParams', stakeFraction: string } | null } | null } | null, initiatorToken?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, recipientUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', displayName?: string | null, displayNameChanged?: string | null, avatar?: string | null, thumbnail?: string | null } | null } | null, recipientColony?: { __typename?: 'Colony', name: string, version: number, reputation?: string | null, expendituresGlobalClaimDelay?: string | null, private?: boolean | null, colonyAddress: string, metadata?: { __typename?: 'ColonyMetadata', avatar?: string | null, displayName: string, thumbnail?: string | null, description?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', link: string, name: ExternalLinks }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null, nativeToken: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string }, status?: { __typename?: 'ColonyStatus', recovery?: boolean | null, nativeToken?: { __typename?: 'NativeTokenStatus', mintable?: boolean | null, unlockable?: boolean | null, unlocked?: boolean | null } | null } | null, chainMetadata: { __typename?: 'ChainMetadata', chainId: string, network?: Network | null }, tokens?: { __typename?: 'ModelColonyTokensConnection', items: Array<{ __typename?: 'ColonyTokens', colonyTokensId: string, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, motionsWithUnclaimedStakes?: Array<{ __typename?: 'ColonyUnclaimedStake', motionId: string, unclaimedRewards: Array<{ __typename?: 'StakerRewards', address: string, rewards: { __typename?: 'MotionStakeValues', nay: string, yay: string } }> }> | null, domains?: { __typename?: 'ModelDomainConnection', items: Array<{ __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null> } | null, balances?: { __typename?: 'ColonyBalances', items?: Array<{ __typename?: 'ColonyBalance', id: string, balance: string, domain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> | null } | null, fundsClaims?: { __typename?: 'ModelColonyFundsClaimConnection', items: Array<{ __typename?: 'ColonyFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, chainFundsClaim?: { __typename?: 'ColonyChainFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null } | null, roles?: { __typename?: 'ModelColonyRoleConnection', items: Array<{ __typename?: 'ColonyRole', id: string, targetAddress: string, role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null, domain: { __typename?: 'Domain', id: string, nativeId: number } } | null> } | null, colonyMemberInvite?: { __typename?: 'ColonyMemberInvite', id: string, invitesRemaining: number } | null } | null, recipientExtension?: { __typename?: 'ColonyExtension', hash: string, installedBy: string, installedAt: number, isDeprecated: boolean, isDeleted: boolean, isInitialized: boolean, address: string, colonyAddress: string, currentVersion: number, params?: { __typename?: 'ExtensionParams', votingReputation?: { __typename?: 'VotingReputationParams', maxVoteFraction: string, totalStakeFraction: string, voterRewardFraction: string, userMinStakeFraction: string, stakePeriod: string, submitPeriod: string, revealPeriod: string, escalationPeriod: string } | null, stakedExpenditure?: { __typename?: 'StakedExpenditureParams', stakeFraction: string } | null } | null } | null, recipientToken?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, token?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, fromDomain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, toDomain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, roles?: { __typename?: 'ColonyActionRoles', role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null } | null, payments?: Array<{ __typename?: 'Payment', amount: string, tokenAddress: string, recipientAddress: string }> | null, motionData?: { __typename?: 'ColonyMotion', remainingStakes: Array<string>, userMinStake: string, requiredStake: string, nativeMotionDomainId: string, isFinalized: boolean, skillRep: string, repSubmitted: string, hasObjection: boolean, isDecision: boolean, gasEstimate: string, transactionHash: string, createdAt: string, databaseMotionId: string, motionId: string, motionStakes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } }, usersStakes: Array<{ __typename?: 'UserMotionStakes', address: string, stakes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } } }>, motionDomain: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null }, stakerRewards: Array<{ __typename?: 'StakerRewards', address: string, isClaimed: boolean, rewards: { __typename?: 'MotionStakeValues', yay: string, nay: string } }>, voterRecord: Array<{ __typename?: 'VoterRecord', address: string, voteCount: string, vote?: number | null }>, revealedVotes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } }, motionStateHistory: { __typename?: 'MotionStateHistory', hasVoted: boolean, hasPassed: boolean, hasFailed: boolean, hasFailedNotFinalizable: boolean, inRevealPhase: boolean, yaySideFullyStakedAt?: string | null, naySideFullyStakedAt?: string | null, allVotesSubmittedAt?: string | null, allVotesRevealedAt?: string | null, endedAt?: string | null, finalizedAt?: string | null }, messages?: { __typename?: 'ModelMotionMessageConnection', items: Array<{ __typename?: 'MotionMessage', initiatorAddress: string, name: string, messageKey: string, vote?: string | null, amount?: string | null, createdAt: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null, objectionAnnotation?: { __typename?: 'Annotation', createdAt: string, message: string } | null, action?: { __typename?: 'ColonyAction', type: ColonyActionType } | null } | null, colony: { __typename?: 'Colony', colonyAddress: string, nativeToken: { __typename?: 'Token', nativeTokenDecimals: number, nativeTokenSymbol: string, tokenAddress: string }, tokens?: { __typename?: 'ModelColonyTokensConnection', items: Array<{ __typename?: 'ColonyTokens', colonyTokensId: string, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, metadata?: { __typename?: 'ColonyMetadata', displayName: string, avatar?: string | null, description?: string | null, thumbnail?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', name: ExternalLinks, link: string }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null }, pendingDomainMetadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null, pendingColonyMetadata?: { __typename?: 'ColonyMetadata', displayName: string, avatar?: string | null, description?: string | null, thumbnail?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', name: ExternalLinks, link: string }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null, annotation?: { __typename?: 'Annotation', createdAt: string, message: string } | null, decisionData?: { __typename?: 'ColonyDecision', title: string, description: string, motionDomainId: number, walletAddress: string, createdAt: string, actionId: string, colonyAddress: string } | null, safeTransaction?: { __typename?: 'SafeTransaction', id: string, safe: { __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }, transactions?: { __typename?: 'ModelSafeTransactionDataConnection', items: Array<{ __typename?: 'SafeTransactionData', transactionType: SafeTransactionType, amount?: string | null, rawAmount?: string | null, data?: string | null, abi?: string | null, contractFunction?: string | null, token?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, recipient?: { __typename?: 'SimpleTarget', id: string, walletAddress: string, profile: { __typename?: 'SimpleTargetProfile', avatarHash?: string | null, displayName?: string | null } } | null, contract?: { __typename?: 'SimpleTarget', id: string, walletAddress: string, profile: { __typename?: 'SimpleTargetProfile', avatarHash?: string | null, displayName?: string | null } } | null, nft?: { __typename?: 'NFT', id: string, walletAddress: string, profile: { __typename?: 'NFTProfile', displayName: string } } | null, nftData?: { __typename?: 'NFTData', address: string, description?: string | null, id: string, imageUri?: string | null, logoUri: string, name?: string | null, tokenName: string, tokenSymbol: string, uri: string } | null, functionParams?: Array<{ __typename?: 'FunctionParam', name: string, type: string, value: string } | null> | null } | null> } | null } | null, metadata?: { __typename?: 'ColonyActionMetadata', customTitle: string } | null } | null> } | null };

export type GetFullColonyByAddressQueryVariables = Exact<{
  address: Scalars['ID'];
}>;


export type GetFullColonyByAddressQuery = { __typename?: 'Query', getColonyByAddress?: { __typename?: 'ModelColonyConnection', items: Array<{ __typename?: 'Colony', name: string, version: number, reputation?: string | null, expendituresGlobalClaimDelay?: string | null, private?: boolean | null, colonyAddress: string, nativeToken: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string }, status?: { __typename?: 'ColonyStatus', recovery?: boolean | null, nativeToken?: { __typename?: 'NativeTokenStatus', mintable?: boolean | null, unlockable?: boolean | null, unlocked?: boolean | null } | null } | null, chainMetadata: { __typename?: 'ChainMetadata', chainId: string, network?: Network | null }, tokens?: { __typename?: 'ModelColonyTokensConnection', items: Array<{ __typename?: 'ColonyTokens', colonyTokensId: string, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, motionsWithUnclaimedStakes?: Array<{ __typename?: 'ColonyUnclaimedStake', motionId: string, unclaimedRewards: Array<{ __typename?: 'StakerRewards', address: string, rewards: { __typename?: 'MotionStakeValues', nay: string, yay: string } }> }> | null, domains?: { __typename?: 'ModelDomainConnection', items: Array<{ __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null> } | null, balances?: { __typename?: 'ColonyBalances', items?: Array<{ __typename?: 'ColonyBalance', id: string, balance: string, domain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> | null } | null, fundsClaims?: { __typename?: 'ModelColonyFundsClaimConnection', items: Array<{ __typename?: 'ColonyFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, chainFundsClaim?: { __typename?: 'ColonyChainFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null } | null, metadata?: { __typename?: 'ColonyMetadata', displayName: string, avatar?: string | null, description?: string | null, thumbnail?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', name: ExternalLinks, link: string }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null, roles?: { __typename?: 'ModelColonyRoleConnection', items: Array<{ __typename?: 'ColonyRole', id: string, targetAddress: string, role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null, domain: { __typename?: 'Domain', id: string, nativeId: number } } | null> } | null, colonyMemberInvite?: { __typename?: 'ColonyMemberInvite', id: string, invitesRemaining: number } | null } | null> } | null };

export type GetFullColonyByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetFullColonyByNameQuery = { __typename?: 'Query', getColonyByName?: { __typename?: 'ModelColonyConnection', items: Array<{ __typename?: 'Colony', name: string, version: number, reputation?: string | null, expendituresGlobalClaimDelay?: string | null, private?: boolean | null, colonyAddress: string, nativeToken: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string }, status?: { __typename?: 'ColonyStatus', recovery?: boolean | null, nativeToken?: { __typename?: 'NativeTokenStatus', mintable?: boolean | null, unlockable?: boolean | null, unlocked?: boolean | null } | null } | null, chainMetadata: { __typename?: 'ChainMetadata', chainId: string, network?: Network | null }, tokens?: { __typename?: 'ModelColonyTokensConnection', items: Array<{ __typename?: 'ColonyTokens', colonyTokensId: string, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, motionsWithUnclaimedStakes?: Array<{ __typename?: 'ColonyUnclaimedStake', motionId: string, unclaimedRewards: Array<{ __typename?: 'StakerRewards', address: string, rewards: { __typename?: 'MotionStakeValues', nay: string, yay: string } }> }> | null, domains?: { __typename?: 'ModelDomainConnection', items: Array<{ __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null> } | null, balances?: { __typename?: 'ColonyBalances', items?: Array<{ __typename?: 'ColonyBalance', id: string, balance: string, domain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> | null } | null, fundsClaims?: { __typename?: 'ModelColonyFundsClaimConnection', items: Array<{ __typename?: 'ColonyFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, chainFundsClaim?: { __typename?: 'ColonyChainFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null } | null, metadata?: { __typename?: 'ColonyMetadata', displayName: string, avatar?: string | null, description?: string | null, thumbnail?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', name: ExternalLinks, link: string }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null, roles?: { __typename?: 'ModelColonyRoleConnection', items: Array<{ __typename?: 'ColonyRole', id: string, targetAddress: string, role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null, domain: { __typename?: 'Domain', id: string, nativeId: number } } | null> } | null, colonyMemberInvite?: { __typename?: 'ColonyMemberInvite', id: string, invitesRemaining: number } | null } | null> } | null };

export type GetDisplayNameByColonyNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetDisplayNameByColonyNameQuery = { __typename?: 'Query', getColonyByName?: { __typename?: 'ModelColonyConnection', items: Array<{ __typename?: 'Colony', metadata?: { __typename?: 'ColonyMetadata', displayName: string } | null } | null> } | null };

export type GetMetacolonyQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMetacolonyQuery = { __typename?: 'Query', getColonyByType?: { __typename?: 'ModelColonyConnection', items: Array<{ __typename?: 'Colony', name: string, version: number, reputation?: string | null, expendituresGlobalClaimDelay?: string | null, private?: boolean | null, colonyAddress: string, nativeToken: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string }, status?: { __typename?: 'ColonyStatus', recovery?: boolean | null, nativeToken?: { __typename?: 'NativeTokenStatus', mintable?: boolean | null, unlockable?: boolean | null, unlocked?: boolean | null } | null } | null, chainMetadata: { __typename?: 'ChainMetadata', chainId: string, network?: Network | null }, tokens?: { __typename?: 'ModelColonyTokensConnection', items: Array<{ __typename?: 'ColonyTokens', colonyTokensId: string, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, motionsWithUnclaimedStakes?: Array<{ __typename?: 'ColonyUnclaimedStake', motionId: string, unclaimedRewards: Array<{ __typename?: 'StakerRewards', address: string, rewards: { __typename?: 'MotionStakeValues', nay: string, yay: string } }> }> | null, domains?: { __typename?: 'ModelDomainConnection', items: Array<{ __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null> } | null, balances?: { __typename?: 'ColonyBalances', items?: Array<{ __typename?: 'ColonyBalance', id: string, balance: string, domain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> | null } | null, fundsClaims?: { __typename?: 'ModelColonyFundsClaimConnection', items: Array<{ __typename?: 'ColonyFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, chainFundsClaim?: { __typename?: 'ColonyChainFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null } | null, metadata?: { __typename?: 'ColonyMetadata', displayName: string, avatar?: string | null, description?: string | null, thumbnail?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', name: ExternalLinks, link: string }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null, roles?: { __typename?: 'ModelColonyRoleConnection', items: Array<{ __typename?: 'ColonyRole', id: string, targetAddress: string, role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null, domain: { __typename?: 'Domain', id: string, nativeId: number } } | null> } | null, colonyMemberInvite?: { __typename?: 'ColonyMemberInvite', id: string, invitesRemaining: number } | null } | null> } | null };

export type GetColonyExtensionsQueryVariables = Exact<{
  colonyAddress: Scalars['ID'];
}>;


export type GetColonyExtensionsQuery = { __typename?: 'Query', getColony?: { __typename?: 'Colony', id: string, extensions?: { __typename?: 'ModelColonyExtensionConnection', items: Array<{ __typename?: 'ColonyExtension', hash: string, installedBy: string, installedAt: number, isDeprecated: boolean, isDeleted: boolean, isInitialized: boolean, address: string, colonyAddress: string, currentVersion: number, params?: { __typename?: 'ExtensionParams', votingReputation?: { __typename?: 'VotingReputationParams', maxVoteFraction: string, totalStakeFraction: string, voterRewardFraction: string, userMinStakeFraction: string, stakePeriod: string, submitPeriod: string, revealPeriod: string, escalationPeriod: string } | null, stakedExpenditure?: { __typename?: 'StakedExpenditureParams', stakeFraction: string } | null } | null } | null> } | null } | null };

export type GetColonyExtensionQueryVariables = Exact<{
  colonyAddress: Scalars['ID'];
  extensionHash: Scalars['String'];
}>;


export type GetColonyExtensionQuery = { __typename?: 'Query', getExtensionByColonyAndHash?: { __typename?: 'ModelColonyExtensionConnection', items: Array<{ __typename?: 'ColonyExtension', hash: string, installedBy: string, installedAt: number, isDeprecated: boolean, isDeleted: boolean, isInitialized: boolean, address: string, colonyAddress: string, currentVersion: number, params?: { __typename?: 'ExtensionParams', votingReputation?: { __typename?: 'VotingReputationParams', maxVoteFraction: string, totalStakeFraction: string, voterRewardFraction: string, userMinStakeFraction: string, stakePeriod: string, submitPeriod: string, revealPeriod: string, escalationPeriod: string } | null, stakedExpenditure?: { __typename?: 'StakedExpenditureParams', stakeFraction: string } | null } | null } | null> } | null };

export type GetPrivateBetaCodeInviteValidityQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPrivateBetaCodeInviteValidityQuery = { __typename?: 'Query', getPrivateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', shareableInvites?: number | null } | null };

export type CheckColonyNameExistsQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type CheckColonyNameExistsQuery = { __typename?: 'Query', getColonyByName?: { __typename?: 'ModelColonyConnection', items: Array<{ __typename?: 'Colony', id: string } | null> } | null };

export type GetPublicColonyByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetPublicColonyByNameQuery = { __typename?: 'Query', getColonyByName?: { __typename?: 'ModelColonyConnection', items: Array<{ __typename?: 'Colony', name: string, colonyAddress: string, metadata?: { __typename?: 'ColonyMetadata', avatar?: string | null, displayName: string, thumbnail?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', link: string, name: ExternalLinks }> | null } | null } | null> } | null };

export type GetColonyMemberInviteQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetColonyMemberInviteQuery = { __typename?: 'Query', getColonyMemberInvite?: { __typename?: 'ColonyMemberInvite', invitesRemaining: number, colony: { __typename?: 'Colony', name: string, colonyAddress: string, metadata?: { __typename?: 'ColonyMetadata', avatar?: string | null, displayName: string, thumbnail?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', link: string, name: ExternalLinks }> | null } | null } } | null };

export type GetColonyContributorQueryVariables = Exact<{
  id: Scalars['ID'];
  colonyAddress: Scalars['ID'];
}>;


export type GetColonyContributorQuery = { __typename?: 'Query', getColonyContributor?: { __typename?: 'ColonyContributor', contributorAddress: string, isVerified: boolean, hasPermissions?: boolean | null, hasReputation?: boolean | null, isWatching?: boolean | null, colonyReputationPercentage: number, type?: ContributorType | null, roles?: { __typename?: 'ModelColonyRoleConnection', items: Array<{ __typename?: 'ColonyRole', domainId: string, role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null, id: string, domain: { __typename?: 'Domain', id: string, nativeId: number, metadata?: { __typename?: 'DomainMetadata', name: string } | null } } | null> } | null, reputation?: { __typename?: 'ModelContributorReputationConnection', items: Array<{ __typename?: 'ContributorReputation', reputationPercentage: number, reputationRaw: string, domainId: string, id: string, domain: { __typename?: 'Domain', id: string, nativeId: number, metadata?: { __typename?: 'DomainMetadata', name: string } | null } } | null> } | null, user?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null } | null } | null };

export type GetColonyContributorsQueryVariables = Exact<{
  colonyAddress: Scalars['ID'];
  sortDirection?: InputMaybe<ModelSortDirection>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
}>;


export type GetColonyContributorsQuery = { __typename?: 'Query', getContributorsByColony?: { __typename?: 'ModelColonyContributorConnection', nextToken?: string | null, items: Array<{ __typename?: 'ColonyContributor', contributorAddress: string, isVerified: boolean, hasPermissions?: boolean | null, hasReputation?: boolean | null, isWatching?: boolean | null, colonyReputationPercentage: number, type?: ContributorType | null, roles?: { __typename?: 'ModelColonyRoleConnection', items: Array<{ __typename?: 'ColonyRole', domainId: string, role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null, id: string, domain: { __typename?: 'Domain', id: string, nativeId: number, metadata?: { __typename?: 'DomainMetadata', name: string } | null } } | null> } | null, reputation?: { __typename?: 'ModelContributorReputationConnection', items: Array<{ __typename?: 'ContributorReputation', reputationPercentage: number, reputationRaw: string, domainId: string, id: string, domain: { __typename?: 'Domain', id: string, nativeId: number, metadata?: { __typename?: 'DomainMetadata', name: string } | null } } | null> } | null, user?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null } | null } | null> } | null };

export type GetContributorsByAddressQueryVariables = Exact<{
  contributorAddress: Scalars['ID'];
  sortDirection?: InputMaybe<ModelSortDirection>;
  limit?: InputMaybe<Scalars['Int']>;
  nextToken?: InputMaybe<Scalars['String']>;
  isWatching?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetContributorsByAddressQuery = { __typename?: 'Query', getContributorsByAddress?: { __typename?: 'ModelColonyContributorConnection', nextToken?: string | null, items: Array<{ __typename?: 'ColonyContributor', id: string, createdAt: string, colony: { __typename?: 'Colony', name: string, colonyAddress: string, metadata?: { __typename?: 'ColonyMetadata', displayName: string, avatar?: string | null, description?: string | null, thumbnail?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', name: ExternalLinks, link: string }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null, chainMetadata: { __typename?: 'ChainMetadata', chainId: string, network?: Network | null } } } | null> } | null };

export type SearchColonyContributorsQueryVariables = Exact<{
  colonyAddress: Scalars['ID'];
  nextToken?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type SearchColonyContributorsQuery = { __typename?: 'Query', searchColonyContributors?: { __typename?: 'SearchableColonyContributorConnection', total?: number | null, nextToken?: string | null, items: Array<{ __typename?: 'ColonyContributor', contributorAddress: string, isVerified: boolean, hasPermissions?: boolean | null, hasReputation?: boolean | null, isWatching?: boolean | null, colonyReputationPercentage: number, type?: ContributorType | null, roles?: { __typename?: 'ModelColonyRoleConnection', items: Array<{ __typename?: 'ColonyRole', domainId: string, role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null, id: string, domain: { __typename?: 'Domain', id: string, nativeId: number, metadata?: { __typename?: 'DomainMetadata', name: string } | null } } | null> } | null, reputation?: { __typename?: 'ModelContributorReputationConnection', items: Array<{ __typename?: 'ContributorReputation', reputationPercentage: number, reputationRaw: string, domainId: string, id: string, domain: { __typename?: 'Domain', id: string, nativeId: number, metadata?: { __typename?: 'DomainMetadata', name: string } | null } } | null> } | null, user?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null } | null } | null> } | null };

export type GetColonyDecisionsQueryVariables = Exact<{
  colonyAddress: Scalars['String'];
  sortDirection?: InputMaybe<ModelSortDirection>;
  filter?: InputMaybe<ModelColonyDecisionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetColonyDecisionsQuery = { __typename?: 'Query', getColonyDecisionByColonyAddress?: { __typename?: 'ModelColonyDecisionConnection', nextToken?: string | null, items: Array<{ __typename?: 'ColonyDecision', title: string, description: string, motionDomainId: number, walletAddress: string, createdAt: string, actionId: string, colonyAddress: string } | null> } | null };

export type GetColonyExpendituresQueryVariables = Exact<{
  colonyAddress: Scalars['ID'];
}>;


export type GetColonyExpendituresQuery = { __typename?: 'Query', getColony?: { __typename?: 'Colony', id: string, expenditures?: { __typename?: 'ModelExpenditureConnection', items: Array<{ __typename?: 'Expenditure', id: string, nativeId: number, ownerAddress: string, status: ExpenditureStatus, nativeFundingPotId: number, nativeDomainId: number, finalizedAt?: number | null, type: ExpenditureType, isStaked: boolean, slots: Array<{ __typename?: 'ExpenditureSlot', id: number, recipientAddress?: string | null, claimDelay?: string | null, payoutModifier?: number | null, payouts?: Array<{ __typename?: 'ExpenditurePayout', tokenAddress: string, amount: string, isClaimed: boolean, networkFee?: string | null }> | null }>, metadata?: { __typename?: 'ExpenditureMetadata', fundFromDomainNativeId: number, stages?: Array<{ __typename?: 'ExpenditureStage', slotId: number, name: string, isReleased: boolean }> | null } | null, motions?: { __typename?: 'ModelColonyMotionConnection', items: Array<{ __typename?: 'ColonyMotion', expenditureSlotId?: number | null, remainingStakes: Array<string>, userMinStake: string, requiredStake: string, nativeMotionDomainId: string, isFinalized: boolean, skillRep: string, repSubmitted: string, hasObjection: boolean, isDecision: boolean, gasEstimate: string, transactionHash: string, createdAt: string, databaseMotionId: string, motionId: string, motionStakes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } }, usersStakes: Array<{ __typename?: 'UserMotionStakes', address: string, stakes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } } }>, motionDomain: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null }, stakerRewards: Array<{ __typename?: 'StakerRewards', address: string, isClaimed: boolean, rewards: { __typename?: 'MotionStakeValues', yay: string, nay: string } }>, voterRecord: Array<{ __typename?: 'VoterRecord', address: string, voteCount: string, vote?: number | null }>, revealedVotes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } }, motionStateHistory: { __typename?: 'MotionStateHistory', hasVoted: boolean, hasPassed: boolean, hasFailed: boolean, hasFailedNotFinalizable: boolean, inRevealPhase: boolean, yaySideFullyStakedAt?: string | null, naySideFullyStakedAt?: string | null, allVotesSubmittedAt?: string | null, allVotesRevealedAt?: string | null, endedAt?: string | null, finalizedAt?: string | null }, messages?: { __typename?: 'ModelMotionMessageConnection', items: Array<{ __typename?: 'MotionMessage', initiatorAddress: string, name: string, messageKey: string, vote?: string | null, amount?: string | null, createdAt: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null, objectionAnnotation?: { __typename?: 'Annotation', createdAt: string, message: string } | null, action?: { __typename?: 'ColonyAction', type: ColonyActionType } | null } | null> } | null, balances?: Array<{ __typename?: 'ExpenditureBalance', tokenAddress: string, amount: string }> | null, lockingActions?: { __typename?: 'ModelColonyActionConnection', items: Array<{ __typename?: 'ColonyAction', id: string, initiatorAddress: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null, fundingActions?: { __typename?: 'ModelColonyActionConnection', items: Array<{ __typename?: 'ColonyAction', id: string, initiatorAddress: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null, finalizingActions?: { __typename?: 'ModelColonyActionConnection', items: Array<{ __typename?: 'ColonyAction', id: string, initiatorAddress: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null, cancellingActions?: { __typename?: 'ModelColonyActionConnection', items: Array<{ __typename?: 'ColonyAction', id: string, initiatorAddress: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null, editingActions?: { __typename?: 'ModelColonyActionConnection', items: Array<{ __typename?: 'ColonyAction', id: string, initiatorAddress: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null } | null> } | null } | null };

export type GetExpenditureQueryVariables = Exact<{
  expenditureId: Scalars['ID'];
}>;


export type GetExpenditureQuery = { __typename?: 'Query', getExpenditure?: { __typename?: 'Expenditure', id: string, nativeId: number, ownerAddress: string, status: ExpenditureStatus, nativeFundingPotId: number, nativeDomainId: number, finalizedAt?: number | null, type: ExpenditureType, isStaked: boolean, slots: Array<{ __typename?: 'ExpenditureSlot', id: number, recipientAddress?: string | null, claimDelay?: string | null, payoutModifier?: number | null, payouts?: Array<{ __typename?: 'ExpenditurePayout', tokenAddress: string, amount: string, isClaimed: boolean, networkFee?: string | null }> | null }>, metadata?: { __typename?: 'ExpenditureMetadata', fundFromDomainNativeId: number, stages?: Array<{ __typename?: 'ExpenditureStage', slotId: number, name: string, isReleased: boolean }> | null } | null, motions?: { __typename?: 'ModelColonyMotionConnection', items: Array<{ __typename?: 'ColonyMotion', expenditureSlotId?: number | null, remainingStakes: Array<string>, userMinStake: string, requiredStake: string, nativeMotionDomainId: string, isFinalized: boolean, skillRep: string, repSubmitted: string, hasObjection: boolean, isDecision: boolean, gasEstimate: string, transactionHash: string, createdAt: string, databaseMotionId: string, motionId: string, motionStakes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } }, usersStakes: Array<{ __typename?: 'UserMotionStakes', address: string, stakes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } } }>, motionDomain: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null }, stakerRewards: Array<{ __typename?: 'StakerRewards', address: string, isClaimed: boolean, rewards: { __typename?: 'MotionStakeValues', yay: string, nay: string } }>, voterRecord: Array<{ __typename?: 'VoterRecord', address: string, voteCount: string, vote?: number | null }>, revealedVotes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } }, motionStateHistory: { __typename?: 'MotionStateHistory', hasVoted: boolean, hasPassed: boolean, hasFailed: boolean, hasFailedNotFinalizable: boolean, inRevealPhase: boolean, yaySideFullyStakedAt?: string | null, naySideFullyStakedAt?: string | null, allVotesSubmittedAt?: string | null, allVotesRevealedAt?: string | null, endedAt?: string | null, finalizedAt?: string | null }, messages?: { __typename?: 'ModelMotionMessageConnection', items: Array<{ __typename?: 'MotionMessage', initiatorAddress: string, name: string, messageKey: string, vote?: string | null, amount?: string | null, createdAt: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null, objectionAnnotation?: { __typename?: 'Annotation', createdAt: string, message: string } | null, action?: { __typename?: 'ColonyAction', type: ColonyActionType } | null } | null> } | null, balances?: Array<{ __typename?: 'ExpenditureBalance', tokenAddress: string, amount: string }> | null, lockingActions?: { __typename?: 'ModelColonyActionConnection', items: Array<{ __typename?: 'ColonyAction', id: string, initiatorAddress: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null, fundingActions?: { __typename?: 'ModelColonyActionConnection', items: Array<{ __typename?: 'ColonyAction', id: string, initiatorAddress: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null, finalizingActions?: { __typename?: 'ModelColonyActionConnection', items: Array<{ __typename?: 'ColonyAction', id: string, initiatorAddress: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null, cancellingActions?: { __typename?: 'ModelColonyActionConnection', items: Array<{ __typename?: 'ColonyAction', id: string, initiatorAddress: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null, editingActions?: { __typename?: 'ModelColonyActionConnection', items: Array<{ __typename?: 'ColonyAction', id: string, initiatorAddress: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null } | null };

export type GetColonyExtensionsByColonyAddressQueryVariables = Exact<{
  colonyAddress: Scalars['ID'];
}>;


export type GetColonyExtensionsByColonyAddressQuery = { __typename?: 'Query', getExtensionByColonyAndHash?: { __typename?: 'ModelColonyExtensionConnection', items: Array<{ __typename?: 'ColonyExtension', id: string } | null> } | null };

export type GetExtensionInstallationsCountQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetExtensionInstallationsCountQuery = { __typename?: 'Query', getExtensionInstallationsCount?: { __typename?: 'ExtensionInstallationsCount', oneTxPayment: number, stakedExpenditure: number, stagedExpenditure: number, streamingPayments: number, reputationWeighted: number } | null };

export type GetReputationMiningCycleMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetReputationMiningCycleMetadataQuery = { __typename?: 'Query', getReputationMiningCycleMetadata?: { __typename?: 'ReputationMiningCycleMetadata', lastCompletedAt: string } | null };

export type GetMotionStateQueryVariables = Exact<{
  input: GetMotionStateInput;
}>;


export type GetMotionStateQuery = { __typename?: 'Query', getMotionState: number };

export type GetVoterRewardsQueryVariables = Exact<{
  input: GetVoterRewardsInput;
}>;


export type GetVoterRewardsQuery = { __typename?: 'Query', getVoterRewards?: { __typename?: 'VoterRewardsReturn', min: string, max: string, reward: string } | null };

export type GetMotionByTransactionHashQueryVariables = Exact<{
  transactionHash: Scalars['ID'];
}>;


export type GetMotionByTransactionHashQuery = { __typename?: 'Query', getMotionByTransactionHash?: { __typename?: 'ModelColonyMotionConnection', items: Array<{ __typename?: 'ColonyMotion', remainingStakes: Array<string>, userMinStake: string, requiredStake: string, nativeMotionDomainId: string, isFinalized: boolean, skillRep: string, repSubmitted: string, hasObjection: boolean, isDecision: boolean, gasEstimate: string, transactionHash: string, createdAt: string, databaseMotionId: string, motionId: string, motionStakes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } }, usersStakes: Array<{ __typename?: 'UserMotionStakes', address: string, stakes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } } }>, motionDomain: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null }, stakerRewards: Array<{ __typename?: 'StakerRewards', address: string, isClaimed: boolean, rewards: { __typename?: 'MotionStakeValues', yay: string, nay: string } }>, voterRecord: Array<{ __typename?: 'VoterRecord', address: string, voteCount: string, vote?: number | null }>, revealedVotes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } }, motionStateHistory: { __typename?: 'MotionStateHistory', hasVoted: boolean, hasPassed: boolean, hasFailed: boolean, hasFailedNotFinalizable: boolean, inRevealPhase: boolean, yaySideFullyStakedAt?: string | null, naySideFullyStakedAt?: string | null, allVotesSubmittedAt?: string | null, allVotesRevealedAt?: string | null, endedAt?: string | null, finalizedAt?: string | null }, messages?: { __typename?: 'ModelMotionMessageConnection', items: Array<{ __typename?: 'MotionMessage', initiatorAddress: string, name: string, messageKey: string, vote?: string | null, amount?: string | null, createdAt: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null, objectionAnnotation?: { __typename?: 'Annotation', createdAt: string, message: string } | null, action?: { __typename?: 'ColonyAction', type: ColonyActionType } | null } | null> } | null };

export type GetMotionTimeoutPeriodsQueryVariables = Exact<{
  input: GetMotionTimeoutPeriodsInput;
}>;


export type GetMotionTimeoutPeriodsQuery = { __typename?: 'Query', getMotionTimeoutPeriods?: { __typename?: 'GetMotionTimeoutPeriodsReturn', timeLeftToStake: string, timeLeftToVote: string, timeLeftToReveal: string, timeLeftToEscalate: string } | null };

export type GetCurrentNetworkInverseFeeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentNetworkInverseFeeQuery = { __typename?: 'Query', listCurrentNetworkInverseFees?: { __typename?: 'ModelCurrentNetworkInverseFeeConnection', items: Array<{ __typename?: 'CurrentNetworkInverseFee', inverseFee: string } | null> } | null };

export type GetProfileByEmailQueryVariables = Exact<{
  email: Scalars['AWSEmail'];
}>;


export type GetProfileByEmailQuery = { __typename?: 'Query', getProfileByEmail?: { __typename?: 'ModelProfileConnection', items: Array<{ __typename?: 'Profile', id: string } | null> } | null };

export type GetColonyHistoricRoleRolesQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetColonyHistoricRoleRolesQuery = { __typename?: 'Query', getColonyHistoricRole?: { __typename?: 'ColonyHistoricRole', role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null } | null };

export type GetUserStakesQueryVariables = Exact<{
  userAddress: Scalars['ID'];
  colonyAddress: Scalars['ID'];
}>;


export type GetUserStakesQuery = { __typename?: 'Query', getUserStakes?: { __typename?: 'ModelUserStakeConnection', items: Array<{ __typename?: 'UserStake', id: string, amount: string, isClaimed: boolean, createdAt: string, action?: { __typename?: 'ColonyAction', type: ColonyActionType, blockNumber: number, initiatorAddress: string, recipientAddress?: string | null, amount?: string | null, tokenAddress?: string | null, createdAt: string, newColonyVersion?: number | null, individualEvents?: string | null, isMotion?: boolean | null, showInActionsList: boolean, members?: Array<string> | null, rootHash: string, expenditureId?: string | null, transactionHash: string, colonyAddress: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', displayName?: string | null, displayNameChanged?: string | null, avatar?: string | null, thumbnail?: string | null } | null } | null, initiatorColony?: { __typename?: 'Colony', name: string, version: number, reputation?: string | null, expendituresGlobalClaimDelay?: string | null, private?: boolean | null, colonyAddress: string, metadata?: { __typename?: 'ColonyMetadata', avatar?: string | null, displayName: string, thumbnail?: string | null, description?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', link: string, name: ExternalLinks }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null, nativeToken: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string }, status?: { __typename?: 'ColonyStatus', recovery?: boolean | null, nativeToken?: { __typename?: 'NativeTokenStatus', mintable?: boolean | null, unlockable?: boolean | null, unlocked?: boolean | null } | null } | null, chainMetadata: { __typename?: 'ChainMetadata', chainId: string, network?: Network | null }, tokens?: { __typename?: 'ModelColonyTokensConnection', items: Array<{ __typename?: 'ColonyTokens', colonyTokensId: string, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, motionsWithUnclaimedStakes?: Array<{ __typename?: 'ColonyUnclaimedStake', motionId: string, unclaimedRewards: Array<{ __typename?: 'StakerRewards', address: string, rewards: { __typename?: 'MotionStakeValues', nay: string, yay: string } }> }> | null, domains?: { __typename?: 'ModelDomainConnection', items: Array<{ __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null> } | null, balances?: { __typename?: 'ColonyBalances', items?: Array<{ __typename?: 'ColonyBalance', id: string, balance: string, domain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> | null } | null, fundsClaims?: { __typename?: 'ModelColonyFundsClaimConnection', items: Array<{ __typename?: 'ColonyFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, chainFundsClaim?: { __typename?: 'ColonyChainFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null } | null, roles?: { __typename?: 'ModelColonyRoleConnection', items: Array<{ __typename?: 'ColonyRole', id: string, targetAddress: string, role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null, domain: { __typename?: 'Domain', id: string, nativeId: number } } | null> } | null, colonyMemberInvite?: { __typename?: 'ColonyMemberInvite', id: string, invitesRemaining: number } | null } | null, initiatorExtension?: { __typename?: 'ColonyExtension', hash: string, installedBy: string, installedAt: number, isDeprecated: boolean, isDeleted: boolean, isInitialized: boolean, address: string, colonyAddress: string, currentVersion: number, params?: { __typename?: 'ExtensionParams', votingReputation?: { __typename?: 'VotingReputationParams', maxVoteFraction: string, totalStakeFraction: string, voterRewardFraction: string, userMinStakeFraction: string, stakePeriod: string, submitPeriod: string, revealPeriod: string, escalationPeriod: string } | null, stakedExpenditure?: { __typename?: 'StakedExpenditureParams', stakeFraction: string } | null } | null } | null, initiatorToken?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, recipientUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', displayName?: string | null, displayNameChanged?: string | null, avatar?: string | null, thumbnail?: string | null } | null } | null, recipientColony?: { __typename?: 'Colony', name: string, version: number, reputation?: string | null, expendituresGlobalClaimDelay?: string | null, private?: boolean | null, colonyAddress: string, metadata?: { __typename?: 'ColonyMetadata', avatar?: string | null, displayName: string, thumbnail?: string | null, description?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', link: string, name: ExternalLinks }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null, nativeToken: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string }, status?: { __typename?: 'ColonyStatus', recovery?: boolean | null, nativeToken?: { __typename?: 'NativeTokenStatus', mintable?: boolean | null, unlockable?: boolean | null, unlocked?: boolean | null } | null } | null, chainMetadata: { __typename?: 'ChainMetadata', chainId: string, network?: Network | null }, tokens?: { __typename?: 'ModelColonyTokensConnection', items: Array<{ __typename?: 'ColonyTokens', colonyTokensId: string, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, motionsWithUnclaimedStakes?: Array<{ __typename?: 'ColonyUnclaimedStake', motionId: string, unclaimedRewards: Array<{ __typename?: 'StakerRewards', address: string, rewards: { __typename?: 'MotionStakeValues', nay: string, yay: string } }> }> | null, domains?: { __typename?: 'ModelDomainConnection', items: Array<{ __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null> } | null, balances?: { __typename?: 'ColonyBalances', items?: Array<{ __typename?: 'ColonyBalance', id: string, balance: string, domain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> | null } | null, fundsClaims?: { __typename?: 'ModelColonyFundsClaimConnection', items: Array<{ __typename?: 'ColonyFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, chainFundsClaim?: { __typename?: 'ColonyChainFundsClaim', id: string, createdAtBlock: number, createdAt: string, amount: string, isClaimed?: boolean | null } | null, roles?: { __typename?: 'ModelColonyRoleConnection', items: Array<{ __typename?: 'ColonyRole', id: string, targetAddress: string, role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null, domain: { __typename?: 'Domain', id: string, nativeId: number } } | null> } | null, colonyMemberInvite?: { __typename?: 'ColonyMemberInvite', id: string, invitesRemaining: number } | null } | null, recipientExtension?: { __typename?: 'ColonyExtension', hash: string, installedBy: string, installedAt: number, isDeprecated: boolean, isDeleted: boolean, isInitialized: boolean, address: string, colonyAddress: string, currentVersion: number, params?: { __typename?: 'ExtensionParams', votingReputation?: { __typename?: 'VotingReputationParams', maxVoteFraction: string, totalStakeFraction: string, voterRewardFraction: string, userMinStakeFraction: string, stakePeriod: string, submitPeriod: string, revealPeriod: string, escalationPeriod: string } | null, stakedExpenditure?: { __typename?: 'StakedExpenditureParams', stakeFraction: string } | null } | null } | null, recipientToken?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, token?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, fromDomain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, toDomain?: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null } | null, roles?: { __typename?: 'ColonyActionRoles', role_0?: boolean | null, role_1?: boolean | null, role_2?: boolean | null, role_3?: boolean | null, role_5?: boolean | null, role_6?: boolean | null } | null, payments?: Array<{ __typename?: 'Payment', amount: string, tokenAddress: string, recipientAddress: string }> | null, motionData?: { __typename?: 'ColonyMotion', remainingStakes: Array<string>, userMinStake: string, requiredStake: string, nativeMotionDomainId: string, isFinalized: boolean, skillRep: string, repSubmitted: string, hasObjection: boolean, isDecision: boolean, gasEstimate: string, transactionHash: string, createdAt: string, databaseMotionId: string, motionId: string, motionStakes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } }, usersStakes: Array<{ __typename?: 'UserMotionStakes', address: string, stakes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } } }>, motionDomain: { __typename?: 'Domain', id: string, nativeId: number, isRoot: boolean, nativeFundingPotId: number, nativeSkillId: string, reputation?: string | null, reputationPercentage?: string | null, metadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null }, stakerRewards: Array<{ __typename?: 'StakerRewards', address: string, isClaimed: boolean, rewards: { __typename?: 'MotionStakeValues', yay: string, nay: string } }>, voterRecord: Array<{ __typename?: 'VoterRecord', address: string, voteCount: string, vote?: number | null }>, revealedVotes: { __typename?: 'MotionStakes', raw: { __typename?: 'MotionStakeValues', yay: string, nay: string }, percentage: { __typename?: 'MotionStakeValues', yay: string, nay: string } }, motionStateHistory: { __typename?: 'MotionStateHistory', hasVoted: boolean, hasPassed: boolean, hasFailed: boolean, hasFailedNotFinalizable: boolean, inRevealPhase: boolean, yaySideFullyStakedAt?: string | null, naySideFullyStakedAt?: string | null, allVotesSubmittedAt?: string | null, allVotesRevealedAt?: string | null, endedAt?: string | null, finalizedAt?: string | null }, messages?: { __typename?: 'ModelMotionMessageConnection', items: Array<{ __typename?: 'MotionMessage', initiatorAddress: string, name: string, messageKey: string, vote?: string | null, amount?: string | null, createdAt: string, initiatorUser?: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null } | null> } | null, objectionAnnotation?: { __typename?: 'Annotation', createdAt: string, message: string } | null, action?: { __typename?: 'ColonyAction', type: ColonyActionType } | null } | null, colony: { __typename?: 'Colony', colonyAddress: string, nativeToken: { __typename?: 'Token', nativeTokenDecimals: number, nativeTokenSymbol: string, tokenAddress: string }, tokens?: { __typename?: 'ModelColonyTokensConnection', items: Array<{ __typename?: 'ColonyTokens', colonyTokensId: string, token: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } } | null> } | null, metadata?: { __typename?: 'ColonyMetadata', displayName: string, avatar?: string | null, description?: string | null, thumbnail?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', name: ExternalLinks, link: string }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null }, pendingDomainMetadata?: { __typename?: 'DomainMetadata', name: string, color: DomainColor, description?: string | null, id: string, changelog?: Array<{ __typename?: 'DomainMetadataChangelog', transactionHash: string, oldName: string, newName: string, oldColor: DomainColor, newColor: DomainColor, oldDescription?: string | null, newDescription?: string | null }> | null } | null, pendingColonyMetadata?: { __typename?: 'ColonyMetadata', displayName: string, avatar?: string | null, description?: string | null, thumbnail?: string | null, externalLinks?: Array<{ __typename?: 'ExternalLink', name: ExternalLinks, link: string }> | null, modifiedTokenAddresses?: { __typename?: 'PendingModifiedTokenAddresses', added?: Array<string> | null, removed?: Array<string> | null } | null, objective?: { __typename?: 'ColonyObjective', title: string, description: string, progress: number } | null, changelog?: Array<{ __typename?: 'ColonyMetadataChangelog', transactionHash: string, newDisplayName: string, oldDisplayName: string, hasAvatarChanged: boolean, haveTokensChanged: boolean, hasDescriptionChanged?: boolean | null, haveExternalLinksChanged?: boolean | null, hasObjectiveChanged?: boolean | null, newSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null, oldSafes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null }> | null, safes?: Array<{ __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }> | null } | null, annotation?: { __typename?: 'Annotation', createdAt: string, message: string } | null, decisionData?: { __typename?: 'ColonyDecision', title: string, description: string, motionDomainId: number, walletAddress: string, createdAt: string, actionId: string, colonyAddress: string } | null, safeTransaction?: { __typename?: 'SafeTransaction', id: string, safe: { __typename?: 'Safe', name: string, address: string, chainId: string, moduleContractAddress: string }, transactions?: { __typename?: 'ModelSafeTransactionDataConnection', items: Array<{ __typename?: 'SafeTransactionData', transactionType: SafeTransactionType, amount?: string | null, rawAmount?: string | null, data?: string | null, abi?: string | null, contractFunction?: string | null, token?: { __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null, recipient?: { __typename?: 'SimpleTarget', id: string, walletAddress: string, profile: { __typename?: 'SimpleTargetProfile', avatarHash?: string | null, displayName?: string | null } } | null, contract?: { __typename?: 'SimpleTarget', id: string, walletAddress: string, profile: { __typename?: 'SimpleTargetProfile', avatarHash?: string | null, displayName?: string | null } } | null, nft?: { __typename?: 'NFT', id: string, walletAddress: string, profile: { __typename?: 'NFTProfile', displayName: string } } | null, nftData?: { __typename?: 'NFTData', address: string, description?: string | null, id: string, imageUri?: string | null, logoUri: string, name?: string | null, tokenName: string, tokenSymbol: string, uri: string } | null, functionParams?: Array<{ __typename?: 'FunctionParam', name: string, type: string, value: string } | null> | null } | null> } | null } | null, metadata?: { __typename?: 'ColonyActionMetadata', customTitle: string } | null } | null } | null> } | null };

export type GetTokenByAddressQueryVariables = Exact<{
  address: Scalars['ID'];
}>;


export type GetTokenByAddressQuery = { __typename?: 'Query', getTokenByAddress?: { __typename?: 'ModelTokenConnection', items: Array<{ __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null> } | null };

export type GetTokenFromEverywhereQueryVariables = Exact<{
  input: TokenFromEverywhereArguments;
}>;


export type GetTokenFromEverywhereQuery = { __typename?: 'Query', getTokenFromEverywhere?: { __typename?: 'TokenFromEverywhereReturn', items?: Array<{ __typename?: 'Token', decimals: number, name: string, symbol: string, type?: TokenType | null, avatar?: string | null, thumbnail?: string | null, tokenAddress: string } | null> | null } | null };

export type GetUserTokenBalanceQueryVariables = Exact<{
  input: GetUserTokenBalanceInput;
}>;


export type GetUserTokenBalanceQuery = { __typename?: 'Query', getUserTokenBalance?: { __typename?: 'GetUserTokenBalanceReturn', balance?: string | null, inactiveBalance?: string | null, lockedBalance?: string | null, activeBalance?: string | null, pendingBalance?: string | null } | null };

export type GetUserTransactionsQueryVariables = Exact<{
  userAddress: Scalars['ID'];
  transactionsOlderThan?: InputMaybe<Scalars['String']>;
  nextToken?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetUserTransactionsQuery = { __typename?: 'Query', getTransactionsByUser?: { __typename?: 'ModelTransactionConnection', nextToken?: string | null, items: Array<{ __typename?: 'Transaction', id: string, context: ClientType, createdAt: string, from: string, colonyAddress: string, params?: string | null, groupId?: string | null, hash?: string | null, methodContext?: string | null, methodName: string, status: TransactionStatus, metatransaction: boolean, title?: string | null, titleValues?: string | null, options?: string | null, group?: { __typename?: 'TransactionGroup', id: string, groupId: string, key: string, index: number, description?: string | null, descriptionValues?: string | null, title?: string | null, titleValues?: string | null } | null } | null> } | null };

export type GetTransactionsByGroupQueryVariables = Exact<{
  from: Scalars['ID'];
  groupId: Scalars['ID'];
}>;


export type GetTransactionsByGroupQuery = { __typename?: 'Query', getTransactionsByUserAndGroup?: { __typename?: 'ModelTransactionConnection', items: Array<{ __typename?: 'Transaction', id: string, context: ClientType, createdAt: string, from: string, colonyAddress: string, params?: string | null, groupId?: string | null, hash?: string | null, methodContext?: string | null, methodName: string, status: TransactionStatus, metatransaction: boolean, title?: string | null, titleValues?: string | null, options?: string | null, group?: { __typename?: 'TransactionGroup', id: string, groupId: string, key: string, index: number, description?: string | null, descriptionValues?: string | null, title?: string | null, titleValues?: string | null } | null } | null> } | null };

export type GetTransactionQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetTransactionQuery = { __typename?: 'Query', getTransaction?: { __typename?: 'Transaction', id: string, context: ClientType, createdAt: string, from: string, colonyAddress: string, params?: string | null, groupId?: string | null, hash?: string | null, methodContext?: string | null, methodName: string, status: TransactionStatus, metatransaction: boolean, title?: string | null, titleValues?: string | null, options?: string | null, group?: { __typename?: 'TransactionGroup', id: string, groupId: string, key: string, index: number, description?: string | null, descriptionValues?: string | null, title?: string | null, titleValues?: string | null } | null } | null };

export type GetUserByAddressQueryVariables = Exact<{
  address: Scalars['ID'];
}>;


export type GetUserByAddressQuery = { __typename?: 'Query', getUserByAddress?: { __typename?: 'ModelUserConnection', items: Array<{ __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null> } | null };

export type GetUserReputationQueryVariables = Exact<{
  input: GetUserReputationInput;
}>;


export type GetUserReputationQuery = { __typename?: 'Query', getUserReputation?: string | null };

export type GetUserByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetUserByNameQuery = { __typename?: 'Query', getProfileByUsername?: { __typename?: 'ModelProfileConnection', items: Array<{ __typename?: 'Profile', user: { __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } } | null> } | null };

export type GetUsersQueryVariables = Exact<{
  filter?: InputMaybe<ModelUserFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetUsersQuery = { __typename?: 'Query', listUsers?: { __typename?: 'ModelUserConnection', items: Array<{ __typename?: 'User', walletAddress: string, profile?: { __typename?: 'Profile', avatar?: string | null, bio?: string | null, displayName?: string | null, displayNameChanged?: string | null, email?: string | null, location?: string | null, thumbnail?: string | null, website?: string | null, preferredCurrency?: SupportedCurrencies | null, meta?: { __typename?: 'ProfileMetadata', metatransactionsEnabled?: boolean | null, decentralizedModeEnabled?: boolean | null, customRpc?: string | null } | null } | null, privateBetaInviteCode?: { __typename?: 'PrivateBetaInviteCode', id: string, shareableInvites?: number | null } | null } | null> } | null };

export type GetCurrentExtensionsVersionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentExtensionsVersionsQuery = { __typename?: 'Query', listCurrentVersions?: { __typename?: 'ModelCurrentVersionConnection', items: Array<{ __typename?: 'CurrentVersion', version: number, extensionHash: string } | null> } | null };

export type GetCurrentExtensionVersionQueryVariables = Exact<{
  extensionHash: Scalars['String'];
}>;


export type GetCurrentExtensionVersionQuery = { __typename?: 'Query', getCurrentVersionByKey?: { __typename?: 'ModelCurrentVersionConnection', items: Array<{ __typename?: 'CurrentVersion', version: number, extensionHash: string } | null> } | null };

export type GetCurrentColonyVersionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentColonyVersionQuery = { __typename?: 'Query', getCurrentVersionByKey?: { __typename?: 'ModelCurrentVersionConnection', items: Array<{ __typename?: 'CurrentVersion', version: number } | null> } | null };

export const ColonyObjectiveFragmentDoc = gql`
    fragment ColonyObjective on ColonyObjective {
  title
  description
  progress
}
    `;
export const SafeFragmentDoc = gql`
    fragment Safe on Safe {
  name
  address
  chainId
  moduleContractAddress
}
    `;
export const ColonyMetadataFragmentDoc = gql`
    fragment ColonyMetadata on ColonyMetadata {
  displayName
  avatar
  description
  externalLinks {
    name
    link
  }
  thumbnail
  modifiedTokenAddresses {
    added
    removed
  }
  objective {
    ...ColonyObjective
  }
  changelog {
    transactionHash
    newDisplayName
    oldDisplayName
    hasAvatarChanged
    haveTokensChanged
    hasDescriptionChanged
    haveExternalLinksChanged
    hasObjectiveChanged
    newSafes {
      ...Safe
    }
    oldSafes {
      ...Safe
    }
  }
  safes {
    ...Safe
  }
}
    ${ColonyObjectiveFragmentDoc}
${SafeFragmentDoc}`;
export const JoinedColonyFragmentDoc = gql`
    fragment JoinedColony on Colony {
  colonyAddress: id
  name
  metadata {
    ...ColonyMetadata
  }
  chainMetadata {
    chainId
    network
  }
}
    ${ColonyMetadataFragmentDoc}`;
export const ContributorRolesFragmentDoc = gql`
    fragment ContributorRoles on ColonyRole {
  domainId
  domain {
    id
    metadata {
      name
    }
    nativeId
  }
  role_0
  role_1
  role_2
  role_3
  role_5
  role_6
  id
}
    `;
export const ContributorReputationFragmentDoc = gql`
    fragment ContributorReputation on ContributorReputation {
  reputationPercentage
  reputationRaw
  domainId
  domain {
    id
    metadata {
      name
    }
    nativeId
  }
  id
}
    `;
export const ProfileFragmentDoc = gql`
    fragment Profile on Profile {
  avatar
  bio
  displayName
  displayNameChanged
  email
  location
  thumbnail
  website
  meta {
    metatransactionsEnabled
    decentralizedModeEnabled
    customRpc
  }
  preferredCurrency
}
    `;
export const ColonyContributorFragmentDoc = gql`
    fragment ColonyContributor on ColonyContributor {
  contributorAddress
  isVerified
  hasPermissions
  hasReputation
  isWatching
  colonyReputationPercentage
  roles(colonyAddress: {eq: $colonyAddress}) {
    items {
      ...ContributorRoles
    }
  }
  reputation(
    colonyAddress: {eq: $colonyAddress}
    filter: {reputationRaw: {ne: "0"}}
  ) {
    items {
      ...ContributorReputation
    }
  }
  user {
    walletAddress: id
    profile {
      ...Profile
    }
  }
  type
}
    ${ContributorRolesFragmentDoc}
${ContributorReputationFragmentDoc}
${ProfileFragmentDoc}`;
export const ExpenditurePayoutFragmentDoc = gql`
    fragment ExpenditurePayout on ExpenditurePayout {
  tokenAddress
  amount
  isClaimed
  networkFee
}
    `;
export const ExpenditureSlotFragmentDoc = gql`
    fragment ExpenditureSlot on ExpenditureSlot {
  id
  recipientAddress
  claimDelay
  payoutModifier
  payouts {
    ...ExpenditurePayout
  }
}
    ${ExpenditurePayoutFragmentDoc}`;
export const ExpenditureStageFragmentDoc = gql`
    fragment ExpenditureStage on ExpenditureStage {
  slotId
  name
  isReleased
}
    `;
export const MotionStakeValuesFragmentDoc = gql`
    fragment MotionStakeValues on MotionStakeValues {
  yay
  nay
}
    `;
export const MotionStakesFragmentDoc = gql`
    fragment MotionStakes on MotionStakes {
  raw {
    ...MotionStakeValues
  }
  percentage {
    ...MotionStakeValues
  }
}
    ${MotionStakeValuesFragmentDoc}`;
export const UserMotionStakesFragmentDoc = gql`
    fragment UserMotionStakes on UserMotionStakes {
  address
  stakes {
    raw {
      ...MotionStakeValues
    }
    percentage {
      ...MotionStakeValues
    }
  }
}
    ${MotionStakeValuesFragmentDoc}`;
export const DomainMetadataFragmentDoc = gql`
    fragment DomainMetadata on DomainMetadata {
  name
  color
  description
  id
  changelog {
    transactionHash
    oldName
    newName
    oldColor
    newColor
    oldDescription
    newDescription
  }
}
    `;
export const DomainFragmentDoc = gql`
    fragment Domain on Domain {
  id
  nativeId
  isRoot
  nativeFundingPotId
  nativeSkillId
  metadata {
    ...DomainMetadata
  }
  reputation
  reputationPercentage
}
    ${DomainMetadataFragmentDoc}`;
export const VoterRecordFragmentDoc = gql`
    fragment VoterRecord on VoterRecord {
  address
  voteCount
  vote
}
    `;
export const UserFragmentDoc = gql`
    fragment User on User {
  profile {
    ...Profile
  }
  walletAddress: id
  privateBetaInviteCode {
    id
    shareableInvites
  }
}
    ${ProfileFragmentDoc}`;
export const MotionMessageFragmentDoc = gql`
    fragment MotionMessage on MotionMessage {
  initiatorAddress
  name
  messageKey
  initiatorUser {
    ...User
  }
  vote
  amount
  createdAt
}
    ${UserFragmentDoc}`;
export const AnnotationFragmentDoc = gql`
    fragment Annotation on Annotation {
  createdAt
  message
}
    `;
export const ColonyMotionFragmentDoc = gql`
    fragment ColonyMotion on ColonyMotion {
  databaseMotionId: id
  motionId: nativeMotionId
  motionStakes {
    ...MotionStakes
  }
  usersStakes {
    ...UserMotionStakes
  }
  remainingStakes
  userMinStake
  requiredStake
  motionDomain {
    ...Domain
  }
  nativeMotionDomainId
  stakerRewards {
    address
    rewards {
      yay
      nay
    }
    isClaimed
  }
  isFinalized
  voterRecord {
    ...VoterRecord
  }
  revealedVotes {
    ...MotionStakes
  }
  skillRep
  repSubmitted
  hasObjection
  motionStateHistory {
    hasVoted
    hasPassed
    hasFailed
    hasFailedNotFinalizable
    inRevealPhase
    yaySideFullyStakedAt
    naySideFullyStakedAt
    allVotesSubmittedAt
    allVotesRevealedAt
    endedAt
    finalizedAt
  }
  messages {
    items {
      ...MotionMessage
    }
  }
  objectionAnnotation {
    ...Annotation
  }
  isDecision
  gasEstimate
  transactionHash
  action {
    type
  }
  createdAt
}
    ${MotionStakesFragmentDoc}
${UserMotionStakesFragmentDoc}
${DomainFragmentDoc}
${VoterRecordFragmentDoc}
${MotionMessageFragmentDoc}
${AnnotationFragmentDoc}`;
export const ExpenditureBalanceFragmentDoc = gql`
    fragment ExpenditureBalance on ExpenditureBalance {
  tokenAddress
  amount
}
    `;
export const ExpenditureActionFragmentDoc = gql`
    fragment ExpenditureAction on ColonyAction {
  id
  initiatorAddress
  initiatorUser {
    ...User
  }
}
    ${UserFragmentDoc}`;
export const ExpenditureFragmentDoc = gql`
    fragment Expenditure on Expenditure {
  id
  nativeId
  ownerAddress
  status
  slots {
    ...ExpenditureSlot
  }
  nativeFundingPotId
  nativeDomainId
  metadata {
    fundFromDomainNativeId
    stages {
      ...ExpenditureStage
    }
  }
  finalizedAt
  motions {
    items {
      ...ColonyMotion
      expenditureSlotId
    }
  }
  type
  isStaked
  balances {
    ...ExpenditureBalance
  }
  lockingActions: actions(
    filter: {type: {eq: LOCK_EXPENDITURE}, isMotionFinalization: {ne: true}}
  ) {
    items {
      ...ExpenditureAction
    }
  }
  fundingActions: actions(
    filter: {type: {eq: MOVE_FUNDS}, isMotionFinalization: {ne: true}}
  ) {
    items {
      id
      initiatorAddress
      initiatorUser {
        ...User
      }
    }
  }
  finalizingActions: actions(
    filter: {type: {eq: FINALIZE_EXPENDITURE}, isMotionFinalization: {ne: true}}
  ) {
    items {
      ...ExpenditureAction
    }
  }
  cancellingActions: actions(
    filter: {type: {eq: CANCEL_EXPENDITURE}, isMotionFinalization: {ne: true}}
  ) {
    items {
      ...ExpenditureAction
    }
  }
  editingActions: actions(
    filter: {type: {eq: EDIT_EXPENDITURE}, isMotionFinalization: {ne: true}}
  ) {
    items {
      ...ExpenditureAction
    }
  }
}
    ${ExpenditureSlotFragmentDoc}
${ExpenditureStageFragmentDoc}
${ColonyMotionFragmentDoc}
${ExpenditureBalanceFragmentDoc}
${ExpenditureActionFragmentDoc}
${UserFragmentDoc}`;
export const UserDisplayFragmentDoc = gql`
    fragment UserDisplay on User {
  walletAddress: id
  profile {
    displayName
    displayNameChanged
    avatar
    thumbnail
  }
}
    `;
export const PublicColonyFragmentDoc = gql`
    fragment PublicColony on Colony {
  colonyAddress: id
  name
  metadata {
    avatar
    displayName
    externalLinks {
      link
      name
    }
    thumbnail
  }
}
    `;
export const ExtensionDisplayFragmentFragmentDoc = gql`
    fragment ExtensionDisplayFragment on ColonyExtension {
  address: id
  hash
}
    `;
export const TokenFragmentDoc = gql`
    fragment Token on Token {
  decimals
  tokenAddress: id
  name
  symbol
  type
  avatar
  thumbnail
}
    `;
export const NativeTokenStatusFragmentDoc = gql`
    fragment NativeTokenStatus on NativeTokenStatus {
  mintable
  unlockable
  unlocked
}
    `;
export const ColonyTokensConnectionFragmentDoc = gql`
    fragment ColonyTokensConnection on ModelColonyTokensConnection {
  items {
    colonyTokensId: id
    token {
      ...Token
    }
  }
}
    ${TokenFragmentDoc}`;
export const UnclaimedStakesFragmentDoc = gql`
    fragment UnclaimedStakes on ColonyUnclaimedStake {
  motionId
  unclaimedRewards {
    address
    rewards {
      nay
      yay
    }
  }
}
    `;
export const ColonyBalanceFragmentDoc = gql`
    fragment ColonyBalance on ColonyBalance {
  id
  balance
  domain {
    ...Domain
  }
  token {
    ...Token
  }
}
    ${DomainFragmentDoc}
${TokenFragmentDoc}`;
export const ColonyBalancesFragmentDoc = gql`
    fragment ColonyBalances on ColonyBalances {
  items {
    ...ColonyBalance
  }
}
    ${ColonyBalanceFragmentDoc}`;
export const FundsClaimFragmentDoc = gql`
    fragment FundsClaim on ColonyFundsClaim {
  id
  token {
    ...Token
  }
  createdAtBlock
  createdAt
  amount
  isClaimed
}
    ${TokenFragmentDoc}`;
export const ChainFundsClaimFragmentDoc = gql`
    fragment ChainFundsClaim on ColonyChainFundsClaim {
  id
  createdAtBlock
  createdAt
  amount
  isClaimed
}
    `;
export const ColonyRoleFragmentDoc = gql`
    fragment ColonyRole on ColonyRole {
  id
  domain {
    id
    nativeId
  }
  targetAddress
  role_0
  role_1
  role_2
  role_3
  role_5
  role_6
}
    `;
export const ColonyFragmentDoc = gql`
    fragment Colony on Colony {
  colonyAddress: id
  name
  nativeToken {
    ...Token
  }
  status {
    recovery
    nativeToken {
      ...NativeTokenStatus
    }
  }
  chainMetadata {
    chainId
    network
  }
  tokens {
    ...ColonyTokensConnection
  }
  motionsWithUnclaimedStakes {
    ...UnclaimedStakes
  }
  domains(sortDirection: ASC) {
    items {
      ...Domain
    }
  }
  balances {
    ...ColonyBalances
  }
  fundsClaims {
    items {
      ...FundsClaim
    }
  }
  chainFundsClaim {
    ...ChainFundsClaim
  }
  version
  metadata {
    ...ColonyMetadata
  }
  roles {
    items {
      ...ColonyRole
    }
  }
  reputation
  expendituresGlobalClaimDelay
  private
  colonyMemberInvite {
    id
    invitesRemaining
  }
}
    ${TokenFragmentDoc}
${NativeTokenStatusFragmentDoc}
${ColonyTokensConnectionFragmentDoc}
${UnclaimedStakesFragmentDoc}
${DomainFragmentDoc}
${ColonyBalancesFragmentDoc}
${FundsClaimFragmentDoc}
${ChainFundsClaimFragmentDoc}
${ColonyMetadataFragmentDoc}
${ColonyRoleFragmentDoc}`;
export const ExtensionFragmentDoc = gql`
    fragment Extension on ColonyExtension {
  address: id
  colonyAddress: colonyId
  hash
  currentVersion: version
  installedBy
  installedAt
  isDeprecated
  isDeleted
  isInitialized
  params {
    votingReputation {
      maxVoteFraction
      totalStakeFraction
      voterRewardFraction
      userMinStakeFraction
      maxVoteFraction
      stakePeriod
      submitPeriod
      revealPeriod
      escalationPeriod
    }
    stakedExpenditure {
      stakeFraction
    }
    stakedExpenditure {
      stakeFraction
    }
  }
}
    `;
export const ColonyDecisionFragmentDoc = gql`
    fragment ColonyDecision on ColonyDecision {
  title
  description
  motionDomainId
  walletAddress
  createdAt
  actionId
  colonyAddress
}
    `;
export const NftDataFragmentDoc = gql`
    fragment NFTData on NFTData {
  address
  description
  id
  imageUri
  logoUri
  name
  tokenName
  tokenSymbol
  uri
}
    `;
export const FunctionParamFragmentDoc = gql`
    fragment FunctionParam on FunctionParam {
  name
  type
  value
}
    `;
export const SafeTransactionDataFragmentDoc = gql`
    fragment SafeTransactionData on SafeTransactionData {
  transactionType
  token {
    ...Token
  }
  amount
  rawAmount
  recipient {
    id
    profile {
      avatarHash
      displayName
    }
    walletAddress
  }
  data
  contract {
    id
    profile {
      avatarHash
      displayName
    }
    walletAddress
  }
  abi
  contractFunction
  nft {
    id
    profile {
      displayName
    }
    walletAddress
  }
  nftData {
    ...NFTData
  }
  functionParams {
    ...FunctionParam
  }
}
    ${TokenFragmentDoc}
${NftDataFragmentDoc}
${FunctionParamFragmentDoc}`;
export const SafeTransactionFragmentDoc = gql`
    fragment SafeTransaction on SafeTransaction {
  id
  safe {
    ...Safe
  }
  transactions {
    items {
      ...SafeTransactionData
    }
  }
}
    ${SafeFragmentDoc}
${SafeTransactionDataFragmentDoc}`;
export const ColonyActionFragmentDoc = gql`
    fragment ColonyAction on ColonyAction {
  transactionHash: id
  colonyAddress: colonyId
  type
  blockNumber
  initiatorAddress
  initiatorUser {
    ...UserDisplay
  }
  initiatorColony {
    ...PublicColony
  }
  initiatorExtension {
    ...ExtensionDisplayFragment
  }
  initiatorToken {
    ...Token
  }
  initiatorColony {
    ...Colony
  }
  initiatorExtension {
    ...Extension
  }
  initiatorToken {
    ...Token
  }
  recipientAddress
  recipientUser {
    ...UserDisplay
  }
  recipientColony {
    ...PublicColony
  }
  recipientExtension {
    ...ExtensionDisplayFragment
  }
  recipientToken {
    ...Token
  }
  recipientColony {
    ...Colony
  }
  recipientExtension {
    ...Extension
  }
  recipientToken {
    ...Token
  }
  amount
  tokenAddress
  token {
    ...Token
  }
  fromDomain {
    ...Domain
  }
  toDomain {
    ...Domain
  }
  createdAt
  newColonyVersion
  roles {
    role_0
    role_1
    role_2
    role_3
    role_5
    role_6
  }
  individualEvents
  isMotion
  payments {
    amount
    tokenAddress
    recipientAddress
  }
  motionData {
    ...ColonyMotion
  }
  colony {
    colonyAddress: id
    nativeToken {
      nativeTokenDecimals: decimals
      nativeTokenSymbol: symbol
      tokenAddress: id
    }
    tokens {
      ...ColonyTokensConnection
    }
    metadata {
      ...ColonyMetadata
    }
  }
  showInActionsList
  pendingDomainMetadata {
    ...DomainMetadata
  }
  pendingColonyMetadata {
    ...ColonyMetadata
  }
  annotation {
    ...Annotation
  }
  decisionData {
    ...ColonyDecision
  }
  safeTransaction {
    ...SafeTransaction
  }
  metadata {
    customTitle
  }
  members
  rootHash
  expenditureId
}
    ${UserDisplayFragmentDoc}
${PublicColonyFragmentDoc}
${ExtensionDisplayFragmentFragmentDoc}
${TokenFragmentDoc}
${ColonyFragmentDoc}
${ExtensionFragmentDoc}
${DomainFragmentDoc}
${ColonyMotionFragmentDoc}
${ColonyTokensConnectionFragmentDoc}
${ColonyMetadataFragmentDoc}
${DomainMetadataFragmentDoc}
${AnnotationFragmentDoc}
${ColonyDecisionFragmentDoc}
${SafeTransactionFragmentDoc}`;
export const UserStakeFragmentDoc = gql`
    fragment UserStake on UserStake {
  id
  amount
  action {
    ...ColonyAction
  }
  isClaimed
  createdAt
}
    ${ColonyActionFragmentDoc}`;
export const UserTokenBalanceDataFragmentDoc = gql`
    fragment UserTokenBalanceData on GetUserTokenBalanceReturn {
  balance
  inactiveBalance
  lockedBalance
  activeBalance
  pendingBalance
}
    `;
export const TransactionFragmentDoc = gql`
    fragment Transaction on Transaction {
  id
  context
  createdAt
  from
  colonyAddress
  params
  groupId
  group {
    id
    groupId
    key
    index
    description
    descriptionValues
    title
    titleValues
  }
  hash
  methodContext
  methodName
  status
  metatransaction
  title
  titleValues
  options
}
    `;
export const CreateColonyActionMetadataDocument = gql`
    mutation CreateColonyActionMetadata($input: CreateColonyActionMetadataInput!) {
  createColonyActionMetadata(input: $input) {
    id
  }
}
    `;
export type CreateColonyActionMetadataMutationFn = Apollo.MutationFunction<CreateColonyActionMetadataMutation, CreateColonyActionMetadataMutationVariables>;

/**
 * __useCreateColonyActionMetadataMutation__
 *
 * To run a mutation, you first call `useCreateColonyActionMetadataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateColonyActionMetadataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createColonyActionMetadataMutation, { data, loading, error }] = useCreateColonyActionMetadataMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateColonyActionMetadataMutation(baseOptions?: Apollo.MutationHookOptions<CreateColonyActionMetadataMutation, CreateColonyActionMetadataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateColonyActionMetadataMutation, CreateColonyActionMetadataMutationVariables>(CreateColonyActionMetadataDocument, options);
      }
export type CreateColonyActionMetadataMutationHookResult = ReturnType<typeof useCreateColonyActionMetadataMutation>;
export type CreateColonyActionMetadataMutationResult = Apollo.MutationResult<CreateColonyActionMetadataMutation>;
export type CreateColonyActionMetadataMutationOptions = Apollo.BaseMutationOptions<CreateColonyActionMetadataMutation, CreateColonyActionMetadataMutationVariables>;
export const CreateAnnotationDocument = gql`
    mutation CreateAnnotation($input: CreateAnnotationInput!) {
  createAnnotation(input: $input) {
    id
  }
}
    `;
export type CreateAnnotationMutationFn = Apollo.MutationFunction<CreateAnnotationMutation, CreateAnnotationMutationVariables>;

/**
 * __useCreateAnnotationMutation__
 *
 * To run a mutation, you first call `useCreateAnnotationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnnotationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnnotationMutation, { data, loading, error }] = useCreateAnnotationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAnnotationMutation(baseOptions?: Apollo.MutationHookOptions<CreateAnnotationMutation, CreateAnnotationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAnnotationMutation, CreateAnnotationMutationVariables>(CreateAnnotationDocument, options);
      }
export type CreateAnnotationMutationHookResult = ReturnType<typeof useCreateAnnotationMutation>;
export type CreateAnnotationMutationResult = Apollo.MutationResult<CreateAnnotationMutation>;
export type CreateAnnotationMutationOptions = Apollo.BaseMutationOptions<CreateAnnotationMutation, CreateAnnotationMutationVariables>;
export const CreateColonyEtherealMetadataDocument = gql`
    mutation CreateColonyEtherealMetadata($input: CreateColonyEtherealMetadataInput!) {
  createColonyEtherealMetadata(input: $input) {
    id
  }
}
    `;
export type CreateColonyEtherealMetadataMutationFn = Apollo.MutationFunction<CreateColonyEtherealMetadataMutation, CreateColonyEtherealMetadataMutationVariables>;

/**
 * __useCreateColonyEtherealMetadataMutation__
 *
 * To run a mutation, you first call `useCreateColonyEtherealMetadataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateColonyEtherealMetadataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createColonyEtherealMetadataMutation, { data, loading, error }] = useCreateColonyEtherealMetadataMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateColonyEtherealMetadataMutation(baseOptions?: Apollo.MutationHookOptions<CreateColonyEtherealMetadataMutation, CreateColonyEtherealMetadataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateColonyEtherealMetadataMutation, CreateColonyEtherealMetadataMutationVariables>(CreateColonyEtherealMetadataDocument, options);
      }
export type CreateColonyEtherealMetadataMutationHookResult = ReturnType<typeof useCreateColonyEtherealMetadataMutation>;
export type CreateColonyEtherealMetadataMutationResult = Apollo.MutationResult<CreateColonyEtherealMetadataMutation>;
export type CreateColonyEtherealMetadataMutationOptions = Apollo.BaseMutationOptions<CreateColonyEtherealMetadataMutation, CreateColonyEtherealMetadataMutationVariables>;
export const CreateColonyMetadataDocument = gql`
    mutation CreateColonyMetadata($input: CreateColonyMetadataInput!) {
  createColonyMetadata(input: $input) {
    id
  }
}
    `;
export type CreateColonyMetadataMutationFn = Apollo.MutationFunction<CreateColonyMetadataMutation, CreateColonyMetadataMutationVariables>;

/**
 * __useCreateColonyMetadataMutation__
 *
 * To run a mutation, you first call `useCreateColonyMetadataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateColonyMetadataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createColonyMetadataMutation, { data, loading, error }] = useCreateColonyMetadataMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateColonyMetadataMutation(baseOptions?: Apollo.MutationHookOptions<CreateColonyMetadataMutation, CreateColonyMetadataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateColonyMetadataMutation, CreateColonyMetadataMutationVariables>(CreateColonyMetadataDocument, options);
      }
export type CreateColonyMetadataMutationHookResult = ReturnType<typeof useCreateColonyMetadataMutation>;
export type CreateColonyMetadataMutationResult = Apollo.MutationResult<CreateColonyMetadataMutation>;
export type CreateColonyMetadataMutationOptions = Apollo.BaseMutationOptions<CreateColonyMetadataMutation, CreateColonyMetadataMutationVariables>;
export const UpdateColonyMetadataDocument = gql`
    mutation UpdateColonyMetadata($input: UpdateColonyMetadataInput!) {
  updateColonyMetadata(input: $input) {
    id
  }
}
    `;
export type UpdateColonyMetadataMutationFn = Apollo.MutationFunction<UpdateColonyMetadataMutation, UpdateColonyMetadataMutationVariables>;

/**
 * __useUpdateColonyMetadataMutation__
 *
 * To run a mutation, you first call `useUpdateColonyMetadataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateColonyMetadataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateColonyMetadataMutation, { data, loading, error }] = useUpdateColonyMetadataMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateColonyMetadataMutation(baseOptions?: Apollo.MutationHookOptions<UpdateColonyMetadataMutation, UpdateColonyMetadataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateColonyMetadataMutation, UpdateColonyMetadataMutationVariables>(UpdateColonyMetadataDocument, options);
      }
export type UpdateColonyMetadataMutationHookResult = ReturnType<typeof useUpdateColonyMetadataMutation>;
export type UpdateColonyMetadataMutationResult = Apollo.MutationResult<UpdateColonyMetadataMutation>;
export type UpdateColonyMetadataMutationOptions = Apollo.BaseMutationOptions<UpdateColonyMetadataMutation, UpdateColonyMetadataMutationVariables>;
export const ValidateUserInviteDocument = gql`
    mutation ValidateUserInvite($input: ValidateUserInviteInput!) {
  validateUserInvite(input: $input)
}
    `;
export type ValidateUserInviteMutationFn = Apollo.MutationFunction<ValidateUserInviteMutation, ValidateUserInviteMutationVariables>;

/**
 * __useValidateUserInviteMutation__
 *
 * To run a mutation, you first call `useValidateUserInviteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useValidateUserInviteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [validateUserInviteMutation, { data, loading, error }] = useValidateUserInviteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useValidateUserInviteMutation(baseOptions?: Apollo.MutationHookOptions<ValidateUserInviteMutation, ValidateUserInviteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ValidateUserInviteMutation, ValidateUserInviteMutationVariables>(ValidateUserInviteDocument, options);
      }
export type ValidateUserInviteMutationHookResult = ReturnType<typeof useValidateUserInviteMutation>;
export type ValidateUserInviteMutationResult = Apollo.MutationResult<ValidateUserInviteMutation>;
export type ValidateUserInviteMutationOptions = Apollo.BaseMutationOptions<ValidateUserInviteMutation, ValidateUserInviteMutationVariables>;
export const UpdateContributorsWithReputationDocument = gql`
    mutation UpdateContributorsWithReputation($colonyAddress: String) {
  updateContributorsWithReputation(input: {colonyAddress: $colonyAddress})
}
    `;
export type UpdateContributorsWithReputationMutationFn = Apollo.MutationFunction<UpdateContributorsWithReputationMutation, UpdateContributorsWithReputationMutationVariables>;

/**
 * __useUpdateContributorsWithReputationMutation__
 *
 * To run a mutation, you first call `useUpdateContributorsWithReputationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateContributorsWithReputationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateContributorsWithReputationMutation, { data, loading, error }] = useUpdateContributorsWithReputationMutation({
 *   variables: {
 *      colonyAddress: // value for 'colonyAddress'
 *   },
 * });
 */
export function useUpdateContributorsWithReputationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateContributorsWithReputationMutation, UpdateContributorsWithReputationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateContributorsWithReputationMutation, UpdateContributorsWithReputationMutationVariables>(UpdateContributorsWithReputationDocument, options);
      }
export type UpdateContributorsWithReputationMutationHookResult = ReturnType<typeof useUpdateContributorsWithReputationMutation>;
export type UpdateContributorsWithReputationMutationResult = Apollo.MutationResult<UpdateContributorsWithReputationMutation>;
export type UpdateContributorsWithReputationMutationOptions = Apollo.BaseMutationOptions<UpdateContributorsWithReputationMutation, UpdateContributorsWithReputationMutationVariables>;
export const CreateColonyContributorDocument = gql`
    mutation CreateColonyContributor($input: CreateColonyContributorInput!) {
  createColonyContributor(input: $input) {
    id
    isWatching
  }
}
    `;
export type CreateColonyContributorMutationFn = Apollo.MutationFunction<CreateColonyContributorMutation, CreateColonyContributorMutationVariables>;

/**
 * __useCreateColonyContributorMutation__
 *
 * To run a mutation, you first call `useCreateColonyContributorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateColonyContributorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createColonyContributorMutation, { data, loading, error }] = useCreateColonyContributorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateColonyContributorMutation(baseOptions?: Apollo.MutationHookOptions<CreateColonyContributorMutation, CreateColonyContributorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateColonyContributorMutation, CreateColonyContributorMutationVariables>(CreateColonyContributorDocument, options);
      }
export type CreateColonyContributorMutationHookResult = ReturnType<typeof useCreateColonyContributorMutation>;
export type CreateColonyContributorMutationResult = Apollo.MutationResult<CreateColonyContributorMutation>;
export type CreateColonyContributorMutationOptions = Apollo.BaseMutationOptions<CreateColonyContributorMutation, CreateColonyContributorMutationVariables>;
export const UpdateColonyContributorDocument = gql`
    mutation UpdateColonyContributor($input: UpdateColonyContributorInput!) {
  updateColonyContributor(input: $input) {
    id
    isWatching
  }
}
    `;
export type UpdateColonyContributorMutationFn = Apollo.MutationFunction<UpdateColonyContributorMutation, UpdateColonyContributorMutationVariables>;

/**
 * __useUpdateColonyContributorMutation__
 *
 * To run a mutation, you first call `useUpdateColonyContributorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateColonyContributorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateColonyContributorMutation, { data, loading, error }] = useUpdateColonyContributorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateColonyContributorMutation(baseOptions?: Apollo.MutationHookOptions<UpdateColonyContributorMutation, UpdateColonyContributorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateColonyContributorMutation, UpdateColonyContributorMutationVariables>(UpdateColonyContributorDocument, options);
      }
export type UpdateColonyContributorMutationHookResult = ReturnType<typeof useUpdateColonyContributorMutation>;
export type UpdateColonyContributorMutationResult = Apollo.MutationResult<UpdateColonyContributorMutation>;
export type UpdateColonyContributorMutationOptions = Apollo.BaseMutationOptions<UpdateColonyContributorMutation, UpdateColonyContributorMutationVariables>;
export const CreateColonyDecisionDocument = gql`
    mutation CreateColonyDecision($input: CreateColonyDecisionInput!) {
  createColonyDecision(input: $input) {
    id
  }
}
    `;
export type CreateColonyDecisionMutationFn = Apollo.MutationFunction<CreateColonyDecisionMutation, CreateColonyDecisionMutationVariables>;

/**
 * __useCreateColonyDecisionMutation__
 *
 * To run a mutation, you first call `useCreateColonyDecisionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateColonyDecisionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createColonyDecisionMutation, { data, loading, error }] = useCreateColonyDecisionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateColonyDecisionMutation(baseOptions?: Apollo.MutationHookOptions<CreateColonyDecisionMutation, CreateColonyDecisionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateColonyDecisionMutation, CreateColonyDecisionMutationVariables>(CreateColonyDecisionDocument, options);
      }
export type CreateColonyDecisionMutationHookResult = ReturnType<typeof useCreateColonyDecisionMutation>;
export type CreateColonyDecisionMutationResult = Apollo.MutationResult<CreateColonyDecisionMutation>;
export type CreateColonyDecisionMutationOptions = Apollo.BaseMutationOptions<CreateColonyDecisionMutation, CreateColonyDecisionMutationVariables>;
export const CreateDomainMetadataDocument = gql`
    mutation CreateDomainMetadata($input: CreateDomainMetadataInput!) {
  createDomainMetadata(input: $input) {
    id
  }
}
    `;
export type CreateDomainMetadataMutationFn = Apollo.MutationFunction<CreateDomainMetadataMutation, CreateDomainMetadataMutationVariables>;

/**
 * __useCreateDomainMetadataMutation__
 *
 * To run a mutation, you first call `useCreateDomainMetadataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDomainMetadataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDomainMetadataMutation, { data, loading, error }] = useCreateDomainMetadataMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDomainMetadataMutation(baseOptions?: Apollo.MutationHookOptions<CreateDomainMetadataMutation, CreateDomainMetadataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDomainMetadataMutation, CreateDomainMetadataMutationVariables>(CreateDomainMetadataDocument, options);
      }
export type CreateDomainMetadataMutationHookResult = ReturnType<typeof useCreateDomainMetadataMutation>;
export type CreateDomainMetadataMutationResult = Apollo.MutationResult<CreateDomainMetadataMutation>;
export type CreateDomainMetadataMutationOptions = Apollo.BaseMutationOptions<CreateDomainMetadataMutation, CreateDomainMetadataMutationVariables>;
export const UpdateDomainMetadataDocument = gql`
    mutation UpdateDomainMetadata($input: UpdateDomainMetadataInput!) {
  updateDomainMetadata(input: $input) {
    id
  }
}
    `;
export type UpdateDomainMetadataMutationFn = Apollo.MutationFunction<UpdateDomainMetadataMutation, UpdateDomainMetadataMutationVariables>;

/**
 * __useUpdateDomainMetadataMutation__
 *
 * To run a mutation, you first call `useUpdateDomainMetadataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDomainMetadataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDomainMetadataMutation, { data, loading, error }] = useUpdateDomainMetadataMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDomainMetadataMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDomainMetadataMutation, UpdateDomainMetadataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDomainMetadataMutation, UpdateDomainMetadataMutationVariables>(UpdateDomainMetadataDocument, options);
      }
export type UpdateDomainMetadataMutationHookResult = ReturnType<typeof useUpdateDomainMetadataMutation>;
export type UpdateDomainMetadataMutationResult = Apollo.MutationResult<UpdateDomainMetadataMutation>;
export type UpdateDomainMetadataMutationOptions = Apollo.BaseMutationOptions<UpdateDomainMetadataMutation, UpdateDomainMetadataMutationVariables>;
export const CreateExpenditureMetadataDocument = gql`
    mutation CreateExpenditureMetadata($input: CreateExpenditureMetadataInput!) {
  createExpenditureMetadata(input: $input) {
    id
  }
}
    `;
export type CreateExpenditureMetadataMutationFn = Apollo.MutationFunction<CreateExpenditureMetadataMutation, CreateExpenditureMetadataMutationVariables>;

/**
 * __useCreateExpenditureMetadataMutation__
 *
 * To run a mutation, you first call `useCreateExpenditureMetadataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExpenditureMetadataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExpenditureMetadataMutation, { data, loading, error }] = useCreateExpenditureMetadataMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateExpenditureMetadataMutation(baseOptions?: Apollo.MutationHookOptions<CreateExpenditureMetadataMutation, CreateExpenditureMetadataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateExpenditureMetadataMutation, CreateExpenditureMetadataMutationVariables>(CreateExpenditureMetadataDocument, options);
      }
export type CreateExpenditureMetadataMutationHookResult = ReturnType<typeof useCreateExpenditureMetadataMutation>;
export type CreateExpenditureMetadataMutationResult = Apollo.MutationResult<CreateExpenditureMetadataMutation>;
export type CreateExpenditureMetadataMutationOptions = Apollo.BaseMutationOptions<CreateExpenditureMetadataMutation, CreateExpenditureMetadataMutationVariables>;
export const CreateStreamingPaymentMetadataDocument = gql`
    mutation CreateStreamingPaymentMetadata($input: CreateStreamingPaymentMetadataInput!) {
  createStreamingPaymentMetadata(input: $input) {
    id
  }
}
    `;
export type CreateStreamingPaymentMetadataMutationFn = Apollo.MutationFunction<CreateStreamingPaymentMetadataMutation, CreateStreamingPaymentMetadataMutationVariables>;

/**
 * __useCreateStreamingPaymentMetadataMutation__
 *
 * To run a mutation, you first call `useCreateStreamingPaymentMetadataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStreamingPaymentMetadataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStreamingPaymentMetadataMutation, { data, loading, error }] = useCreateStreamingPaymentMetadataMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateStreamingPaymentMetadataMutation(baseOptions?: Apollo.MutationHookOptions<CreateStreamingPaymentMetadataMutation, CreateStreamingPaymentMetadataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStreamingPaymentMetadataMutation, CreateStreamingPaymentMetadataMutationVariables>(CreateStreamingPaymentMetadataDocument, options);
      }
export type CreateStreamingPaymentMetadataMutationHookResult = ReturnType<typeof useCreateStreamingPaymentMetadataMutation>;
export type CreateStreamingPaymentMetadataMutationResult = Apollo.MutationResult<CreateStreamingPaymentMetadataMutation>;
export type CreateStreamingPaymentMetadataMutationOptions = Apollo.BaseMutationOptions<CreateStreamingPaymentMetadataMutation, CreateStreamingPaymentMetadataMutationVariables>;
export const CreateSafeTransactionDocument = gql`
    mutation CreateSafeTransaction($input: CreateSafeTransactionInput!) {
  createSafeTransaction(input: $input) {
    id
  }
}
    `;
export type CreateSafeTransactionMutationFn = Apollo.MutationFunction<CreateSafeTransactionMutation, CreateSafeTransactionMutationVariables>;

/**
 * __useCreateSafeTransactionMutation__
 *
 * To run a mutation, you first call `useCreateSafeTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSafeTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSafeTransactionMutation, { data, loading, error }] = useCreateSafeTransactionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSafeTransactionMutation(baseOptions?: Apollo.MutationHookOptions<CreateSafeTransactionMutation, CreateSafeTransactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSafeTransactionMutation, CreateSafeTransactionMutationVariables>(CreateSafeTransactionDocument, options);
      }
export type CreateSafeTransactionMutationHookResult = ReturnType<typeof useCreateSafeTransactionMutation>;
export type CreateSafeTransactionMutationResult = Apollo.MutationResult<CreateSafeTransactionMutation>;
export type CreateSafeTransactionMutationOptions = Apollo.BaseMutationOptions<CreateSafeTransactionMutation, CreateSafeTransactionMutationVariables>;
export const CreateSafeTransactionDataDocument = gql`
    mutation CreateSafeTransactionData($input: CreateSafeTransactionDataInput!) {
  createSafeTransactionData(input: $input) {
    id
  }
}
    `;
export type CreateSafeTransactionDataMutationFn = Apollo.MutationFunction<CreateSafeTransactionDataMutation, CreateSafeTransactionDataMutationVariables>;

/**
 * __useCreateSafeTransactionDataMutation__
 *
 * To run a mutation, you first call `useCreateSafeTransactionDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSafeTransactionDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSafeTransactionDataMutation, { data, loading, error }] = useCreateSafeTransactionDataMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSafeTransactionDataMutation(baseOptions?: Apollo.MutationHookOptions<CreateSafeTransactionDataMutation, CreateSafeTransactionDataMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSafeTransactionDataMutation, CreateSafeTransactionDataMutationVariables>(CreateSafeTransactionDataDocument, options);
      }
export type CreateSafeTransactionDataMutationHookResult = ReturnType<typeof useCreateSafeTransactionDataMutation>;
export type CreateSafeTransactionDataMutationResult = Apollo.MutationResult<CreateSafeTransactionDataMutation>;
export type CreateSafeTransactionDataMutationOptions = Apollo.BaseMutationOptions<CreateSafeTransactionDataMutation, CreateSafeTransactionDataMutationVariables>;
export const CreateColonyTokensDocument = gql`
    mutation CreateColonyTokens($input: CreateColonyTokensInput!) {
  createColonyTokens(input: $input) {
    id
  }
}
    `;
export type CreateColonyTokensMutationFn = Apollo.MutationFunction<CreateColonyTokensMutation, CreateColonyTokensMutationVariables>;

/**
 * __useCreateColonyTokensMutation__
 *
 * To run a mutation, you first call `useCreateColonyTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateColonyTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createColonyTokensMutation, { data, loading, error }] = useCreateColonyTokensMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateColonyTokensMutation(baseOptions?: Apollo.MutationHookOptions<CreateColonyTokensMutation, CreateColonyTokensMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateColonyTokensMutation, CreateColonyTokensMutationVariables>(CreateColonyTokensDocument, options);
      }
export type CreateColonyTokensMutationHookResult = ReturnType<typeof useCreateColonyTokensMutation>;
export type CreateColonyTokensMutationResult = Apollo.MutationResult<CreateColonyTokensMutation>;
export type CreateColonyTokensMutationOptions = Apollo.BaseMutationOptions<CreateColonyTokensMutation, CreateColonyTokensMutationVariables>;
export const DeleteColonyTokensDocument = gql`
    mutation DeleteColonyTokens($input: DeleteColonyTokensInput!) {
  deleteColonyTokens(input: $input) {
    id
  }
}
    `;
export type DeleteColonyTokensMutationFn = Apollo.MutationFunction<DeleteColonyTokensMutation, DeleteColonyTokensMutationVariables>;

/**
 * __useDeleteColonyTokensMutation__
 *
 * To run a mutation, you first call `useDeleteColonyTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteColonyTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteColonyTokensMutation, { data, loading, error }] = useDeleteColonyTokensMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteColonyTokensMutation(baseOptions?: Apollo.MutationHookOptions<DeleteColonyTokensMutation, DeleteColonyTokensMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteColonyTokensMutation, DeleteColonyTokensMutationVariables>(DeleteColonyTokensDocument, options);
      }
export type DeleteColonyTokensMutationHookResult = ReturnType<typeof useDeleteColonyTokensMutation>;
export type DeleteColonyTokensMutationResult = Apollo.MutationResult<DeleteColonyTokensMutation>;
export type DeleteColonyTokensMutationOptions = Apollo.BaseMutationOptions<DeleteColonyTokensMutation, DeleteColonyTokensMutationVariables>;
export const CreateTransactionDocument = gql`
    mutation CreateTransaction($input: CreateTransactionInput!) {
  createTransaction(input: $input) {
    id
  }
}
    `;
export type CreateTransactionMutationFn = Apollo.MutationFunction<CreateTransactionMutation, CreateTransactionMutationVariables>;

/**
 * __useCreateTransactionMutation__
 *
 * To run a mutation, you first call `useCreateTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTransactionMutation, { data, loading, error }] = useCreateTransactionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTransactionMutation(baseOptions?: Apollo.MutationHookOptions<CreateTransactionMutation, CreateTransactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTransactionMutation, CreateTransactionMutationVariables>(CreateTransactionDocument, options);
      }
export type CreateTransactionMutationHookResult = ReturnType<typeof useCreateTransactionMutation>;
export type CreateTransactionMutationResult = Apollo.MutationResult<CreateTransactionMutation>;
export type CreateTransactionMutationOptions = Apollo.BaseMutationOptions<CreateTransactionMutation, CreateTransactionMutationVariables>;
export const UpdateTransactionDocument = gql`
    mutation UpdateTransaction($input: UpdateTransactionInput!) {
  updateTransaction(input: $input) {
    id
  }
}
    `;
export type UpdateTransactionMutationFn = Apollo.MutationFunction<UpdateTransactionMutation, UpdateTransactionMutationVariables>;

/**
 * __useUpdateTransactionMutation__
 *
 * To run a mutation, you first call `useUpdateTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTransactionMutation, { data, loading, error }] = useUpdateTransactionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTransactionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTransactionMutation, UpdateTransactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTransactionMutation, UpdateTransactionMutationVariables>(UpdateTransactionDocument, options);
      }
export type UpdateTransactionMutationHookResult = ReturnType<typeof useUpdateTransactionMutation>;
export type UpdateTransactionMutationResult = Apollo.MutationResult<UpdateTransactionMutation>;
export type UpdateTransactionMutationOptions = Apollo.BaseMutationOptions<UpdateTransactionMutation, UpdateTransactionMutationVariables>;
export const CreateUniqueUserDocument = gql`
    mutation CreateUniqueUser($input: CreateUniqueUserInput!) {
  createUniqueUser(input: $input) {
    id
  }
}
    `;
export type CreateUniqueUserMutationFn = Apollo.MutationFunction<CreateUniqueUserMutation, CreateUniqueUserMutationVariables>;

/**
 * __useCreateUniqueUserMutation__
 *
 * To run a mutation, you first call `useCreateUniqueUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUniqueUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUniqueUserMutation, { data, loading, error }] = useCreateUniqueUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUniqueUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUniqueUserMutation, CreateUniqueUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUniqueUserMutation, CreateUniqueUserMutationVariables>(CreateUniqueUserDocument, options);
      }
export type CreateUniqueUserMutationHookResult = ReturnType<typeof useCreateUniqueUserMutation>;
export type CreateUniqueUserMutationResult = Apollo.MutationResult<CreateUniqueUserMutation>;
export type CreateUniqueUserMutationOptions = Apollo.BaseMutationOptions<CreateUniqueUserMutation, CreateUniqueUserMutationVariables>;
export const UpdateUserProfileDocument = gql`
    mutation UpdateUserProfile($input: UpdateProfileInput!) {
  updateProfile(input: $input) {
    id
    avatar
    bio
    displayName
    location
    website
    email
  }
}
    `;
export type UpdateUserProfileMutationFn = Apollo.MutationFunction<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;

/**
 * __useUpdateUserProfileMutation__
 *
 * To run a mutation, you first call `useUpdateUserProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserProfileMutation, { data, loading, error }] = useUpdateUserProfileMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>(UpdateUserProfileDocument, options);
      }
export type UpdateUserProfileMutationHookResult = ReturnType<typeof useUpdateUserProfileMutation>;
export type UpdateUserProfileMutationResult = Apollo.MutationResult<UpdateUserProfileMutation>;
export type UpdateUserProfileMutationOptions = Apollo.BaseMutationOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;
export const GetColonyActionsDocument = gql`
    query GetColonyActions($colonyAddress: ID!, $nextToken: String, $limit: Int, $sortDirection: ModelSortDirection, $filter: ModelColonyActionFilterInput) {
  getActionsByColony(
    colonyId: $colonyAddress
    nextToken: $nextToken
    limit: $limit
    sortDirection: $sortDirection
    filter: $filter
  ) {
    items {
      ...ColonyAction
    }
    nextToken
  }
}
    ${ColonyActionFragmentDoc}`;

/**
 * __useGetColonyActionsQuery__
 *
 * To run a query within a React component, call `useGetColonyActionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetColonyActionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetColonyActionsQuery({
 *   variables: {
 *      colonyAddress: // value for 'colonyAddress'
 *      nextToken: // value for 'nextToken'
 *      limit: // value for 'limit'
 *      sortDirection: // value for 'sortDirection'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetColonyActionsQuery(baseOptions: Apollo.QueryHookOptions<GetColonyActionsQuery, GetColonyActionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetColonyActionsQuery, GetColonyActionsQueryVariables>(GetColonyActionsDocument, options);
      }
export function useGetColonyActionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetColonyActionsQuery, GetColonyActionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetColonyActionsQuery, GetColonyActionsQueryVariables>(GetColonyActionsDocument, options);
        }
export type GetColonyActionsQueryHookResult = ReturnType<typeof useGetColonyActionsQuery>;
export type GetColonyActionsLazyQueryHookResult = ReturnType<typeof useGetColonyActionsLazyQuery>;
export type GetColonyActionsQueryResult = Apollo.QueryResult<GetColonyActionsQuery, GetColonyActionsQueryVariables>;
export const GetColonyActionDocument = gql`
    query GetColonyAction($transactionHash: ID!) {
  getColonyAction(id: $transactionHash) {
    ...ColonyAction
  }
}
    ${ColonyActionFragmentDoc}`;

/**
 * __useGetColonyActionQuery__
 *
 * To run a query within a React component, call `useGetColonyActionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetColonyActionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetColonyActionQuery({
 *   variables: {
 *      transactionHash: // value for 'transactionHash'
 *   },
 * });
 */
export function useGetColonyActionQuery(baseOptions: Apollo.QueryHookOptions<GetColonyActionQuery, GetColonyActionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetColonyActionQuery, GetColonyActionQueryVariables>(GetColonyActionDocument, options);
      }
export function useGetColonyActionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetColonyActionQuery, GetColonyActionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetColonyActionQuery, GetColonyActionQueryVariables>(GetColonyActionDocument, options);
        }
export type GetColonyActionQueryHookResult = ReturnType<typeof useGetColonyActionQuery>;
export type GetColonyActionLazyQueryHookResult = ReturnType<typeof useGetColonyActionLazyQuery>;
export type GetColonyActionQueryResult = Apollo.QueryResult<GetColonyActionQuery, GetColonyActionQueryVariables>;
export const GetColonyMotionDocument = gql`
    query GetColonyMotion($id: ID!) {
  getColonyMotion(id: $id) {
    ...ColonyMotion
  }
}
    ${ColonyMotionFragmentDoc}`;

/**
 * __useGetColonyMotionQuery__
 *
 * To run a query within a React component, call `useGetColonyMotionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetColonyMotionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetColonyMotionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetColonyMotionQuery(baseOptions: Apollo.QueryHookOptions<GetColonyMotionQuery, GetColonyMotionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetColonyMotionQuery, GetColonyMotionQueryVariables>(GetColonyMotionDocument, options);
      }
export function useGetColonyMotionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetColonyMotionQuery, GetColonyMotionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetColonyMotionQuery, GetColonyMotionQueryVariables>(GetColonyMotionDocument, options);
        }
export type GetColonyMotionQueryHookResult = ReturnType<typeof useGetColonyMotionQuery>;
export type GetColonyMotionLazyQueryHookResult = ReturnType<typeof useGetColonyMotionLazyQuery>;
export type GetColonyMotionQueryResult = Apollo.QueryResult<GetColonyMotionQuery, GetColonyMotionQueryVariables>;
export const GetMotionTransactionHashDocument = gql`
    query GetMotionTransactionHash($motionId: ID!) {
  getColonyActionByMotionId(motionId: $motionId) {
    items {
      id
    }
  }
}
    `;

/**
 * __useGetMotionTransactionHashQuery__
 *
 * To run a query within a React component, call `useGetMotionTransactionHashQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMotionTransactionHashQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMotionTransactionHashQuery({
 *   variables: {
 *      motionId: // value for 'motionId'
 *   },
 * });
 */
export function useGetMotionTransactionHashQuery(baseOptions: Apollo.QueryHookOptions<GetMotionTransactionHashQuery, GetMotionTransactionHashQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMotionTransactionHashQuery, GetMotionTransactionHashQueryVariables>(GetMotionTransactionHashDocument, options);
      }
export function useGetMotionTransactionHashLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMotionTransactionHashQuery, GetMotionTransactionHashQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMotionTransactionHashQuery, GetMotionTransactionHashQueryVariables>(GetMotionTransactionHashDocument, options);
        }
export type GetMotionTransactionHashQueryHookResult = ReturnType<typeof useGetMotionTransactionHashQuery>;
export type GetMotionTransactionHashLazyQueryHookResult = ReturnType<typeof useGetMotionTransactionHashLazyQuery>;
export type GetMotionTransactionHashQueryResult = Apollo.QueryResult<GetMotionTransactionHashQuery, GetMotionTransactionHashQueryVariables>;
export const GetSafeTransactionStatusDocument = gql`
    query GetSafeTransactionStatus($input: GetSafeTransactionStatusInput!) {
  getSafeTransactionStatus(input: $input)
}
    `;

/**
 * __useGetSafeTransactionStatusQuery__
 *
 * To run a query within a React component, call `useGetSafeTransactionStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSafeTransactionStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSafeTransactionStatusQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetSafeTransactionStatusQuery(baseOptions: Apollo.QueryHookOptions<GetSafeTransactionStatusQuery, GetSafeTransactionStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSafeTransactionStatusQuery, GetSafeTransactionStatusQueryVariables>(GetSafeTransactionStatusDocument, options);
      }
export function useGetSafeTransactionStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSafeTransactionStatusQuery, GetSafeTransactionStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSafeTransactionStatusQuery, GetSafeTransactionStatusQueryVariables>(GetSafeTransactionStatusDocument, options);
        }
export type GetSafeTransactionStatusQueryHookResult = ReturnType<typeof useGetSafeTransactionStatusQuery>;
export type GetSafeTransactionStatusLazyQueryHookResult = ReturnType<typeof useGetSafeTransactionStatusLazyQuery>;
export type GetSafeTransactionStatusQueryResult = Apollo.QueryResult<GetSafeTransactionStatusQuery, GetSafeTransactionStatusQueryVariables>;
export const GetTotalColonyActionsDocument = gql`
    query GetTotalColonyActions($filter: SearchableColonyActionFilterInput) {
  searchColonyActions(filter: $filter) {
    total
  }
}
    `;

/**
 * __useGetTotalColonyActionsQuery__
 *
 * To run a query within a React component, call `useGetTotalColonyActionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalColonyActionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalColonyActionsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetTotalColonyActionsQuery(baseOptions?: Apollo.QueryHookOptions<GetTotalColonyActionsQuery, GetTotalColonyActionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalColonyActionsQuery, GetTotalColonyActionsQueryVariables>(GetTotalColonyActionsDocument, options);
      }
export function useGetTotalColonyActionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalColonyActionsQuery, GetTotalColonyActionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalColonyActionsQuery, GetTotalColonyActionsQueryVariables>(GetTotalColonyActionsDocument, options);
        }
export type GetTotalColonyActionsQueryHookResult = ReturnType<typeof useGetTotalColonyActionsQuery>;
export type GetTotalColonyActionsLazyQueryHookResult = ReturnType<typeof useGetTotalColonyActionsLazyQuery>;
export type GetTotalColonyActionsQueryResult = Apollo.QueryResult<GetTotalColonyActionsQuery, GetTotalColonyActionsQueryVariables>;
export const GetTotalColonyDomainActionsDocument = gql`
    query GetTotalColonyDomainActions($colonyId: ID!) {
  searchColonyActions(
    filter: {colonyId: {eq: $colonyId}}
    aggregates: {name: "FromDomainIdCount", type: terms, field: fromDomainId}
  ) {
    aggregateItems {
      result {
        ... on SearchableAggregateBucketResult {
          __typename
          buckets {
            key
            docCount: doc_count
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetTotalColonyDomainActionsQuery__
 *
 * To run a query within a React component, call `useGetTotalColonyDomainActionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalColonyDomainActionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalColonyDomainActionsQuery({
 *   variables: {
 *      colonyId: // value for 'colonyId'
 *   },
 * });
 */
export function useGetTotalColonyDomainActionsQuery(baseOptions: Apollo.QueryHookOptions<GetTotalColonyDomainActionsQuery, GetTotalColonyDomainActionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTotalColonyDomainActionsQuery, GetTotalColonyDomainActionsQueryVariables>(GetTotalColonyDomainActionsDocument, options);
      }
export function useGetTotalColonyDomainActionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalColonyDomainActionsQuery, GetTotalColonyDomainActionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTotalColonyDomainActionsQuery, GetTotalColonyDomainActionsQueryVariables>(GetTotalColonyDomainActionsDocument, options);
        }
export type GetTotalColonyDomainActionsQueryHookResult = ReturnType<typeof useGetTotalColonyDomainActionsQuery>;
export type GetTotalColonyDomainActionsLazyQueryHookResult = ReturnType<typeof useGetTotalColonyDomainActionsLazyQuery>;
export type GetTotalColonyDomainActionsQueryResult = Apollo.QueryResult<GetTotalColonyDomainActionsQuery, GetTotalColonyDomainActionsQueryVariables>;
export const SearchActionsDocument = gql`
    query SearchActions($nextToken: String, $limit: Int, $filter: SearchableColonyActionFilterInput, $sort: [SearchableColonyActionSortInput]) {
  searchColonyActions(
    limit: $limit
    nextToken: $nextToken
    sort: $sort
    filter: $filter
    from: 0
  ) {
    items {
      ...ColonyAction
    }
    nextToken
  }
}
    ${ColonyActionFragmentDoc}`;

/**
 * __useSearchActionsQuery__
 *
 * To run a query within a React component, call `useSearchActionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchActionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchActionsQuery({
 *   variables: {
 *      nextToken: // value for 'nextToken'
 *      limit: // value for 'limit'
 *      filter: // value for 'filter'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useSearchActionsQuery(baseOptions?: Apollo.QueryHookOptions<SearchActionsQuery, SearchActionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchActionsQuery, SearchActionsQueryVariables>(SearchActionsDocument, options);
      }
export function useSearchActionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchActionsQuery, SearchActionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchActionsQuery, SearchActionsQueryVariables>(SearchActionsDocument, options);
        }
export type SearchActionsQueryHookResult = ReturnType<typeof useSearchActionsQuery>;
export type SearchActionsLazyQueryHookResult = ReturnType<typeof useSearchActionsLazyQuery>;
export type SearchActionsQueryResult = Apollo.QueryResult<SearchActionsQuery, SearchActionsQueryVariables>;
export const GetFullColonyByAddressDocument = gql`
    query GetFullColonyByAddress($address: ID!) {
  getColonyByAddress(id: $address) {
    items {
      ...Colony
    }
  }
}
    ${ColonyFragmentDoc}`;

/**
 * __useGetFullColonyByAddressQuery__
 *
 * To run a query within a React component, call `useGetFullColonyByAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFullColonyByAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFullColonyByAddressQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useGetFullColonyByAddressQuery(baseOptions: Apollo.QueryHookOptions<GetFullColonyByAddressQuery, GetFullColonyByAddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFullColonyByAddressQuery, GetFullColonyByAddressQueryVariables>(GetFullColonyByAddressDocument, options);
      }
export function useGetFullColonyByAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFullColonyByAddressQuery, GetFullColonyByAddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFullColonyByAddressQuery, GetFullColonyByAddressQueryVariables>(GetFullColonyByAddressDocument, options);
        }
export type GetFullColonyByAddressQueryHookResult = ReturnType<typeof useGetFullColonyByAddressQuery>;
export type GetFullColonyByAddressLazyQueryHookResult = ReturnType<typeof useGetFullColonyByAddressLazyQuery>;
export type GetFullColonyByAddressQueryResult = Apollo.QueryResult<GetFullColonyByAddressQuery, GetFullColonyByAddressQueryVariables>;
export const GetFullColonyByNameDocument = gql`
    query GetFullColonyByName($name: String!) {
  getColonyByName(name: $name) {
    items {
      ...Colony
    }
  }
}
    ${ColonyFragmentDoc}`;

/**
 * __useGetFullColonyByNameQuery__
 *
 * To run a query within a React component, call `useGetFullColonyByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFullColonyByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFullColonyByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetFullColonyByNameQuery(baseOptions: Apollo.QueryHookOptions<GetFullColonyByNameQuery, GetFullColonyByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFullColonyByNameQuery, GetFullColonyByNameQueryVariables>(GetFullColonyByNameDocument, options);
      }
export function useGetFullColonyByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFullColonyByNameQuery, GetFullColonyByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFullColonyByNameQuery, GetFullColonyByNameQueryVariables>(GetFullColonyByNameDocument, options);
        }
export type GetFullColonyByNameQueryHookResult = ReturnType<typeof useGetFullColonyByNameQuery>;
export type GetFullColonyByNameLazyQueryHookResult = ReturnType<typeof useGetFullColonyByNameLazyQuery>;
export type GetFullColonyByNameQueryResult = Apollo.QueryResult<GetFullColonyByNameQuery, GetFullColonyByNameQueryVariables>;
export const GetDisplayNameByColonyNameDocument = gql`
    query GetDisplayNameByColonyName($name: String!) {
  getColonyByName(name: $name) {
    items {
      metadata {
        displayName
      }
    }
  }
}
    `;

/**
 * __useGetDisplayNameByColonyNameQuery__
 *
 * To run a query within a React component, call `useGetDisplayNameByColonyNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDisplayNameByColonyNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDisplayNameByColonyNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetDisplayNameByColonyNameQuery(baseOptions: Apollo.QueryHookOptions<GetDisplayNameByColonyNameQuery, GetDisplayNameByColonyNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDisplayNameByColonyNameQuery, GetDisplayNameByColonyNameQueryVariables>(GetDisplayNameByColonyNameDocument, options);
      }
export function useGetDisplayNameByColonyNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDisplayNameByColonyNameQuery, GetDisplayNameByColonyNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDisplayNameByColonyNameQuery, GetDisplayNameByColonyNameQueryVariables>(GetDisplayNameByColonyNameDocument, options);
        }
export type GetDisplayNameByColonyNameQueryHookResult = ReturnType<typeof useGetDisplayNameByColonyNameQuery>;
export type GetDisplayNameByColonyNameLazyQueryHookResult = ReturnType<typeof useGetDisplayNameByColonyNameLazyQuery>;
export type GetDisplayNameByColonyNameQueryResult = Apollo.QueryResult<GetDisplayNameByColonyNameQuery, GetDisplayNameByColonyNameQueryVariables>;
export const GetMetacolonyDocument = gql`
    query GetMetacolony {
  getColonyByType(type: METACOLONY) {
    items {
      ...Colony
    }
  }
}
    ${ColonyFragmentDoc}`;

/**
 * __useGetMetacolonyQuery__
 *
 * To run a query within a React component, call `useGetMetacolonyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMetacolonyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMetacolonyQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMetacolonyQuery(baseOptions?: Apollo.QueryHookOptions<GetMetacolonyQuery, GetMetacolonyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMetacolonyQuery, GetMetacolonyQueryVariables>(GetMetacolonyDocument, options);
      }
export function useGetMetacolonyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMetacolonyQuery, GetMetacolonyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMetacolonyQuery, GetMetacolonyQueryVariables>(GetMetacolonyDocument, options);
        }
export type GetMetacolonyQueryHookResult = ReturnType<typeof useGetMetacolonyQuery>;
export type GetMetacolonyLazyQueryHookResult = ReturnType<typeof useGetMetacolonyLazyQuery>;
export type GetMetacolonyQueryResult = Apollo.QueryResult<GetMetacolonyQuery, GetMetacolonyQueryVariables>;
export const GetColonyExtensionsDocument = gql`
    query GetColonyExtensions($colonyAddress: ID!) {
  getColony(id: $colonyAddress) {
    id
    extensions(filter: {isDeleted: {eq: false}}) {
      items {
        ...Extension
      }
    }
  }
}
    ${ExtensionFragmentDoc}`;

/**
 * __useGetColonyExtensionsQuery__
 *
 * To run a query within a React component, call `useGetColonyExtensionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetColonyExtensionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetColonyExtensionsQuery({
 *   variables: {
 *      colonyAddress: // value for 'colonyAddress'
 *   },
 * });
 */
export function useGetColonyExtensionsQuery(baseOptions: Apollo.QueryHookOptions<GetColonyExtensionsQuery, GetColonyExtensionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetColonyExtensionsQuery, GetColonyExtensionsQueryVariables>(GetColonyExtensionsDocument, options);
      }
export function useGetColonyExtensionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetColonyExtensionsQuery, GetColonyExtensionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetColonyExtensionsQuery, GetColonyExtensionsQueryVariables>(GetColonyExtensionsDocument, options);
        }
export type GetColonyExtensionsQueryHookResult = ReturnType<typeof useGetColonyExtensionsQuery>;
export type GetColonyExtensionsLazyQueryHookResult = ReturnType<typeof useGetColonyExtensionsLazyQuery>;
export type GetColonyExtensionsQueryResult = Apollo.QueryResult<GetColonyExtensionsQuery, GetColonyExtensionsQueryVariables>;
export const GetColonyExtensionDocument = gql`
    query GetColonyExtension($colonyAddress: ID!, $extensionHash: String!) {
  getExtensionByColonyAndHash(
    colonyId: $colonyAddress
    hash: {eq: $extensionHash}
    filter: {isDeleted: {eq: false}}
  ) {
    items {
      ...Extension
    }
  }
}
    ${ExtensionFragmentDoc}`;

/**
 * __useGetColonyExtensionQuery__
 *
 * To run a query within a React component, call `useGetColonyExtensionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetColonyExtensionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetColonyExtensionQuery({
 *   variables: {
 *      colonyAddress: // value for 'colonyAddress'
 *      extensionHash: // value for 'extensionHash'
 *   },
 * });
 */
export function useGetColonyExtensionQuery(baseOptions: Apollo.QueryHookOptions<GetColonyExtensionQuery, GetColonyExtensionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetColonyExtensionQuery, GetColonyExtensionQueryVariables>(GetColonyExtensionDocument, options);
      }
export function useGetColonyExtensionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetColonyExtensionQuery, GetColonyExtensionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetColonyExtensionQuery, GetColonyExtensionQueryVariables>(GetColonyExtensionDocument, options);
        }
export type GetColonyExtensionQueryHookResult = ReturnType<typeof useGetColonyExtensionQuery>;
export type GetColonyExtensionLazyQueryHookResult = ReturnType<typeof useGetColonyExtensionLazyQuery>;
export type GetColonyExtensionQueryResult = Apollo.QueryResult<GetColonyExtensionQuery, GetColonyExtensionQueryVariables>;
export const GetPrivateBetaCodeInviteValidityDocument = gql`
    query GetPrivateBetaCodeInviteValidity($id: ID!) {
  getPrivateBetaInviteCode(id: $id) {
    shareableInvites
  }
}
    `;

/**
 * __useGetPrivateBetaCodeInviteValidityQuery__
 *
 * To run a query within a React component, call `useGetPrivateBetaCodeInviteValidityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPrivateBetaCodeInviteValidityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPrivateBetaCodeInviteValidityQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPrivateBetaCodeInviteValidityQuery(baseOptions: Apollo.QueryHookOptions<GetPrivateBetaCodeInviteValidityQuery, GetPrivateBetaCodeInviteValidityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPrivateBetaCodeInviteValidityQuery, GetPrivateBetaCodeInviteValidityQueryVariables>(GetPrivateBetaCodeInviteValidityDocument, options);
      }
export function useGetPrivateBetaCodeInviteValidityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPrivateBetaCodeInviteValidityQuery, GetPrivateBetaCodeInviteValidityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPrivateBetaCodeInviteValidityQuery, GetPrivateBetaCodeInviteValidityQueryVariables>(GetPrivateBetaCodeInviteValidityDocument, options);
        }
export type GetPrivateBetaCodeInviteValidityQueryHookResult = ReturnType<typeof useGetPrivateBetaCodeInviteValidityQuery>;
export type GetPrivateBetaCodeInviteValidityLazyQueryHookResult = ReturnType<typeof useGetPrivateBetaCodeInviteValidityLazyQuery>;
export type GetPrivateBetaCodeInviteValidityQueryResult = Apollo.QueryResult<GetPrivateBetaCodeInviteValidityQuery, GetPrivateBetaCodeInviteValidityQueryVariables>;
export const CheckColonyNameExistsDocument = gql`
    query CheckColonyNameExists($name: String!) {
  getColonyByName(name: $name) {
    items {
      id
    }
  }
}
    `;

/**
 * __useCheckColonyNameExistsQuery__
 *
 * To run a query within a React component, call `useCheckColonyNameExistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckColonyNameExistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckColonyNameExistsQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCheckColonyNameExistsQuery(baseOptions: Apollo.QueryHookOptions<CheckColonyNameExistsQuery, CheckColonyNameExistsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckColonyNameExistsQuery, CheckColonyNameExistsQueryVariables>(CheckColonyNameExistsDocument, options);
      }
export function useCheckColonyNameExistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckColonyNameExistsQuery, CheckColonyNameExistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckColonyNameExistsQuery, CheckColonyNameExistsQueryVariables>(CheckColonyNameExistsDocument, options);
        }
export type CheckColonyNameExistsQueryHookResult = ReturnType<typeof useCheckColonyNameExistsQuery>;
export type CheckColonyNameExistsLazyQueryHookResult = ReturnType<typeof useCheckColonyNameExistsLazyQuery>;
export type CheckColonyNameExistsQueryResult = Apollo.QueryResult<CheckColonyNameExistsQuery, CheckColonyNameExistsQueryVariables>;
export const GetPublicColonyByNameDocument = gql`
    query GetPublicColonyByName($name: String!) {
  getColonyByName(name: $name) {
    items {
      ...PublicColony
    }
  }
}
    ${PublicColonyFragmentDoc}`;

/**
 * __useGetPublicColonyByNameQuery__
 *
 * To run a query within a React component, call `useGetPublicColonyByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPublicColonyByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPublicColonyByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetPublicColonyByNameQuery(baseOptions: Apollo.QueryHookOptions<GetPublicColonyByNameQuery, GetPublicColonyByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPublicColonyByNameQuery, GetPublicColonyByNameQueryVariables>(GetPublicColonyByNameDocument, options);
      }
export function useGetPublicColonyByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPublicColonyByNameQuery, GetPublicColonyByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPublicColonyByNameQuery, GetPublicColonyByNameQueryVariables>(GetPublicColonyByNameDocument, options);
        }
export type GetPublicColonyByNameQueryHookResult = ReturnType<typeof useGetPublicColonyByNameQuery>;
export type GetPublicColonyByNameLazyQueryHookResult = ReturnType<typeof useGetPublicColonyByNameLazyQuery>;
export type GetPublicColonyByNameQueryResult = Apollo.QueryResult<GetPublicColonyByNameQuery, GetPublicColonyByNameQueryVariables>;
export const GetColonyMemberInviteDocument = gql`
    query GetColonyMemberInvite($id: ID!) {
  getColonyMemberInvite(id: $id) {
    colony {
      ...PublicColony
    }
    invitesRemaining
  }
}
    ${PublicColonyFragmentDoc}`;

/**
 * __useGetColonyMemberInviteQuery__
 *
 * To run a query within a React component, call `useGetColonyMemberInviteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetColonyMemberInviteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetColonyMemberInviteQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetColonyMemberInviteQuery(baseOptions: Apollo.QueryHookOptions<GetColonyMemberInviteQuery, GetColonyMemberInviteQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetColonyMemberInviteQuery, GetColonyMemberInviteQueryVariables>(GetColonyMemberInviteDocument, options);
      }
export function useGetColonyMemberInviteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetColonyMemberInviteQuery, GetColonyMemberInviteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetColonyMemberInviteQuery, GetColonyMemberInviteQueryVariables>(GetColonyMemberInviteDocument, options);
        }
export type GetColonyMemberInviteQueryHookResult = ReturnType<typeof useGetColonyMemberInviteQuery>;
export type GetColonyMemberInviteLazyQueryHookResult = ReturnType<typeof useGetColonyMemberInviteLazyQuery>;
export type GetColonyMemberInviteQueryResult = Apollo.QueryResult<GetColonyMemberInviteQuery, GetColonyMemberInviteQueryVariables>;
export const GetColonyContributorDocument = gql`
    query GetColonyContributor($id: ID!, $colonyAddress: ID!) {
  getColonyContributor(id: $id) {
    ...ColonyContributor
  }
}
    ${ColonyContributorFragmentDoc}`;

/**
 * __useGetColonyContributorQuery__
 *
 * To run a query within a React component, call `useGetColonyContributorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetColonyContributorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetColonyContributorQuery({
 *   variables: {
 *      id: // value for 'id'
 *      colonyAddress: // value for 'colonyAddress'
 *   },
 * });
 */
export function useGetColonyContributorQuery(baseOptions: Apollo.QueryHookOptions<GetColonyContributorQuery, GetColonyContributorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetColonyContributorQuery, GetColonyContributorQueryVariables>(GetColonyContributorDocument, options);
      }
export function useGetColonyContributorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetColonyContributorQuery, GetColonyContributorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetColonyContributorQuery, GetColonyContributorQueryVariables>(GetColonyContributorDocument, options);
        }
export type GetColonyContributorQueryHookResult = ReturnType<typeof useGetColonyContributorQuery>;
export type GetColonyContributorLazyQueryHookResult = ReturnType<typeof useGetColonyContributorLazyQuery>;
export type GetColonyContributorQueryResult = Apollo.QueryResult<GetColonyContributorQuery, GetColonyContributorQueryVariables>;
export const GetColonyContributorsDocument = gql`
    query GetColonyContributors($colonyAddress: ID!, $sortDirection: ModelSortDirection = ASC, $limit: Int = 100, $nextToken: String) {
  getContributorsByColony(
    colonyAddress: $colonyAddress
    sortDirection: $sortDirection
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      ...ColonyContributor
    }
    nextToken
  }
}
    ${ColonyContributorFragmentDoc}`;

/**
 * __useGetColonyContributorsQuery__
 *
 * To run a query within a React component, call `useGetColonyContributorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetColonyContributorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetColonyContributorsQuery({
 *   variables: {
 *      colonyAddress: // value for 'colonyAddress'
 *      sortDirection: // value for 'sortDirection'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useGetColonyContributorsQuery(baseOptions: Apollo.QueryHookOptions<GetColonyContributorsQuery, GetColonyContributorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetColonyContributorsQuery, GetColonyContributorsQueryVariables>(GetColonyContributorsDocument, options);
      }
export function useGetColonyContributorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetColonyContributorsQuery, GetColonyContributorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetColonyContributorsQuery, GetColonyContributorsQueryVariables>(GetColonyContributorsDocument, options);
        }
export type GetColonyContributorsQueryHookResult = ReturnType<typeof useGetColonyContributorsQuery>;
export type GetColonyContributorsLazyQueryHookResult = ReturnType<typeof useGetColonyContributorsLazyQuery>;
export type GetColonyContributorsQueryResult = Apollo.QueryResult<GetColonyContributorsQuery, GetColonyContributorsQueryVariables>;
export const GetContributorsByAddressDocument = gql`
    query GetContributorsByAddress($contributorAddress: ID!, $sortDirection: ModelSortDirection = ASC, $limit: Int = 100, $nextToken: String, $isWatching: Boolean) {
  getContributorsByAddress(
    contributorAddress: $contributorAddress
    sortDirection: $sortDirection
    limit: $limit
    nextToken: $nextToken
    filter: {isWatching: {eq: $isWatching}}
  ) {
    items {
      id
      createdAt
      colony {
        ...JoinedColony
      }
    }
    nextToken
  }
}
    ${JoinedColonyFragmentDoc}`;

/**
 * __useGetContributorsByAddressQuery__
 *
 * To run a query within a React component, call `useGetContributorsByAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContributorsByAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContributorsByAddressQuery({
 *   variables: {
 *      contributorAddress: // value for 'contributorAddress'
 *      sortDirection: // value for 'sortDirection'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *      isWatching: // value for 'isWatching'
 *   },
 * });
 */
export function useGetContributorsByAddressQuery(baseOptions: Apollo.QueryHookOptions<GetContributorsByAddressQuery, GetContributorsByAddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContributorsByAddressQuery, GetContributorsByAddressQueryVariables>(GetContributorsByAddressDocument, options);
      }
export function useGetContributorsByAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContributorsByAddressQuery, GetContributorsByAddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContributorsByAddressQuery, GetContributorsByAddressQueryVariables>(GetContributorsByAddressDocument, options);
        }
export type GetContributorsByAddressQueryHookResult = ReturnType<typeof useGetContributorsByAddressQuery>;
export type GetContributorsByAddressLazyQueryHookResult = ReturnType<typeof useGetContributorsByAddressLazyQuery>;
export type GetContributorsByAddressQueryResult = Apollo.QueryResult<GetContributorsByAddressQuery, GetContributorsByAddressQueryVariables>;
export const SearchColonyContributorsDocument = gql`
    query SearchColonyContributors($colonyAddress: ID!, $nextToken: String, $limit: Int = 100) {
  searchColonyContributors(
    limit: $limit
    nextToken: $nextToken
    filter: {colonyAddress: {eq: $colonyAddress}}
    sort: {field: createdAt, direction: asc}
    from: 0
  ) {
    items {
      ...ColonyContributor
    }
    total
    nextToken
  }
}
    ${ColonyContributorFragmentDoc}`;

/**
 * __useSearchColonyContributorsQuery__
 *
 * To run a query within a React component, call `useSearchColonyContributorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchColonyContributorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchColonyContributorsQuery({
 *   variables: {
 *      colonyAddress: // value for 'colonyAddress'
 *      nextToken: // value for 'nextToken'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useSearchColonyContributorsQuery(baseOptions: Apollo.QueryHookOptions<SearchColonyContributorsQuery, SearchColonyContributorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchColonyContributorsQuery, SearchColonyContributorsQueryVariables>(SearchColonyContributorsDocument, options);
      }
export function useSearchColonyContributorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchColonyContributorsQuery, SearchColonyContributorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchColonyContributorsQuery, SearchColonyContributorsQueryVariables>(SearchColonyContributorsDocument, options);
        }
export type SearchColonyContributorsQueryHookResult = ReturnType<typeof useSearchColonyContributorsQuery>;
export type SearchColonyContributorsLazyQueryHookResult = ReturnType<typeof useSearchColonyContributorsLazyQuery>;
export type SearchColonyContributorsQueryResult = Apollo.QueryResult<SearchColonyContributorsQuery, SearchColonyContributorsQueryVariables>;
export const GetColonyDecisionsDocument = gql`
    query getColonyDecisions($colonyAddress: String!, $sortDirection: ModelSortDirection = ASC, $filter: ModelColonyDecisionFilterInput, $limit: Int = 10) {
  getColonyDecisionByColonyAddress(
    colonyAddress: $colonyAddress
    filter: $filter
    sortDirection: $sortDirection
    limit: $limit
  ) {
    items {
      ...ColonyDecision
    }
    nextToken
  }
}
    ${ColonyDecisionFragmentDoc}`;

/**
 * __useGetColonyDecisionsQuery__
 *
 * To run a query within a React component, call `useGetColonyDecisionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetColonyDecisionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetColonyDecisionsQuery({
 *   variables: {
 *      colonyAddress: // value for 'colonyAddress'
 *      sortDirection: // value for 'sortDirection'
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetColonyDecisionsQuery(baseOptions: Apollo.QueryHookOptions<GetColonyDecisionsQuery, GetColonyDecisionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetColonyDecisionsQuery, GetColonyDecisionsQueryVariables>(GetColonyDecisionsDocument, options);
      }
export function useGetColonyDecisionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetColonyDecisionsQuery, GetColonyDecisionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetColonyDecisionsQuery, GetColonyDecisionsQueryVariables>(GetColonyDecisionsDocument, options);
        }
export type GetColonyDecisionsQueryHookResult = ReturnType<typeof useGetColonyDecisionsQuery>;
export type GetColonyDecisionsLazyQueryHookResult = ReturnType<typeof useGetColonyDecisionsLazyQuery>;
export type GetColonyDecisionsQueryResult = Apollo.QueryResult<GetColonyDecisionsQuery, GetColonyDecisionsQueryVariables>;
export const GetColonyExpendituresDocument = gql`
    query GetColonyExpenditures($colonyAddress: ID!) {
  getColony(id: $colonyAddress) {
    id
    expenditures {
      items {
        ...Expenditure
      }
    }
  }
}
    ${ExpenditureFragmentDoc}`;

/**
 * __useGetColonyExpendituresQuery__
 *
 * To run a query within a React component, call `useGetColonyExpendituresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetColonyExpendituresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetColonyExpendituresQuery({
 *   variables: {
 *      colonyAddress: // value for 'colonyAddress'
 *   },
 * });
 */
export function useGetColonyExpendituresQuery(baseOptions: Apollo.QueryHookOptions<GetColonyExpendituresQuery, GetColonyExpendituresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetColonyExpendituresQuery, GetColonyExpendituresQueryVariables>(GetColonyExpendituresDocument, options);
      }
export function useGetColonyExpendituresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetColonyExpendituresQuery, GetColonyExpendituresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetColonyExpendituresQuery, GetColonyExpendituresQueryVariables>(GetColonyExpendituresDocument, options);
        }
export type GetColonyExpendituresQueryHookResult = ReturnType<typeof useGetColonyExpendituresQuery>;
export type GetColonyExpendituresLazyQueryHookResult = ReturnType<typeof useGetColonyExpendituresLazyQuery>;
export type GetColonyExpendituresQueryResult = Apollo.QueryResult<GetColonyExpendituresQuery, GetColonyExpendituresQueryVariables>;
export const GetExpenditureDocument = gql`
    query GetExpenditure($expenditureId: ID!) {
  getExpenditure(id: $expenditureId) {
    ...Expenditure
  }
}
    ${ExpenditureFragmentDoc}`;

/**
 * __useGetExpenditureQuery__
 *
 * To run a query within a React component, call `useGetExpenditureQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExpenditureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExpenditureQuery({
 *   variables: {
 *      expenditureId: // value for 'expenditureId'
 *   },
 * });
 */
export function useGetExpenditureQuery(baseOptions: Apollo.QueryHookOptions<GetExpenditureQuery, GetExpenditureQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetExpenditureQuery, GetExpenditureQueryVariables>(GetExpenditureDocument, options);
      }
export function useGetExpenditureLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetExpenditureQuery, GetExpenditureQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetExpenditureQuery, GetExpenditureQueryVariables>(GetExpenditureDocument, options);
        }
export type GetExpenditureQueryHookResult = ReturnType<typeof useGetExpenditureQuery>;
export type GetExpenditureLazyQueryHookResult = ReturnType<typeof useGetExpenditureLazyQuery>;
export type GetExpenditureQueryResult = Apollo.QueryResult<GetExpenditureQuery, GetExpenditureQueryVariables>;
export const GetColonyExtensionsByColonyAddressDocument = gql`
    query GetColonyExtensionsByColonyAddress($colonyAddress: ID!) {
  getExtensionByColonyAndHash(colonyId: $colonyAddress) {
    items {
      id
    }
  }
}
    `;

/**
 * __useGetColonyExtensionsByColonyAddressQuery__
 *
 * To run a query within a React component, call `useGetColonyExtensionsByColonyAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetColonyExtensionsByColonyAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetColonyExtensionsByColonyAddressQuery({
 *   variables: {
 *      colonyAddress: // value for 'colonyAddress'
 *   },
 * });
 */
export function useGetColonyExtensionsByColonyAddressQuery(baseOptions: Apollo.QueryHookOptions<GetColonyExtensionsByColonyAddressQuery, GetColonyExtensionsByColonyAddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetColonyExtensionsByColonyAddressQuery, GetColonyExtensionsByColonyAddressQueryVariables>(GetColonyExtensionsByColonyAddressDocument, options);
      }
export function useGetColonyExtensionsByColonyAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetColonyExtensionsByColonyAddressQuery, GetColonyExtensionsByColonyAddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetColonyExtensionsByColonyAddressQuery, GetColonyExtensionsByColonyAddressQueryVariables>(GetColonyExtensionsByColonyAddressDocument, options);
        }
export type GetColonyExtensionsByColonyAddressQueryHookResult = ReturnType<typeof useGetColonyExtensionsByColonyAddressQuery>;
export type GetColonyExtensionsByColonyAddressLazyQueryHookResult = ReturnType<typeof useGetColonyExtensionsByColonyAddressLazyQuery>;
export type GetColonyExtensionsByColonyAddressQueryResult = Apollo.QueryResult<GetColonyExtensionsByColonyAddressQuery, GetColonyExtensionsByColonyAddressQueryVariables>;
export const GetExtensionInstallationsCountDocument = gql`
    query GetExtensionInstallationsCount($id: ID!) {
  getExtensionInstallationsCount(id: $id) {
    oneTxPayment
    stakedExpenditure
    stagedExpenditure
    streamingPayments
    reputationWeighted
  }
}
    `;

/**
 * __useGetExtensionInstallationsCountQuery__
 *
 * To run a query within a React component, call `useGetExtensionInstallationsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExtensionInstallationsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExtensionInstallationsCountQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetExtensionInstallationsCountQuery(baseOptions: Apollo.QueryHookOptions<GetExtensionInstallationsCountQuery, GetExtensionInstallationsCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetExtensionInstallationsCountQuery, GetExtensionInstallationsCountQueryVariables>(GetExtensionInstallationsCountDocument, options);
      }
export function useGetExtensionInstallationsCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetExtensionInstallationsCountQuery, GetExtensionInstallationsCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetExtensionInstallationsCountQuery, GetExtensionInstallationsCountQueryVariables>(GetExtensionInstallationsCountDocument, options);
        }
export type GetExtensionInstallationsCountQueryHookResult = ReturnType<typeof useGetExtensionInstallationsCountQuery>;
export type GetExtensionInstallationsCountLazyQueryHookResult = ReturnType<typeof useGetExtensionInstallationsCountLazyQuery>;
export type GetExtensionInstallationsCountQueryResult = Apollo.QueryResult<GetExtensionInstallationsCountQuery, GetExtensionInstallationsCountQueryVariables>;
export const GetReputationMiningCycleMetadataDocument = gql`
    query GetReputationMiningCycleMetadata {
  getReputationMiningCycleMetadata(id: "REPUTATION_MINING_CYCLE_METADATA") {
    lastCompletedAt
  }
}
    `;

/**
 * __useGetReputationMiningCycleMetadataQuery__
 *
 * To run a query within a React component, call `useGetReputationMiningCycleMetadataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReputationMiningCycleMetadataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReputationMiningCycleMetadataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetReputationMiningCycleMetadataQuery(baseOptions?: Apollo.QueryHookOptions<GetReputationMiningCycleMetadataQuery, GetReputationMiningCycleMetadataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReputationMiningCycleMetadataQuery, GetReputationMiningCycleMetadataQueryVariables>(GetReputationMiningCycleMetadataDocument, options);
      }
export function useGetReputationMiningCycleMetadataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReputationMiningCycleMetadataQuery, GetReputationMiningCycleMetadataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReputationMiningCycleMetadataQuery, GetReputationMiningCycleMetadataQueryVariables>(GetReputationMiningCycleMetadataDocument, options);
        }
export type GetReputationMiningCycleMetadataQueryHookResult = ReturnType<typeof useGetReputationMiningCycleMetadataQuery>;
export type GetReputationMiningCycleMetadataLazyQueryHookResult = ReturnType<typeof useGetReputationMiningCycleMetadataLazyQuery>;
export type GetReputationMiningCycleMetadataQueryResult = Apollo.QueryResult<GetReputationMiningCycleMetadataQuery, GetReputationMiningCycleMetadataQueryVariables>;
export const GetMotionStateDocument = gql`
    query GetMotionState($input: GetMotionStateInput!) {
  getMotionState(input: $input)
}
    `;

/**
 * __useGetMotionStateQuery__
 *
 * To run a query within a React component, call `useGetMotionStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMotionStateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMotionStateQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMotionStateQuery(baseOptions: Apollo.QueryHookOptions<GetMotionStateQuery, GetMotionStateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMotionStateQuery, GetMotionStateQueryVariables>(GetMotionStateDocument, options);
      }
export function useGetMotionStateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMotionStateQuery, GetMotionStateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMotionStateQuery, GetMotionStateQueryVariables>(GetMotionStateDocument, options);
        }
export type GetMotionStateQueryHookResult = ReturnType<typeof useGetMotionStateQuery>;
export type GetMotionStateLazyQueryHookResult = ReturnType<typeof useGetMotionStateLazyQuery>;
export type GetMotionStateQueryResult = Apollo.QueryResult<GetMotionStateQuery, GetMotionStateQueryVariables>;
export const GetVoterRewardsDocument = gql`
    query GetVoterRewards($input: GetVoterRewardsInput!) {
  getVoterRewards(input: $input) {
    min
    max
    reward
  }
}
    `;

/**
 * __useGetVoterRewardsQuery__
 *
 * To run a query within a React component, call `useGetVoterRewardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVoterRewardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVoterRewardsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetVoterRewardsQuery(baseOptions: Apollo.QueryHookOptions<GetVoterRewardsQuery, GetVoterRewardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVoterRewardsQuery, GetVoterRewardsQueryVariables>(GetVoterRewardsDocument, options);
      }
export function useGetVoterRewardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVoterRewardsQuery, GetVoterRewardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVoterRewardsQuery, GetVoterRewardsQueryVariables>(GetVoterRewardsDocument, options);
        }
export type GetVoterRewardsQueryHookResult = ReturnType<typeof useGetVoterRewardsQuery>;
export type GetVoterRewardsLazyQueryHookResult = ReturnType<typeof useGetVoterRewardsLazyQuery>;
export type GetVoterRewardsQueryResult = Apollo.QueryResult<GetVoterRewardsQuery, GetVoterRewardsQueryVariables>;
export const GetMotionByTransactionHashDocument = gql`
    query GetMotionByTransactionHash($transactionHash: ID!) {
  getMotionByTransactionHash(transactionHash: $transactionHash) {
    items {
      ...ColonyMotion
    }
  }
}
    ${ColonyMotionFragmentDoc}`;

/**
 * __useGetMotionByTransactionHashQuery__
 *
 * To run a query within a React component, call `useGetMotionByTransactionHashQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMotionByTransactionHashQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMotionByTransactionHashQuery({
 *   variables: {
 *      transactionHash: // value for 'transactionHash'
 *   },
 * });
 */
export function useGetMotionByTransactionHashQuery(baseOptions: Apollo.QueryHookOptions<GetMotionByTransactionHashQuery, GetMotionByTransactionHashQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMotionByTransactionHashQuery, GetMotionByTransactionHashQueryVariables>(GetMotionByTransactionHashDocument, options);
      }
export function useGetMotionByTransactionHashLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMotionByTransactionHashQuery, GetMotionByTransactionHashQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMotionByTransactionHashQuery, GetMotionByTransactionHashQueryVariables>(GetMotionByTransactionHashDocument, options);
        }
export type GetMotionByTransactionHashQueryHookResult = ReturnType<typeof useGetMotionByTransactionHashQuery>;
export type GetMotionByTransactionHashLazyQueryHookResult = ReturnType<typeof useGetMotionByTransactionHashLazyQuery>;
export type GetMotionByTransactionHashQueryResult = Apollo.QueryResult<GetMotionByTransactionHashQuery, GetMotionByTransactionHashQueryVariables>;
export const GetMotionTimeoutPeriodsDocument = gql`
    query GetMotionTimeoutPeriods($input: GetMotionTimeoutPeriodsInput!) {
  getMotionTimeoutPeriods(input: $input) {
    timeLeftToStake
    timeLeftToVote
    timeLeftToReveal
    timeLeftToEscalate
  }
}
    `;

/**
 * __useGetMotionTimeoutPeriodsQuery__
 *
 * To run a query within a React component, call `useGetMotionTimeoutPeriodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMotionTimeoutPeriodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMotionTimeoutPeriodsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMotionTimeoutPeriodsQuery(baseOptions: Apollo.QueryHookOptions<GetMotionTimeoutPeriodsQuery, GetMotionTimeoutPeriodsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMotionTimeoutPeriodsQuery, GetMotionTimeoutPeriodsQueryVariables>(GetMotionTimeoutPeriodsDocument, options);
      }
export function useGetMotionTimeoutPeriodsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMotionTimeoutPeriodsQuery, GetMotionTimeoutPeriodsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMotionTimeoutPeriodsQuery, GetMotionTimeoutPeriodsQueryVariables>(GetMotionTimeoutPeriodsDocument, options);
        }
export type GetMotionTimeoutPeriodsQueryHookResult = ReturnType<typeof useGetMotionTimeoutPeriodsQuery>;
export type GetMotionTimeoutPeriodsLazyQueryHookResult = ReturnType<typeof useGetMotionTimeoutPeriodsLazyQuery>;
export type GetMotionTimeoutPeriodsQueryResult = Apollo.QueryResult<GetMotionTimeoutPeriodsQuery, GetMotionTimeoutPeriodsQueryVariables>;
export const GetCurrentNetworkInverseFeeDocument = gql`
    query GetCurrentNetworkInverseFee {
  listCurrentNetworkInverseFees(limit: 1) {
    items {
      inverseFee
    }
  }
}
    `;

/**
 * __useGetCurrentNetworkInverseFeeQuery__
 *
 * To run a query within a React component, call `useGetCurrentNetworkInverseFeeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentNetworkInverseFeeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentNetworkInverseFeeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentNetworkInverseFeeQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentNetworkInverseFeeQuery, GetCurrentNetworkInverseFeeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentNetworkInverseFeeQuery, GetCurrentNetworkInverseFeeQueryVariables>(GetCurrentNetworkInverseFeeDocument, options);
      }
export function useGetCurrentNetworkInverseFeeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentNetworkInverseFeeQuery, GetCurrentNetworkInverseFeeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentNetworkInverseFeeQuery, GetCurrentNetworkInverseFeeQueryVariables>(GetCurrentNetworkInverseFeeDocument, options);
        }
export type GetCurrentNetworkInverseFeeQueryHookResult = ReturnType<typeof useGetCurrentNetworkInverseFeeQuery>;
export type GetCurrentNetworkInverseFeeLazyQueryHookResult = ReturnType<typeof useGetCurrentNetworkInverseFeeLazyQuery>;
export type GetCurrentNetworkInverseFeeQueryResult = Apollo.QueryResult<GetCurrentNetworkInverseFeeQuery, GetCurrentNetworkInverseFeeQueryVariables>;
export const GetProfileByEmailDocument = gql`
    query GetProfileByEmail($email: AWSEmail!) {
  getProfileByEmail(email: $email) {
    items {
      id
    }
  }
}
    `;

/**
 * __useGetProfileByEmailQuery__
 *
 * To run a query within a React component, call `useGetProfileByEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileByEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileByEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetProfileByEmailQuery(baseOptions: Apollo.QueryHookOptions<GetProfileByEmailQuery, GetProfileByEmailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileByEmailQuery, GetProfileByEmailQueryVariables>(GetProfileByEmailDocument, options);
      }
export function useGetProfileByEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileByEmailQuery, GetProfileByEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileByEmailQuery, GetProfileByEmailQueryVariables>(GetProfileByEmailDocument, options);
        }
export type GetProfileByEmailQueryHookResult = ReturnType<typeof useGetProfileByEmailQuery>;
export type GetProfileByEmailLazyQueryHookResult = ReturnType<typeof useGetProfileByEmailLazyQuery>;
export type GetProfileByEmailQueryResult = Apollo.QueryResult<GetProfileByEmailQuery, GetProfileByEmailQueryVariables>;
export const GetColonyHistoricRoleRolesDocument = gql`
    query GetColonyHistoricRoleRoles($id: ID!) {
  getColonyHistoricRole(id: $id) {
    role_0
    role_1
    role_2
    role_3
    role_5
    role_6
  }
}
    `;

/**
 * __useGetColonyHistoricRoleRolesQuery__
 *
 * To run a query within a React component, call `useGetColonyHistoricRoleRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetColonyHistoricRoleRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetColonyHistoricRoleRolesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetColonyHistoricRoleRolesQuery(baseOptions: Apollo.QueryHookOptions<GetColonyHistoricRoleRolesQuery, GetColonyHistoricRoleRolesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetColonyHistoricRoleRolesQuery, GetColonyHistoricRoleRolesQueryVariables>(GetColonyHistoricRoleRolesDocument, options);
      }
export function useGetColonyHistoricRoleRolesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetColonyHistoricRoleRolesQuery, GetColonyHistoricRoleRolesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetColonyHistoricRoleRolesQuery, GetColonyHistoricRoleRolesQueryVariables>(GetColonyHistoricRoleRolesDocument, options);
        }
export type GetColonyHistoricRoleRolesQueryHookResult = ReturnType<typeof useGetColonyHistoricRoleRolesQuery>;
export type GetColonyHistoricRoleRolesLazyQueryHookResult = ReturnType<typeof useGetColonyHistoricRoleRolesLazyQuery>;
export type GetColonyHistoricRoleRolesQueryResult = Apollo.QueryResult<GetColonyHistoricRoleRolesQuery, GetColonyHistoricRoleRolesQueryVariables>;
export const GetUserStakesDocument = gql`
    query GetUserStakes($userAddress: ID!, $colonyAddress: ID!) {
  getUserStakes(
    userAddress: $userAddress
    filter: {colonyAddress: {eq: $colonyAddress}}
    limit: 10000
    sortDirection: DESC
  ) {
    items {
      ...UserStake
    }
  }
}
    ${UserStakeFragmentDoc}`;

/**
 * __useGetUserStakesQuery__
 *
 * To run a query within a React component, call `useGetUserStakesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserStakesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserStakesQuery({
 *   variables: {
 *      userAddress: // value for 'userAddress'
 *      colonyAddress: // value for 'colonyAddress'
 *   },
 * });
 */
export function useGetUserStakesQuery(baseOptions: Apollo.QueryHookOptions<GetUserStakesQuery, GetUserStakesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserStakesQuery, GetUserStakesQueryVariables>(GetUserStakesDocument, options);
      }
export function useGetUserStakesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserStakesQuery, GetUserStakesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserStakesQuery, GetUserStakesQueryVariables>(GetUserStakesDocument, options);
        }
export type GetUserStakesQueryHookResult = ReturnType<typeof useGetUserStakesQuery>;
export type GetUserStakesLazyQueryHookResult = ReturnType<typeof useGetUserStakesLazyQuery>;
export type GetUserStakesQueryResult = Apollo.QueryResult<GetUserStakesQuery, GetUserStakesQueryVariables>;
export const GetTokenByAddressDocument = gql`
    query GetTokenByAddress($address: ID!) {
  getTokenByAddress(id: $address) {
    items {
      ...Token
    }
  }
}
    ${TokenFragmentDoc}`;

/**
 * __useGetTokenByAddressQuery__
 *
 * To run a query within a React component, call `useGetTokenByAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTokenByAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTokenByAddressQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useGetTokenByAddressQuery(baseOptions: Apollo.QueryHookOptions<GetTokenByAddressQuery, GetTokenByAddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTokenByAddressQuery, GetTokenByAddressQueryVariables>(GetTokenByAddressDocument, options);
      }
export function useGetTokenByAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTokenByAddressQuery, GetTokenByAddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTokenByAddressQuery, GetTokenByAddressQueryVariables>(GetTokenByAddressDocument, options);
        }
export type GetTokenByAddressQueryHookResult = ReturnType<typeof useGetTokenByAddressQuery>;
export type GetTokenByAddressLazyQueryHookResult = ReturnType<typeof useGetTokenByAddressLazyQuery>;
export type GetTokenByAddressQueryResult = Apollo.QueryResult<GetTokenByAddressQuery, GetTokenByAddressQueryVariables>;
export const GetTokenFromEverywhereDocument = gql`
    query GetTokenFromEverywhere($input: TokenFromEverywhereArguments!) {
  getTokenFromEverywhere(input: $input) {
    items {
      ...Token
    }
  }
}
    ${TokenFragmentDoc}`;

/**
 * __useGetTokenFromEverywhereQuery__
 *
 * To run a query within a React component, call `useGetTokenFromEverywhereQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTokenFromEverywhereQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTokenFromEverywhereQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetTokenFromEverywhereQuery(baseOptions: Apollo.QueryHookOptions<GetTokenFromEverywhereQuery, GetTokenFromEverywhereQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTokenFromEverywhereQuery, GetTokenFromEverywhereQueryVariables>(GetTokenFromEverywhereDocument, options);
      }
export function useGetTokenFromEverywhereLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTokenFromEverywhereQuery, GetTokenFromEverywhereQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTokenFromEverywhereQuery, GetTokenFromEverywhereQueryVariables>(GetTokenFromEverywhereDocument, options);
        }
export type GetTokenFromEverywhereQueryHookResult = ReturnType<typeof useGetTokenFromEverywhereQuery>;
export type GetTokenFromEverywhereLazyQueryHookResult = ReturnType<typeof useGetTokenFromEverywhereLazyQuery>;
export type GetTokenFromEverywhereQueryResult = Apollo.QueryResult<GetTokenFromEverywhereQuery, GetTokenFromEverywhereQueryVariables>;
export const GetUserTokenBalanceDocument = gql`
    query GetUserTokenBalance($input: GetUserTokenBalanceInput!) {
  getUserTokenBalance(input: $input) {
    ...UserTokenBalanceData
  }
}
    ${UserTokenBalanceDataFragmentDoc}`;

/**
 * __useGetUserTokenBalanceQuery__
 *
 * To run a query within a React component, call `useGetUserTokenBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserTokenBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserTokenBalanceQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetUserTokenBalanceQuery(baseOptions: Apollo.QueryHookOptions<GetUserTokenBalanceQuery, GetUserTokenBalanceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserTokenBalanceQuery, GetUserTokenBalanceQueryVariables>(GetUserTokenBalanceDocument, options);
      }
export function useGetUserTokenBalanceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserTokenBalanceQuery, GetUserTokenBalanceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserTokenBalanceQuery, GetUserTokenBalanceQueryVariables>(GetUserTokenBalanceDocument, options);
        }
export type GetUserTokenBalanceQueryHookResult = ReturnType<typeof useGetUserTokenBalanceQuery>;
export type GetUserTokenBalanceLazyQueryHookResult = ReturnType<typeof useGetUserTokenBalanceLazyQuery>;
export type GetUserTokenBalanceQueryResult = Apollo.QueryResult<GetUserTokenBalanceQuery, GetUserTokenBalanceQueryVariables>;
export const GetUserTransactionsDocument = gql`
    query GetUserTransactions($userAddress: ID!, $transactionsOlderThan: String, $nextToken: String, $limit: Int) {
  getTransactionsByUser(
    from: $userAddress
    createdAt: {lt: $transactionsOlderThan}
    filter: {deleted: {ne: true}}
    sortDirection: DESC
    nextToken: $nextToken
    limit: $limit
  ) {
    items {
      ...Transaction
    }
    nextToken
  }
}
    ${TransactionFragmentDoc}`;

/**
 * __useGetUserTransactionsQuery__
 *
 * To run a query within a React component, call `useGetUserTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserTransactionsQuery({
 *   variables: {
 *      userAddress: // value for 'userAddress'
 *      transactionsOlderThan: // value for 'transactionsOlderThan'
 *      nextToken: // value for 'nextToken'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetUserTransactionsQuery(baseOptions: Apollo.QueryHookOptions<GetUserTransactionsQuery, GetUserTransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserTransactionsQuery, GetUserTransactionsQueryVariables>(GetUserTransactionsDocument, options);
      }
export function useGetUserTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserTransactionsQuery, GetUserTransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserTransactionsQuery, GetUserTransactionsQueryVariables>(GetUserTransactionsDocument, options);
        }
export type GetUserTransactionsQueryHookResult = ReturnType<typeof useGetUserTransactionsQuery>;
export type GetUserTransactionsLazyQueryHookResult = ReturnType<typeof useGetUserTransactionsLazyQuery>;
export type GetUserTransactionsQueryResult = Apollo.QueryResult<GetUserTransactionsQuery, GetUserTransactionsQueryVariables>;
export const GetTransactionsByGroupDocument = gql`
    query GetTransactionsByGroup($from: ID!, $groupId: ID!) {
  getTransactionsByUserAndGroup(groupId: $groupId, from: {eq: $from}) {
    items {
      ...Transaction
    }
  }
}
    ${TransactionFragmentDoc}`;

/**
 * __useGetTransactionsByGroupQuery__
 *
 * To run a query within a React component, call `useGetTransactionsByGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionsByGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionsByGroupQuery({
 *   variables: {
 *      from: // value for 'from'
 *      groupId: // value for 'groupId'
 *   },
 * });
 */
export function useGetTransactionsByGroupQuery(baseOptions: Apollo.QueryHookOptions<GetTransactionsByGroupQuery, GetTransactionsByGroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransactionsByGroupQuery, GetTransactionsByGroupQueryVariables>(GetTransactionsByGroupDocument, options);
      }
export function useGetTransactionsByGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransactionsByGroupQuery, GetTransactionsByGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransactionsByGroupQuery, GetTransactionsByGroupQueryVariables>(GetTransactionsByGroupDocument, options);
        }
export type GetTransactionsByGroupQueryHookResult = ReturnType<typeof useGetTransactionsByGroupQuery>;
export type GetTransactionsByGroupLazyQueryHookResult = ReturnType<typeof useGetTransactionsByGroupLazyQuery>;
export type GetTransactionsByGroupQueryResult = Apollo.QueryResult<GetTransactionsByGroupQuery, GetTransactionsByGroupQueryVariables>;
export const GetTransactionDocument = gql`
    query GetTransaction($id: ID!) {
  getTransaction(id: $id) {
    ...Transaction
  }
}
    ${TransactionFragmentDoc}`;

/**
 * __useGetTransactionQuery__
 *
 * To run a query within a React component, call `useGetTransactionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTransactionQuery(baseOptions: Apollo.QueryHookOptions<GetTransactionQuery, GetTransactionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransactionQuery, GetTransactionQueryVariables>(GetTransactionDocument, options);
      }
export function useGetTransactionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransactionQuery, GetTransactionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransactionQuery, GetTransactionQueryVariables>(GetTransactionDocument, options);
        }
export type GetTransactionQueryHookResult = ReturnType<typeof useGetTransactionQuery>;
export type GetTransactionLazyQueryHookResult = ReturnType<typeof useGetTransactionLazyQuery>;
export type GetTransactionQueryResult = Apollo.QueryResult<GetTransactionQuery, GetTransactionQueryVariables>;
export const GetUserByAddressDocument = gql`
    query GetUserByAddress($address: ID!) {
  getUserByAddress(id: $address) {
    items {
      ...User
    }
  }
}
    ${UserFragmentDoc}`;

/**
 * __useGetUserByAddressQuery__
 *
 * To run a query within a React component, call `useGetUserByAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByAddressQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useGetUserByAddressQuery(baseOptions: Apollo.QueryHookOptions<GetUserByAddressQuery, GetUserByAddressQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByAddressQuery, GetUserByAddressQueryVariables>(GetUserByAddressDocument, options);
      }
export function useGetUserByAddressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByAddressQuery, GetUserByAddressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByAddressQuery, GetUserByAddressQueryVariables>(GetUserByAddressDocument, options);
        }
export type GetUserByAddressQueryHookResult = ReturnType<typeof useGetUserByAddressQuery>;
export type GetUserByAddressLazyQueryHookResult = ReturnType<typeof useGetUserByAddressLazyQuery>;
export type GetUserByAddressQueryResult = Apollo.QueryResult<GetUserByAddressQuery, GetUserByAddressQueryVariables>;
export const GetUserReputationDocument = gql`
    query GetUserReputation($input: GetUserReputationInput!) {
  getUserReputation(input: $input)
}
    `;

/**
 * __useGetUserReputationQuery__
 *
 * To run a query within a React component, call `useGetUserReputationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserReputationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserReputationQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetUserReputationQuery(baseOptions: Apollo.QueryHookOptions<GetUserReputationQuery, GetUserReputationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserReputationQuery, GetUserReputationQueryVariables>(GetUserReputationDocument, options);
      }
export function useGetUserReputationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserReputationQuery, GetUserReputationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserReputationQuery, GetUserReputationQueryVariables>(GetUserReputationDocument, options);
        }
export type GetUserReputationQueryHookResult = ReturnType<typeof useGetUserReputationQuery>;
export type GetUserReputationLazyQueryHookResult = ReturnType<typeof useGetUserReputationLazyQuery>;
export type GetUserReputationQueryResult = Apollo.QueryResult<GetUserReputationQuery, GetUserReputationQueryVariables>;
export const GetUserByNameDocument = gql`
    query GetUserByName($name: String!) {
  getProfileByUsername(displayName: $name) {
    items {
      user {
        ...User
      }
    }
  }
}
    ${UserFragmentDoc}`;

/**
 * __useGetUserByNameQuery__
 *
 * To run a query within a React component, call `useGetUserByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetUserByNameQuery(baseOptions: Apollo.QueryHookOptions<GetUserByNameQuery, GetUserByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByNameQuery, GetUserByNameQueryVariables>(GetUserByNameDocument, options);
      }
export function useGetUserByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByNameQuery, GetUserByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByNameQuery, GetUserByNameQueryVariables>(GetUserByNameDocument, options);
        }
export type GetUserByNameQueryHookResult = ReturnType<typeof useGetUserByNameQuery>;
export type GetUserByNameLazyQueryHookResult = ReturnType<typeof useGetUserByNameLazyQuery>;
export type GetUserByNameQueryResult = Apollo.QueryResult<GetUserByNameQuery, GetUserByNameQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers($filter: ModelUserFilterInput, $limit: Int) {
  listUsers(filter: $filter, limit: $limit) {
    items {
      ...User
    }
  }
}
    ${UserFragmentDoc}`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetCurrentExtensionsVersionsDocument = gql`
    query GetCurrentExtensionsVersions {
  listCurrentVersions {
    items {
      extensionHash: key
      version
    }
  }
}
    `;

/**
 * __useGetCurrentExtensionsVersionsQuery__
 *
 * To run a query within a React component, call `useGetCurrentExtensionsVersionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentExtensionsVersionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentExtensionsVersionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentExtensionsVersionsQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentExtensionsVersionsQuery, GetCurrentExtensionsVersionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentExtensionsVersionsQuery, GetCurrentExtensionsVersionsQueryVariables>(GetCurrentExtensionsVersionsDocument, options);
      }
export function useGetCurrentExtensionsVersionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentExtensionsVersionsQuery, GetCurrentExtensionsVersionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentExtensionsVersionsQuery, GetCurrentExtensionsVersionsQueryVariables>(GetCurrentExtensionsVersionsDocument, options);
        }
export type GetCurrentExtensionsVersionsQueryHookResult = ReturnType<typeof useGetCurrentExtensionsVersionsQuery>;
export type GetCurrentExtensionsVersionsLazyQueryHookResult = ReturnType<typeof useGetCurrentExtensionsVersionsLazyQuery>;
export type GetCurrentExtensionsVersionsQueryResult = Apollo.QueryResult<GetCurrentExtensionsVersionsQuery, GetCurrentExtensionsVersionsQueryVariables>;
export const GetCurrentExtensionVersionDocument = gql`
    query GetCurrentExtensionVersion($extensionHash: String!) {
  getCurrentVersionByKey(key: $extensionHash) {
    items {
      extensionHash: key
      version
    }
  }
}
    `;

/**
 * __useGetCurrentExtensionVersionQuery__
 *
 * To run a query within a React component, call `useGetCurrentExtensionVersionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentExtensionVersionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentExtensionVersionQuery({
 *   variables: {
 *      extensionHash: // value for 'extensionHash'
 *   },
 * });
 */
export function useGetCurrentExtensionVersionQuery(baseOptions: Apollo.QueryHookOptions<GetCurrentExtensionVersionQuery, GetCurrentExtensionVersionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentExtensionVersionQuery, GetCurrentExtensionVersionQueryVariables>(GetCurrentExtensionVersionDocument, options);
      }
export function useGetCurrentExtensionVersionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentExtensionVersionQuery, GetCurrentExtensionVersionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentExtensionVersionQuery, GetCurrentExtensionVersionQueryVariables>(GetCurrentExtensionVersionDocument, options);
        }
export type GetCurrentExtensionVersionQueryHookResult = ReturnType<typeof useGetCurrentExtensionVersionQuery>;
export type GetCurrentExtensionVersionLazyQueryHookResult = ReturnType<typeof useGetCurrentExtensionVersionLazyQuery>;
export type GetCurrentExtensionVersionQueryResult = Apollo.QueryResult<GetCurrentExtensionVersionQuery, GetCurrentExtensionVersionQueryVariables>;
export const GetCurrentColonyVersionDocument = gql`
    query GetCurrentColonyVersion {
  getCurrentVersionByKey(key: "colony") {
    items {
      version
    }
  }
}
    `;

/**
 * __useGetCurrentColonyVersionQuery__
 *
 * To run a query within a React component, call `useGetCurrentColonyVersionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentColonyVersionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentColonyVersionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentColonyVersionQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentColonyVersionQuery, GetCurrentColonyVersionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentColonyVersionQuery, GetCurrentColonyVersionQueryVariables>(GetCurrentColonyVersionDocument, options);
      }
export function useGetCurrentColonyVersionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentColonyVersionQuery, GetCurrentColonyVersionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentColonyVersionQuery, GetCurrentColonyVersionQueryVariables>(GetCurrentColonyVersionDocument, options);
        }
export type GetCurrentColonyVersionQueryHookResult = ReturnType<typeof useGetCurrentColonyVersionQuery>;
export type GetCurrentColonyVersionLazyQueryHookResult = ReturnType<typeof useGetCurrentColonyVersionLazyQuery>;
export type GetCurrentColonyVersionQueryResult = Apollo.QueryResult<GetCurrentColonyVersionQuery, GetCurrentColonyVersionQueryVariables>;