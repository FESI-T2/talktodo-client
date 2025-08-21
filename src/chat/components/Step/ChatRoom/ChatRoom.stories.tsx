import type { Meta, StoryObj } from '@storybook/nextjs';

import { StepProvider } from '@/chat/provider/StepProvider';

import ChatRoom from './ChatRoom';

const meta: Meta<typeof ChatRoom> = {
  component: ChatRoom,
  title: 'Template/Chat/Step/ChatRoom',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <StepProvider>
        <div>
          <Story />
        </div>
      </StepProvider>
    ),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ChatRoom>;

export const Default: Story = {
  args: {
    goal: '새로운 목표 만들기',
  },
};
