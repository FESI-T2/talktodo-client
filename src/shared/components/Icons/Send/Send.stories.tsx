import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Send from './Send';

const meta: Meta<typeof Send> = {
  component: Send,
  title: 'icons/Send',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Send>;

export const Default: Story = {
  args: {},
};
