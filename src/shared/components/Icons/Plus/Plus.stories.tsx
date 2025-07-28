import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Plus from './Plus';

const meta: Meta<typeof Plus> = {
  component: Plus,
  title: 'icons/Plus',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['Sidebar', 'FAB'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Plus>;

export const Sidebar: Story = {
  args: {
    type: 'Sidebar',
  },
};

export const FAB: Story = {
  args: {
    type: 'FAB',
  },
};
