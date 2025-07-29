import { Priority } from '@/shared/types/prioity';

export interface Task {
  taskId: string;
  taskNo: number;
  content: string;
  priority: Priority;
  taskDate: string;
  startTime: string;
  endTime: string;
  goal: string;
  isDone: boolean;
  createdAt: string;
  modifiedAt: string;
}
