import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Profile from './Profile';

const meta: Meta<typeof Profile> = {
  component: Profile,
  title: 'icons/Profile',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Profile>;

export const Default: Story = {
  args: {},
};
