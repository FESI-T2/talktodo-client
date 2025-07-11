'use client';

import React from 'react';

type Message = {
  id: string;
  sender: 'user' | 'ai';
  content: string;
};

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
  return (
    <div className='flex flex-col gap-3 p-4 overflow-y-auto'>
      {messages.map((msg) => {
        const isUser = msg.sender === 'user';

        return (
          <div key={msg.id} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-sm px-4 py-2 rounded-lg text-sm whitespace-pre-wrap ${
                isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900'
              }`}
            >
              {msg.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
