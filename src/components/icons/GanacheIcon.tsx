import { type Icon, IconBase, type IconWeight } from '@phosphor-icons/react';
import React, { forwardRef, type ReactElement } from 'react';

const SVG = (
  <>
    <path
      d="M98.8,95.76c1.34,0,1.79-.31,2.43-1.39s.33-2.84,.3-3.32c-.06-1.05-.41-2.22-.45-2.81-.03-.36,0-2.65,.05-3.58,.8-14.84,7.17-18.37,9-18.77,1.17-.35,2.43-.26,3.55,.24v-22.7h0v-6.34c0-3.28-2.34-7.31-5.17-8.96L62,1.25c-2.84-1.66-7.51-1.66-10.35-.02L5.18,28.07C2.34,29.69,.02,33.72,.02,37.03v14.53c.27,.15,.54,.3,.81,.47,.9,.6,1.79,.93,2.69,1.55,2.59,1.58,4.99,3.44,7.17,5.54,.42,.41,1.83,2.19,2.17,2.6,1.02,1.42,2.18,2.74,3.45,3.94,.7,.64,1.48,1.2,2.31,1.66,1.36,.71,3.63,.55,4.78,.04,8.85-3.83,14.41-1.91,16.97-.37,6.34,3.8,8.45,9.13,9.13,15.59,.09,.84,.12,1.68,.08,2.52,0,1.54-.05,4,1.56,4.41,2.32,.6,2.89-1.89,3.23-3.54,.79-3.73,5.75-6.18,9.39-4.3,2.51,1.3,3.54,2.03,6.02,.94,3.11-1.37,4.7-4.85,5.78-6.7,1.07-1.81,2.63-3.28,4.49-4.26,4.84-3.02,17-2.23,17.45,11.17v3.73c0,1.28,.04,2.53-.04,3.85-.05,.88-.21,1.79-.29,2.69-.06,0-.51,2.63,1.63,2.64Z"
      fill="#e4a663"
    />
    <path
      d="M113.68,66.15c-.33-.1-1.29-.73-3.54-.24-1.85,.4-8.2,3.93-9,18.77-.05,.91-.08,3.2-.05,3.58,.04,.6,.39,1.76,.45,2.81,0,.48,.37,2.21-.3,3.32s-1.09,1.4-2.43,1.39c-2.14,0-1.69-2.63-1.69-2.63,.08-.89,.24-1.79,.29-2.69,.08-1.32,.04-2.57,.04-3.85v-3.73c-.42-13.43-12.57-14.19-17.39-11.2-1.85,.98-3.4,2.45-4.47,4.25-1.08,1.85-2.68,5.33-5.78,6.7-2.48,1.09-3.51,.36-6.02-.94-3.64-1.88-8.6,.57-9.39,4.3-.35,1.65-.91,4.13-3.23,3.54-1.62-.41-1.56-2.88-1.56-4.41,.03-.84,0-1.68-.08-2.52-.67-6.46-2.79-11.79-9.13-15.59-2.56-1.54-8.12-3.46-16.97,.37-1.19,.51-3.43,.67-4.78-.04-.85-.45-1.64-1-2.35-1.63-1.27-1.2-2.42-2.52-3.45-3.94-.34-.42-1.76-2.2-2.17-2.6-2.18-2.11-4.58-3.97-7.17-5.54-.91-.6-1.79-.98-2.69-1.55-.27-.17-.54-.32-.81-.47v39.17c0,3.29,2.33,7.32,5.17,8.96l46.51,26.88c2.84,1.65,7.5,1.65,10.34,0l46.51-26.84c2.84-1.64,5.17-5.67,5.17-8.96l-.02-24.64Z"
      fill="#5e464d"
    />
    <path
      d="M62.74,59.57c-3.22,1.86-8.48,1.86-11.7,0L3.49,34.48c.54,.53,48.22,28.24,48.22,28.24,2.84,1.65,7.5,1.65,10.34,0,0,0,47.63-27.62,48.16-28.15l-47.48,25Z"
      fill="#fff"
    />
    <path
      d="M50.98,4.83c3.22-1.84,8.48-1.84,11.7,0l5.76,2.39c-.54-.53-6.44-4.35-6.44-4.35-2.84-1.64-7.49-1.65-10.33,0,0,0-9.42,5.54-9.96,6.06l9.27-4.1Z"
      fill="#fff"
    />
  </>
);

const weights = new Map<IconWeight, ReactElement>([['regular', SVG]]);

const GanacheIcon: Icon = forwardRef((props, ref) => (
  <IconBase ref={ref} {...props} weights={weights} />
));

GanacheIcon.displayName = 'GanacheIcon';

export default GanacheIcon;
