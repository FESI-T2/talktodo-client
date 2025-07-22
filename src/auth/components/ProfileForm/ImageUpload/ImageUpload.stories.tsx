import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ImageUpload from './ImageUpload';

const meta: Meta<typeof ImageUpload> = {
  component: ImageUpload,
  title: 'atoms/ImageUpload',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ImageUpload>;

export const Default: Story = {
  args: {},
};
