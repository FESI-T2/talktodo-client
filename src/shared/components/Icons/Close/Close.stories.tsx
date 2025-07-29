import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Close from './Close';

const meta: Meta<typeof Close> = {
  component: Close,
  title: 'icons/Close',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Close>;

export const Default: Story = {
  args: {},
};
