import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ChatHeader from './ChatHeader';

const meta: Meta<typeof ChatHeader> = {
  title: 'AITodo/ChatHeader',
  component: ChatHeader,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChatHeader>;

export const Default: Story = {
  args: {
    title: '자바스크립트로 웹 서비스 만들기',
    goToPrevStep: () => console.log('Go to previous step'),
  },
};
