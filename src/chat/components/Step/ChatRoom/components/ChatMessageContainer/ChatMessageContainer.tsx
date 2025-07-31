import React from 'react';

import ChatCharacter from '@/shared/components/Icons/ChatCharacter/ChatCharacter';

import ChatMessage from '../ChatMessage/ChatMessage';

interface ChatMessageProps {
  message: string;
  role: 'user' | 'assistant';
}

const ChatMessageContainer = ({ message, role }: ChatMessageProps) => {
  return (
    <div className={`flex items-center gap-6 ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
      {role === 'assistant' && <ChatCharacter />}
      <ChatMessage message={message} role={role} />
    </div>
  );
};

export default ChatMessageContainer;
