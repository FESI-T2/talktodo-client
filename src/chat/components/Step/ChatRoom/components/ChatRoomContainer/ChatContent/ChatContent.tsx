'use client';
import { useEffect, useLayoutEffect, useRef } from 'react';

import { Message } from '@/chat/types';
// import Logo from '@/shared/components/Icons/Logo/Logo';

import ChatMessage from './ChatMessage/ChatMessage';

interface ChatContentProps {
  messages: Message[];
  isPending?: boolean;
}

// const ResponsiveLogo = () => (
//   <>
//     <div className='hidden tb:block pc:block'>
//       <Logo className='w-30 h-[126px]' />
//     </div>
//     <div className='tb:hidden pc:hidden'>
//       <Logo className='w-25 h-[106px]' />
//     </div>
//   </>
// );

const ChatContent = ({ messages }: ChatContentProps) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'auto' });
    }
  }, []);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className='flex-1 flex flex-col-reverse overflow-y-auto scroll-no-bar'>
      <div className='flex-grow '>
        <div className='flex flex-col justify-end gap-5  min-h-full '>
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg.message} role={msg.role} />
          ))}
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
