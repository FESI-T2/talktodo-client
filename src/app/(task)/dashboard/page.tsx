'use client';

import { useEffect, useState } from 'react';

import TaskViewOptionsContainer from '@/task/components/container/TaskViewOptionsContainer';
import TaskContainer from '@/task/components/container/TodoContainer';
import MainHeader from '@/task/components/layout/Header/MainHeader';
import taskApi from '@/task/lib/taskApi';
import { AllTaskResponse } from '@/task/types/reponse';

export default function DashboardPage() {
  const [Data, setData] = useState<AllTaskResponse>();
  const [layout, setLayout] = useState<'square' | 'rectangle'>('square');

  useEffect(() => {
    taskApi.getAllTask().then((res) => {
      console.log(res.data.result);
      setData(res.data);
    });
  }, []);

  const percent = ((Data?.result?.doneCount ?? 0) / (Data?.result?.totalCount ?? 1)) * 100;

  return (
    <div className='flex items-center mt-11 gap-[25px] flex-col bg-purple-50 '>
      <MainHeader
        percent={percent}
        totalTodo={Data?.result.totalCount ?? 0}
        IncompleteTodo={Data?.result.undoneTasks.length ?? 0}
        completedTodo={Data?.result.doneCount ?? 0}
      />
      <TaskViewOptionsContainer layout={layout} setLayout={setLayout} />
      <div className='flex items-start gap-4 '>
        <div>
          <TaskContainer task={Data?.result.undoneTasks} layout={layout} type='todo' />
        </div>
        <div className='mt-[54px] w-[1px] min-h-[448px] max-h-lvw bg-[repeating-linear-gradient(to_bottom,_#ccc_0,_#ccc_4px,_transparent_4px,_transparent_8px)]' />
        <div>
          <TaskContainer task={Data?.result.doneTasks} layout={layout} type='done' />
        </div>
      </div>
    </div>
  );
}
