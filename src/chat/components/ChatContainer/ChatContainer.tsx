'use client';
import React, { useState } from 'react';

import { match } from 'ts-pattern';

import { ChatRoom, Result, TaskSelector } from '@/chat/components/Step/index';
import { NOT_SELECT_GOAL, STEP_TASK } from '@/chat/constants/index';

import { mockGoalsArray } from '@/chat/mocks/goal';
import { useStepContext } from '@/chat/provider/StepProvider';
import { Goal } from '@/chat/types';

/** 차후에 분리 예정  */

const ChatContainer = () => {
  const [goals] = useState<Goal[]>(mockGoalsArray);
  const [selectedGoalIdx, setSelectedGoalIdx] = useState<number>(NOT_SELECT_GOAL);

  const { currentStep } = useStepContext();

  const handleSelectGoal = (selectedGoalIdx: number) => {
    setSelectedGoalIdx(selectedGoalIdx);
  };

  const renderStep = () => {
    return match(currentStep)
      .with(STEP_TASK.selectTask, () => (
        <TaskSelector goals={goals} selectedGoalIdx={selectedGoalIdx} handleSelectGoal={handleSelectGoal} />
      ))
      .with(STEP_TASK.chat, () => (
        <ChatRoom title={selectedGoalIdx !== NOT_SELECT_GOAL ? goals[selectedGoalIdx].title : '새로운 목표 만들기'} />
      ))
      .with(STEP_TASK.result, () => <Result />)
      .otherwise(() => null);
  };

  return <>{renderStep()}</>;
};

export default ChatContainer;
