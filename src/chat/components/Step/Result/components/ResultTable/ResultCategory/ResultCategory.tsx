import React from 'react';

import { cn } from '@/shared/utils/cn';

const ResultCategory = () => {
  const categoryStlye = 'font-body2-bold text-purple-700';

  return (
    <div className='hidden pc:block '>
      <div className='gap-8 py-3 px-5 bg-purple-50 rounded-xl w-full table '>
        <p className={cn(categoryStlye)}>할일</p>
        <p className={cn(categoryStlye)}>날짜</p>
        <p className={cn(categoryStlye)}>우선순위</p>
        <p className={cn(categoryStlye)}>반복설정</p>
      </div>
    </div>
  );
};

export default ResultCategory;
