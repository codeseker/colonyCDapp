import React from 'react';
import { useGetColonyAction } from '~common/ColonyActions';
import { ColonyActionType } from '~gql';
import { useColonyContext } from '~hooks';
import SpinnerLoader from '~shared/Preloaders/SpinnerLoader';
import { getExtendedActionType } from '~utils/colonyActions';
import MintTokens from './partials/MintTokens';
import SimplePayment from './partials/SimplePayment';
import TransferFunds from './partials/TransferFunds';

interface CompletedActionProps {
  transactionId: string;
}

const displayName = 'v5.common.CompletedAction';

const CompletedAction = ({ transactionId }: CompletedActionProps) => {
  const { colony } = useColonyContext();
  const { action, loadingAction } = useGetColonyAction(transactionId);
  // console.log('lights camera', action);

  if (loadingAction || !action || !colony) {
    return <SpinnerLoader appearance={{ size: 'medium' }} />;
  }

  const actionType = getExtendedActionType(action, colony.metadata);

  const getActionContent = () => {
    switch (actionType) {
      case ColonyActionType.Payment:
        return <SimplePayment action={action} />;
      case ColonyActionType.MintTokens:
        return <MintTokens action={action} />;
      case ColonyActionType.MoveFunds:
        return <TransferFunds action={action} />;
      default:
        console.warn('Unsupported action display', action);
        return <div>Not implemented yet</div>;
    }
  };

  return getActionContent();
};

CompletedAction.displayName = displayName;
export default CompletedAction;
