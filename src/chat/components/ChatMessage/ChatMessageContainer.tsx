import React from 'react';

import ChatCharacter from '@/shared/components/Icons/ChatCharacter/ChatCharacter';

import ChatMessage from './ChatMessage';

interface ChatMessageProps {
  message: string;
  role?: 'user' | 'assistant';
}

const ChatMessageContainer = ({ message = 'Hello! How can I assist you today?', role }: ChatMessageProps) => {
  return (
    <div className={`flex items-center gap-6 ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
      {role === 'assistant' && <ChatCharacter />}
      <ChatMessage message={message} role={role} />
    </div>
  );
};

export default ChatMessageContainer;
