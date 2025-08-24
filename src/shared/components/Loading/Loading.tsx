'use client';
import Image from 'next/image';
import React from 'react';

const Loading = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col gradient-bg gap-6'>
      <Image src='/img/InCompletedCharacter.png' alt='Logo' width={100} height={100} />
      <p className='tb:font-title2-bold font-title3-bold text-white'>로딩 중 입니다...</p>
    </div>
  );
};

export default Loading;
