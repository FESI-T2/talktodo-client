import { Fragment } from 'react';

// import useBreakpoints from '@/shared/hooks/useBreakpoints';
import { cn } from '@/shared/utils/cn';
import { Task } from '@/task/types';

import TaskCard from '../TaskCard/TaskCard';
interface TaskViewContainerProps {
  task: Task[];
  layout: 'square' | 'rectangle';
  type: 'todo' | 'done';
}

export default function TaskViewContainer({ task, layout, type }: TaskViewContainerProps) {
  const title = type === 'todo' ? '해야할 일' : '완료한 일';
  const taskArrayLength = task.length ?? 0;
  // const { isMobile, isXs } = useBreakpoints();

  const layOutpostionStlye = layout === 'square' ? 'grid grid-cols-3 gap-2' : 'flex flex-col items-start gap-3 content-start';

  return (
    <div className='flex flex-col  gap-2 flex-wrap w-full'>
      <div className='flex h-[44px] pl-4 pr-4 items-center gap-2 rounded-xl bg-purple-100 grow  mb-3'>
        <div className='font-body2-medium-tight text-gray-700 text-center'>{title}</div>
        <div className='font-body1-bold text-purple-600 text-center'>{taskArrayLength}</div>
      </div>
      <div className={cn(layOutpostionStlye, layout === 'square' ? 'flex items-start content-start flex-wrap self-stretch' : '')}>
        {task.map((taskItem) => (
          <Fragment key={taskItem.taskId}>
            <TaskCard layout={layout} task={taskItem} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
