import { Goal } from '@/shared/mocks/todoMockData/Goals';
import { Task } from '@/shared/mocks/todoMockData/todos';

type TaskLayoutType = 'square' | 'rectangle' | 'timeline';

export type TaskCardProps = {
  layout: TaskLayoutType;
  task: Task;
};

export interface TaskBasedProps {
  task: Task;
  layout?: 'rectangle' | 'square' | 'timeline';
}
export interface GoalBasedProps {
  goal: Goal;
  layout?: 'goal';
}
