'use client';

import ChatModalMain from '@/chat/components/ChatModal/Main/ChatModalMain';
import ChatModalResult from '@/chat/components/ChatModal/Result/ChatModalResult';
import { useGoalSelectWithRouting } from '@/chat/hooks/useGoalSelectWithRouting';

interface ChatModalProps {
  onClickPrimary?: () => void;
  onClickSecondary?: () => void;
  type?: 'main' | 'result';
  onSelectGoalComplete?: (goal: { title: string; count: number }) => void;
}

const mockGoalsArray = [
  { title: '운동하기', count: 3, id: '1' },
  { title: '독서하기', count: 5, id: '2' },
  { title: '코딩하기', count: 2, id: '3' },
  { title: '요리하기', count: 1, id: '4' },
  { title: '여행 계획 세우기', count: 4, id: '5' },
];

const ChatModal = ({ onClickPrimary, onClickSecondary, type = 'main', onSelectGoalComplete }: ChatModalProps) => {
  const { goals, onSelect, selectedIndex } = useGoalSelectWithRouting(mockGoalsArray);

  const handleClickPrimary = () => {
    const selected = goals[selectedIndex];
    if (onSelectGoalComplete) {
      onSelectGoalComplete({ title: selected.title, count: selected.count });
    }
    if (onClickPrimary) onClickPrimary();
  };

  return type === 'main' ? (
    <ChatModalMain onClickPrimary={handleClickPrimary} onClickSecondary={onClickSecondary} goals={goals} onSelectGoal={onSelect} />
  ) : (
    <ChatModalResult onClickPrimary={onClickPrimary} onClickSecondary={onClickSecondary} />
  );
};

export default ChatModal;
