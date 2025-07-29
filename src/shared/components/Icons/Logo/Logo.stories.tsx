import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Logo from './Logo';

const meta: Meta<typeof Logo> = {
  component: Logo,
  title: 'icons/Logo',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {},
};

export const Rotate: Story = {
  args: {
    isRotate: true,
  },
};
