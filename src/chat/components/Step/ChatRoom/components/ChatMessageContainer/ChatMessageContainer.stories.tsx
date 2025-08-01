import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ChatMessageContainer from '../ChatMessageContainer/ChatMessageContainer';

const meta: Meta<typeof ChatMessageContainer> = {
  title: 'AITodo/ChatMessageContainer',
  component: ChatMessageContainer,
  tags: ['autodocs'],
  args: {
    message: '도움을 드릴 준비가 되어 있어요!',
  },
};

export default meta;
type Story = StoryObj<typeof ChatMessageContainer>;

export const AssistantMessage: Story = {
  args: {
    role: 'assistant',
  },
};

export const UserMessage: Story = {
  args: {
    role: 'user',
  },
};
