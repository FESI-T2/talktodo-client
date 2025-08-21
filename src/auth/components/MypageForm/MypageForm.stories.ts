import type { Meta, StoryObj } from '@storybook/nextjs';

import MypageForm from './MypageForm';

const meta: Meta<typeof MypageForm> = {
  component: MypageForm,
  title: 'organisms/AuthForm/MypageForm',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof MypageForm>;

export const Default: Story = {
  args: {},
};
