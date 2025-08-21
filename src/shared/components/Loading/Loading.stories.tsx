import type { Meta, StoryObj } from '@storybook/nextjs';

import Loading from './Loading';

const meta: Meta<typeof Loading> = {
  component: Loading,
  title: 'molecules/Loading',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: {},
};
