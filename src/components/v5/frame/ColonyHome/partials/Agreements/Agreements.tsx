import clsx from 'clsx';
import React from 'react';

import { Action } from '~constants/actions.ts';
import { useActionSidebarContext } from '~context/ActionSidebarContext/ActionSidebarContext.ts';
import { useColonyContext } from '~context/ColonyContext/ColonyContext.ts';
import {
  ColonyActionType,
  ModelSortDirection,
  useGetColonyActionsQuery,
} from '~gql';
import { COLONY_AGREEMENTS_ROUTE } from '~routes/index.ts';
import { SpinnerLoader } from '~shared/Preloaders/index.ts';
import { notNull } from '~utils/arrays/index.ts';
import { formatText } from '~utils/intl.ts';
import { ACTION_TYPE_FIELD_NAME } from '~v5/common/ActionSidebar/consts.ts';
import WidgetBox from '~v5/common/WidgetBox/index.ts';
import EmptyWidgetState from '~v5/common/WidgetBox/partials/index.ts';
import MessageNumber from '~v5/shared/MessageNumber/index.ts';
import RichTextDisplay from '~v5/shared/RichTextDisplay/index.ts';
import TitleWithNumber from '~v5/shared/TitleWithNumber/index.ts';

const displayName = 'v5.frame.ColonyHome.Agreements';

const Agreements = () => {
  const {
    colony: { colonyAddress },
  } = useColonyContext();
  const { data: agreementsData, loading } = useGetColonyActionsQuery({
    variables: {
      colonyAddress,
      filter: {
        type: { eq: ColonyActionType.CreateDecisionMotion },
      },
      sortDirection: ModelSortDirection.Desc,
    },
    fetchPolicy: 'network-only',
  });
  const agreements = agreementsData?.getActionsByColony?.items.filter(notNull);
  const newestAgreement = agreements?.[0];

  const {
    actionSidebarToggle: [, { toggleOn: toggleActionSidebarOn }],
  } = useActionSidebarContext();

  const openCreateDecision = () => {
    toggleActionSidebarOn({
      [ACTION_TYPE_FIELD_NAME]: Action.CreateDecision,
    });
  };

  return (
    <WidgetBox
      title={
        <TitleWithNumber
          title={formatText({
            id: 'dashboard.agreements.widget.title',
          })}
          number={agreements?.length}
          className={clsx('transition-all', {
            'sm:hover:text-blue-400': agreements,
          })}
        />
      }
      titleClassName="text-2 mb-4"
      value={
        <>
          {loading && <SpinnerLoader appearance={{ size: 'small' }} />}
          {newestAgreement && (
            <div className="flex flex-col gap-[.375rem]">
              <div className="flex items-start justify-between gap-2">
                <span className="text-3">
                  {newestAgreement.decisionData?.title}
                </span>
                <MessageNumber message={1} />
              </div>
              {newestAgreement.decisionData?.description && (
                <RichTextDisplay
                  content={newestAgreement.decisionData?.description}
                  className="line-clamp-3 !text-sm !text-gray-600"
                  shouldFormat={false}
                />
              )}
            </div>
          )}
          {!newestAgreement && !loading && (
            <EmptyWidgetState
              title={formatText({
                id: 'dashboard.agreements.widget.noData',
              })}
              actionTitle={formatText({
                id: 'dashboard.agreements.widget.createObjective',
              })}
              className="px-[1.8rem] py-[1.2rem]"
              onClick={openCreateDecision}
            />
          )}
        </>
      }
      contentClassName="w-full"
      className="col-span-2 h-fit flex-1 flex-col bg-base-white p-6 lg:col-span-1"
      href={agreements ? COLONY_AGREEMENTS_ROUTE : undefined}
    />
  );
};

Agreements.displayName = displayName;
export default Agreements;
