import { Priority } from '@/shared/types/prioity';

export type RepeatDay = '월' | '화' | '수' | '목' | '금' | '토' | '일';

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
  repeatEnabled: boolean;
  repeatTypes: RepeatDay[];
}
