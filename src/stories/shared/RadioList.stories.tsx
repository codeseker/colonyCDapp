import type { Meta, StoryObj } from '@storybook/react';

import RadioList from '~common/Extensions/Fields/RadioList';
import { radioItems } from '~common/Extensions/Fields/RadioList/consts';

const meta: Meta<typeof RadioList> = {
  title: 'Common/Fields/Radio List',
  component: RadioList,
  argTypes: {
    items: {
      name: 'Items',
      control: {
        type: 'object',
      },
    },
    title: {
      name: 'Title',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    title: 'Choose your governance style:',
    items: radioItems,
  },
};

export default meta;
type Story = StoryObj<typeof RadioList>;

export const Base: Story = {};
