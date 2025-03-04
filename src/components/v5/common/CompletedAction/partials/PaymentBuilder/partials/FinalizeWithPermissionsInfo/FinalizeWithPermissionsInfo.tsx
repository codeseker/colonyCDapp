import React, { type FC } from 'react';

import PermissionRow from '~frame/v5/pages/VerifiedPage/partials/PermissionRow/index.ts';
import { formatText } from '~utils/intl.ts';
import MenuWithStatusText from '~v5/shared/MenuWithStatusText/index.ts';
import { StatusTypes } from '~v5/shared/StatusText/consts.ts';
import UserPopover from '~v5/shared/UserPopover/UserPopover.tsx';

import { type FinalizeWithPermissionsInfoProps } from './types.ts';

const FinalizeWithPermissionsInfo: FC<FinalizeWithPermissionsInfoProps> = ({
  userAdddress,
}) => {
  return (
    <MenuWithStatusText
      statusTextSectionProps={{
        status: StatusTypes.Info,
        children: formatText({
          id: 'action.executed.permissions.description',
        }),
        textClassName: 'text-4 text-gray-900',
        iconAlignment: 'top',
        iconSize: 16,
        iconClassName: 'text-gray-500',
      }}
      sections={[
        {
          key: '1',
          content: (
            <>
              <h4 className="text-1">
                {formatText({
                  id: 'action.executed.permissions.overview',
                })}
              </h4>
              {userAdddress && (
                <>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <span className="text-sm text-gray-600">
                      {formatText({
                        id: 'action.executed.permissions.member',
                      })}
                    </span>
                    <UserPopover size={18} walletAddress={userAdddress || ''} />
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-2">
                    <span className="text-sm text-gray-600">
                      {formatText({
                        id: 'action.executed.permissions.permission',
                      })}
                    </span>
                    <PermissionRow contributorAddress={userAdddress} />
                  </div>
                </>
              )}
            </>
          ),
        },
      ]}
    />
  );
};

export default FinalizeWithPermissionsInfo;
