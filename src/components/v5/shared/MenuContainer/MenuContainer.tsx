import React, { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

import { MenuContainerProps } from './types';

const displayName = 'v5.shared.MenuContainer';

const MenuContainer = React.forwardRef<
  HTMLDivElement,
  PropsWithChildren<MenuContainerProps>
>(
  (
    { hasShadow, rounded = 's', children, className, withPadding = true },
    ref,
  ) => (
    <div
      className={clsx(
        className,
        'bg-base-white border border-gray-200 flex flex-col',
        {
          'rounded-lg': rounded === 's',
          'rounded-xl': rounded === 'm',
          'shadow-default': hasShadow,
          'p-6': withPadding,
        },
      )}
      ref={ref}
    >
      {children}
    </div>
  ),
);

(MenuContainer as FC).displayName = displayName;

export default MenuContainer;
