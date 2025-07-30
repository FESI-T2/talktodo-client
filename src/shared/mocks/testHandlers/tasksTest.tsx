import { http, HttpResponse } from 'msw';

import { DeleteTaskData, AllTaskData, TaskData, MockTask } from '@/shared/mocks/mockData/taskMockData';
import { AllTaskResponse, DeleteTaskResponse, TaskResponse } from '@/task/types/reponse/index';

import { MOCK_API_BASE_URL } from '../constants';

// 타입 보장용
type TaskArr = typeof MockTask extends Array<infer T> ? T[] : never;
const mockTaskArr: TaskArr = MockTask as TaskArr;

const tasksTestHandlers = [
  // 다건 할일 조회
  http.get(`${MOCK_API_BASE_URL}/task`, async (): Promise<HttpResponse<AllTaskResponse>> => {
    return HttpResponse.json(AllTaskData, { status: 200 });
  }),

  // 단건 할일 조회
  http.get(`${MOCK_API_BASE_URL}/task/:taskid`, async ({ params }): Promise<HttpResponse<TaskResponse>> => {
    console.log(`조회 id: ${params.taskid}`);

    const new_task = mockTaskArr.find((task) => task.taskId === params.taskid);

    return HttpResponse.json(new_task ? { ...TaskData, result: new_task } : TaskData, { status: 200 });
  }),

  // 단건 할일 생성
  http.post(`${MOCK_API_BASE_URL}/task`, async ({ request }): Promise<HttpResponse<TaskResponse>> => {
    let body: Partial<typeof TaskData.result> = {};
    try {
      body = (await request.json()) as Partial<typeof TaskData.result>;
    } catch {}

    const now = new Date().toISOString();
    const newTask = {
      ...TaskData.result,
      ...body,
      taskId: Date.now().toString() + Math.random().toString(36).substring(2, 15),
      taskNo: mockTaskArr.length + 1,
      createdAt: now,
      modifiedAt: now,
      isDone: false,
    };

    mockTaskArr.push(newTask);

    return HttpResponse.json({ ...TaskData, result: newTask }, { status: 200 });
  }),

  // 단건 할일 삭제
  http.delete(`${MOCK_API_BASE_URL}/task/:taskid`, async ({ params }): Promise<HttpResponse<DeleteTaskResponse>> => {
    console.log(`삭제 id: ${params.taskid}`);

    const idx = mockTaskArr.findIndex((task) => task.taskId === params.taskid);
    if (idx !== -1) {
      mockTaskArr.splice(idx, 1);
    }

    return HttpResponse.json(DeleteTaskData, { status: 200 });
  }),

  // 단건 할일 수정
  http.put(`${MOCK_API_BASE_URL}/task/:taskid`, async ({ params, request }): Promise<HttpResponse<TaskResponse>> => {
    const id = params.taskid;
    console.log(`수정 id: ${id}`);

    let body: Partial<typeof TaskData.result> = {};
    try {
      body = (await request.json()) as Partial<typeof TaskData.result>;
    } catch {}

    const idx = mockTaskArr.findIndex((task) => task.taskId === id);
    if (idx !== -1) {
      mockTaskArr[idx] = {
        ...mockTaskArr[idx],
        ...body,
        modifiedAt: new Date().toISOString(),
      };
    }

    return HttpResponse.json({ ...TaskData, result: mockTaskArr[idx] ?? TaskData.result }, { status: 200 });
  }),

  // 완료 상태 토글
  http.put(`${MOCK_API_BASE_URL}/task/done/:taskid`, async ({ params }): Promise<HttpResponse<TaskResponse>> => {
    const id = params.taskid;

    const idx = mockTaskArr.findIndex((t) => t.taskId === id);
    if (idx !== -1) {
      mockTaskArr[idx] = { ...mockTaskArr[idx], isDone: !mockTaskArr[idx].isDone };
    }

    return HttpResponse.json({ ...TaskData, result: mockTaskArr[idx] ?? TaskData.result }, { status: 200 });
  }),

  // 날짜별 할 일 조회
  http.put(`${MOCK_API_BASE_URL}/task/date/:date`, async ({ params }): Promise<HttpResponse<AllTaskResponse>> => {
    const queryDate = params.date;
    console.log(`날짜 조회: ${queryDate}`);

    const filtered = mockTaskArr.filter((t) => t.taskDate === queryDate);

    return HttpResponse.json(
      {
        ...AllTaskData,
        result: {
          ...AllTaskData.result,
          totalCount: filtered.length,
          doneCount: filtered.filter((t) => t.isDone).length,
          undoneCount: filtered.filter((t) => !t.isDone).length,
        },
      },
      { status: 200 }
    );
  }),
];

export default tasksTestHandlers;
