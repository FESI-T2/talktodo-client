// components/icons/MainLogo.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import MainLogo from './MainLogo';

const meta: Meta<typeof MainLogo> = {
  title: 'Icons/MainLogo',
  component: MainLogo,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'PC 및 Mobile 환경에 따라 다르게 렌더링되는 메인 로고 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['PC', 'Mobile'],
      description: '디바이스 타입에 따른 로고 렌더링',
    },
  },
};

export default meta;

type Story = StoryObj<typeof MainLogo>;

export const PC: Story = {
  args: {
    type: 'PC',
  },
};

export const Mobile: Story = {
  args: {
    type: 'Mobile',
  },
};
