import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Alert from './Alert';

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'icons/Alert',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {},
};
