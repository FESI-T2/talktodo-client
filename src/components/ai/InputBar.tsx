'use client';

import { useState, useRef, useEffect } from 'react';

interface InputBarProps {
  onSend: (text: string) => void;
}

export default function InputBar({ onSend }: InputBarProps) {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setText('');
  };

  // 🔄 입력 시마다 높이 자동 조절
  useEffect(() => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight}px`;
    }
  }, [text]);

  return (
    <div className='p-4 flex items-end bg-white'>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='무슨 일이 필요하신가요?'
        rows={1}
        className='flex-1 resize-none px-4 py-2 border rounded-lg text-sm leading-relaxed max-h-[10rem] overflow-y-auto scrollbar-none'
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
          }
        }}
      />

      <button onClick={handleSubmit} className='ml-2 px-4 py-2 bg-black text-white rounded-full text-sm'>
        전송
      </button>
    </div>
  );
}
