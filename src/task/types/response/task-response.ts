import { ApiResponse } from '@/shared/types/api';

import { Task } from '../index';

export interface GetAllTaskResult {
  doneTasks: Task[];
  undoneTasks: Task[];
  totalCount: number;
  doneCount: number;
  undoneCount: number;
}

/* 다건 할 일 조회 및 날짜별 할일 조회 */
export type AllTaskResponse = ApiResponse<GetAllTaskResult>;

/* 단건 할 일 cur 및 완료 상태 토글 */
export type TaskResponse = ApiResponse<Task>;

/* 단건 할 일 cur 및 완료 상태 토글 */
export type DeleteTaskResponse = ApiResponse<string>;
