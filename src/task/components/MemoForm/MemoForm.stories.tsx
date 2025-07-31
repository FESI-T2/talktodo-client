import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import MemoForm from './MemoForm';

const meta: Meta<typeof MemoForm> = {
  component: MemoForm,
  title: 'organisms/Forms/MemoForm',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof MemoForm>;

export const Default: Story = {
  render: () => {
    return (
      <div className='w-[480px]'>
        <MemoForm />
      </div>
    );
  },
};
