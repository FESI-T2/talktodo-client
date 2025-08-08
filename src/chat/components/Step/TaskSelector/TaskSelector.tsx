'use client';

import { NOT_SELECT_GOAL } from '@/chat/constants/index';
import { useStepContext } from '@/chat/provider/StepProvider';
import { Goal } from '@/goal/types';

import { useToast } from '@/shared/hooks/useToast';

import { GoalSelectItem, TaskModalWrapper, TaskSelectorHeader } from './components/index';
import ActionButtons from '../../ActionButtons/ActionButtons';

interface TaskSelectorProps {
  goals: Goal[];
  selectedGoalIdx: number;
  handleSelectGoal: (selectedGoalIdx: number) => void;
}

const TaskSelector = ({ goals, handleSelectGoal, selectedGoalIdx }: TaskSelectorProps) => {
  const { goToNextStep } = useStepContext();
  const { openToast } = useToast();

  const createNewGoal = () => {
    handleSelectGoal(NOT_SELECT_GOAL);
    goToNextStep();
  };

  const handleNextStep = () => {
    if (selectedGoalIdx === NOT_SELECT_GOAL) {
      openToast('목표를 선택해주세요.');
      return;
    }
    goToNextStep();
  };

  return (
    <div className='max-h-[733px] flex items-center justify-center max-w-[624px] w-[90%] @container'>
      <TaskModalWrapper>
        <TaskSelectorHeader />
        <div className='flex flex-col gap-2 overflow-x-auto tb:pr-5 pr-2  mb-10 w-full max-h-[340px] tb:max-h-[440px] min-h-[280px] mt-[13px]'>
          {goals.map((goal, idx) => (
            <GoalSelectItem key={idx} goalTitle={goal.goalName} active={selectedGoalIdx === idx} onClick={() => handleSelectGoal(idx)} />
          ))}
        </div>
        <ActionButtons
          onClickRightButton={handleNextStep}
          onClickLeftButton={createNewGoal}
          leftButtonText='새로운 목표를 만들래요 '
          rightButtonText='선택 완료'
        />
      </TaskModalWrapper>
    </div>
  );
};
export default TaskSelector;
