import { PencilCircle, Image, FileText } from '@phosphor-icons/react';
import React from 'react';
import { defineMessages } from 'react-intl';

import Tooltip from '~shared/Extensions/Tooltip/index.ts';
import { type ColonyAction } from '~types/graphql.ts';
import { formatText } from '~utils/intl.ts';
import Avatar from '~v5/shared/Avatar/Avatar.tsx';
import UserPopover from '~v5/shared/UserPopover/index.ts';

import { DEFAULT_TOOLTIP_POSITION, ICON_SIZE } from '../../consts.ts';
import {
  ActionDataGrid,
  ActionSubtitle,
  ActionTitle,
} from '../Blocks/index.ts';
import {
  ActionTypeRow,
  CreatedInRow,
  DecisionMethodRow,
  DescriptionRow,
  SocialLinksTable,
} from '../rows/index.ts';

const displayName = 'v5.common.CompletedAction.partials.EditColonyDetails';

interface EditColonyDetailsProps {
  action: ColonyAction;
}

const MSG = defineMessages({
  defaultTitle: {
    id: `${displayName}.defaultTitle`,
    defaultMessage: "Updating the Colony's details",
  },
  subtitle: {
    id: `${displayName}.subtitle`,
    defaultMessage: 'Colony details updated by {user}',
  },
});

const EditColonyDetails = ({ action }: EditColonyDetailsProps) => {
  const { customTitle = formatText(MSG.defaultTitle) } = action?.metadata || {};
  const { initiatorUser } = action;
  const actionColonyMetadata =
    action.pendingColonyMetadata || action.colony.metadata;

  return (
    <>
      <ActionTitle>{customTitle}</ActionTitle>
      <ActionSubtitle>
        {formatText(MSG.subtitle, {
          user: initiatorUser ? (
            <UserPopover
              userName={initiatorUser.profile?.displayName}
              walletAddress={initiatorUser.walletAddress}
              user={initiatorUser}
              withVerifiedBadge={false}
            >
              {initiatorUser.profile?.displayName}
            </UserPopover>
          ) : null,
        })}
      </ActionSubtitle>
      <ActionDataGrid>
        <ActionTypeRow actionType={action.type} />

        <div>
          <Tooltip
            placement={DEFAULT_TOOLTIP_POSITION}
            tooltipContent={formatText({
              id: 'actionSidebar.tooltip.editColony.colonyName',
            })}
          >
            <div className="flex items-center gap-2">
              <PencilCircle size={ICON_SIZE} />
              <span>{formatText({ id: 'actionSidebar.colonyName' })}</span>
            </div>
          </Tooltip>
        </div>
        <div>
          <span>{actionColonyMetadata?.displayName}</span>
        </div>

        <div>
          <Tooltip
            placement={DEFAULT_TOOLTIP_POSITION}
            tooltipContent={formatText({
              id: 'actionSidebar.tooltip.editColony.colonyLogo',
            })}
          >
            <div className="flex items-center gap-2">
              <Image size={ICON_SIZE} />
              <span>{formatText({ id: 'actionSidebar.colonyLogo' })}</span>
            </div>
          </Tooltip>
        </div>
        <Avatar
          avatar={actionColonyMetadata?.avatar}
          seed={action.colonyAddress.toLowerCase()}
          title={actionColonyMetadata?.displayName}
          size="xs"
        />

        <div>
          <Tooltip
            placement={DEFAULT_TOOLTIP_POSITION}
            tooltipContent={formatText({
              id: 'actionSidebar.tooltip.editColony.colonyDescription',
            })}
          >
            <div className="flex items-center gap-2">
              <FileText size={ICON_SIZE} />
              <span>
                {formatText({ id: 'actionSidebar.colonyDescription' })}
              </span>
            </div>
          </Tooltip>
        </div>

        <div>
          <span>{actionColonyMetadata?.description}</span>
        </div>

        <DecisionMethodRow isMotion={action.isMotion || false} />

        {action.motionData?.motionDomain.metadata && (
          <CreatedInRow
            motionDomainMetadata={action.motionData.motionDomain.metadata}
          />
        )}
        {/* @TODO implement social links table display */}
      </ActionDataGrid>
      {action.annotation?.message && (
        <DescriptionRow description={action.annotation.message} />
      )}
      <SocialLinksTable socialLinks={actionColonyMetadata?.externalLinks} />
    </>
  );
};

EditColonyDetails.displayName = displayName;
export default EditColonyDetails;
