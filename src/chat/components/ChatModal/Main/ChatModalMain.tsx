'use client';

import ChatModalButtonContainer from '@/chat/components/ChatModal/ChatModalButtonContainer';
import ChatModalMainHeader from '@/chat/components/ChatModal/Main/ChatModalMainHeader';
import ChatModalMainTabContentContainer from '@/chat/components/ChatModal/Main/ChatModalMainTabContentContainer';
import { Goal } from '@/chat/hooks/useGoalSelectWithRouting';

interface ChatModalMainProps {
  onClickPrimary?: () => void;
  onClickSecondary?: () => void;
  goals: (Goal & { active: boolean })[];
  onSelectGoal: (idx: number) => void;
}

const ChatModalMain = ({ onClickPrimary, onClickSecondary, goals, onSelectGoal }: ChatModalMainProps) => {
  return (
    <div
      className='
        flex flex-col items-start rounded-4xl 
        border border-solid border-gray-200
        bg-white shadow-[0_0_40px_0_rgba(52,35,101,0.15)]
        tb:px-10 tb:pt-12 tb:pb-10 tb:w-[624px] tb:min-h-[733px] tb:gap-10
        px-5 pt-8 pb-6 w-[343px] min-h-[625px] gap-5
      '
    >
      <ChatModalMainHeader />
      <ChatModalMainTabContentContainer goals={goals} onSelectGoal={onSelectGoal} />
      <ChatModalButtonContainer onClickPrimary={onClickPrimary} onClickSecondary={onClickSecondary} type='main' />
    </div>
  );
};

export default ChatModalMain;
