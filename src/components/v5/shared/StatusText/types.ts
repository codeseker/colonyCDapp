import { type Icon } from '@phosphor-icons/react';

import { type StatusTypes } from './consts.ts';

export interface StatusTextProps {
  status: (typeof StatusTypes)[keyof typeof StatusTypes];
  className?: string;
  icon?: Icon;
  iconSize?: number;
  iconClassName?: string;
  withIcon?: boolean;
  textClassName?: string;
  iconAlignment?: 'top' | 'center';
}
