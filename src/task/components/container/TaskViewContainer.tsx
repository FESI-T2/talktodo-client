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

  return (
    <div className='flex flex-col content-start gap-2 flex-wrap'>
      <div className='flex h-[44px] pl-4 pr-4 items-center gap-2 rounded-xl bg-purple-100 grow shrink-0 mb-3'>
        <div className='font-body2-medium-tight text-gray-700 text-center'>{title}</div>
        <div className='font-body1-bold text-purple-600 text-center'>{taskArrayLength}</div>
      </div>
      <div className={cn(layout === 'square' ? 'grid grid-cols-3 gap-2' : 'flex flex-col items-start gap-3')}>
        {task.map((taskItem) => (
          <div key={taskItem.taskId}>
            <TaskCard layout={layout} task={taskItem} />
          </div>
        ))}
      </div>
    </div>
  );
}
