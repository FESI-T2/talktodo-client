import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import FormAction from './FormAction';

const meta: Meta<typeof FormAction> = {
  component: FormAction,
  title: 'molecules/AuthForm/FormAction',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof FormAction>;

export const Default: Story = {
  args: {},
};
