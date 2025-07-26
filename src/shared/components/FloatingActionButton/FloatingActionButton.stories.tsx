import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import FloatingActionButton from './FloatingActionButton';

const meta: Meta<typeof FloatingActionButton> = {
  title: 'Atoms/FloatingActionButton',
  component: FloatingActionButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['L', 'S'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof FloatingActionButton>;

export const Large: Story = {
  args: {
    size: 'L',
  },
};

export const Small: Story = {
  args: {
    size: 'S',
  },
};
