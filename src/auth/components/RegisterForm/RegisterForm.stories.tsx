import type { Meta, StoryObj } from '@storybook/nextjs';

import RegisterForm from './RegisterForm';

const meta: Meta<typeof RegisterForm> = {
  component: RegisterForm,
  title: 'organisms/AuthForm/RegisterForm',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {
  args: {},
};
