import React from 'react';

import { cn } from '@/shared/utils/cn';

import Icon from '../../Icon/Icon';

interface FloatingActionButtonProps {
  handleClick: () => void;
}

const FloatingActionButton = ({ handleClick }: FloatingActionButtonProps) => {
  return (
    <button
      className={cn(`flex justify-center items-center rounded-full cursor-pointer
    bg-gray-900 shadow-[0px_4px_12px_0px_rgba(65,59,81,0.20)]
      transition-all duration-200 hover:transform hover:rotate-45
      h-[64px] w-[64px] pc:h-[80px] pc:w-[80px] `)}
      onClick={handleClick}
    >
      <Icon name='plus' className='text-white w-8 h-8' />
    </button>
  );
};

export default FloatingActionButton;
