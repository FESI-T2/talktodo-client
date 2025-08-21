import type { Meta, StoryObj } from '@storybook/nextjs';

import SocialInfo from './SocialInfo';

const meta: Meta<typeof SocialInfo> = {
  component: SocialInfo,
  title: 'organisms/AuthForm/components/SocialInfo',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof SocialInfo>;

export const Default: Story = {
  args: {},
};
