import GoalSelectItem from '@/chat/components/GoalSelectItem/GoalSelectItem';
import type { Goal } from '@/chat/hooks/useGoalSelectWithRouting';

interface Props {
  goals: (Goal & { active: boolean })[];
  onSelectGoal: (idx: number) => void;
}

const ChatModalMainTabContent = ({ goals, onSelectGoal }: Props) => (
  <div className='flex flex-col gap-2 tb:max-h-[440px] max-h-[345px] overflow-x-auto tb:pr-5 pr-2'>
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

export default ChatModalMainTabContent;
