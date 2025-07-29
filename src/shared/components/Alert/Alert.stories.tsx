import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Alert from './Alert';

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'molecules/Alert',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    message: '변경사항이 저장되었습니다.',
  },
};
