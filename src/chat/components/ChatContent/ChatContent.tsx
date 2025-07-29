import { useEffect, useLayoutEffect, useRef } from 'react';

import { Message } from '@/chat/types/message';
import Logo from '@/shared/components/Icons/Logo/Logo';

import ChatMessageContainer from '../ChatMessage/ChatMessageContainer';

interface ChatContentProps {
  chatType?: 'inital' | 'chat';
  messages?: Message[];
}

const ResponsiveLogo = () => (
  <>
    <div className='hidden tb:block pc:block'>
      <Logo className='w-30 h-[126px]' />
    </div>
    <div className='tb:hidden pc:hidden'>
      <Logo className='w-25 h-[106px]' />
    </div>
  </>
);

const InitialContent = () => (
  <div
    className='flex flex-col items-center gap-10
      pt-[238px] pb-[157px]
      tb:pt-[290px] tb:pb-[221px]
      pc:pt-[266px] pc:pb-[178px] pc:w-[920px] pc:h-[688px]'
  >
    <ResponsiveLogo />
    <div className='flex flex-col items-center gap-3 text-center'>
      <p className='text-white font-title3-bold tb:font-title1-bold'>일정을 말하면 정리해드릴게요!</p>
      <p className='text-purple-150 font-body3-medium-tight tb:font-body2-medium-tight'>
        “00월 00일에 ~~일정을 추가해 줘”
        <br className='pc:hidden tb:hidden' />
        라고 작성해보세요
      </p>
    </div>
  </div>
);
const ChatContent = ({ chatType = 'inital', messages }: ChatContentProps) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'auto' }); // 최초엔 빠르게
    }
  }, []);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' }); // 이후엔 부드럽게
    }
  }, [messages]);

  if (chatType === 'inital') return <InitialContent />;

  return (
    <div className='flex flex-col h-[679px] mt-1'>
      <div className='flex-grow overflow-hidden'>
        <div
          className='flex flex-col gap-5 overflow-y-auto h-full hide-scrollbar
            w-[343px] pb-12
            tb:w-[700px] tb:pb-[50px]
            pc:w-[920px] pc:pb-7
            scrollbar-hide'
        >
          {(messages ?? []).map((msg, index) => (
            <ChatMessageContainer key={index} message={msg.message} role={msg.role} />
          ))}
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
