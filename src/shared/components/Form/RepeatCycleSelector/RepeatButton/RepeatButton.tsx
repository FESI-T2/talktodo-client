import React from 'react';

import { cn } from '@/shared/utils/cn';

interface RepeatButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  isActive?: boolean;
  className?: string;
}

const RepeatButton: React.FC<RepeatButtonProps> = ({ children, isActive, className, ...props }) => {
  const repeatButtonStyle = isActive ? 'bg-purple-100 text-purple-500' : 'bg-gray-100 text-gray-700';

  return (
    <button
      type='button'
      className={cn(repeatButtonStyle, 'font-body2-medium-tight rounded-lg cursor-pointer  h-[39px] text-nowrap', className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default RepeatButton;
