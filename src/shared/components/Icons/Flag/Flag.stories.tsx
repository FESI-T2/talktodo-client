import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Flag from './Flag';

const meta: Meta<typeof Flag> = {
  component: Flag,
  title: 'icons/Flag',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['PC', 'Mobile', 'goal'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Flag>;

export const PC: Story = {
  args: {
    type: 'PC',
  },
};

export const Mobile: Story = {
  args: {
    type: 'Mobile',
  },
};

export const Goal: Story = {
  args: {
    type: 'goal',
  },
};
