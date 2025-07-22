import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import AuthButton from './AuthButton';

const meta: Meta<typeof AuthButton> = {
  component: AuthButton,
  title: 'atoms/AuthButton',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof AuthButton>;

export const Kakao: Story = {
  args: {
    variant: 'kakao',
    content: '카카오 로그인',
  },
};

export const Google: Story = {
  args: {
    variant: 'google',
    content: '구글 로그인',
  },
};

export const Naver: Story = {
  args: {
    variant: 'naver',
    content: '네이버 로그인',
  },
};
