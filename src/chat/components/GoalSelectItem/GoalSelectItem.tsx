'use client';

import React from 'react';

interface GoalSelectItemProps {
  GoalTitle: string;
  TaskCount: number;
  active?: boolean;
  onClick?: () => void;
}

const GoalSelectItem = ({ GoalTitle, TaskCount, active = false, onClick }: GoalSelectItemProps) => {
  return (
    <button
      aria-pressed={active}
      onClick={onClick}
      className={`w-[524px] h-[90px] py-5 px-6 gap-2 flex flex-col items-start justify-center border-solid rounded-2xl cursor-pointer
        ${active ? 'bg-purple-50 border-2 border-purple-500' : 'bg-white border border-gray-200'}
        ${active ? 'text-purple-500' : 'text-gray-900'}`}
    >
      <p className={`font-body1-semibold`}>{GoalTitle}</p>
      <p className={`${active ? 'text-purple-400' : 'text-gray-500'} font-body2-medium-tight`}>{TaskCount}개의 할일</p>
    </button>
  );
};

export default GoalSelectItem;
