import type { Meta, StoryObj } from '@storybook/nextjs';

import { tasks } from '@/shared/mocks/todoMockData/todos';

import TaskCard from './TaskCard';

const meta: Meta<typeof TaskCard> = {
  title: 'Organisms/Card/TaskCard',
  component: TaskCard,
};

export default meta;

type Story = StoryObj<typeof TaskCard>;

export const Rectangle: Story = {
  args: {
    layout: 'rectangle',
    task: tasks[0],
  },
};

export const Timeline: Story = {
  args: {
    layout: 'timeline',
    task: tasks[1],
  },
};

export const Square: Story = {
  args: {
    layout: 'square',
    task: tasks[2],
  },
};
