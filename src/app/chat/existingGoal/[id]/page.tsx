'use client';

import { useParams } from 'next/navigation';
import React from 'react';

const Page = () => {
  const params = useParams();
  const goalTitle = params.id;

  return (
    <div className='p-4'>
      <h1 className='text-xl font-bold'>기존 목표 페이지</h1>
      <p>
        선택한 목표: <strong>{goalTitle}</strong>
      </p>
    </div>
  );
};

export default Page;
