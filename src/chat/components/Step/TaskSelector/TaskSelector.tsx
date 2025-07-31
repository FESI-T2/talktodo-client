'use client';

import { NOT_SELECT_GOAL } from '@/chat/constants/goal';
import { Goal } from '@/chat/types';

import TaskSelectorHeader from './TaskSelectorHeader/TaskSelectorHeader';
import ActionButtons from '../../ActionButtons/ActionButtons';
import GoalSelectItem from '../../GoalSelectItem/GoalSelectItem';
import ModalWrapper from '../../ModalWrapper/ModalWrapper';

interface TaskSelectorProps {
  goToChatStep: () => void;
  goals: Goal[];
  selectedGoalIdx: number;
  handleSelectGoal: (selectedGoalIdx: number) => void;
}

const TaskSelector = ({ goals, goToChatStep, handleSelectGoal, selectedGoalIdx }: TaskSelectorProps) => {
  const createNewGoal = () => {
    handleSelectGoal(NOT_SELECT_GOAL);
    goToChatStep();
  };

  return (
    <ModalWrapper>
      <TaskSelectorHeader />
      <div className='flex flex-col gap-2 tb:max-h-[440px] max-h-[345px] overflow-x-auto tb:pr-5 pr-2'>
        {goals.map((goal, idx) => (
          <GoalSelectItem
            key={idx}
            goalTitle={goal.title}
            taskCount={goal.count}
            active={selectedGoalIdx === idx}
            onClick={() => handleSelectGoal(idx)}
          />
        ))}
      </div>
      <ActionButtons
        onClickRightButton={goToChatStep}
        onClickLeftButton={createNewGoal}
        leftButtonText='새로운 목표를 만들래요 '
        rightButtonText='선택 완료'
      />
    </ModalWrapper>
  );
};
export default TaskSelector;
