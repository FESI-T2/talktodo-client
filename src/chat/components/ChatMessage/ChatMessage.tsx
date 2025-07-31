import React from 'react';

interface ChatMessageProps {
  message: string;
  role?: 'user' | 'assistant';
}

const ChatMessage = ({ message, role }: ChatMessageProps) => {
  return (
    <div
      className={`max-w-[600px] w-fit flex items-center gap-3 py-5 rounded-3xl ${role === 'user' ? 'bg-purple-600 px-6' : 'bg-none px-0'}`}
    >
      <p
        className={`
          text-white break-all
          ${
            role === 'assistant'
              ? 'font-body2-bold tb:font-title3-bold pc:font-title3-bold'
              : 'font-body3-medium-loose tb:font-body2-medium-loose pc:font-body2-medium-loose'
          }
        `}
      >
        {message}
      </p>
    </div>
  );
};

export default ChatMessage;
