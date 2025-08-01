'use client';

import { NOT_SELECT_GOAL } from '@/chat/constants/index';
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
    <div className='max-h-[733px] flex items-center justify-center max-w-[624px] w-[90%] @container'>
      <ModalWrapper>
        <TaskSelectorHeader />
        <div className='flex flex-col gap-2 overflow-x-auto tb:pr-5 pr-2  mb-10 w-full max-h-[340px] tb:max-h-[440px] '>
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
    </div>
  );
};
export default TaskSelector;
