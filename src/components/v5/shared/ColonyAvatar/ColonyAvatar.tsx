import clsx from 'clsx';
import React, { type FC } from 'react';

import { Avatar2 } from '../Avatar/Avatar.tsx';

import { type ColonyAvatarProps } from './types.ts';

const displayName = 'v5.ColonyAvatar';

const ColonyAvatar: FC<ColonyAvatarProps> = ({
  colonyAddress,
  chainIcon: Icon,
  colonyImageProps,
  size,
  className,
}) => {
  return (
    <div
      className={clsx(
        className,
        'flex justify-center items-center flex-shrink-0 relative',
      )}
    >
      <Avatar2
        size={size}
        src={colonyImageProps?.src}
        address={colonyAddress.toLowerCase()}
      />
      {Icon && (
        <figure
          className={`
          h-[1.125rem]
          w-[1.125rem]
          rounded-full
          border
          border-gray-200
          bg-base-white
      `}
        >
          <Icon size={14} />
        </figure>
      )}
    </div>
  );
};

ColonyAvatar.displayName = displayName;

export default ColonyAvatar;
