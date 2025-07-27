'use client';

import { ChatModal } from '@/chat/components/ChatModal/ChatModal';

import SvgIconChatCharacter from 'public/icon/chatCharacter';

const Page = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-purple-300 overflow-hidden mx-auto'>
      <div className='inline-flex flex-col justify-start items-center gap-8'>
        <SvgIconChatCharacter />
        <ChatModal />
      </div>
    </div>
  );
};

export default Page;
