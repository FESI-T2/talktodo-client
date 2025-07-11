// src/components/ai/AiPromptModal.tsx
'use client';

import { useState } from 'react';

import InputBar from './InputBar';
import MessageList from './MessageList';
import TodoPreview from './TodoPreview';

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

interface AiPromptModalProps {
  onClose: () => void;
}

export default function AiPromptModal({ onClose }: AiPromptModalProps) {
  const [messages, setMessages] = useState<Message[]>([{ id: '1', sender: 'ai', content: '무슨 일을 도와드릴까요?' }]);
  const [previewTodos, setPreviewTodos] = useState<TodoItem[]>([]);

  return (
    <div className='fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50'>
      <div className='bg-white rounded-lg w-[90vw] max-w-4xl h-[90vh] flex flex-col'>
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
            setPreviewTodos([
              { id: 'todo-1', title: '할 일 A', date: '2025-07-12' },
              { id: 'todo-2', title: '할 일 B', date: '2025-07-13' },
            ]);
          }}
        />
        <button className='text-sm text-gray-400 p-2' onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
}
