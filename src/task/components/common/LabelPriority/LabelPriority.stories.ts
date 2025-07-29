import { Meta, StoryObj } from '@storybook/nextjs-vite';

import LabelPriority from './LabelPriority';

const meta: Meta<typeof LabelPriority> = {
  component: LabelPriority,
  title: 'organisms/Card/components/LabelPriority',
  tags: ['autodocs'],
  argTypes: {
    priority: {
      control: 'radio',
      options: ['중요', '보통', '낮음'],
    },
    size: {
      control: 'radio',
      options: ['S', 'M', 'L'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof LabelPriority>;

export const HighPrioritySmall: Story = {
  args: {
    priority: '중요',
    size: 'S',
  },
};
