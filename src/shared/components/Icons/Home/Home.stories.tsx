<<<<<<< HEAD
=======
// Home.stories.tsx
>>>>>>> 3eea873 (feat: 새 아이콘 구성 요소 추가 및 기존 구성 요소 업데이트)
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Home from './Home';

const meta: Meta<typeof Home> = {
<<<<<<< HEAD
  component: Home,
  title: 'icons/Home',
  tags: ['autodocs'],
  argTypes: {},
};
=======
  title: 'Icons/Home',
  component: Home,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Home 아이콘 컴포넌트입니다. `type` prop에 따라 PC 또는 Mobile 버전의 SVG 아이콘을 렌더링합니다.',
      },
    },
  },
  argTypes: {
    type: {
      description: '아이콘 타입을 지정합니다',
      control: { type: 'radio' },
      options: ['PC', 'Mobile'],
    },
  },
};

>>>>>>> 3eea873 (feat: 새 아이콘 구성 요소 추가 및 기존 구성 요소 업데이트)
export default meta;

type Story = StoryObj<typeof Home>;

<<<<<<< HEAD
export const Default: Story = {
  args: {},
=======
export const PC: Story = {
  args: {
    type: 'PC',
  },
  name: 'PC 버전',
  parameters: {
    docs: {
      description: {
        story: 'PC 화면용 Home 아이콘입니다.',
      },
    },
  },
};

export const Mobile: Story = {
  args: {
    type: 'Mobile',
  },
  name: 'Mobile 버전',
  parameters: {
    docs: {
      description: {
        story: 'Mobile 화면용 Home 아이콘입니다.',
      },
    },
  },
>>>>>>> 3eea873 (feat: 새 아이콘 구성 요소 추가 및 기존 구성 요소 업데이트)
};
