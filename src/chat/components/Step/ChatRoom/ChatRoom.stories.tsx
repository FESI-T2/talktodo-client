import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ChatRoom from './ChatRoom';

const meta: Meta<typeof ChatRoom> = {
  component: ChatRoom,
  title: 'Template/Chat/Step/ChatRoom',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ChatRoom>;

export const Default: Story = {
  args: {
    messages: [
      { message: '안녕하세요!', role: 'user' },
      { message: '안녕하세요! 무엇을 도와드릴까요?', role: 'assistant' },
    ],
    onSendMessage: (message: string) => console.log('메시지 전송:', message),
    goToPrevStep: () => console.log('이전 단계로 이동'),
  },
};
