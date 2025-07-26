import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ProfileForm from './ProfileForm';

const meta: Meta<typeof ProfileForm> = {
  component: ProfileForm,
  title: 'organisms/AuthForm/ProfileForm',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ProfileForm>;

export const Default: Story = {
  args: {},
};
