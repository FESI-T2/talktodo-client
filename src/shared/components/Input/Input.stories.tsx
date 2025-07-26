import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Input from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'atoms/Input',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {},
};
