import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Chevron from './Chevron';

const meta: Meta<typeof Chevron> = {
  component: Chevron,
  title: 'icons/Chevron',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Chevron>;

export const Left: Story = {
  args: {
    direction: 'left',
  },
};

export const Right: Story = {
  args: {
    direction: 'right',
  },
};
