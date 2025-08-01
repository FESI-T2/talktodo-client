import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React, { useState } from 'react';

import { NOT_SELECT_GOAL } from '@/chat/constants/index';
import { mockGoalsArray } from '@/chat/mocks/goal';
import { Goal } from '@/chat/types';

import TaskSelector from './TaskSelector';

const meta: Meta<typeof TaskSelector> = {
  component: TaskSelector,
  title: 'Template/Chat/Step/TaskSelector',
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof TaskSelector>;

export const Default: Story = {
  render: () => {
    const [goals] = useState<Goal[]>(mockGoalsArray);
    const [selectedGoalIdx, setSelectedGoalIdx] = useState<number>(NOT_SELECT_GOAL);

    return (
      <TaskSelector
        goals={goals}
        selectedGoalIdx={selectedGoalIdx}
        handleSelectGoal={(idx: number) => setSelectedGoalIdx(idx)}
        goToChatStep={() => console.log('채팅으로 이동')}
      />
    );
  },
};
