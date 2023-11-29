import React, { FC } from 'react';

import FormButtonRadioButtons from '~v5/common/Fields/RadioButtons/ButtonRadioButtons/FormButtonRadioButtons';
import { ActionTypes } from '~redux';
import { MotionVote } from '~utils/colonyMotions';
import { formatText } from '~utils/intl';
import { ActionForm } from '~shared/Fields';
import Button from '~v5/shared/Button';
import MenuWithStatusText from '~v5/shared/MenuWithStatusText';
import ProgressBar from '~v5/shared/ProgressBar';

import MotionBadge from '../../partials/MotionBadge/MotionBadge';
import { useVotingStep } from './hooks';
import DescriptionList from './partials/DescriptionList';
import { renderVoteRadioButtons } from './utils';
import { VotingStepProps } from './types';

const displayName =
  'v5.common.ActionSidebar.partials.motions.MotionSimplePayment.steps.VotingStep';

const VotingStep: FC<VotingStepProps> = ({
  actionData,
  startPollingAction,
  stopPollingAction,
  transactionId,
}) => {
  const {
    currentReputationPercent,
    currentUserVote,
    handleSuccess,
    hasUserVoted,
    items,
    thresholdPercent,
    validationSchema,
    transform,
  } = useVotingStep(
    actionData,
    startPollingAction,
    stopPollingAction,
    transactionId,
  );

  const isSupportVote = currentUserVote === MotionVote.Yay;

  return (
    <MenuWithStatusText
      statusTextSectionProps={{
        status: 'info',
        children: formatText(
          { id: 'motion.votingStep.statusText' },
          { thresholdPercent },
        ),
        textClassName: 'text-4',
        iconAlignment: 'top',
        content: (
          <ProgressBar
            progress={currentReputationPercent || 0}
            threshold={thresholdPercent}
            additionalText={formatText({
              id: 'motion.votingStep.additionalText',
            })}
          />
        ),
      }}
      sections={[
        {
          key: '1',
          content: (
            <ActionForm
              actionType={ActionTypes.MOTION_VOTE}
              transform={transform}
              onSuccess={handleSuccess}
              validationSchema={validationSchema}
              defaultValues={{ vote: undefined }}
            >
              <div className="mb-6 pb-6 border-b border-gray-200">
                {hasUserVoted && currentUserVote ? (
                  <div className="mb-3">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <h4 className="text-2">
                        {formatText({ id: 'motion.votingStep.voted' })}
                      </h4>
                      <MotionBadge
                        status={isSupportVote ? 'support' : 'oppose'}
                      />
                    </div>
                    <h4 className="text-2 mb-1">
                      {formatText({ id: 'motion.votingStep.changeVote' })}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {formatText({
                        id: 'motion.votingStep.changeVoteDescription',
                      })}
                    </p>
                  </div>
                ) : (
                  <h4 className="text-1 mb-3 text-center">
                    {formatText({ id: 'motion.votingStep.title' })}
                  </h4>
                )}
                <FormButtonRadioButtons
                  items={renderVoteRadioButtons(
                    hasUserVoted,
                    currentUserVote || 0,
                  )}
                  name="vote"
                />
              </div>
              <DescriptionList items={items} className="mb-6" />
              <Button
                mode="primarySolid"
                isFullSize
                type="submit"
                text={formatText({ id: 'motion.votingStep.submit' })}
              />
            </ActionForm>
          ),
        },
      ]}
    />
  );
};

VotingStep.displayName = displayName;

export default VotingStep;
