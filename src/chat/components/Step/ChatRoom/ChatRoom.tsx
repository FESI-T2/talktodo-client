import React from 'react';

import { Message } from '@/chat/types/index';

import { ChatHeaderProps } from './components/ChatHeader/ChatHeader';
import { ChatContent, ChatHeader, ChatInput } from './components/index';

type NewGoalChatProps = ChatHeaderProps & {
  messages: Message[];
  onSendMessage: (message: string) => void;
};

const ChatRoom = ({ messages, onSendMessage, goToPrevStep, title }: NewGoalChatProps) => {
  return (
    <div className=' flex flex-col gap-8 h-screen w-[90%] max-w-[968px]'>
      <ChatHeader goToPrevStep={goToPrevStep} title={title} />
      <ChatContent messages={messages} />
      <ChatInput onClick={onSendMessage} />
    </div>
  );
};

export default ChatRoom;
