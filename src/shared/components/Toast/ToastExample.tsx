'use client';

import React from 'react';

import { useToast } from '../../hooks/useToast';

const ToastExample = () => {
  const { openToast } = useToast();

  return (
    <div className='p-4 space-y-4'>
      <h2 className='text-xl font-bold'>Toast 테스트</h2>

      <div className='flex gap-4'>
        <button
          onClick={() => openToast('할 일을 완료했어요! 🎉')}
          className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
        >
          Success Toast
        </button>
      </div>
    </div>
  );
};

export default ToastExample;
