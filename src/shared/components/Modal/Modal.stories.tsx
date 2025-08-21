import type { Meta, StoryObj } from '@storybook/nextjs';

import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'molecules/Modal',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => console.log('Modal closed'),
    children: <div className='h-[300px] w-[300px] bg-white rounded shadow-lg'>모달입니당</div>,
  },
};
