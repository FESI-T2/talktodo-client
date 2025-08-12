'use client';

import { useState } from 'react';

import useGetGoalDetail from '@/goal/hooks/quries/goal/useGetGoalDetail';
import Switch from '@/shared/components/Switch/Switch';
import useBreakpoints from '@/shared/hooks/useBreakpoints';
import useResponsiveType from '@/shared/hooks/useResponsiveType';
import { cn } from '@/shared/utils/cn';
import TaskViewContainer from '@/task/components/container/TaskViewContainer';
import DetailHeader from '@/task/components/layout/Header/DetailHeader';
import useGetTasksByGoal from '@/task/hooks/useGetTasksByGoal';

export default function GoalDetailClient({ goalId }: { goalId: string }) {
  const [layout, setLayout] = useState<'square' | 'rectangle'>('square');

  const { kebabType } = useResponsiveType();

  const { data, isLoading, isError, error } = useGetTasksByGoal(goalId);
  const { data: goalDetail } = useGetGoalDetail(goalId);
  const switchSize = kebabType === 'S' ? 'S' : 'L';

  const { isPc } = useBreakpoints();

  if (isLoading) return <>로딩...</>;
  if (isError) return <>에러: {String(error)}</>;
  if (!data?.result) return <>목표를 찾을 수 없습니다.</>;

  console.log(data.result);

  const { doneTasks, undoneTasks } = data.result;
  const { goalName, incompleteTaskCount, completedTaskCount } = goalDetail?.result || {};

  const handleSwitch = (checked: boolean) => {
    setLayout(checked ? 'rectangle' : 'square');
  };
  return (
    <div className='flex flex-col mt-7 gap-6 max-w-[1168px] m-auto w-[90%]'>
      <DetailHeader category={goalName || ''} IncompleteTodo={incompleteTaskCount || 0} completedTodo={completedTaskCount || 0} />
      <div className='flex flex-row-reverse '>
        <Switch type='layout' size={switchSize} checked={layout === 'rectangle'} onChange={handleSwitch} />
      </div>
      <div className={cn('flex', isPc ? 'items-start gap-4 w-full' : 'flex-col gap-4 self-stretch items-start')}>
        <TaskViewContainer task={undoneTasks} layout={layout} type='todo' />
        {isPc && (
          <div className='mt-16 w-[3px] min-h-[448px] max-h-lvw bg-[repeating-linear-gradient(to_bottom,_#ccc_0,_#ccc_4px,_transparent_4px,_transparent_8px)]' />
        )}
        <TaskViewContainer task={doneTasks} layout={layout} type='done' />
      </div>
    </div>
  );
}
