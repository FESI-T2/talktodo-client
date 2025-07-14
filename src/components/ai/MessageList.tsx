'use client';

import React from 'react';

import { AiPromptMessage } from '@/types/aiPromptMessage'; // 너가 만든 타입 경로

import TodoPreview from './TodoPreview';

interface MessageListProps {
  messages: AiPromptMessage[]; // 기존 Message → AiPromptMessage로 변경
}

export default function MessageList({ messages }: MessageListProps) {
  return (
    <div className='flex flex-col gap-3 p-4 overflow-y-auto'>
      {messages.map((msg) => {
        const isUser = msg.sender === 'user';

        return (
          <div key={msg.id} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
            {msg.todos ? (
              <div className='w-full flex justify-center'>
                <div className='w-full max-w-5xl'>
                  <TodoPreview todos={msg.todos} />
                </div>
              </div>
            ) : (
              <div
                className={`max-w-sm px-4 py-2 rounded-lg text-sm whitespace-pre-wrap ${
                  isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900'
                }`}
              >
                {msg.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
