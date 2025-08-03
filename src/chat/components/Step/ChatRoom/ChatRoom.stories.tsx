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
    title: '새로운 목표 만들기',
  },
};
