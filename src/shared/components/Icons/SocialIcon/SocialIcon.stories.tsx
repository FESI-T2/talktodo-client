import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import SocialIcon from './SocialIcon';

const meta: Meta<typeof SocialIcon> = {
  component: SocialIcon,
  title: 'icons/SocialIcon',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof SocialIcon>;

export const Google: Story = {
  args: {
    variant: 'google',
  },
};

export const Kakao: Story = {
  args: {
    variant: 'kakao',
  },
};

export const Naver: Story = {
  args: {
    variant: 'naver',
  },
};
