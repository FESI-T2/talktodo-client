import React from 'react';

interface ChatMessageProps {
  message: string;
  state?: 'chat' | 'finish';
}

const ChatMessage = ({ message, state }: ChatMessageProps) => {
  return (
    <div
      className={`max-w-[600px] w-fit flex itmes-center gap-3 py-5 px-6 rounded-3xl ${state === 'chat' ? 'bg-purple-600' : 'bg-gray-900'}`}
    >
      <p className='font-body2-medium-loose text-white'>{message}</p>
    </div>
  );
};

export default ChatMessage;
