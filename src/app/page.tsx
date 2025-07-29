// 차후에 수정 필요
'use client';
import React from 'react';

import { useAlert } from '@/shared/hooks/useAlert';
import useModal from '@/shared/hooks/useModal';

export default function Home() {
  const { openTaskForm, openMemoForm } = useModal();
  const { openAlert } = useAlert();

  return (
    <div>
      <button onClick={openTaskForm} className='cursor-pointer block'>
        테스크 테스트
      </button>
      <button onClick={openMemoForm} className='cursor-pointer block'>
        메모 테스트
      </button>
      <button
        onClick={() => openAlert({ message: '테스트 알림', handleClick: () => console.log('Alert Clicked') })}
        className='cursor-pointer block'
      >
        알림 테스트
      </button>
    </div>
  );
}
