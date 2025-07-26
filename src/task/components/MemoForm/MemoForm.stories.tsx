import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import MemoForm from './MemoForm';

const meta: Meta<typeof MemoForm> = {
  component: MemoForm,
  title: 'MemoForm',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof MemoForm>;

export const Default: Story = {
  args: {},
};
