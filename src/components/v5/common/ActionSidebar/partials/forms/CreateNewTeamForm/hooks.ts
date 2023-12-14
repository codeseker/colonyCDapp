import { useCallback, useMemo } from 'react';
import { useWatch } from 'react-hook-form';
import { DeepPartial } from 'utility-types';
import { Id } from '@colony/colony-js';

import { ActionTypes } from '~redux';
import { mapPayload, pipe } from '~utils/actions';
import { useColonyContext } from '~hooks';
import { DECISION_METHOD_FIELD_NAME } from '~v5/common/ActionSidebar/consts';

import { ActionFormBaseProps } from '../../../types';
import { DecisionMethod, useActionFormBaseHook } from '../../../hooks';
import { validationSchema, CreateNewTeamFormValues } from './consts';
import { getCreateNewTeamPayload } from './utils';

export const useCreateNewTeam = (
  getFormOptions: ActionFormBaseProps['getFormOptions'],
) => {
  const { colony } = useColonyContext();
  const decisionMethod: DecisionMethod | undefined = useWatch({
    name: DECISION_METHOD_FIELD_NAME,
  });

  useActionFormBaseHook({
    actionType:
      decisionMethod === DecisionMethod.Reputation
        ? ActionTypes.MOTION_DOMAIN_CREATE_EDIT
        : ActionTypes.ACTION_DOMAIN_CREATE,
    defaultValues: useMemo<DeepPartial<CreateNewTeamFormValues>>(
      () => ({
        createdIn: Id.RootDomain.toString(),
      }),
      [],
    ),
    getFormOptions,
    validationSchema,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    transform: useCallback(
      pipe(
        mapPayload((values: CreateNewTeamFormValues) => {
          if (!colony) {
            return null;
          }

          return getCreateNewTeamPayload(colony, values);
        }),
      ),
      [colony],
    ),
  });
};
