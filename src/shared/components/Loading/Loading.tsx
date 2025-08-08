'use client';
import React from 'react';

import Logo from '../Icons/Logo/Logo';

const Loading = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col gradient-bg gap-6'>
      <Logo />
      <p className='tb:font-title2-bold font-title3-bold text-white'>로딩 중 입니다...</p>
    </div>
  );
};

export default Loading;
