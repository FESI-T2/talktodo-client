import type { Meta, StoryObj } from '@storybook/nextjs';

import BaseCard from './BaseCard';

const meta: Meta<typeof BaseCard> = {
  title: 'organisms/Card/components/BaseCard',
  component: BaseCard,
  argTypes: {
    layout: {
      control: { type: 'radio' },
      options: ['square', 'rectangle', 'timeline', 'goal'],
    },
    children: {
      control: 'text',
    },
  },
  args: {
    layout: 'square',
    children: 'Task title',
  },
};

export default meta;

export type Story = StoryObj<typeof BaseCard>;

export const TaskCard: Story = {};
