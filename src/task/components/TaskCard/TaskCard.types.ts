import { Goal } from '@/mocks/todoMockData/Goals';
import { Task } from '@/mocks/todoMockData/todos';

type TaskLayoutType = 'square' | 'rectangle' | 'timeline';

export type TaskCardProps =
  | {
      layout: TaskLayoutType;
      task: Task;
    }
  | { layout: 'goal'; goal: Goal };

export interface TaskBasedProps {
  task: Task;
  layout?: 'rectangle' | 'square' | 'timeline';
}
export interface GoalBasedProps {
  goal: Goal;
  layout?: 'goal';
}
