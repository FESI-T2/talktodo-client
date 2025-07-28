// MainHeader.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import MainHeader from './MainHeader';

const meta: Meta<typeof MainHeader> = {
  title: 'organisms/Header/MainHeader',
  component: MainHeader,
  argTypes: {
    percent: { control: { type: 'number', min: 0, max: 100 }, defaultValue: 0 },
  },
};

export default meta;
type Story = StoryObj<typeof MainHeader>;

export const Zero: Story = {
  args: {
    percent: 0,
    totalTodo: 0,
    IncompleteTodo: 0,
    completedTodo: 0,
  },
};

export const Half: Story = {
  args: {
    percent: 50,
    totalTodo: 4,
    IncompleteTodo: 2,
    completedTodo: 2,
  },
};

export const Full: Story = {
  args: {
    percent: 100,
    totalTodo: 10,
    IncompleteTodo: 0,
    completedTodo: 10,
  },
};
