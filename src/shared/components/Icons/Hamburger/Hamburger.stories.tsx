// Hamburger.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Hamburger from './Hamburger';

const meta: Meta<typeof Hamburger> = {
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

export default meta;

type Story = StoryObj<typeof Hamburger>;

export const Default: Story = {
  name: '기본 햄버거 아이콘',
};
