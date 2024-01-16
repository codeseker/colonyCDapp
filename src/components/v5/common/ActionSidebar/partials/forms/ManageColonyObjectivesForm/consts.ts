import { InferType, number, object, string } from 'yup';

import { MAX_ANNOTATION_LENGTH, MAX_COLONY_DISPLAY_NAME } from '~constants';
import { formatText } from '~utils/intl';

export const validationSchema = object()
  .shape({
    colonyObjectiveTitle: string()
      .trim()
      .max(MAX_COLONY_DISPLAY_NAME)
      .required(() => formatText({ id: 'errors.colonyObjective.title' })),
    colonyObjectiveDescription: string()
      .trim()
      .max(MAX_ANNOTATION_LENGTH)
      .required(() => formatText({ id: 'errors.colonyObjective.description' })),
    colonyObjectiveProgress: number()
      .max(100)
      .required(() => formatText({ id: 'errors.colonyObjective.progress' })),
    createdIn: number().defined(),
    decisionMethod: string().defined(),
    description: string().max(MAX_ANNOTATION_LENGTH).notRequired(),
  })
  .defined();

export type ManageColonyObjectivesFormValues = InferType<
  typeof validationSchema
>;
