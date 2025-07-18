// ProgressBar.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ProgressBar from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'ProgressBar',
  component: ProgressBar,
  argTypes: {
    percent: { control: { type: 'number', min: 0, max: 100 }, defaultValue: 0 },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Zero: Story = {
  args: {
    percent: 0,
  },
};

export const Half: Story = {
  args: {
    percent: 50,
  },
};

export const Full: Story = {
  args: {
    percent: 100,
  },
};
