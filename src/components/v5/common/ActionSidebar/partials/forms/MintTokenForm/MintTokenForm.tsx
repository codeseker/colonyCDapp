import React, { type FC } from 'react';

import { useColonyContext } from '~context/ColonyContext.tsx';
import { formatText } from '~utils/intl.ts';
import ActionFormRow from '~v5/common/ActionFormRow/index.ts';
import AmountField from '~v5/common/ActionSidebar/partials/AmountField/index.ts';
import { FormCardSelect } from '~v5/common/Fields/CardSelect/index.ts';

import { useDecisionMethods } from '../../../hooks/index.ts';
import { type ActionFormBaseProps } from '../../../types.ts';
import CreatedInRow from '../../CreatedInRow/CreatedInRow.tsx';
import DescriptionRow from '../../DescriptionRow/index.ts';

import { useMintToken } from './hooks.ts';

const displayName = 'v5.common.ActionSidebar.partials.MintTokenForm';

const MintTokenForm: FC<ActionFormBaseProps> = ({ getFormOptions }) => {
  const { decisionMethods } = useDecisionMethods();
  const {
    colony: { nativeToken },
  } = useColonyContext();

  useMintToken(getFormOptions);

  return (
    <>
      <ActionFormRow
        icon="coins"
        fieldName="amount"
        title={formatText({ id: 'actionSidebar.value' })}
        tooltips={{
          label: {
            tooltipContent: formatText({
              id: 'actionSidebar.tooltip.mintTokens.amount',
            }),
          },
        }}
      >
        <AmountField
          name="amount"
          maxWidth={270}
          tokenAddress={nativeToken.tokenAddress}
        />
      </ActionFormRow>
      <ActionFormRow
        icon="scales"
        fieldName="decisionMethod"
        tooltips={{
          label: {
            tooltipContent: formatText({
              id: 'actionSidebar.tooltip.decisionMethod',
            }),
          },
        }}
        title={formatText({ id: 'actionSidebar.decisionMethod' })}
      >
        <FormCardSelect
          name="decisionMethod"
          options={decisionMethods}
          title={formatText({ id: 'actionSidebar.availableDecisions' })}
          placeholder={formatText({
            id: 'actionSidebar.decisionMethod.placeholder',
          })}
        />
      </ActionFormRow>
      <CreatedInRow readonly />
      <DescriptionRow />
    </>
  );
};

MintTokenForm.displayName = displayName;

export default MintTokenForm;
