import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import MainLogo from './MainLogo';

const meta: Meta<typeof MainLogo> = {
  component: MainLogo,
  title: 'icons/MainLogo',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['PC', 'Mobile'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof MainLogo>;

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
