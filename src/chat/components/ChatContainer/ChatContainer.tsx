'use client';
import React, { useState } from 'react';

import { NOT_SELECT_GOAL } from '@/chat/constants/index';

import { StepProvider } from '@/chat/provider/StepProvider';

import { TaskSchedule } from '@/chat/types/index';
import useGetAllGoal from '@/goal/hooks/quries/goal/useGetAllGoal';
import { Goal } from '@/goal/types/index';

import StepContainer from '../RenderContainer/StepContainer';

const ChatContainer = () => {
  const { data } = useGetAllGoal();
  const [goals] = useState<Goal[]>(data.data.result);
  const [selectedGoalIdx, setSelectedGoalIdx] = useState<number>(NOT_SELECT_GOAL);

  const selectedGoal = selectedGoalIdx !== NOT_SELECT_GOAL ? goals[selectedGoalIdx].goalName : '새로운 목표 만들기';

  const [taskSchedules, setTaskSchedules] = useState<TaskSchedule[]>([]);

  const handleSelectGoal = (selectedGoalIdx: number) => {
    setSelectedGoalIdx(selectedGoalIdx);
  };

  const handleSetTaskSchedules = (task: TaskSchedule) => {
    setTaskSchedules((prev) => [...prev, task]);
  };

  const resetTaskSchedules = () => {
    setTaskSchedules([]);
  };

  return (
    <StepProvider>
      <StepContainer
        goals={goals}
        selectedGoalIdx={selectedGoalIdx}
        handleSelectGoal={handleSelectGoal}
        handleSetTaskSchedules={handleSetTaskSchedules}
        selectedGoal={selectedGoal}
        taskSchedules={taskSchedules}
        resetTaskSchedules={resetTaskSchedules}
      />
    </StepProvider>
  );
};

export default ChatContainer;
