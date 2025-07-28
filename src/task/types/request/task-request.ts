import { Priority } from '@/shared/types/prioity';

export type PostTaskRequest = {
  content: string;
  priority: Priority;
  taskDate: string;
  startTime: string;
  endTime: string;
  goal: string;
};
