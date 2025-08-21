import type { Meta, StoryObj } from '@storybook/nextjs';

import UserInfo from './UserInfo';

const meta: Meta<typeof UserInfo> = {
  component: UserInfo,
  title: 'organisms/AuthForm/components/UserInfo',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof UserInfo>;

export const Default: Story = {
  args: {},
};
