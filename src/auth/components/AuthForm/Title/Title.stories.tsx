import type { Meta, StoryObj } from '@storybook/nextjs';

import Title from './Title';

const meta: Meta<typeof Title> = {
  component: Title,
  title: 'organisms/AuthForm/components/Title',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {},
};
export const WithTitle: Story = {
  args: {
    title: 'Profile Title',
  },
};
