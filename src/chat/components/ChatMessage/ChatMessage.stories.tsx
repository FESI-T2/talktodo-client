import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ChatMessage from './ChatMessage';

const meta: Meta<typeof ChatMessage> = {
  title: 'AITodo/ChatMessage',
  component: ChatMessage,
  tags: ['autodocs'],
  args: {
    message: '이것은 일반적인 채팅 메시지입니다.',
  },
};

export default meta;
type Story = StoryObj<typeof ChatMessage>;

export const ChatState: Story = {
  args: {
    state: 'chat',
    message: '‘챕터 5 복습’ 일정을 언제로 잡을까요?',
  },
};

export const FinishState: Story = {
  args: {
    state: 'finish',
    message: '말해주신 내용으로 목표를 정하고, 할 일을 정리해볼게요!',
  },
};
