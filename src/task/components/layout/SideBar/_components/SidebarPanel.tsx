'use client';

import { useRouter } from 'next/navigation';

import Flag from '@/shared/components/Icons/Flag/Flag';

interface Goal {
  id: string;
  goalName: string;
}

interface SidebarPanelProps {
  isFold: boolean;
  goals: Goal[] | string[];
  type: 'PC' | 'Mobile';
}

export default function SidebarPanel({ isFold, goals, type }: SidebarPanelProps) {
  const router = useRouter();

  // 목표 클릭 시 해당 목표 페이지로 라우팅
  const handleGoalClick = (goal: Goal | string, index: number) => {
    if (typeof goal === 'string') {
      // 문자열인 경우 인덱스를 사용하여 라우팅 (임시)
      router.push(`/goal/${index + 1}`);
    } else {
      // 객체인 경우 실제 ID 사용
      router.push(`/goal/${goal.id}`);
    }
  };

  if (type === 'PC') {
    return (
      <div className='w-full'>
        <div className={`flex gap-1 items-center cursor-pointer  ${isFold ? 'justify-center' : 'mb-3'}`}>
          <div className='w-10 h-10 flex items-center justify-center'>
            <Flag type='PC' />
          </div>
          {!isFold && <span className='text-gray-900 font-body1-semibold'>목표</span>}
        </div>
        <div className='flex flex-col'>
          {!isFold &&
            goals.map((goal, idx) => {
              const goalName = typeof goal === 'string' ? goal : goal.goalName;

              return (
                <button
                  key={idx}
                  className='flex w-[230px] pl-0 pr-3 h-[43px] py-2 items-center gap-3 cursor-pointer hover:bg-purple-50 rounded-lg transition-colors duration-200'
                  onClick={() => handleGoalClick(goal, idx)}
                >
                  <span className='text-gray-500 font-body2-regular tracking-[-0.32px] hover:text-purple-600 text-left truncate'>
                    {goalName}
                  </span>
                </button>
              );
            })}
        </div>
      </div>
    );
  }

  if (type === 'Mobile' && !isFold) {
    return (
      <div className='w-full'>
        <button className='flex items-center justify-start w-full h-10 cursor-pointer'>
          <Flag type='Mobile' />
          <span className='text-gray-900 font-body1-semibold ml-2'>목표</span>
        </button>
        <div className='flex flex-col mt-2'>
          {goals.map((goal, idx) => {
            const goalName = typeof goal === 'string' ? goal : goal.goalName;

            return (
              <button
                key={idx}
                className='flex items-center justify-start w-full h-8 cursor-pointer hover:bg-purple-50 rounded transition-colors duration-200'
                onClick={() => handleGoalClick(goal, idx)}
              >
                <span className='text-gray-500 font-body2-regular ml-6 text-left truncate'>{goalName}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
}
