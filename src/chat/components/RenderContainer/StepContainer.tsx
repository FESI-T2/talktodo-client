import React, { useEffect } from 'react';

import { match } from 'ts-pattern';

import { ChatRoom, Result, TaskSelector } from '@/chat/components/Step/index';
import { STEP_TASK } from '@/chat/constants/index';
import { useStepContext } from '@/chat/provider/StepProvider';

import { TaskSchedule } from '@/chat/types/index';
import { Goal } from '@/goal/types/index';

interface StepContainerProps {
  goals: Goal[];
  taskSchedules: TaskSchedule[];
  selectedGoalIdx: number;
  handleSelectGoal: (selectedGoalIdx: number) => void;
  handleSetTaskSchedules: (task: TaskSchedule) => void;
  selectedGoal: string;
  resetTaskSchedules: () => void;
}

const StepContainer = ({
  goals,
  handleSelectGoal,
  handleSetTaskSchedules,
  selectedGoalIdx,
  selectedGoal,
  taskSchedules,
  resetTaskSchedules,
}: StepContainerProps) => {
  const { currentStep } = useStepContext();

  // 뒤로 가기시 taskSchedules 초기화
  useEffect(() => {
    resetTaskSchedules();
  }, [currentStep]);

  const renderStep = () => {
    return match(currentStep)
      .with(STEP_TASK.selectTask, () => (
        <TaskSelector goals={goals} selectedGoalIdx={selectedGoalIdx} handleSelectGoal={handleSelectGoal} />
      ))
      .with(STEP_TASK.chat, () => <ChatRoom goal={selectedGoal} handleSetTaskSchedules={handleSetTaskSchedules} />)
      .with(STEP_TASK.result, () => <Result taskSchedules={taskSchedules} goal={selectedGoal} />)
      .otherwise(() => null);
  };

  return <>{renderStep()}</>;
};

export default StepContainer;
