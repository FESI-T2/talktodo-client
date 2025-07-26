import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ProfileUpload from './ProfileUpload';

const meta: Meta<typeof ProfileUpload> = {
  component: ProfileUpload,
  title: 'molecules/AuthFormProfileUpload',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ProfileUpload>;

export const Default: Story = {
  args: {},
};
