'use client';
import React from 'react';

import useChat from '@/chat/hooks/quries/useChat';

import { ChatContent, ChatForm } from '../index';

const ChatRoomContainer = () => {
  const { messages, sendMessage } = useChat();

  return (
    <>
      <ChatContent messages={messages} />
      <ChatForm onSendMessage={sendMessage} />
    </>
  );
};

export default ChatRoomContainer;
