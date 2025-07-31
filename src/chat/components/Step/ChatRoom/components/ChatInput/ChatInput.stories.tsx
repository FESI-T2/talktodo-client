import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ChatInput from './ChatInput';

const meta: Meta<typeof ChatInput> = {
  title: 'AITodo/ChatInput',
  component: ChatInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChatInput>;

export const Default: Story = {};
