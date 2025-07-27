import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ChatHeader from './ChatHeader';

const meta: Meta<typeof ChatHeader> = {
  title: 'AITodo/ChatHeader',
  component: ChatHeader,
  tags: ['autodocs'],
  args: {
    headerTitle: '자바스크립트로 웹 서비스 만들기',
  },
};

export default meta;
type Story = StoryObj<typeof ChatHeader>;

export const Default: Story = {
  args: {
    isNew: false,
  },
};

export const NewGoal: Story = {
  args: {
    isNew: true,
  },
};
