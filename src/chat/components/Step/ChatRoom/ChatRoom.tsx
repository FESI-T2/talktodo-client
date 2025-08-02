import React from 'react';

import { ChatHeader, ChatRoomContainer } from './components/index';
import { ChatHeaderProps } from './types';

type NewGoalChatProps = ChatHeaderProps;
const ChatRoom = ({ goToPrevStep, title }: NewGoalChatProps) => {
  return (
    <div className=' flex flex-col gap-8 h-screen w-[90%] max-w-[968px]'>
      <ChatHeader goToPrevStep={goToPrevStep} title={title} />
      <ChatRoomContainer />
    </div>
  );
};

export default ChatRoom;
