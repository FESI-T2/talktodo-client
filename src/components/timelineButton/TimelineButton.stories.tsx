import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import TimelineButton from './timelineButton';

const meta: Meta<typeof TimelineButton> = {
  title: 'Atoms/TimelineButton',
  component: TimelineButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['L', 'S'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TimelineButton>;

export const Large: Story = {
  args: {
    size: 'L',
  },
};

export const Small: Story = {
  args: {
    size: 'S',
  },
};
