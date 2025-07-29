'use client';

import React from 'react';

import { useAlert } from '../../hooks/useAlert';

const AlertExample = () => {
  const { openAlert } = useAlert();

  return (
    <div className='p-4 space-y-4'>
      <h2 className='text-xl font-bold'>Alert 테스트</h2>

      <div className='flex gap-4'>
        <button
          onClick={() => openAlert({ message: '테스트 알림', handleClick: () => console.log('Alert Clicked') })}
          className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
        >
          Alert
        </button>
      </div>
    </div>
  );
};

export default AlertExample;
