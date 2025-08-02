'use client';

import { useState } from 'react';

import DateSubHeader from '@/task/components/container/DateSubHeader';
import TaskViewContainer from '@/task/components/container/TaskViewContainer';
import MainHeader from '@/task/components/layout/Header/MainHeader';
import useDashboardTasks from '@/task/hooks/useDashboardTasks';

export default function DashboardPage() {
  const { data } = useDashboardTasks();
  const [layout, setLayout] = useState<'square' | 'rectangle'>('square');

  if (!data) {
    return <div>Loading...</div>;
  }

  const {
    result: { undoneCount, doneCount, totalCount, undoneTasks, doneTasks },
  } = data;

  return (
    <div className='flex items-center mt-11 gap-[25px] flex-col bg-purple-50 max-w-[1168px]  m-auto w-[90%]'>
      <MainHeader totalTodo={totalCount} IncompleteTodo={undoneCount} completedTodo={doneCount} />
      <DateSubHeader layout={layout} setLayout={setLayout} />
      <div className='flex items-start gap-4 w-full'>
        <TaskViewContainer task={undoneTasks} layout={layout} type='todo' />
        <div className='mt-16 w-[1px] min-h-[448px] max-h-lvw bg-[repeating-linear-gradient(to_bottom,_#ccc_0,_#ccc_4px,_transparent_4px,_transparent_8px)]' />
        <TaskViewContainer task={doneTasks} layout={layout} type='done' />
      </div>
    </div>
  );
}
