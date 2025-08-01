import React from 'react';

import ChatCharacter from '@/shared/components/Icons/ChatCharacter/ChatCharacter';

interface ModalWrapperProps {
  children: React.ReactNode;
}

const ModalWrapper = ({ children }: ModalWrapperProps) => {
  return (
    <div className='flex justify-center items-center flex-col w-full'>
      <ChatCharacter className='w-[100px] h-[80px]' />

      <div
        className='
        flex flex-col items-start rounded-4xl mt-8 tb:mt-7
        border border-solid border-gray-200
        bg-white shadow-[0_0_40px_0_rgba(52,35,101,0.15)]
        tb:px-10 tb:pt-12 tb:pb-10  
        px-5 pt-8 pb-6 
        w-full
      '
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
