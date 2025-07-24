import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Kebab from './Kebab';

const meta: Meta<typeof Kebab> = {
  component: Kebab,
  title: 'atoms/Kebab',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Kebab>;

export const Default: Story = {
  args: {},
};
