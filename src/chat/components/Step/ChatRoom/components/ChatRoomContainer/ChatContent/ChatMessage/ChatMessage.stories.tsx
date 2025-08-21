import type { Meta, StoryObj } from '@storybook/nextjs';

import ChatMessage from './ChatMessage';

const meta: Meta<typeof ChatMessage> = {
  component: ChatMessage,
  title: 'atoms/ChatMessage',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ChatMessage>;

export const User: Story = {
  args: {
    message: '안녕하세요! 도움이 필요하신가요?',
    role: 'user',
  },
};

export const Assistant: Story = {
  args: {
    message: '안녕하세요! 무엇을 도와드릴까요?',
    role: 'assistant',
  },
};
