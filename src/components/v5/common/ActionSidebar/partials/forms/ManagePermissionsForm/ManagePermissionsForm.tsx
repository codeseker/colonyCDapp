import { Id } from '@colony/colony-js';
import React, { type FC, useCallback } from 'react';
import { useWatch } from 'react-hook-form';

import { USER_ROLE } from '~constants/permissions.ts';
import useToggle from '~hooks/useToggle/index.ts';
import Icon from '~shared/Icon/index.ts';
import { formatText } from '~utils/intl.ts';
import ActionFormRow from '~v5/common/ActionFormRow/index.ts';
import { FormCardSelect } from '~v5/common/Fields/CardSelect/index.ts';
import { type CardSelectProps } from '~v5/common/Fields/CardSelect/types.ts';

import { useDecisionMethods } from '../../../hooks/index.ts';
import { type ActionFormBaseProps } from '../../../types.ts';
import CreatedInRow from '../../CreatedInRow/CreatedInRow.tsx';
import DescriptionRow from '../../DescriptionRow/index.ts';
import TeamsSelect from '../../TeamsSelect/index.ts';
import UserSelect from '../../UserSelect/index.ts';

import {
  AUTHORITY_OPTIONS,
  PERMISSIONS_OPTIONS,
  REMOVE_ROLE_OPTION_VALUE,
} from './consts.tsx';
import { useManagePermissions } from './hooks.ts';
import PermissionsModal from './partials/PermissionsModal/index.ts';
import PermissionsTable from './partials/PermissionsTable/index.ts';
import { getRoleLabel } from './utils.tsx';

const displayName = 'v5.common.ActionSidebar.partials.ManagePermissionsForm';

const ManagePermissionsForm: FC<ActionFormBaseProps> = ({ getFormOptions }) => {
  const { decisionMethods } = useDecisionMethods();
  const { role, isModeRoleSelected } = useManagePermissions(getFormOptions);
  const [
    isPermissionsModalOpen,
    {
      toggleOff: togglePermissionsModalOff,
      toggleOn: togglePermissionsModalOn,
    },
  ] = useToggle();
  const team: string | undefined = useWatch({ name: 'team' });
  const permissionSelectFooter = useCallback<
    Exclude<CardSelectProps<string>['footer'], React.ReactNode>
  >(
    ([, { toggleOff }]) => (
      <button
        type="button"
        className="w-full flex justify-center items-center py-2"
        onClick={() => {
          togglePermissionsModalOn();
          toggleOff();
        }}
      >
        <Icon name="question" appearance={{ size: 'tiny' }} />
        <span className="font-semibold text-sm underline ml-[.375rem]">
          {formatText({
            id: 'actionSidebar.managePermissions.roleSelect.footerCta',
          })}
        </span>
      </button>
    ),
    [togglePermissionsModalOn],
  );

  const ALLOWED_PERMISSION_OPTIONS = PERMISSIONS_OPTIONS.map(
    ({ options, ...rest }) => ({
      ...rest,
      options: options.filter(({ value }) =>
        value === USER_ROLE.Owner ? Number(team) === Id.RootDomain : true,
      ),
    }),
  );

  return (
    <>
      <PermissionsModal
        onClose={togglePermissionsModalOff}
        isOpen={isPermissionsModalOpen}
      />
      <ActionFormRow
        icon="user-focus"
        fieldName="member"
        tooltips={{
          label: {
            tooltipContent: formatText({
              id: 'actionSidebar.tooltip.managePermissions.member',
            }),
          },
        }}
        title={formatText({ id: 'actionSidebar.member' })}
      >
        <UserSelect name="member" />
      </ActionFormRow>
      <ActionFormRow
        icon="users-three"
        fieldName="team"
        tooltips={{
          label: {
            tooltipContent: formatText({
              id: 'actionSidebar.tooltip.managePermissions.team',
            }),
          },
        }}
        title={formatText({ id: 'actionSidebar.managePermissions.team' })}
      >
        <TeamsSelect name="team" />
      </ActionFormRow>
      <ActionFormRow
        icon="shield"
        fieldName="role"
        tooltips={{
          label: {
            tooltipContent: formatText({
              id: 'actionSidebar.tooltip.managePermissions.permissions',
            }),
          },
        }}
        title={formatText({ id: 'actionSidebar.permissions' })}
      >
        <FormCardSelect
          name="role"
          cardClassName="max-w-[calc(100vw-2.5rem)] md:max-w-sm md:px-4 md:[&_.section-title]:px-2"
          renderSelectedValue={(option, placeholder) =>
            getRoleLabel(option?.value) || placeholder
          }
          options={ALLOWED_PERMISSION_OPTIONS}
          title={formatText({ id: 'actionSidebar.permissions' })}
          placeholder={formatText({
            id: 'actionSidebar.managePermissions.roleSelect.placeholder',
          })}
          itemClassName="group flex text-md md:transition-colors md:hover:font-medium md:hover:bg-gray-50 rounded p-2 w-full cursor-pointer"
          footer={permissionSelectFooter}
        />
      </ActionFormRow>
      <ActionFormRow
        icon="signature"
        fieldName="authority"
        tooltips={{
          label: {
            tooltipContent: formatText({
              id: 'actionSidebar.tooltip.authority',
            }),
          },
          content: isModeRoleSelected
            ? {
                tooltipContent: formatText({
                  id: 'actionSidebar.managePermissions.authority.disbaledTooltip',
                }),
                selectTriggerRef: (triggerRef) => {
                  if (!triggerRef) {
                    return null;
                  }

                  return triggerRef.querySelector('span');
                },
              }
            : undefined,
        }}
        title={formatText({ id: 'actionSidebar.authority' })}
      >
        <FormCardSelect
          disabled={isModeRoleSelected}
          name="authority"
          options={AUTHORITY_OPTIONS}
          title={formatText({ id: 'actionSidebar.authority' })}
          placeholder={formatText({
            id: 'actionSidebar.managePermissions.authoritySelect.placeholder',
          })}
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
          placeholder={formatText({
            id: 'actionSidebar.decisionMethod.placeholder',
          })}
          title={formatText({ id: 'actionSidebar.availableDecisions' })}
        />
      </ActionFormRow>
      <CreatedInRow />
      <DescriptionRow />
      {role !== REMOVE_ROLE_OPTION_VALUE && (
        <PermissionsTable name="permissions" role={role} className="mt-7" />
      )}
    </>
  );
};

ManagePermissionsForm.displayName = displayName;

export default ManagePermissionsForm;
