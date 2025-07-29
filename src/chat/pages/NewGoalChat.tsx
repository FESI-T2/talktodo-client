'use client';

import ChatContent from '@/chat/components/ChatContent/ChatContent';
import ChatHeader from '@/chat/components/ChatHeader/ChatHeader';
import ChatInput from '@/chat/components/ChatInput/ChatInput';
import { StepHelpers } from '@/chat/types/chatPage';
import { Message } from '@/chat/types/message';

interface NewGoalChatProps extends StepHelpers {
  messages: Message[];
  onSendMessage: (message: string) => void;
}

const NewGoalChat = ({ goToPrevStep, messages, onSendMessage }: NewGoalChatProps) => {
  return (
    <div className='flex flex-col items-center'>
      <ChatHeader isNew={true} onClick={goToPrevStep} />
      <ChatContent chatType={'chat'} messages={messages} />
      <ChatInput onClick={onSendMessage} />
    </div>
  );
};

export default NewGoalChat;
