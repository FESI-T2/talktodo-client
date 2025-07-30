'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import TaskViewOptionsContainer from '@/task/components/container/TaskViewOptionsContainer';
import TaskContainer from '@/task/components/container/TodoContainer';
import { useDateSelector } from '@/task/components/dateSelector';
import MainHeader from '@/task/components/layout/Header/MainHeader';
import taskApi from '@/task/lib/taskApi';
import { AllTaskResponse } from '@/task/types/reponse';

export default function DateSpecificDashboardPage() {
  const params = useParams();
  const router = useRouter();
  const [Data, setData] = useState<AllTaskResponse>();
  const [layout, setLayout] = useState<'square' | 'rectangle'>('square');
  const dateParam = params.date as string;

  // URL의 날짜 파라미터로 useDateSelector 초기화
  useDateSelector(dateParam);

  useEffect(() => {
    // 날짜가 유효한지 확인
    if (!dateParam || !/^\d{4}-\d{2}-\d{2}$/.test(dateParam)) {
      router.push('/dashboard');
      return;
    }

    // 해당 날짜의 할일 데이터 가져오기 (향후 API 변경 필요)
    taskApi.getAllTask().then((res) => {
      console.log(`${dateParam}의 할일:`, res.data.result);
      setData(res.data);
    });
  }, [dateParam, router]);

  const percent = (Data?.result?.doneCount ?? 0) / (Data?.result?.totalCount ?? 1);

  return (
    <div className='flex items-center w-full mt-11 gap-[25px] flex-col bg-purple-50'>
      <MainHeader
        percent={percent}
        totalTodo={Data?.result.totalCount ?? 0}
        IncompleteTodo={Data?.result.undoneTasks.length ?? 0}
        completedTodo={Data?.result.doneCount ?? 0}
      />
      <TaskViewOptionsContainer layout={layout} setLayout={setLayout} />
      <div className='flex flex-row gap-4'>
        <div>
          <TaskContainer task={Data?.result.undoneTasks} layout={layout} type='todo' />
        </div>
        <div />
        <div>
          <TaskContainer task={Data?.result.doneTasks} layout={layout} type='done' />
        </div>
      </div>
    </div>
  );
}
