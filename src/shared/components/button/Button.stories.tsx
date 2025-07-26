import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'atoms/Button',
  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: ['add', 'edit', 'delete'],
    },
    size: {
      control: 'radio',
      options: ['large', 'small'],
    },
    state: {
      control: 'radio',
      options: ['default', 'active'],
    },
    icon: {
      table: { disable: true },
    },
    children: { table: { disable: true } },
    isIconOnly: {},
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryButton: Story = {
  args: {
    variant: 'add',
    size: 'large',
    state: 'default',
  },
};

export const ActiveButton: Story = {
  args: {
    variant: 'add',
    size: 'large',
    state: 'active',
  },
};
