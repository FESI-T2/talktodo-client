// ChatCharacter.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs';

import ChatCharacter from './ChatCharacter';

const meta: Meta<typeof ChatCharacter> = {
  title: 'Icons/ChatCharacter',
  component: ChatCharacter,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ChatCharacter>;

export const Default: Story = {
  render: () => <ChatCharacter />,
};
