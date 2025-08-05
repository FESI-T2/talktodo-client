'use client';
import { useEffect, useState } from 'react';

import { v4 as uuid } from 'uuid';

import { useStepContext } from '@/chat/provider/StepProvider';
import { TaskTableItem, TaskSchedule } from '@/chat/types/index';
import { useAlert } from '@/shared/hooks/useAlert';

import { ResultHeader, ResultWrapper, ResultTable } from './components/index';
import ActionButtons from '../../ActionButtons/ActionButtons';

interface ResultProps {
  taskSchedules: TaskSchedule[];
  goal: string;
}

// 차후에 리펙토링 필요
const Result = ({ taskSchedules, goal }: ResultProps) => {
  const [taskTableItems, setTaskTableItems] = useState<TaskTableItem[]>(
    taskSchedules.map((schedule) => ({
      id: uuid(),
      goal: goal,
      priority: '낮음',
      content: schedule.content,
      date: {
        from: new Date(),
        to: new Date(),
      },
      taskDate: schedule.taskDate,
      repeatDays: [],
      repeatEnabled: false,
    }))
  );

  useEffect(() => {
    console.log('taskTableItems Items Updated:', taskTableItems);
  }, [taskTableItems]);

  const handleUpdateTaskTableItem = (newTaskTableItems: TaskTableItem, updatedFields: Partial<TaskTableItem>) => {
    setTaskTableItems((prev) => prev.map((item) => (item.id === newTaskTableItems.id ? { ...item, ...updatedFields } : item)));
  };

  const { openAlert } = useAlert();

  const { goToPrevStep } = useStepContext();

  const handleSaveTodos = () => {
    openAlert({ message: '할 일이 성공적으로 추가되었습니다!', handleClick: () => console.log('Alert Clicked') });
  };

  return (
    <div className='flex flex-col items-center max-w-[902px] w-[90%]  justify-center'>
      <ResultWrapper>
        <ResultHeader goal={goal} />
        <ResultTable taskTableItems={taskTableItems} handleUpdateTaskTableItem={handleUpdateTaskTableItem} />
        <ActionButtons
          onClickLeftButton={goToPrevStep}
          onClickRightButton={handleSaveTodos}
          leftButtonText='다시 얘기하기'
          rightButtonText='할 일 저장하기'
        />
      </ResultWrapper>
    </div>
  );
};

export default Result;
