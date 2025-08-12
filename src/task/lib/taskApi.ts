import APIBuilder from '@/shared/lib/api/apiBuilder';
import { MOCK_API_BASE_URL } from '@/shared/mocks/constants/index';
import { TaskDateParams, TaskIdParams, TaskRequest } from '@/task/types/request/index';
import { AllTaskResponse, TaskResponse, DeleteTaskResponse } from '@/task/types/response/index';
const taskApi = {
  // 전체 할일 조회
  getAllTask: () => APIBuilder.get(`${MOCK_API_BASE_URL}/task`).build().call<AllTaskResponse>(),

  // 단건 할일 조회
  getTask: ({ taskid }: TaskIdParams) =>
    APIBuilder.get(`${MOCK_API_BASE_URL}/task/${taskid}`).withCredentials(true).build().call<TaskResponse>(),

  // 할일 생성
  createTask: (data: TaskRequest) => APIBuilder.post(`${MOCK_API_BASE_URL}/task`, data).withCredentials(true).build().call<TaskResponse>(),

  // 할일 수정
  updateTask: ({ taskid }: TaskIdParams, data: TaskRequest) =>
    APIBuilder.put(`${MOCK_API_BASE_URL}/task/${taskid}`, data).withCredentials(true).build().call<TaskResponse>(),

  // 할일 삭제
  deleteTask: ({ taskid }: TaskIdParams) =>
    APIBuilder.delete(`${MOCK_API_BASE_URL}/task/${taskid}`).withCredentials(true).build().call<DeleteTaskResponse>(),

  // 완료 상태 토글
  toggleTaskDone: ({ taskid }: TaskIdParams) =>
    APIBuilder.put(`${MOCK_API_BASE_URL}/task/done/${taskid}`, {}).withCredentials(true).build().call<TaskResponse>(),

  // 날짜별 할일 조회
  getTasksByDate: ({ date }: TaskDateParams) =>
    APIBuilder.put(`${MOCK_API_BASE_URL}/task/date/${date}`, {}).withCredentials(true).build().call<AllTaskResponse>(),
};

export default taskApi;
