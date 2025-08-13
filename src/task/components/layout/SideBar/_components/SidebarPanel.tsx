'use client';

import { useRouter, usePathname } from 'next/navigation';

import Flag from '@/shared/components/Icons/Flag/Flag';
import useResponsiveType from '@/shared/hooks/useResponsiveType';

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
  console.log(goals);
  const router = useRouter();
  const pathname = usePathname();
  const { sidebarType } = useResponsiveType();

  const isGoalRoute = pathname.startsWith('/goal');

  const getGoalHeaderStyles = (): string => {
    const baseStyles = 'flex gap-1 items-center cursor-pointer';

    if (isFold) {
      return `${baseStyles} justify-center`;
    }

    if (isGoalRoute) {
      return `${baseStyles} border-l-4 border-purple-600 pl-1 mb-3`;
    }

    return `${baseStyles} mb-3`;
  };

  const getGoalHeaderTextStyles = (): string => {
    const baseTextStyles = 'font-body1-semibold';
    const textColor = isGoalRoute ? 'text-purple-600' : 'text-gray-900';

    return `${textColor} ${baseTextStyles}`;
  };

  const getMobileGoalHeaderTextStyles = (): string => {
    const baseTextStyles = 'font-body1-semibold ml-2';
    const textColor = isGoalRoute ? 'text-purple-600' : 'text-gray-900';

    return `${textColor} ${baseTextStyles}`;
  };

  const handleGoalClick = (goal: Goal | string, index: number) => {
    if (typeof goal === 'string') {
      router.push(`/goal/goal_00${index + 1}`);
      // NOTE: 골 아이디 받아오기
    } else {
      router.push(`/goal/${goal.id}`);
    }
  };

  const handleGoalHeaderClick = () => {
    router.push('/goal');
  };

  // 현재 경로에 해당하는 목표인지 확인하는 함수
  const isActiveGoal = (goal: Goal | string, index: number): boolean => {
    if (typeof goal === 'string') {
      return pathname === `/goal/goal_00${index + 1}`;
    } else {
      return pathname === `/goal/${goal.id}`;
    }
  };

  if (type === 'PC') {
    return (
      <div className='w-full'>
        <button className={getGoalHeaderStyles()} onClick={handleGoalHeaderClick}>
          <div className='w-10 h-10 flex items-center justify-center'>
            <Flag type='PC' />
          </div>
          {!isFold && <span className={getGoalHeaderTextStyles()}>목표</span>}
        </button>
        <div className='flex flex-col'>
          {!isFold &&
            goals.map((goal, idx) => {
              const goalName = typeof goal === 'string' ? goal : goal.goalName;
              const isActive = isActiveGoal(goal, idx);

              return (
                <button
                  key={idx}
                  className='flex w-[230px] pl-0 pr-3 h-[43px] py-2 items-center gap-3 cursor-pointer hover:bg-purple-50 rounded-lg transition-colors duration-200'
                  onClick={() => handleGoalClick(goal, idx)}
                >
                  <span
                    className={`font-body2-regular tracking-[-0.32px] text-left truncate pointer-events-none ${
                      isActive ? 'text-purple-500' : 'text-gray-500 hover:text-purple-600'
                    }`}
                  >
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
        <button className='flex items-center justify-start w-full h-10 cursor-pointer' onClick={handleGoalHeaderClick}>
          <Flag type='Mobile' />
          <span className={getMobileGoalHeaderTextStyles()}>목표</span>
        </button>
        <div className='flex flex-col mt-2 gap-2'>
          {goals.map((goal, idx) => {
            const goalName = typeof goal === 'string' ? goal : goal.goalName;
            const isActive = isActiveGoal(goal, idx);

            return (
              <button
                key={idx}
                className='flex items-center justify-start w-full min-h-8 h-fit cursor-pointer hover:bg-purple-50 rounded transition-colors duration-200'
                onClick={() => handleGoalClick(goal, idx)}
              >
                <span
                  className={`font-body2-regular text-left pointer-events-none ${
                    sidebarType === 'MOBILE' ? 'ml-2' : 'truncate ml-6'
                  } ${isActive ? 'text-purple-500' : 'text-gray-500'}`}
                >
                  {goalName}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
}
