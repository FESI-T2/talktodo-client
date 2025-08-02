'use client';
import React from 'react';

import useChat from '@/chat/hooks/quries/useChat';

import ChatContent from './ChatContent/ChatContent';
import ChatForm from './ChatForm/ChatForm';

const ChatRoomContainer = () => {
  const { messages, sendMessage, isPending } = useChat();

  return (
    <>
      <ChatContent messages={messages} isPending={isPending} />
      <ChatForm onSendMessage={sendMessage} />
    </>
  );
};

export default ChatRoomContainer;
