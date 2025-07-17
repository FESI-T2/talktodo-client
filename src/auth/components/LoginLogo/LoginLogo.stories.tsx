import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import LoginLogo from './LoginLogo';

const meta: Meta<typeof LoginLogo> = {
  component: LoginLogo,
  title: 'LoginLogo',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof LoginLogo>;

export const Default: Story = {
  args: {},
};
