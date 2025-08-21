// Flag.stories.tsx

import type { Meta, StoryObj } from '@storybook/nextjs';

import Flag from './Flag';

const meta: Meta<typeof Flag> = {
  title: 'Icons/Flag',
  component: Flag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '유형별(PC, Mobile, goal, chat) SVG 아이콘 컴포넌트입니다. PC/Mobile의 경우 color 지정 가능하며, 각 타입에 맞는 SVG로 렌더링됩니다.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['PC', 'Mobile', 'goal', 'chat'],
      description: '아이콘 유형',
      table: {
        type: { summary: "'PC' | 'Mobile' | 'goal' | 'chat'" },
        defaultValue: { summary: 'PC' },
      },
    },
    color: {
      control: 'inline-radio',
      options: ['#29252B', '#FFFFFF'],
      description: '아이콘 색상 (goal/chat 제외)',
      table: {
        type: { summary: "'#29252B' | '#FFFFFF'" },
        defaultValue: { summary: '#29252B' },
      },
      if: { arg: 'type', neq: ['goal', 'chat'] }, // goal, chat은 고정컬러 가이드
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flag>;

/** Default: PC (검정) */
export const PC: Story = { args: { type: 'PC', color: '#29252B' } };
/** PC - 하양 */
export const PCWhite: Story = { args: { type: 'PC', color: '#FFFFFF' } };
/** Mobile - 검정 */
export const Mobile: Story = { args: { type: 'Mobile', color: '#29252B' } };
/** Mobile - 하양 */
export const MobileWhite: Story = { args: { type: 'Mobile', color: '#FFFFFF' } };
/** goal 아이콘 (컬러 고정) */
export const Goal: Story = { args: { type: 'goal' } };
/** chat 아이콘 (컬러 고정) */
export const Chat: Story = { args: { type: 'chat' } };
