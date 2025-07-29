// DetailHeader.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import DetailHeader from './DetailHeader';

const meta: Meta<typeof DetailHeader> = {
  title: 'organisms/Header/DetailHeader',
  component: DetailHeader,
  argTypes: {
    percent: { control: { type: 'number', min: 0, max: 100 }, defaultValue: 0 },
  },
};

export default meta;
type Story = StoryObj<typeof DetailHeader>;

export const Zero: Story = {
  args: {
    percent: 0,
    IncompleteTodo: 0,
    completedTodo: 0,
    category: '디자인시스템 강의 완강',
  },
};

export const Half: Story = {
  args: {
    percent: 50,
    IncompleteTodo: 2,
    completedTodo: 2,
    category: '디자인시스템 강의 완강',
  },
};

export const Full: Story = {
  args: {
    percent: 100,
    IncompleteTodo: 0,
    completedTodo: 10,
    category: '디자인시스템 강의 완강',
  },
};
