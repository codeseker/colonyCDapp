import React, { useState, type FC, useEffect } from 'react';
import {
  Outlet,
  useLocation,
  useNavigate,
  useResolvedPath,
} from 'react-router-dom';

import {
  useSetPageBreadcrumbs,
  useSetPageHeadingTitle,
} from '~context/PageHeadingContext/hooks.ts';
import { useCreateTeamBreadcrumbs } from '~hooks/useTeamsBreadcrumbs.ts';
import { COLONY_MULTISIG_ROUTE, COLONY_PERMISSIONS_ROUTE } from '~routes';
import Tabs from '~shared/Extensions/Tabs/index.ts';
import { formatText } from '~utils/intl.ts';

import { useGetMembersForPermissions } from './hooks.tsx';
import PermissionsPageContent from './partials/PermissionsPageContent.tsx';
import { PermissionType } from './types.ts';

const displayName = 'frame.Extensions.pages.PermissionsPage';

const PermissionsPage: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const resolvedPermissionsPath = useResolvedPath(COLONY_PERMISSIONS_ROUTE);
  const resolvedMultisigPath = useResolvedPath(COLONY_MULTISIG_ROUTE);
  const [activeTab, setActiveTab] = useState(PermissionType.Individual);
  const teamsBreadcrumbs = useCreateTeamBreadcrumbs();
  const { individualMembers, isLoading } = useGetMembersForPermissions();
  const individualMembersCount = Object.values(individualMembers).reduce(
    (acc, members) => acc + members.length,
    0,
  );

  useEffect(() => {
    if (pathname === resolvedPermissionsPath.pathname) {
      setActiveTab(PermissionType.Individual);
    } else if (pathname === resolvedMultisigPath.pathname) {
      setActiveTab(PermissionType.MultiSig);
    }
  }, [
    pathname,
    resolvedPermissionsPath.pathname,
    resolvedMultisigPath.pathname,
  ]);

  useSetPageBreadcrumbs(teamsBreadcrumbs);
  useSetPageHeadingTitle(formatText({ id: 'permissionsPage.title' }));

  return (
    <Tabs
      activeTab={activeTab}
      onTabClick={(_, id) =>
        navigate(
          id === PermissionType.Individual
            ? COLONY_PERMISSIONS_ROUTE
            : COLONY_MULTISIG_ROUTE,
        )
      }
      items={[
        {
          id: PermissionType.Individual,
          title: formatText({ id: 'permissionsPage.individual' }),
          content: (
            <PermissionsPageContent>
              <Outlet />
            </PermissionsPageContent>
          ),
          notificationNumber: isLoading ? undefined : individualMembersCount,
        },
        // {
        //   id: PermissionType.MultiSig,
        //   title: formatText({ id: 'permissionsPage.multisig' }),
        //   content: (
        //     <PermissionsPageContent>
        //       <Outlet />
        //     </PermissionsPageContent>
        //   ),
        //   notificationNumber: individualMembersCount,
        // },
      ]}
    />
  );
};

PermissionsPage.displayName = displayName;

export default PermissionsPage;
