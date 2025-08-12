import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import GoalSelectItem from './GoalSelectItem';

const meta: Meta<typeof GoalSelectItem> = {
  title: 'AITodo/GoalSelectItem',
  component: GoalSelectItem,
  tags: ['autodocs'],
  args: {
    goalTitle: '자바스크립트로 웹 서비스 만들기',
  },
};

export default meta;
type Story = StoryObj<typeof GoalSelectItem>;

export const Default: Story = {
  args: {
    active: false,
  },
};

export const Active: Story = {
  args: {
    active: true,
  },
};
