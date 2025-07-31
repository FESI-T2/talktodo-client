'use client';

import ChatContent from '@/chat/components/ChatContent/ChatContent';
import ChatHeader from '@/chat/components/ChatHeader/ChatHeader';
import ChatInput from '@/chat/components/ChatInput/ChatInput';
import { StepHelpers } from '@/chat/types/chatPage';
import { Message } from '@/chat/types/message';

interface ExistGoalChatProps extends StepHelpers {
  messages: Message[];
  headerTitle: string;
  taskCount: number;
}

const ExistGoalChat = ({ goToPrevStep, messages, headerTitle, taskCount }: ExistGoalChatProps) => {
  return (
    <div className='flex flex-col items-center'>
      <ChatHeader isNew={false} onClick={goToPrevStep} headerTitle={headerTitle} taskCount={taskCount} />
      <ChatContent chatType={'chat'} messages={messages} />
      <ChatInput onClick={() => {}} />
    </div>
  );
};

export default ExistGoalChat;
