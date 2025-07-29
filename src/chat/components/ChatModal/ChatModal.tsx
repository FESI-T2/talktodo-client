'use client';

import GoalSelectItem from '@/chat/components/GoalSelectItem/GoalSelectItem';
import { useGoalSelectWithRouting, Goal } from '@/chat/hooks/useGoalSelectWithRouting';
import Button from '@/shared/components/Button/Button';
import Flag from '@/shared/components/Icons/Flag/Flag';

const mockGoalsArray: Goal[] = [
  { title: '운동하기', count: 3, id: '1' },
  { title: '독서하기', count: 5, id: '2' },
  { title: '코딩하기', count: 2, id: '3' },
  { title: '요리하기', count: 1, id: '4' },
  { title: '여행 계획 세우기', count: 4, id: '5' },
];

export const ChatModal = () => {
  const { goals, onSelect, onClickComplete, onClickNewGoal } = useGoalSelectWithRouting(mockGoalsArray);

  return (
    <div className='flex px-10 pt-12 pb-10 flex-col items-start gap-10 rounded-4xl border border-solid border-gray-200 bg-white shadow-[0_0_40px_0_rgba(52,35,101,0.15)]'>
      <ChatModalHeaderTitle />
      <ChatModalTabContentContainer goals={goals} onSelectGoal={onSelect} />
      <ChatModalButtonContainer onClickComplete={onClickComplete} onClickNewGoal={onClickNewGoal} />
    </div>
  );
};

export const ChatModalHeaderTitle = () => <p className='font-title2-bold text-gray-900'>어떤 목표에 할 일을 추가하시겠어요?</p>;

interface ChatModalTabContentContainerProps {
  goals: (Goal & { active: boolean })[];
  onSelectGoal: (idx: number) => void;
}

export const ChatModalTabContentContainer = ({ goals, onSelectGoal }: ChatModalTabContentContainerProps) => (
  <div className='flex flex-col justify-center items-start gap-3'>
    <ChatModalTabTitle />
    <ChatModalTabContent goals={goals} onSelectGoal={onSelectGoal} />
  </div>
);

export const ChatModalTabTitle = () => (
  <div className='flex items-center gap-1'>
    <Flag type='chat' />
    <p className='font-title3-bold text-gray-600'>기존 목표</p>
  </div>
);

interface ChatModalTabContentProps {
  goals: (Goal & { active: boolean })[];
  onSelectGoal: (idx: number) => void;
}

export const ChatModalTabContent = ({ goals, onSelectGoal }: ChatModalTabContentProps) => (
  <div className='flex flex-col gap-2 max-h-[440px] overflow-x-auto pr-5'>
    {goals.map((goal, idx) => (
      <GoalSelectItem
        key={`${goal.title}-${idx}`}
        goalTitle={goal.title}
        taskCount={goal.count}
        active={goal.active}
        onClick={() => onSelectGoal(idx)}
      />
    ))}
  </div>
);

interface ChatModalButtonContainerProps {
  onClickComplete: () => void;
  onClickNewGoal: () => void;
}

export const ChatModalButtonContainer = ({ onClickComplete, onClickNewGoal }: ChatModalButtonContainerProps) => (
  <div className='flex items-center justify-between w-full gap-3'>
    <Button variant='secondary' type='button' className='flex-1 h-[60px] rounded-2xl' onClick={onClickNewGoal}>
      새로운 목표를 만들래요
    </Button>
    <Button variant='primary' type='button' className='flex-1 h-[60px] rounded-2xl' onClick={onClickComplete}>
      선택완료
    </Button>
  </div>
);
