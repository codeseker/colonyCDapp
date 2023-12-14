import { useCallback, useMemo } from 'react';
import { Id } from '@colony/colony-js';
import { DeepPartial } from 'utility-types';
import { useWatch } from 'react-hook-form';

import { ActionTypes } from '~redux';
import { mapPayload, pipe } from '~utils/actions';
import { useColonyContext } from '~hooks';
import { DECISION_METHOD_FIELD_NAME } from '~v5/common/ActionSidebar/consts';

import { ActionFormBaseProps } from '../../../types';
import { DecisionMethod, useActionFormBaseHook } from '../../../hooks';
import { validationSchema, ManageColonyObjectivesFormValues } from './consts';
import { getManageColonyObjectivesPayload } from './utils';

export const useManageColonyObjectives = (
  getFormOptions: ActionFormBaseProps['getFormOptions'],
) => {
  const { colony } = useColonyContext();
  const { metadata } = colony || {};
  const decisionMethod: DecisionMethod | undefined = useWatch({
    name: DECISION_METHOD_FIELD_NAME,
  });

  useActionFormBaseHook({
    getFormOptions,
    validationSchema,
    defaultValues: useMemo<DeepPartial<ManageColonyObjectivesFormValues>>(
      () => ({
        colonyDisplayName: metadata?.displayName || '',
        avatar: {
          image: metadata?.avatar,
          thumbnail: metadata?.thumbnail,
        },
        createdIn: Id.RootDomain.toString(),
      }),
      [metadata?.avatar, metadata?.displayName, metadata?.thumbnail],
    ),
    actionType:
      decisionMethod === DecisionMethod.Permissions
        ? ActionTypes.ACTION_EDIT_COLONY
        : ActionTypes.MOTION_EDIT_COLONY,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    transform: useCallback(
      pipe(
        mapPayload((values: ManageColonyObjectivesFormValues) => {
          if (!colony) {
            return null;
          }

          return getManageColonyObjectivesPayload(colony, values);
        }),
      ),
      [colony],
    ),
  });
};
