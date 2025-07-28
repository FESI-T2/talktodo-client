import { ApiResponse } from '@/shared/types/api';

import { Task } from '../index';

interface GetAllTaskResult {
  tasks: Task[];
  totalCount: number;
  doneCount: number;
  undoneCount: number;
}

export type GetAllTaskResponse = ApiResponse<GetAllTaskResult>;
export type GetTaskResponse = ApiResponse<Task>;
export type PostTaskResponse = ApiResponse<Task>;
