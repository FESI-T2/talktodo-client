import ChatModalMainTabContent from '@/chat/components/ChatModal/Main/ChatModalMainTabContent';
import type { Goal } from '@/chat/hooks/useGoalSelectWithRouting';

interface Props {
  goals: (Goal & { active: boolean })[];
  onSelectGoal: (idx: number) => void;
}

const ChatModalMainTabContentContainer = ({ goals, onSelectGoal }: Props) => (
  <div className='flex flex-col justify-center items-start gap-3'>
    <ChatModalMainTabContent goals={goals} onSelectGoal={onSelectGoal} />
  </div>
);

export default ChatModalMainTabContentContainer;
