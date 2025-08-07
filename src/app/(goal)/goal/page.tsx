'use client';

import React, { Fragment } from 'react';

import useGetGoalsWithTaskCount from '@/goal/hooks/quries/goal/useGetGoalsWithTaskCount';

export default function GoalPage() {
  const { data } = useGetGoalsWithTaskCount();

  return (
    <div className='flex mt-20 max-w-[1120px] w-full flex-col items-start gap-10'>
      <div className='font-title2-bold text-gray-900'>목표별 할 일 리스트</div>
      <div>
        {data?.data?.result?.map((goal) => (
          <Fragment key={goal.goalId}>
            <div className='font-bold text-lg'>{goal.goalName}</div>
            <div>✅: {goal.completedTaskCount}</div>
            <div>🕓: {goal.incompleteTaskCount}</div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
