import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Calendar from './Calendar';

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: 'icons/Calendar',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {},
};
