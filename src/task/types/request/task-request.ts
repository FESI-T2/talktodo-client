import { Priority } from '@/shared/types/prioity';
import { RepeatDay } from '@/task/types';
/* 단건 할 일 생성 및 수정 */
export interface TaskRequest {
  content: string;
  priority: Priority;
  taskDate: string;
  startTime: string;
  endTime: string;
  goalId: string;
  repeatEnabled: boolean;
  repeatTypes: RepeatDay[];
}

/* params */

/* 단건 할 일 조회 수정 삭제 및 완료 상태 토글  */
export interface TaskIdParams {
  taskid: string;
}

/* 날짜별 할 일 조회  */
export interface TaskDateParams {
  date: string;
}
