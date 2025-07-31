'use client';

import { useState, ChangeEvent, KeyboardEvent } from 'react';

import MessageSendButton from '../MessageSendButton/MessageSendButton';

interface ChatInputProps {
  onClick: (message: string) => void;
}

const ChatInput = ({ onClick }: ChatInputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSend = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    onClick(trimmed);
    setInputValue('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const isSendable = !!inputValue.trim();

  return (
    <div
      className='flex items-start gap-3 justify-center rounded-[28px] bg-white p-6
      pc:w-[920px] 
      tb:w-[700px] tb:h-[180px]
      w-[343px] h-[120px]'
    >
      <textarea
        rows={5}
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder='할 일을 입력해 주세요'
        className='flex-1 resize-none overflow-y-auto outline-none
          font-body2-medium-loose leading-[160%] text-gray-900
          placeholder:text-gray-500'
      />
      <div className='mx-2 h-full border-r border-gray-200'></div>
      <MessageSendButton onClick={handleSend} active={isSendable} />
    </div>
  );
};

export default ChatInput;
