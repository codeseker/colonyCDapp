import clsx from 'clsx';
import React from 'react';

import RadioButtonsBase from '../RadioButtonsBase/index.ts';
import { type RadioItem } from '../RadioButtonsBase/types.ts';

import { type ButtonRadioButtonsProps } from './types.ts';

const displayName = 'v5.common.ButtonRadioButtons';

function ButtonRadioButtons<TValue = string>({
  items,
  className,
  disabled,
  ...rest
}: ButtonRadioButtonsProps<TValue>): JSX.Element {
  const modifiedItems = items.map<RadioItem<TValue>>(
    ({
      label,
      icon: Icon,
      colorClassName,
      checkedColorClassName,
      hoverColorClassName,
      iconClassName,
      disabled: disabledButton,
      ...item
    }) => {
      return {
        ...item,
        disabled: disabledButton,
        // eslint-disable-next-line react/no-unstable-nested-components
        children: ({ checked }) => (
          <span
            className={clsx(
              colorClassName,
              hoverColorClassName,
              `
                flex
                group/wrapper
                items-center
                justify-center
                gap-1.5
                border
                border-current
                transition
                py-2
                px-3
                w-full
                min-h-[2.5rem]
                rounded-lg
              `,
              {
                [checkedColorClassName]:
                  checked && (!disabledButton || !disabled),
                [colorClassName]: !disabledButton || !disabled,
                'text-gray-300 border-gray-300': disabledButton || disabled,
              },
            )}
          >
            {Icon && (
              <Icon
                size={18}
                className={clsx(iconClassName, {
                  'text-base-white': checked,
                  'text-current': !checked,
                  '!text-gray-300': disabledButton || disabled,
                })}
              />
            )}
            <span
              className={clsx('text-3', {
                'text-gray-900 md:group-hover/wrapper:text-current':
                  !checked && (!disabled || !disabledButton),
                '!text-gray-300': disabledButton || disabled,
                'text-base-white': checked && (!disabled || !disabledButton),
              })}
            >
              {label}
            </span>
          </span>
        ),
      };
    },
  );

  return (
    <RadioButtonsBase
      {...rest}
      className={clsx(className, 'flex w-full gap-2 [&>li]:flex-1')}
      items={modifiedItems}
      disabled={disabled}
    />
  );
}

ButtonRadioButtons.displayName = displayName;

export default ButtonRadioButtons;
