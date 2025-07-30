import { ReactElement } from 'react';

import { cn } from '@/shared/utils/cn';
import { Task } from '@/task/types';

import TaskCard from '../TaskCard/TaskCard';

interface TaskContainerProps {
  task: Task[] | undefined;
  layout: 'square' | 'rectangle';
  type: 'todo' | 'done';
}

export default function TaskContainer({ task, layout, type }: TaskContainerProps): ReactElement {
  const title = type === 'done' ? '완료한 일' : '해야할 일';
  const taskArrayLength = task?.length ?? 0;

  return (
    <div className='flex flex-col content-start gap-2 flex-wrap'>
      <div className='flex h-[44px] pl-4 pr-4 items-center gap-2 rounded-xl bg-purple-100 grow shrink-0'>
        <div className='font-body2-medium-tight text-gray-700 text-center'>{title}</div>
        <div className='font-body1-bold text-purple-600 text-center'>{taskArrayLength}</div>
      </div>
      <div className={cn(layout === 'square' ? 'grid grid-cols-3 gap-2' : '')}>
        {task?.map((taskItem) => (
          <div key={taskItem.taskId}>
            <TaskCard layout={layout} task={taskItem} />
          </div>
        ))}
      </div>
    </div>
  );
}
