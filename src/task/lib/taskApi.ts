import APIBuilder from '@/shared/lib/api/apiBuilder';
import { AllTaskResponse, TaskResponse, DeleteTaskResponse } from '@/task/types/reponse/index';
import { TaskDateParams, TaskIdParams, TaskRequest } from '@/task/types/request/index';

const taskApi = {
  // 전체 할일 조회
  getAllTask: () => APIBuilder.get('/task').build().call<AllTaskResponse>(),

  // 단건 할일 조회
  getTask: ({ taskid }: TaskIdParams) => APIBuilder.get(`/task/${taskid}`).build().call<TaskResponse>(),

  // 할일 생성
  createTask: (data: TaskRequest) => APIBuilder.post('/task', data).build().call<TaskResponse>(),

  // 할일 수정
  updateTask: ({ taskid }: TaskIdParams, data: TaskRequest) => APIBuilder.put(`/task/${taskid}`, data).build().call<TaskResponse>(),

  // 할일 삭제
  deleteTask: ({ taskid }: TaskIdParams) => APIBuilder.delete(`/task/${taskid}`).build().call<DeleteTaskResponse>(),

  // 완료 상태 토글
  toggleTaskDone: ({ taskid }: TaskIdParams) => APIBuilder.put(`/task/done/${taskid}`, {}).build().call<TaskResponse>(),

  // 날짜별 할일 조회
  getTasksByDate: ({ date }: TaskDateParams) => APIBuilder.put(`/task/date/${date}`, {}).build().call<AllTaskResponse>(),
};

export default taskApi;
