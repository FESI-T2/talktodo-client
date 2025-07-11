'use client';

import React from 'react';

type TodoItem = {
  id: string;
  title: string;
  date: string; // 예: "2025-07-15"
};

interface TodoPreviewProps {
  todos: TodoItem[];
}

export default function TodoPreview({ todos }: TodoPreviewProps) {
  if (todos.length === 0) return null;

  return (
    <div className='p-4 border-t bg-white'>
      <h2 className='font-semibold text-gray-800 mb-3'>아래 일정을 생성할까요?</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
        {todos.map((todo) => (
          <div key={todo.id} className='p-3 border rounded-lg shadow-sm bg-gray-50'>
            <p className='text-sm text-gray-500'>{todo.date}</p>
            <p className='font-medium text-gray-800'>{todo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
