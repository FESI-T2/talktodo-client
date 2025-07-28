import { Meta, StoryObj } from '@storybook/nextjs-vite';

import GoalProgressBar from './GoalProgressBar';
import { ProgressViewModel } from './hooks/ProgressViewModel';

const meta: Meta<typeof GoalProgressBar> = {
  title: 'molecules/GoalProgressBar',
  component: GoalProgressBar,
};

export default meta;

export type Story = StoryObj<typeof GoalProgressBar>;

export const InProgress: Story = {
  args: {
    viewModel: new ProgressViewModel(1, 4),
  },
};

export const Complete: Story = {
  args: {
    viewModel: new ProgressViewModel(4, 4),
  },
};
