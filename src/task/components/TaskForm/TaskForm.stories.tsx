import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import TaskForm from './TaskForm';

const meta: Meta<typeof TaskForm> = {
  component: TaskForm,
  title: 'organisms/form/TaskForm',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TaskForm>;

export const Default: Story = {
  args: {},
};
