import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Home from './Home';

const meta: Meta<typeof Home> = {
  component: Home,
  title: 'icons/Home',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Home>;

export const Default: Story = {
  args: {},
};
