import APIBuilder from '@/shared/lib/api/apiBuilder';
import { TaskDateParams, TaskIdParams, TaskRequest } from '@/task/types/request/index';
import { AllTaskResponse, TaskResponse, DeleteTaskResponse } from '@/task/types/response/index';

const taskApi = {
  // 전체 할일 조회
  getAllTask: () => APIBuilder.get('/v1/task').withCredentials(true).build().call<AllTaskResponse>(),

  // 단건 할일 조회
  getTask: ({ taskid }: TaskIdParams) => APIBuilder.get(`/v1/task/${taskid}`).withCredentials(true).build().call<TaskResponse>(),

  // 할일 생성
  createTask: (data: TaskRequest) => APIBuilder.post('/v1/task', data).withCredentials(true).build().call<TaskResponse>(),

  // 할일 수정
  updateTask: ({ taskid }: TaskIdParams, data: TaskRequest) =>
    APIBuilder.put(`/v1/task/${taskid}`, data).withCredentials(true).build().call<TaskResponse>(),

  // 할일 삭제
  deleteTask: ({ taskid }: TaskIdParams) =>
    APIBuilder.delete(`/v1/task/${taskid}`).withCredentials(true).build().call<DeleteTaskResponse>(),

  // 완료 상태 토글
  toggleTaskDone: ({ taskid }: TaskIdParams) =>
    APIBuilder.put(`/v1/task/done/${taskid}`, {}).withCredentials(true).build().call<TaskResponse>(),

  // 날짜별 할일 조회
  getTasksByDate: ({ date }: TaskDateParams) =>
    APIBuilder.put(`/v1/task/date/${date}`, {}).withCredentials(true).build().call<AllTaskResponse>(),
};

export default taskApi;
