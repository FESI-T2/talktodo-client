import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import SocialInfo from './SocialInfo';

const meta: Meta<typeof SocialInfo> = {
  component: SocialInfo,
  title: 'molecules/AuthFormSocialInfo',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof SocialInfo>;

export const Default: Story = {
  args: {},
};
