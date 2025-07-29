// components/icons/Plus.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Plus from './Plus';

const meta: Meta<typeof Plus> = {
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
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['Sidebar', 'FAB'],
      description: '아이콘 타입 선택',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Plus>;

export const Sidebar: Story = {
  args: { type: 'Sidebar' },
};

export const FAB: Story = {
  args: { type: 'FAB' },
};
