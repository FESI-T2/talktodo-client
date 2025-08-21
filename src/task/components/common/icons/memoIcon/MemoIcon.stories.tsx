import type { Meta, StoryObj } from '@storybook/nextjs';

import MemoIcon from './MemoIcon';

const meta: Meta<typeof MemoIcon> = {
  component: MemoIcon,
  title: 'icons/Memo',
  tags: ['autodocs'],
  argTypes: {
    active: {
      control: 'radio',
      options: ['on', 'off'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof MemoIcon>;

export const MemoIconOn: Story = {
  args: {
    active: 'on',
  },
};
