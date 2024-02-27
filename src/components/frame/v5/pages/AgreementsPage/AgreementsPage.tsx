import { FilePlus } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import React, { type FC } from 'react';
import { useSelector } from 'react-redux';

import { Action } from '~constants/actions.ts';
import { useActionSidebarContext } from '~context/ActionSidebarContext/index.tsx';
import { useAppContext } from '~context/AppContext.tsx';
import { useColonyContext } from '~context/ColonyContext.tsx';
import {
  useSetPageBreadcrumbs,
  useSetPageHeadingTitle,
} from '~context/PageHeadingContext/hooks.ts';
import {
  useGetColonyActionsQuery,
  ColonyActionType,
  ModelSortDirection,
} from '~gql';
import { useCreateTeamBreadcrumbs } from '~hooks/useTeamsBreadcrumbs.ts';
import { notNull } from '~utils/arrays/index.ts';
import { getDraftDecisionFromStore } from '~utils/decisions.ts';
import { formatText } from '~utils/intl.ts';
import { ACTION_TYPE_FIELD_NAME } from '~v5/common/ActionSidebar/consts.tsx';
import EmptyContent from '~v5/common/EmptyContent/EmptyContent.tsx';
import Button from '~v5/shared/Button/Button.tsx';

import AgreementCard from './partials/AgreementCard/index.ts';
import AgreementCardSkeleton from './partials/AgreementCardSkeleton.tsx';
import DraftSection from './partials/DraftSection/DraftSection.tsx';

const displayName = 'v5.pages.AgreementsPage';

const AgreementsPage: FC = () => {
  const {
    colony: { colonyAddress },
  } = useColonyContext();
  const { user } = useAppContext();
  const teamsBreadcrumbs = useCreateTeamBreadcrumbs();
  const {
    actionSidebarToggle: [, { toggleOn: toggleActionSidebarOn }],
  } = useActionSidebarContext();

  useSetPageBreadcrumbs(teamsBreadcrumbs);
  useSetPageHeadingTitle(formatText({ id: 'agreementsPage.title' }));

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

  const draftAgreement = useSelector(
    getDraftDecisionFromStore(user?.walletAddress || '', colonyAddress),
  );

  return (
    <div>
      {draftAgreement && <DraftSection className="mb-6" />}
      <div className="sm:flex sm:items-center justify-between sm:flex-row flex-col mb-6">
        <div className="flex items-center gap-2 sm:mb-0 mb-2.5">
          <h4 className="heading-5">
            {formatText({ id: 'agreementsPage.subtitle' })}
          </h4>
        </div>
        <Button
          mode="primarySolid"
          size="medium"
          isFullSize={false}
          onClick={() => {
            toggleActionSidebarOn({
              [ACTION_TYPE_FIELD_NAME]: Action.CreateDecision,
            });
          }}
        >
          {formatText({ id: 'agreementsPage.createAgreement' })}
        </Button>
      </div>
      {loading ? (
        <ul className="grid sm:grid-cols-2 gap-6">
          {[...Array(4).keys()].map((key) => (
            <li
              key={key}
              className="w-full h-full flex flex-col pt-6 pb-5 px-5 rounded-lg border border-gray-200"
            >
              <AgreementCardSkeleton />
            </li>
          ))}
        </ul>
      ) : (
        <>
          {agreements?.length ? (
            <ul className="grid auto-rows-fr sm:auto-rows-auto grid-cols-1 sm:grid-cols-2 gap-6">
              {agreements.map(({ transactionHash }) => (
                <motion.li
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      duration: 0.75,
                    },
                  }}
                  viewport={{ once: true }}
                  key={transactionHash}
                  className="w-full"
                >
                  <AgreementCard transactionId={transactionHash} />
                </motion.li>
              ))}
            </ul>
          ) : (
            <EmptyContent
              description={{ id: 'agreementsPage.empty.description' }}
              className="px-5 py-[5.75rem] border-dashed"
              buttonText={{ id: 'agreementsPage.empty.button' }}
              onClick={() => {
                toggleActionSidebarOn({
                  [ACTION_TYPE_FIELD_NAME]: Action.CreateDecision,
                });
              }}
              buttonIcon={FilePlus}
              withBorder
            />
          )}
        </>
      )}
    </div>
  );
};

AgreementsPage.displayName = displayName;

export default AgreementsPage;
