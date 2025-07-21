import { Meta, StoryObj } from '@storybook/nextjs-vite';

import LabelPriority from './LabelPriority';

const meta: Meta<typeof LabelPriority> = {
  component: LabelPriority,
  title: 'card/label/label_priority',
  tags: ['autodocs'],
  argTypes: {
    priority: {
      control: 'radio',
      options: ['HIGH', 'MEDIUM', 'LOW'],
    },
    size: {
      control: 'radio',
      options: ['S', 'L'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof LabelPriority>;

export const HighPrioritySmall: Story = {
  args: {
    priority: 'HIGH',
    size: 'S',
  },
};
