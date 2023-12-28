import { MotionState } from '@colony/colony-js';
import { formatRelative } from 'date-fns';
import { defineMessages } from 'react-intl';

import { ColonyMotion } from '~types';
import { formatText } from '~utils/intl';

const displayName = 'v5.common.ActionSidebar.partials.Motions';

const MSG = defineMessages({
  stakingStarted: {
    id: `${displayName}.stakingStarted`,
    defaultMessage: 'Staking period started. {timestamp}',
  },
  stakingFullyOpposed: {
    id: `${displayName}.stakingFullyOpposed`,
    defaultMessage:
      'Action is fully opposed. As long it is not also fully supported, it will fail. {timestamp}',
  },
  stakingFullySupported: {
    id: `${displayName}.stakingFullySupported`,
    defaultMessage:
      'Action is fully supported. As long it is not also fully opposed, it will pass and can be finalized. {timestamp}',
  },
  stakingFullyOpposedOutcome: {
    id: `${displayName}.stakingFullyOpposedOutcome`,
    defaultMessage: 'Staking period ended fully opposed. {timestamp}',
  },
  stakingFullySupportedOutcome: {
    id: `${displayName}.stakingFullySupportedOutcome`,
    defaultMessage: 'Staking period ended fully supported. {timestamp}',
  },
  stakingNoSidesOutcome: {
    id: `${displayName}.stakingNoSidesOutcome`,
    defaultMessage: 'Staking period ended not fully supported.',
  },
  stakingBothSidesOutcome: {
    id: `${displayName}.stakingBothSidesOutcome`,
    defaultMessage:
      'Staking period ended fully supported and fully opposed, and went to a vote. {timestamp}',
  },
  votingNotStarted: {
    id: `${displayName}.votingNotStarted`,
    defaultMessage:
      'Voting will start if action is fully supported and fully opposed.',
  },
  votingEnded: {
    id: `${displayName}.votingEnded`,
    defaultMessage:
      'Voting period ended with {votersCount} voters. {timestamp}',
  },
  votingStarted: {
    id: `${displayName}.votingStarted`,
    defaultMessage: 'Voting period started. {timestamp}',
  },
});

export const getStakingStepTooltipText = (
  motionState: MotionState | undefined,
  motionData: ColonyMotion | undefined | null,
) => {
  const {
    motionStakes,
    createdAt: motionCreatedAt,
    motionStateHistory,
  } = motionData || {};
  const { percentage } = motionStakes || {};
  const { naySideFullyStakedAt, yaySideFullyStakedAt } =
    motionStateHistory || {};
  const { nay, yay } = percentage || {};

  const formatttedMotionCreatedAt = motionCreatedAt
    ? formatRelative(new Date(motionCreatedAt), new Date())
    : '';
  const formattedNaySideFullyStakedAt = naySideFullyStakedAt
    ? formatRelative(new Date(naySideFullyStakedAt), new Date())
    : '';
  const formattedYaySideFullyStakedAt = yaySideFullyStakedAt
    ? formatRelative(new Date(yaySideFullyStakedAt), new Date())
    : '';

  const objectingStakesPercentageValue = Number(nay) || 0;
  const supportingStakesPercentageValue = Number(yay) || 0;

  const isFullyOpposed = objectingStakesPercentageValue === 100;
  const isFullySupported = supportingStakesPercentageValue === 100;

  const isFullyStaked = isFullyOpposed && isFullySupported;

  if (motionState === MotionState.Staking) {
    if (!(isFullyOpposed || isFullyStaked)) {
      return formatText(MSG.stakingStarted, {
        timestamp: formatttedMotionCreatedAt,
      });
    }

    if (isFullyOpposed) {
      return formatText(MSG.stakingFullyOpposed, {
        timestamp: formattedNaySideFullyStakedAt,
      });
    }

    if (isFullySupported) {
      return formatText(MSG.stakingFullySupported, {
        timestamp: formattedYaySideFullyStakedAt,
      });
    }
  }

  if (isFullyStaked) {
    return formatText(MSG.stakingBothSidesOutcome, {
      timestamp:
        Number(naySideFullyStakedAt) > Number(yaySideFullyStakedAt)
          ? formattedNaySideFullyStakedAt
          : formattedYaySideFullyStakedAt,
    });
  }

  if (isFullyOpposed) {
    return formatText(MSG.stakingFullyOpposedOutcome, {
      timestamp: formattedNaySideFullyStakedAt,
    });
  }

  if (isFullySupported) {
    return formatText(MSG.stakingFullySupportedOutcome, {
      timestamp: formattedYaySideFullyStakedAt,
    });
  }

  return formatText(MSG.stakingNoSidesOutcome);
};

export const getVotingStepTooltipText = (
  motionState: MotionState | undefined = MotionState.Null,
  motionData: ColonyMotion | undefined | null,
) => {
  const { motionStateHistory, voterRecord } = motionData || {};
  const { naySideFullyStakedAt, yaySideFullyStakedAt, allVotesSubmittedAt } =
    motionStateHistory || {};

  const formattedNaySideFullyStakedAt = naySideFullyStakedAt
    ? formatRelative(new Date(naySideFullyStakedAt), new Date())
    : '';
  const formattedYaySideFullyStakedAt = yaySideFullyStakedAt
    ? formatRelative(new Date(yaySideFullyStakedAt), new Date())
    : '';
  const formattedAllVotesSubmittedAt = allVotesSubmittedAt
    ? formatRelative(new Date(allVotesSubmittedAt), new Date())
    : '';

  if (motionState < MotionState.Submit) {
    return formatText(MSG.votingNotStarted);
  }

  if (motionState === MotionState.Submit) {
    return formatText(MSG.votingStarted, {
      timestamp:
        Number(naySideFullyStakedAt) > Number(yaySideFullyStakedAt)
          ? formattedNaySideFullyStakedAt
          : formattedYaySideFullyStakedAt,
    });
  }

  return formatText(MSG.votingEnded, {
    timestamp: formattedAllVotesSubmittedAt,
    votersCount: voterRecord?.length || 0,
  });
};
