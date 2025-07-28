import { Priority } from '@/shared/types/prioity';

/* 단건 할 일 생성 및 수정 */
export interface TaskRequest {
  content: string;
  priority: Priority;
  taskDate: string;
  startTime: string;
  endTime: string;
  goal: string;
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
