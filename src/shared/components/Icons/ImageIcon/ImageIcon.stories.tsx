import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Image from './ImageIcon';

const meta: Meta<typeof Image> = {
  component: Image,
  title: 'icons/Image',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {},
};
