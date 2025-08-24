import type { Meta, StoryObj } from '@storybook/nextjs';

import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'atoms/CommonButton',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: '선택 완료',
    className: 'max-w-[400px]',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: '선택 완료',
    className: 'max-w-[400px]',
  },
};
