import { type Icon, IconBase, type IconWeight } from '@phosphor-icons/react';
import React, { forwardRef, type ReactElement } from 'react';

const SVG = (
  <>
    <clipPath id="circle-clip-gb">
      <circle cx="256" cy="256" r="256" />
    </clipPath>
    <g clipPath="url(#circle-clip-gb)">
      <path fill="#012169" d="M0 0h512v512H0z" />
      <path
        fill="#FFF"
        d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"
      />
      <path
        fill="#C8102E"
        d="m184 324 11 34L42 512H0v-3zm124-12 54 8 150 147v45zM512 0 320 196l-4-44L466 0zM0 1l193 189-59-8L0 49z"
      />
      <path fill="#FFF" d="M176 0v512h160V0zM0 176v160h512V176z" />
      <path fill="#C8102E" d="M0 208v96h512v-96zM208 0v512h96V0z" />
    </g>
  </>
);

const weights = new Map<IconWeight, ReactElement>([['regular', SVG]]);

const FlagUkIcon: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

FlagUkIcon.displayName = 'FlagUkIcon';

export default FlagUkIcon;
