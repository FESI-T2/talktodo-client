<<<<<<< HEAD
=======
// Hamburger.stories.tsx
>>>>>>> 3eea873 (feat: 새 아이콘 구성 요소 추가 및 기존 구성 요소 업데이트)
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Hamburger from './Hamburger';

const meta: Meta<typeof Hamburger> = {
<<<<<<< HEAD
  component: Hamburger,
  title: 'icons/Hamburger',
  tags: ['autodocs'],
};
=======
  title: 'Icons/Hamburger',
  component: Hamburger,
  parameters: {
    docs: {
      description: {
        component: '기본 햄버거 아이콘입니다. 세 줄의 수평 막대가 있는 메뉴 토글용 아이콘입니다.',
      },
    },
  },
  tags: ['autodocs'],
};

>>>>>>> 3eea873 (feat: 새 아이콘 구성 요소 추가 및 기존 구성 요소 업데이트)
export default meta;

type Story = StoryObj<typeof Hamburger>;

export const Default: Story = {
<<<<<<< HEAD
  args: {},
=======
  name: '기본 햄버거 아이콘',
>>>>>>> 3eea873 (feat: 새 아이콘 구성 요소 추가 및 기존 구성 요소 업데이트)
};
