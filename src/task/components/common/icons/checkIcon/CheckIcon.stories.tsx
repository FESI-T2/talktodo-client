import type { Meta, StoryObj } from '@storybook/nextjs';

import CheckIcon from './CheckIcon';

const meta: Meta<typeof CheckIcon> = {
  component: CheckIcon,
  title: 'icons/CheckIcon',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['S', 'L'],
    },
    state: {
      control: 'radio',
      options: ['on', 'off'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof CheckIcon>;

export const CheckIconLargeOn: Story = {
  args: {
    size: 'L',
    state: 'on',
  },
};
