import { useEffect, useLayoutEffect, useRef } from 'react';

import { Message } from '@/chat/types';
// import Logo from '@/shared/components/Icons/Logo/Logo';

import ChatMessageContainer from '../ChatMessageContainer/ChatMessageContainer';

interface ChatContentProps {
  messages: Message[];
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
    <div className='flex flex-col-reverse h-[679px] mt-1'>
      <div className='flex-grow overflow-hidden'>
        <div
          className='flex flex-col justify-end gap-5 overflow-y-auto h-full hide-scrollbar
            w-[343px] pb-12
            tb:w-[700px] tb:pb-[50px]
            pc:w-[920px] pc:pb-7
            scrollbar-hide'
        >
          {messages.map((msg, index) => (
            <ChatMessageContainer key={index} message={msg.message} role={msg.role} />
          ))}
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
