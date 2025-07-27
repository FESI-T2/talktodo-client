'use client';

import { useState } from 'react';

import MessageSendButton from '../MessageSendButton/MessageSendButton';

const ChatInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='flex w-[920px] h-[180px] p-6 justify-center items-start gap-3 rounded-[28px] bg-white'>
      <textarea
        rows={5}
        className='flex-1 font-body2-medium-loose text-gray-900 leading-[160%] 
        placeholder:text-gray-500 outline-none resize-none overflow-y-auto
        '
        placeholder='할 일을 입력해 주세요'
        value={inputValue}
        onChange={handleChange}
      />
      <div className='border-r border-gray-200 mx-2 h-[132px]'></div>
      <MessageSendButton active={inputValue.trim().length > 0} />
    </div>
  );
};

export default ChatInput;
