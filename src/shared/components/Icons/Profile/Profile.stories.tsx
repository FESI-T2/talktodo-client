<<<<<<< HEAD
=======
// components/icons/Profile.stories.tsx
>>>>>>> 3eea873 (feat: 새 아이콘 구성 요소 추가 및 기존 구성 요소 업데이트)
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Profile from './Profile';

const meta: Meta<typeof Profile> = {
<<<<<<< HEAD
  component: Profile,
  title: 'icons/Profile',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Profile>;

export const Default: Story = {
  args: {},
};
=======
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
>>>>>>> 3eea873 (feat: 새 아이콘 구성 요소 추가 및 기존 구성 요소 업데이트)
