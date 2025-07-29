<<<<<<< HEAD
=======
// Clock.stories.tsx

>>>>>>> 3eea873 (feat: 새 아이콘 구성 요소 추가 및 기존 구성 요소 업데이트)
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Clock from './Clock';

const meta: Meta<typeof Clock> = {
<<<<<<< HEAD
  component: Clock,
  title: 'icons/Clock',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['L', 'S'],
    },
    active: {
      control: { type: 'boolean' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Clock>;

export const Default: Story = {
=======
  title: 'Icons/Clock',
  component: Clock,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '시계 형태의 SVG 아이콘입니다. 사이즈 및 활성화 여부를 props로 조절할 수 있습니다.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['L', 'S'],
      description: '아이콘 크기(L: 24px, S: 20px)',
      table: {
        type: { summary: "'L' | 'S'" },
        defaultValue: { summary: 'L' },
      },
    },
    active: {
      control: 'boolean',
      description: '활성화(white) 여부',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'L' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Clock>;

export const LargeInactive: Story = {
>>>>>>> 3eea873 (feat: 새 아이콘 구성 요소 추가 및 기존 구성 요소 업데이트)
  args: {
    size: 'L',
    active: false,
  },
};

<<<<<<< HEAD
export const Active: Story = {
=======
export const LargeActive: Story = {
>>>>>>> 3eea873 (feat: 새 아이콘 구성 요소 추가 및 기존 구성 요소 업데이트)
  args: {
    size: 'L',
    active: true,
  },
};

<<<<<<< HEAD
export const Small: Story = {
=======
export const SmallInactive: Story = {
>>>>>>> 3eea873 (feat: 새 아이콘 구성 요소 추가 및 기존 구성 요소 업데이트)
  args: {
    size: 'S',
    active: false,
  },
};
<<<<<<< HEAD
=======

export const SmallActive: Story = {
  args: {
    size: 'S',
    active: true,
  },
};
>>>>>>> 3eea873 (feat: 새 아이콘 구성 요소 추가 및 기존 구성 요소 업데이트)
