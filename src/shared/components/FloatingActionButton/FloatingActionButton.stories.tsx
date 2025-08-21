import type { Meta, StoryObj } from '@storybook/nextjs';

import FloatingActionButton from './FloatingActionButton';

const meta: Meta<typeof FloatingActionButton> = {
  title: 'Atoms/FloatingActionButton',
  component: FloatingActionButton,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof FloatingActionButton>;

export const Default: Story = {};
