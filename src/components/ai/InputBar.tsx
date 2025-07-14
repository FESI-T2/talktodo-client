// src/components/ai/InputBar.tsx
'use client';

import { useState } from 'react';

interface InputBarProps {
  onSend: (text: string) => void;
}

export default function InputBar({ onSend }: InputBarProps) {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setText('');
  };

  return (
    <div className='p-4 flex bg-white'>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='무슨 일이 필요하신가요?'
        className='flex-1 px-4 py-2 border rounded-full text-sm'
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSubmit();
        }}
      />
      <button onClick={handleSubmit} className='ml-2 px-4 py-2 bg-black text-white rounded-full text-sm'>
        전송
      </button>
    </div>
  );
}
