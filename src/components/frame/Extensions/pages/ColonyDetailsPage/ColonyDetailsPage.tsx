import React, { FC } from 'react';
import clsx from 'clsx';
import { defineMessages, useIntl } from 'react-intl';

import { ACTION } from '~constants/actions';
import { useActionSidebarContext } from '~context/ActionSidebarContext';
import { useSetPageHeadingTitle } from '~context/PageHeadingContext/hooks';
import { useColonyContext, useMobile } from '~hooks';
import Icon from '~shared/Icon';
import Tooltip from '~shared/Extensions/Tooltip';
import { formatText } from '~utils/intl';
import { multiLineTextEllipsis } from '~utils/strings';
import { ACTION_TYPE_FIELD_NAME } from '~v5/common/ActionSidebar/consts';
import ObjectiveBox from '~v5/common/ObjectiveBox';
import Button from '~v5/shared/Button';
import CopyableAddress from '~v5/shared/CopyableAddress';
import SocialLinks from '~v5/shared/SocialLinks';
import ColonyAvatar from '~v5/shared/ColonyAvatar';
import { ADDRESS_ZERO } from '~constants';

import styles from './ColonyDetailsPage.module.css';

const displayName = 'frame.Extensions.pages.ColonyDetailsPage';

const MAX_DESCRIPTION_LENGTH = 250;

const MSG = defineMessages({
  lockedToken: {
    id: `${displayName}.lockedToken`,
    defaultMessage:
      'This token is locked. Colony native tokens are locked and non-transferrable by default to avoid unwanted project token transfer outside of the colony.',
  },
  descriptionPlaceholder: {
    id: `${displayName}.desciptionPlaceholder`,
    defaultMessage:
      'Enter a short description about your Colony’s main purpose.',
  },
  objectiveTitle: {
    id: `${displayName}.objectiveTitle`,
    defaultMessage: 'Current Colony Objective',
  },
  objectiveDescription: {
    id: `${displayName}.objectiveDescription`,
    defaultMessage:
      'Colony objectives area the main goal or mission of the Colony all member’s are contributing towards. The objective appears on the main Dashboard of the Colony and progress of the goal is visible. {br} {br} Each update requires a motion progress or the correct Colony wide permissions.',
  },
  objectiveBoxTitle: {
    id: `${displayName}.objectiveBoxTitle`,
    defaultMessage: 'Current Colony objective:',
  },
});

const ColonyDetailsPage: FC = () => {
  const { formatMessage } = useIntl();
  const isMobile = useMobile();
  const { colony } = useColonyContext();

  useSetPageHeadingTitle(formatMessage({ id: 'colonyDetails' }));

  const { name, metadata, colonyAddress, nativeToken, status } = colony || {};
  const { avatar, thumbnail, description, externalLinks, objective } =
    metadata || {};
  const isNativeTokenLocked = !status?.nativeToken?.unlocked;

  const {
    actionSidebarToggle: [, { toggleOn: toggleActionSidebarOn }],
  } = useActionSidebarContext();

  return (
    <div className="pb-6">
      <div className={clsx('p-6 flex flex-col items-start', styles.box)}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <ColonyAvatar
            size="m"
            colonyAddress={colonyAddress || ADDRESS_ZERO}
            colonyImageProps={{
              src: thumbnail || avatar || undefined,
            }}
          />
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-row items-end gap-3">
              <h2 className="heading-2">{name}</h2>
              {nativeToken && (
                <div className="flex flex-row items-center p-2 border border-gray-200 rounded-lg bg-base-white">
                  <span className="text-sm font-medium">
                    {nativeToken.symbol}
                  </span>
                  {isNativeTokenLocked && (
                    <Tooltip
                      tooltipContent={
                        <span>{formatText(MSG.lockedToken)}</span>
                      }
                    >
                      <Icon
                        name="lock-key"
                        appearance={{ size: 'extraExtraTiny' }}
                        className="ml-1"
                      />
                    </Tooltip>
                  )}
                </div>
              )}
            </div>
            {colonyAddress && <CopyableAddress address={colonyAddress} />}
          </div>
        </div>
        <p
          className={clsx('text-md text-gray-600 mt-4 mb-6', {
            'text-gray-700': !!description,
          })}
        >
          {description
            ? multiLineTextEllipsis(description, MAX_DESCRIPTION_LENGTH)
            : formatMessage(MSG.descriptionPlaceholder)}
        </p>
        {externalLinks && externalLinks.length ? (
          <SocialLinks
            className="mb-6"
            externalLinks={externalLinks}
            showLabels
          />
        ) : null}
        <Button
          mode="primarySolid"
          text={{ id: 'colonyDetails.edit' }}
          isFullSize={isMobile}
          onClick={() => {
            toggleActionSidebarOn({
              [ACTION_TYPE_FIELD_NAME]: ACTION.EDIT_COLONY_DETAILS,
            });
          }}
        />
      </div>
      <div
        className={clsx(
          'p-6 mt-6 sm:mt-9 flex flex-col items-start gap-6 sm:flex-row sm:gap-12',
          styles.box,
        )}
      >
        <div className="flex-1">
          <h3 className="heading-4 mb-4">
            {formatMessage(MSG.objectiveTitle)}
          </h3>
          <p className="text-md text-gray-600 sm:mb-6">
            {formatMessage(MSG.objectiveDescription, { br: <br /> })}
          </p>
          {!isMobile && (
            <Button
              mode="primarySolid"
              text={{ id: 'button.manageObjective' }}
              textValues={{ existing: !!objective?.title }}
              onClick={() => {
                toggleActionSidebarOn({
                  [ACTION_TYPE_FIELD_NAME]: ACTION.MANAGE_COLONY_OBJECTIVES,
                });
              }}
            />
          )}
        </div>
        <div className="w-full sm:max-w-[20.375rem]">
          <h5 className="text-3 mb-2">
            {formatMessage(MSG.objectiveBoxTitle)}
          </h5>
          <ObjectiveBox objective={objective} />
        </div>
        {isMobile && (
          // @TODO: Test functionality to create objective on mobile
          <Button
            mode="primarySolid"
            text={{ id: 'button.manageObjective' }}
            textValues={{ existing: !!objective?.title }}
            isFullSize
            onClick={() => {
              toggleActionSidebarOn({
                [ACTION_TYPE_FIELD_NAME]: ACTION.MANAGE_COLONY_OBJECTIVES,
              });
            }}
          />
        )}
      </div>
    </div>
  );
};

ColonyDetailsPage.displayName = displayName;

export default ColonyDetailsPage;
