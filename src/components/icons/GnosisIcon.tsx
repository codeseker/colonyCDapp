import { type Icon, IconBase, type IconWeight } from '@phosphor-icons/react';
import React, { forwardRef, type ReactElement } from 'react';

const SVG = (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="#039855"
      d="M15,0c4.3,0,8.1,1.8,10.8,4.6c0.4,0.4,0.7,0.8,1,1.2L15,17.8L3.1,5.9C5.9,2.2,10.3,0,15,0L15,0z M24.2,5.8
	C21.8,3.3,18.5,2,15,2c-3.5,0-6.8,1.3-9.2,3.8L15,15C15,15,24.2,5.8,24.2,5.8z"
    />
    <path
      fill="#039855"
      d="M27.8,7.2l-2.4,2.4c0.8,1,1.3,2.2,1.3,3.5c0,3-2.5,5.5-5.5,5.5c-1.3,0-2.6-0.5-3.5-1.3L15,20.1l-2.6-2.6
	c-1,0.8-2.2,1.3-3.5,1.3c-3,0-5.5-2.5-5.5-5.5c0-1.3,0.5-2.6,1.3-3.5L2.2,7.2C0.7,9.6,0,12.3,0,15c0,8.3,6.7,15,15,15s15-6.7,15-15
	C30,12.2,29.2,9.5,27.8,7.2L27.8,7.2z"
    />
    <path
      fill="#039855"
      d="M24.3,10.8c0.5,0.7,0.8,1.5,0.8,2.4c0,2.1-1.7,3.9-3.9,3.9c0,0,0,0,0,0c-0.9,0-1.7-0.3-2.4-0.8L24.3,10.8
	L24.3,10.8z M11.2,16.3c-1.7,1.3-4.2,1-5.5-0.7c-0.5-0.7-0.8-1.5-0.8-2.4c0-0.9,0.3-1.7,0.8-2.4L11.2,16.3L11.2,16.3z"
    />
  </>
);

const weights = new Map<IconWeight, ReactElement>([['regular', SVG]]);

const GnosisIcon: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

GnosisIcon.displayName = 'GnosisIcon';

export default GnosisIcon;
