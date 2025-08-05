'use client';
import React from 'react';

import useChat from '@/chat/hooks/quries/useChat';

import { ChatRoomAction as ChatRoomContainerProps } from '@/chat/types';

import ChatContent from './ChatContent/ChatContent';
import ChatForm from './ChatForm/ChatForm';

const ChatRoomContainer = ({ handleSetTaskSchedules }: ChatRoomContainerProps) => {
  const { messages, sendMessage } = useChat({ handleSetTaskSchedules });

  return (
    <>
      <ChatContent messages={messages} />
      <ChatForm onSendMessage={sendMessage} />
    </>
  );
};

export default ChatRoomContainer;
