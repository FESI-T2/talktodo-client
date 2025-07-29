'use client';

import ChatContent from '@/chat/components/ChatContent/ChatContent';
import ChatHeader from '@/chat/components/ChatHeader/ChatHeader';
import ChatInput from '@/chat/components/ChatInput/ChatInput';
import { StepHelpers } from '@/chat/types/chatPage';

interface ExistGoalMainProps extends StepHelpers {
  onSendMessage: (message: string) => void;
  headerTitle: string;
  taskCount: number;
}

const ExistGoalMain = ({ reset, onSendMessage, headerTitle, taskCount }: ExistGoalMainProps) => {
  return (
    <div className='flex flex-col items-center'>
      <ChatHeader isNew={false} onClick={reset} headerTitle={headerTitle} taskCount={taskCount} />
      <ChatContent />
      <ChatInput onClick={onSendMessage} />
    </div>
  );
};

export default ExistGoalMain;
