'use client';

import { useState } from 'react';

import TaskViewContainer from '@/task/components/container/TaskViewContainer';
import TaskViewOptionsContainer from '@/task/components/container/TaskViewOptionsContainer';
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

  console.log(undoneTasks, doneTasks);

  return (
    <div className='flex items-center mt-11 gap-[25px] flex-col bg-purple-50 '>
      <MainHeader totalTodo={totalCount} IncompleteTodo={undoneCount} completedTodo={doneCount} />
      <TaskViewOptionsContainer layout={layout} setLayout={setLayout} />
      <div className='flex items-start gap-4 '>
        <div>
          <TaskViewContainer task={data.result.undoneTasks} layout={layout} type='todo' />
        </div>
        <div className='mt-16 w-[1px] min-h-[448px] max-h-lvw bg-[repeating-linear-gradient(to_bottom,_#ccc_0,_#ccc_4px,_transparent_4px,_transparent_8px)]' />
        <div>
          <TaskViewContainer task={data.result.doneTasks} layout={layout} type='done' />
        </div>
      </div>
    </div>
  );
}
