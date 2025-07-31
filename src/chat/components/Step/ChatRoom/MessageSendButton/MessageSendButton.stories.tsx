import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import MessageSendButton from './MessageSendButton';

const meta: Meta<typeof MessageSendButton> = {
  title: 'AITodo/MessageSendButton',
  component: MessageSendButton,
  tags: ['autodocs'],
  args: {},
};

export default meta;
type Story = StoryObj<typeof MessageSendButton>;

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
