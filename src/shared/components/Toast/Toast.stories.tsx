import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Toast from './Toast';

const meta: Meta<typeof Toast> = {
  component: Toast,
  title: 'atoms/Toast',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'warning', 'error'],
    },
    message: {
      control: 'text',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    message: '성공적으로 완료되었습니다!',
    variant: 'success',
    onClose: () => console.log('Success toast closed'),
  },
};

export const Warning: Story = {
  args: {
    message: '주의: 입력 내용을 확인해주세요',
    variant: 'warning',
    onClose: () => console.log('Warning toast closed'),
  },
};

export const Error: Story = {
  args: {
    message: '오류: 문제가 발생했습니다',
    variant: 'error',
    onClose: () => console.log('Error toast closed'),
  },
};
