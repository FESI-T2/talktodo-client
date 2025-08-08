import React from 'react';

import { cn } from '@/shared/utils/cn';

interface MenuButtonProps {
  handleClick: () => void;
  children: React.ReactNode;
}

const MenuButton = ({ handleClick, children }: MenuButtonProps) => {
  return (
    <button
      type='button'
      className={cn(
        `flex justify-center items-center text-gray-700 font-body2-medium-tight cursor-pointer 
         rounded-lg transition-colors text-center w-[182px] h-[55px] hover:font-body2-semibold
         hover:bg-purple-100 hover:text-purple-500 group`
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default MenuButton;
