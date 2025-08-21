// Clock.stories.tsx

import type { Meta, StoryObj } from '@storybook/nextjs';

import Clock from './Clock';

const meta: Meta<typeof Clock> = {
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
  args: {
    size: 'L',
    active: false,
  },
};

export const LargeActive: Story = {
  args: {
    size: 'L',
    active: true,
  },
};

export const SmallInactive: Story = {
  args: {
    size: 'S',
    active: false,
  },
};

export const SmallActive: Story = {
  args: {
    size: 'S',
    active: true,
  },
};
