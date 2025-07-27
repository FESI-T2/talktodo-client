import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ChatMessageContainer from './ChatMessageContainer';

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
    state: 'chat',
    role: 'assistant',
  },
};

export const UserMessage: Story = {
  args: {
    state: 'chat',
    role: 'user',
  },
};

export const AssistantFinishMessage: Story = {
  args: {
    state: 'finish',
    role: 'assistant',
  },
};
