import React from 'react';

import { ChatHeaderProps } from './components/ChatHeader/ChatHeader';
import { ChatContent, ChatForm, ChatHeader } from './components/index';
type NewGoalChatProps = ChatHeaderProps;

const ChatRoom = ({ goToPrevStep, title }: NewGoalChatProps) => {
  return (
    <div className=' flex flex-col gap-8 h-screen w-[90%] max-w-[968px]'>
      <ChatHeader goToPrevStep={goToPrevStep} title={title} />
      <ChatContent messages={[]} />
      <ChatForm />
    </div>
  );
};

export default ChatRoom;
