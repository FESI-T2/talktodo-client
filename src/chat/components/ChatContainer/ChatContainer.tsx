'use client';
import React, { useState } from 'react';

import { NOT_SELECT_GOAL } from '@/chat/constants/index';
import { StepProvider } from '@/chat/provider/StepProvider';
import { TaskSchedule } from '@/chat/types/index';
import useGetAllGoal from '@/goal/hooks/quries/goal/useGetAllGoal';
import { Goal } from '@/goal/types/index';
import Loading from '@/shared/components/Loading/Loading';

import StepContainer from '../RenderContainer/StepContainer';

const ChatContainer = () => {
  const { data, isLoading } = useGetAllGoal();

  // 데이터 없을 때는 빈 배열로 초기화

  const [selectedGoalIdx, setSelectedGoalIdx] = useState<number>(NOT_SELECT_GOAL);
  const [taskSchedules, setTaskSchedules] = useState<TaskSchedule[]>([]);

  if (isLoading) return <Loading />;
  if (!data) return null;

  const goals: Goal[] = data ? data.data.result : [];
  const selectedGoal = selectedGoalIdx !== NOT_SELECT_GOAL ? goals[selectedGoalIdx].goalName : '새로운 목표 만들기';

  const handleSelectGoal = (idx: number) => {
    setSelectedGoalIdx(idx);
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
