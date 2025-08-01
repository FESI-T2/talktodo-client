import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Result from './Result';

const meta: Meta<typeof Result> = {
  component: Result,
  title: 'Template/Chat/Step/Result',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Result>;

export const Default: Story = {
  args: {
    goToPrevStep: () => console.log('이전 단계로 이동'),
  },
};
