import { Extension } from '@colony/colony-js';

import { useColonyContext } from '~context/ColonyContext';
import { useGetExtensionInstallationsCountQuery } from '~gql';

const useActiveInstalls = (extensionId: string) => {
  const { colony } = useColonyContext();

  const { data } = useGetExtensionInstallationsCountQuery({
    variables: { id: colony.chainMetadata.chainId.toString() ?? '' },
  });

  const {
    oneTxPayment,
    reputationWeighted,
    stagedExpenditure,
    stakedExpenditure,
    streamingPayments,
  } = data?.getExtensionInstallationsCount ?? {};

  const extensionIdDBKeyMap = {
    [Extension.OneTxPayment]: oneTxPayment,
    [Extension.VotingReputation]: reputationWeighted,
    [Extension.StakedExpenditure]: stakedExpenditure,
    [Extension.StagedExpenditure]: stagedExpenditure,
    [Extension.StreamingPayments]: streamingPayments,
  };

  return extensionIdDBKeyMap[extensionId] ?? 0;
};

export default useActiveInstalls;
