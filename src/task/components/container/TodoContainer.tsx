import { ReactElement } from 'react';

import { Task } from '@/task/types';

import TaskCard from '../TaskCard/TaskCard';

interface TaskContainerProps {
  task: Task[] | undefined;
  layout: 'square' | 'rectangle';
}

export default function TaskContainer({ task, layout }: TaskContainerProps): ReactElement {
  return (
    <>
      {task?.map((taskItem) => (
        <div key={taskItem.taskId}>
          <TaskCard layout={layout} task={taskItem} />
        </div>
      ))}
    </>
  );
}
