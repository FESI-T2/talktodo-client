import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Clock from './Clock';

const meta: Meta<typeof Clock> = {
  component: Clock,
  title: 'icons/Clock',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['L', 'S'],
    },
    active: {
      control: { type: 'boolean' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Clock>;

export const Default: Story = {
  args: {
    size: 'L',
    active: false,
  },
};

export const Active: Story = {
  args: {
    size: 'L',
    active: true,
  },
};

export const Small: Story = {
  args: {
    size: 'S',
    active: false,
  },
};
