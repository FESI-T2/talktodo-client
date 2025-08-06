'use client';
import React from 'react';

interface FallbackProps {
  onReset: () => void;
}

const Fallback = ({ onReset }: FallbackProps) => {
  const handleClick = () => {
    onReset();
    window.location.replace('/');
  };

  return (
    <div>
      <div className='text-center p-4 text-red-600 bg-red-50 rounded'>
        <p>알 수 없는 문제가 발생했습니다</p>
        <button onClick={handleClick} className='cursor-pointer w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 mb-5'>
          메인으로 돌아가기
        </button>
        <button onClick={onReset} className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 cursor-pointer'>
          다시 시도
        </button>
      </div>
    </div>
  );
};

const PageFallback = ({ onReset }: FallbackProps) => {
  const handleClick = () => {
    onReset();
    window.location.replace('/');
  };
  return (
    <div className='h-screen flex items-center justify-center bg-red-50 w-screen'>
      <div className='max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center'>
        <h2 className='text-2xl font-bold text-gray-900 mb-2'>문제가 발생했습니다</h2>
        <p className='text-gray-600 mb-6'> 오류가 발생했습니다.</p>
        <button onClick={handleClick} className='cursor-pointer w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 mb-5'>
          메인으로 돌아가기
        </button>
        <button onClick={onReset} className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 cursor-pointer'>
          다시 시도
        </button>
      </div>
    </div>
  );
};

export { Fallback, PageFallback };
