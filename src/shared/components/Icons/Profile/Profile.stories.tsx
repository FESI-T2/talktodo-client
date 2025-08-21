// components/icons/Profile.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs';

import Profile from './Profile';

const meta: Meta<typeof Profile> = {
  title: 'Icons/Profile',
  component: Profile,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '사용자 프로필을 나타내는 원형 배경의 아이콘 컴포넌트입니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Profile>;

export const Default: Story = {};
