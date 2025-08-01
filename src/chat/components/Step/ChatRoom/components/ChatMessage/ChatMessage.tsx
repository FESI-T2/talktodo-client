import React from 'react';

import { cn } from '@/shared/utils/cn';

interface ChatMessageProps {
  message: string;
  role?: 'user' | 'assistant';
}

const ChatMessage = ({ message, role }: ChatMessageProps) => {
  return (
    <div
      className={cn('max-w-[600px] w-fit flex items-center gap-3 p-4 rounded-3xl', {
        'bg-purple-600 px-6': role === 'user',
        'bg-none px-0': role === 'assistant',
      })}
    >
      <p
        className={cn('text-white break-all', {
          'font-body2-bold tb:font-title3-bold pc:font-title3-bold': role === 'assistant',
          'font-body3-medium-loose tb:font-body2-medium-loose pc:font-body2-medium-loose': role === 'user',
        })}
      >
        {message}
      </p>
    </div>
  );
};

export default ChatMessage;
