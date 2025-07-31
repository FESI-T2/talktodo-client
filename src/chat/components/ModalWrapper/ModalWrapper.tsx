import React from 'react';

import ChatCharacter from '@/shared/components/Icons/ChatCharacter/ChatCharacter';

interface ModalWrapperProps {
  children: React.ReactNode;
}

const ModalWrapper = ({ children }: ModalWrapperProps) => {
  return (
    <div className='flex justify-center items-center flex-col gap-[30px] '>
      <ChatCharacter />
      <div
        className='
        flex flex-col items-start rounded-4xl 
        border border-solid border-gray-200
        bg-white shadow-[0_0_40px_0_rgba(52,35,101,0.15)]
        tb:px-10 tb:pt-12 tb:pb-10 tb:w-[624px] tb:min-h-[733px] tb:gap-10
        px-5 pt-8 pb-6 w-[343px] min-h-[625px] gap-5
      '
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
