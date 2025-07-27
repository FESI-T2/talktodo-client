import React from 'react';

import SvgIconChatCharacter from 'public/icon/chatCharacter';

import ChatMessage from './ChatMessage';

interface ChatMessageProps {
  message: string;
  state?: 'chat' | 'finish';
  role?: 'user' | 'assistant';
}

const ChatMessageContainer = ({ message = 'Hello! How can I assist you today?', state = 'chat', role }: ChatMessageProps) => {
  return (
    <>
      {role === 'assistant' && (
        <div className='flex justify-start items-center gap-6'>
          <SvgIconChatCharacter />
          <ChatMessage message={message} state={state} />
        </div>
      )}
      {role === 'user' && (
        <div className='flex justify-end items-center gap-6'>
          <ChatMessage message={message} state={state} />
        </div>
      )}
    </>
  );
};

export default ChatMessageContainer;
