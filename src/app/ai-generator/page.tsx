// src/app/ai-generator/page.tsx
'use client';

import { useState } from 'react';

import InputBar from '@/components/ai/InputBar';
import MessageList from '@/components/ai/MessageList';
import TodoPreview from '@/components/ai/TodoPreview';

type Sender = 'user' | 'ai';

type Message = {
  id: string;
  sender: Sender;
  content: string;
};

type TodoItem = {
  id: string;
  title: string;
  date: string;
};

export default function AiPromptPage() {
  const [messages, setMessages] = useState<Message[]>([{ id: '1', sender: 'ai', content: '무슨 일을 도와드릴까요?' }]);
  const [previewTodos, setPreviewTodos] = useState<TodoItem[]>([]);

  return (
    <div className='flex flex-col h-screen bg-white'>
      <div className='flex-1 overflow-y-auto p-4'>
        <MessageList messages={messages} />
        {previewTodos.length > 0 && <TodoPreview todos={previewTodos} />}
      </div>
      <InputBar
        onSend={(text) => {
          setMessages((prev) => [
            ...prev,
            { id: Date.now().toString(), sender: 'user', content: text },
            { id: (Date.now() + 1).toString(), sender: 'ai', content: '(AI 응답 예시)' },
          ]);

          // 예시용 미리보기 추가
          setPreviewTodos([
            { id: 'todo-1', title: '발표자료 작성', date: '2025-07-13' },
            { id: 'todo-2', title: '리허설 참석', date: '2025-07-14' },
          ]);
        }}
      />
    </div>
  );
}
