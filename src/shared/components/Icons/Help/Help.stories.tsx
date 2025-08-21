import type { Meta, StoryObj } from '@storybook/nextjs';

import Help from './Help';

const meta: Meta<typeof Help> = {
  component: Help,
  title: 'icons/Help',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Help>;

export const Default: Story = {
  render: () => <Help />,
};
