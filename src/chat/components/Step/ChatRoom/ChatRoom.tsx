import React from 'react';

import { Message } from '@/chat/types/index';

import { ChatHeaderProps } from './components/ChatHeader/ChatHeader';
import { ChatContent, ChatHeader, ChatInput } from './components/index';

type NewGoalChatProps = ChatHeaderProps & {
  messages: Message[];
  onSendMessage: (message: string) => void;
  goToPrevStep: () => void;
};

const ChatRoom = ({ messages, onSendMessage, goToPrevStep, title }: NewGoalChatProps) => {
  return (
    <div className='flex flex-col items-center'>
      <ChatHeader goToPrevStep={goToPrevStep} title={title} />
      <ChatContent messages={messages} />
      <ChatInput onClick={onSendMessage} />
    </div>
  );
};

export default ChatRoom;
