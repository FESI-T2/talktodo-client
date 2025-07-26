import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import UserInfo from './UserInfo';

const meta: Meta<typeof UserInfo> = {
  component: UserInfo,
  title: 'molecules/AuthForm/UserInfo',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof UserInfo>;

export const Default: Story = {
  args: {},
};
