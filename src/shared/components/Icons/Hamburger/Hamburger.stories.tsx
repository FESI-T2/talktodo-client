import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Hamburger from './Hamburger';

const meta: Meta<typeof Hamburger> = {
  component: Hamburger,
  title: 'icons/Hamburger',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Hamburger>;

export const Default: Story = {
  args: {},
};
