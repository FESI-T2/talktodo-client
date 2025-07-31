'use client';

import Chevron from '@/shared/components/Icons/Chevron/Chevron';
import Flag from '@/shared/components/Icons/Flag/Flag';

export interface ChatHeaderProps {
  title: string;
  goToPrevStep: () => void;
}

const ChatHeader = ({ title, goToPrevStep }: ChatHeaderProps) => {
  return (
    <div className='flex items-center gap-3 pc:w-[960px] tb:w-[712px] w-[343px] mt-[80px]'>
      <button aria-label='뒤로가기' onClick={goToPrevStep} className='cursor-pointer'>
        <Chevron direction='left' />
      </button>

      <div className='flex items-center justify-between gap-2 px-5 py-3 rounded-[20px] bg-gray-800/10 w-[920px]'>
        <div className='flex items-center gap-1'>
          <Flag type='Mobile' color='#FFFFFF' />
          <p className='text-white font-body2-semibold'>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
