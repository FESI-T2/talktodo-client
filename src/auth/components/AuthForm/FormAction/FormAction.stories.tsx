import type { Meta, StoryObj } from '@storybook/nextjs';

import FormAction from './FormAction';

const meta: Meta<typeof FormAction> = {
  component: FormAction,
  title: 'organisms/AuthForm/components/FormAction',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof FormAction>;

export const Default: Story = {
  args: {},
};
