import type { Meta, StoryObj } from '@storybook/nextjs';

import GoalImg from './GoalImg';

const meta: Meta<typeof GoalImg> = {
  component: GoalImg,
  title: 'icons/GoalImg',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof GoalImg>;

export const Default: Story = {
  args: {},
};
