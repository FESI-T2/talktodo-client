import { Task } from '@/mocks/todoMockData/todos';

type TaskLayoutType = 'square' | 'rectangle' | 'timeline' | 'goal';
type TaskCardSize = 'L' | 'S';

export type TaskCardProps = {
  task: Task;
  layout: TaskLayoutType;
  size?: TaskCardSize;
};
