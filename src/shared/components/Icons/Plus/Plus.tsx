import React from 'react';

interface PlusIconProps {
  type?: 'Sidebar' | 'FAB';
}

const Plus = ({ type = 'Sidebar' }: PlusIconProps) => {
  return type === 'Sidebar' ? (
    <svg xmlns='http://www.w3.org/2000/svg' width='21' height='20' viewBox='0 0 21 20' fill='none'>
      <path d='M3.5 10H17' stroke='#8F3FFF' strokeWidth='2' strokeLinecap='round' />
      <path d='M10.25 16.75V3.25' stroke='#8F3FFF' strokeWidth='2' strokeLinecap='round' />
    </svg>
  ) : (
    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none'>
      <path
        d='M15.9974 6.66602V25.3327M6.66406 15.9993H25.3307'
        stroke='white'
        stroke-width='3'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default Plus;
