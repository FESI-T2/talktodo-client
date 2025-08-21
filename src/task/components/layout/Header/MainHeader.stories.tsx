// MainHeader.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs';

import MainHeader from './MainHeader';

const meta: Meta<typeof MainHeader> = {
  title: 'organisms/Header/MainHeader',
  component: MainHeader,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof MainHeader>;

export const Zero: Story = {
  args: {
    totalTodo: 0,
    IncompleteTodo: 0,
    completedTodo: 0,
  },
};

export const Half: Story = {
  args: {
    totalTodo: 4,
    IncompleteTodo: 2,
    completedTodo: 2,
  },
};

export const Full: Story = {
  args: {
    totalTodo: 10,
    IncompleteTodo: 0,
    completedTodo: 10,
  },
};
