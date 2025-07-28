import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import FoldLeft from './FoldLeft';

const meta: Meta<typeof FoldLeft> = {
  component: FoldLeft,
  title: 'icons/FoldLeft',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof FoldLeft>;

export const Default: Story = {
  args: {},
};
