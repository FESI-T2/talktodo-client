import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Delete from './Delete';

const meta: Meta<typeof Delete> = {
  component: Delete,
  title: 'icons/Delete',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Delete>;

export const Default: Story = {
  args: {},
};
