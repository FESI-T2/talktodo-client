'use client';

import React from 'react';

import { useToast } from '../../hooks/useToast';

const ToastExample = () => {
  const toast = useToast();

  return (
    <div className='p-4 space-y-4'>
      <h2 className='text-xl font-bold'>Toast 테스트</h2>

      <div className='flex gap-4'>
        <button
          onClick={() => toast.success('성공적으로 완료되었습니다!')}
          className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
        >
          Success Toast
        </button>

        <button
          onClick={() => toast.warning('주의가 필요합니다!')}
          className='px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600'
        >
          Warning Toast
        </button>

        <button onClick={() => toast.error('오류가 발생했습니다!')} className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'>
          Error Toast
        </button>
      </div>
    </div>
  );
};

export default ToastExample;
