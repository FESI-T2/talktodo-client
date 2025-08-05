import React from 'react';

import { ChatRoomAction } from '@/chat/types';

import { ChatHeader, ChatRoomContainer } from './components/index';
import { ChatHeaderProps } from './types';
type ChatRoomProps = ChatHeaderProps & ChatRoomAction;

const ChatRoom = ({ goal, handleSetTaskSchedules }: ChatRoomProps) => {
  return (
    <div className=' flex flex-col gap-8 h-screen w-[90%] max-w-[968px]'>
      <ChatHeader goal={goal} />
      <ChatRoomContainer handleSetTaskSchedules={handleSetTaskSchedules} />
    </div>
  );
};

export default ChatRoom;
