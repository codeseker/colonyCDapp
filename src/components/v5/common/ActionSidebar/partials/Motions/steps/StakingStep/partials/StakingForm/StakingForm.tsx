import React, { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import moveDecimal from 'move-decimal-point';
import { BigNumber } from 'ethers';

import { useAppContext } from '~hooks';
import { ActionTypes } from '~redux';
import { ActionForm } from '~shared/Fields';
import Numeral from '~shared/Numeral';
import { accordionAnimation } from '~constants/accordionAnimation';
import { formatText } from '~utils/intl';
import { MotionVote } from '~utils/colonyMotions';
import { getTokenDecimalsWithFallback } from '~utils/tokens';
import FormButtonRadioButtons from '~v5/common/Fields/RadioButtons/ButtonRadioButtons/FormButtonRadioButtons';
import Button from '~v5/shared/Button';
import FormFormattedInput from '~v5/common/Fields/InputBase/FormFormattedInput';

import { useMotionContext } from '../../../../partials/MotionProvider/hooks';
import { useStakingForm } from './hooks';
import { StakingFormProps, StakingFormValues } from './types';
import StakingChart from '../StakingChart/StakingChart';
import { getPredictedPercentage } from './helpers';

const displayName =
  'v5.common.ActionSidebar.partials.motions.MotionSimplePayment.steps.StakingStep.partials.StakingForm';

const StakingForm: FC<StakingFormProps> = ({
  userActivatedTokens,
  userInactivatedTokens,
  disableForm,
}) => {
  const { canInteract } = useAppContext();
  const { motionAction } = useMotionContext();

  const thresholdPercentValue = 10;

  const { token, colony, motionData } = motionAction || {};
  const { decimals, symbol } = token || {};
  const { nativeToken } = colony || {};
  const { nativeTokenDecimals, nativeTokenSymbol } = nativeToken || {};
  const tokenSymbol = symbol || nativeTokenSymbol || '';
  const tokenDecimals = decimals || nativeTokenDecimals || 0;

  const { requiredStake, motionStakes, remainingStakes } = motionData;

  const [opposeRemaining, supportRemaining] = remainingStakes || [];

  const userAvailableBalance = BigNumber.from(userActivatedTokens).add(
    userInactivatedTokens,
  );
  const userOpposeRemaining = BigNumber.from(opposeRemaining).gt(
    userAvailableBalance,
  )
    ? userAvailableBalance.toString()
    : opposeRemaining;
  const userSupportRemaining = BigNumber.from(supportRemaining).gt(
    userAvailableBalance,
  )
    ? userAvailableBalance.toString()
    : supportRemaining;

  const { handleSuccess, transform, validationSchema } = useStakingForm();

  const { percentage } = motionStakes;
  const { nay, yay } = percentage;
  const objectingStakesPercentageValue = Number(nay) || 0;
  const supportingStakesPercentageValue = Number(yay) || 0;

  const isFullySupported = supportingStakesPercentageValue === 100;
  const isFullyObjected = objectingStakesPercentageValue === 100;

  return (
    <ActionForm<StakingFormValues>
      defaultValues={
        {
          // amount: '0', // Disable default value
        }
      }
      validationSchema={validationSchema}
      onSuccess={handleSuccess}
      transform={transform}
      actionType={ActionTypes.MOTION_STAKE}
    >
      {({ formState: { isSubmitting, isValid }, getValues, setValue }) => {
        const voteTypeValue = getValues('voteType');
        const amountValue = getValues('amount');

        const predictedPercentage = getPredictedPercentage(
          voteTypeValue,
          amountValue,
          tokenDecimals,
          supportRemaining,
          opposeRemaining,
        );

        return (
          <>
            <StakingChart
              requiredStake={requiredStake}
              tokenDecimals={tokenDecimals}
              tokenSymbol={tokenSymbol}
              chartProps={{
                threshold:
                  supportingStakesPercentageValue < thresholdPercentValue
                    ? thresholdPercentValue
                    : undefined,
                percentageVotesAgainst: objectingStakesPercentageValue,
                percentageVotesFor: supportingStakesPercentageValue,
                predictPercentageVotesAgainst:
                  voteTypeValue === MotionVote.Nay
                    ? predictedPercentage
                    : undefined,
                predictPercentageVotesFor:
                  voteTypeValue === MotionVote.Yay
                    ? predictedPercentage
                    : undefined,
                className: 'mb-6',
              }}
            />
            <div>
              {canInteract && (
                <FormButtonRadioButtons
                  name="voteType"
                  allowUnselect={!isFullySupported && !isFullyObjected}
                  items={[
                    {
                      label: formatText({ id: 'motion.oppose' }),
                      id: 'oppose',
                      value: MotionVote.Nay,
                      colorClassName: 'text-negative-300',
                      checkedColorClassName:
                        'bg-negative-400 border-negative-400',
                      iconClassName: 'text-negative-400',
                      hoverColorClassName:
                        'md:hover:text-negative-400 md:hover:border-negative-400',
                      iconName: 'thumbs-down',
                      disabled: isFullyObjected,
                    },
                    {
                      label: formatText({ id: 'motion.support' }),
                      id: 'support',
                      value: MotionVote.Yay,
                      colorClassName: 'text-purple-200',
                      checkedColorClassName: 'bg-purple-400 border-purple-400',
                      iconClassName: 'text-purple-400',
                      hoverColorClassName:
                        'md:hover:text-purple-400 md:hover:border-purple-400',
                      iconName: 'thumbs-up',
                      disabled: isFullySupported,
                    },
                  ]}
                  disabled={disableForm}
                />
              )}
            </div>
            <AnimatePresence>
              {voteTypeValue !== undefined && (
                <motion.div
                  key="accordion-content"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={accordionAnimation}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="mt-6"
                >
                  <label
                    htmlFor="amount-field"
                    className="flex justify-between items-center gap-x-4 flex-wrap mb-2"
                  >
                    <span className="text-1 text-gray-900">
                      {formatText({ id: 'motion.staking.input.label' })}
                    </span>
                    <span className="text-sm text-gray-600">
                      {formatText(
                        { id: 'motion.staking.input.label.balance' },
                        {
                          balance: (
                            <Numeral
                              value={userAvailableBalance}
                              suffix={tokenSymbol}
                              decimals={tokenDecimals}
                            />
                          ),
                        },
                      )}
                    </span>
                  </label>
                  <FormFormattedInput
                    id="amount-field"
                    name="amount"
                    placeholder="0"
                    options={{
                      numeral: true,
                      numeralDecimalScale:
                        getTokenDecimalsWithFallback(tokenDecimals),
                      numeralPositiveOnly: true,
                      rawValueTrimPrefix: true,
                      tailPrefix: true,
                    }}
                    buttonProps={{
                      label: formatText({ id: 'button.max' }),
                      onClick: () => {
                        setValue(
                          'amount',
                          voteTypeValue === MotionVote.Yay
                            ? moveDecimal(
                                userSupportRemaining,
                                -getTokenDecimalsWithFallback(tokenDecimals),
                              )
                            : moveDecimal(
                                userOpposeRemaining,
                                -getTokenDecimalsWithFallback(tokenDecimals),
                              ),
                          {
                            shouldTouch: true,
                            shouldValidate: true,
                            shouldDirty: true,
                          },
                        );
                      },
                    }}
                    wrapperClassName="mb-6"
                  />
                  <Button
                    isFullSize
                    disabled={isSubmitting || !isValid}
                    type="submit"
                  >
                    {formatText({ id: 'motion.staking.button.submit' })}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        );
      }}
    </ActionForm>
  );
};

StakingForm.displayName = displayName;

export default StakingForm;
