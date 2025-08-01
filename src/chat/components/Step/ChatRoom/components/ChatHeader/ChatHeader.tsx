'use client';

import Flag from '@/shared/components/Icons/Flag/Flag';
import WhiteChevron from '@/shared/components/Icons/WhiteChevron/WhiteChevron';

export interface ChatHeaderProps {
  title: string;
  goToPrevStep: () => void;
}

const ChatHeader = ({ title, goToPrevStep }: ChatHeaderProps) => {
  return (
    <div className='flex items-center gap-3  w-full pt-[40px]'>
      <button aria-label='뒤로가기' onClick={goToPrevStep} className='cursor-pointer'>
        <WhiteChevron />
      </button>

      <div className='flex items-center justify-between gap-2 px-5 py-3 rounded-[20px] bg-[#F8F4FE]/20 w-full'>
        <div className='flex items-center gap-1'>
          <Flag type='Mobile' color='#FFFFFF' />
          <p className='text-white font-body2-semibold'>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
