'use client';

import { useState } from 'react';

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
    </div>
  );
}
