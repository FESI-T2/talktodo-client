'use client';
import React from 'react';

import Logo from '../Icons/Logo/Logo';

const Loading = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col gradient-bg'>
      <Logo />
      <p className='text-white  font-body1-bold mt-10 '>로딩 중 입니다...</p>
    </div>
  );
};

export default Loading;
