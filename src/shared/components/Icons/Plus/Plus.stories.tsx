<<<<<<< HEAD
=======
// components/icons/Plus.stories.tsx
>>>>>>> 3eea873 (feat: 새 아이콘 구성 요소 추가 및 기존 구성 요소 업데이트)
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Plus from './Plus';

const meta: Meta<typeof Plus> = {
<<<<<<< HEAD
  component: Plus,
  title: 'icons/Plus',
  tags: ['autodocs'],
=======
  title: 'Icons/Plus',
  component: Plus,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Sidebar 와 FAB 타입에 따라 다른 크기와 스타일의 Plus 아이콘을 렌더링합니다.',
      },
    },
  },
>>>>>>> 3eea873 (feat: 새 아이콘 구성 요소 추가 및 기존 구성 요소 업데이트)
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['Sidebar', 'FAB'],
<<<<<<< HEAD
    },
  },
};
=======
      description: '아이콘 타입 선택',
    },
  },
};

>>>>>>> 3eea873 (feat: 새 아이콘 구성 요소 추가 및 기존 구성 요소 업데이트)
export default meta;

type Story = StoryObj<typeof Plus>;

export const Sidebar: Story = {
<<<<<<< HEAD
  args: {
    type: 'Sidebar',
  },
};

export const FAB: Story = {
  args: {
    type: 'FAB',
  },
=======
  args: { type: 'Sidebar' },
};

export const FAB: Story = {
  args: { type: 'FAB' },
>>>>>>> 3eea873 (feat: 새 아이콘 구성 요소 추가 및 기존 구성 요소 업데이트)
};
