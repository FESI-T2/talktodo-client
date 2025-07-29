import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import FoldRight from './FoldRight';

const meta: Meta<typeof FoldRight> = {
  component: FoldRight,
  title: 'icons/FoldRight',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof FoldRight>;

export const Default: Story = {
  args: {},
};
