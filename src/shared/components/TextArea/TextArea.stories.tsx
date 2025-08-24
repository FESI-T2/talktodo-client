import type { Meta, StoryObj } from '@storybook/nextjs';

import TextArea from './TextArea';

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: 'atoms/TextArea',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    className: 'max-w-[400px]',
  },
};
