// 차후에 수정 필요
'use client';
import React from 'react';

import useModal from '@/shared/hooks/useModal';

export default function Home() {
  const { openTaskForm, openMemoForm } = useModal();

  return (
    <div>
      <button onClick={openTaskForm} className='cursor-pointer block'>
        테스크 테스트
      </button>
      <button onClick={openMemoForm} className='cursor-pointer'>
        메모 테스트
      </button>
    </div>
  );
}
