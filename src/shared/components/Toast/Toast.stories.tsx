import type { Meta, StoryObj } from '@storybook/nextjs';

import Toast from './Toast';

const meta: Meta<typeof Toast> = {
  component: Toast,
  title: 'molecules/Toast',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    message: '할 일을 완료했어요! 🎉',
  },
};
