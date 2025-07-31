import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import TaskForm from './TaskForm';

const meta: Meta<typeof TaskForm> = {
  component: TaskForm,
  title: 'organisms/Forms/TaskForm',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TaskForm>;

export const Default: Story = {
  render: () => {
    return (
      <div className='w-[480px]'>
        <TaskForm />
      </div>
    );
  },
};
