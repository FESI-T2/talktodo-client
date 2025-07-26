import React from 'react';

import SvgIconPlus from 'public/icon/Plus';

interface FloatingActionButtonProps {
  size?: 'L' | 'S';
}

const FloatingActionButton = ({ size }: FloatingActionButtonProps) => {
  const buttonSize = size === 'L' ? { width: '80px', height: '80px' } : { width: '64px', height: '64px' };

  return (
    <button
      style={buttonSize}
      className={`flex justify-center items-center rounded-full cursor-pointer
     bg-gray-900 shadow-[0px_4px_12px_0px_rgba(65,59,81,0.20)]
     tranisition-all duration-200
     hover:transform hover:rotate-45
    `}
    >
      <SvgIconPlus type='FAB' />
    </button>
  );
};

export default FloatingActionButton;
