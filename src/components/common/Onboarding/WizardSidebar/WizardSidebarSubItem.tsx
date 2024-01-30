import clsx from 'clsx';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { type Optional } from 'utility-types';

import { type WizardSidebarStep } from './WizardSidebar.tsx';

const displayName =
  'routes.WizardRoute.WizardSidebar.WizardSidebarItem.WizardSidebarSubItem';

export type WizardSidebarSubStep = Optional<
  WizardSidebarStep,
  'subItems' | 'text'
>;

interface Props extends Pick<WizardSidebarSubStep, 'text'> {
  isActive: boolean;
}

const WizardSidebarSubItem = ({ text: stepText, isActive }: Props) => (
  <span
    className={clsx('text-xs ml-[26px]', {
      'text-blue-400 font-semibold': isActive,
    })}
  >
    <FormattedMessage {...stepText} />
  </span>
);

WizardSidebarSubItem.displayName = displayName;

export default WizardSidebarSubItem;
