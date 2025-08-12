import { http, HttpResponse } from 'msw';

import { DeleteTaskData, AllTaskData, TaskData, MockTask } from '@/shared/mocks/mockData/taskMockData';
import { AllTaskResponse, DeleteTaskResponse, TaskResponse } from '@/task/types/response/index';

import { MOCK_API_BASE_URL } from '../constants';

// 타입 보장용
type TaskArr = typeof MockTask extends Array<infer T> ? T[] : never;
const mockTaskArr: TaskArr = MockTask as TaskArr;

const tasksTestHandlers = [
  // 단건 할일 조회
  http.get(`${MOCK_API_BASE_URL}/task/:taskId`, async ({ params }): Promise<HttpResponse<TaskResponse>> => {
    const id = params.taskId as string;
    console.log(`조회 id: ${id}`);

    const new_task = mockTaskArr.find((task) => task.taskId === id);

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
  http.delete(`${MOCK_API_BASE_URL}/task/:taskId`, async ({ params }): Promise<HttpResponse<DeleteTaskResponse>> => {
    const id = params.taskId as string;
    console.log(`삭제 id: ${id}`);

    const idx = mockTaskArr.findIndex((task) => task.taskId === id);
    if (idx !== -1) {
      mockTaskArr.splice(idx, 1);
    }

    return HttpResponse.json(DeleteTaskData, { status: 200 });
  }),

  // 단건 할일 수정
  http.put(`${MOCK_API_BASE_URL}/task/:taskId`, async ({ params, request }): Promise<HttpResponse<TaskResponse>> => {
    const id = params.taskId as string;
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
  http.patch(`${MOCK_API_BASE_URL}/task/done/:taskId`, async ({ params }): Promise<HttpResponse<TaskResponse>> => {
    const id = params.taskId as string;

    const idx = mockTaskArr.findIndex((t) => t.taskId === id);
    if (idx !== -1) {
      mockTaskArr[idx] = { ...mockTaskArr[idx], isDone: !mockTaskArr[idx].isDone };
    }

    return HttpResponse.json({ ...TaskData, result: mockTaskArr[idx] ?? TaskData.result }, { status: 200 });
  }),

  // 날짜별 할 일 조회
  http.get(`${MOCK_API_BASE_URL}/task/date/:date`, async ({ params }): Promise<HttpResponse<AllTaskResponse>> => {
    const queryDate = params.date as string;
    console.log(`날짜 조회: ${queryDate}`);

    type RepeatDay = '월' | '화' | '수' | '목' | '금' | '토' | '일';
    const dayKor = (dateStr: string): RepeatDay => ['일', '월', '화', '수', '목', '금', '토'][new Date(dateStr).getDay()] as RepeatDay;
    const day = dayKor(queryDate);

    const matched = mockTaskArr.filter(
      (t) => t.taskDate === queryDate || (t.repeatEnabled && (t.repeatTypes as RepeatDay[]).includes(day))
    );
    const normalized = matched.map((t) => (t.repeatEnabled ? { ...t, taskDate: queryDate } : t));

    return HttpResponse.json(
      {
        ...AllTaskData,
        result: {
          doneTasks: normalized.filter((t) => t.isDone),
          undoneTasks: normalized.filter((t) => !t.isDone),
          totalCount: normalized.length,
          doneCount: normalized.filter((t) => t.isDone).length,
          undoneCount: normalized.filter((t) => !t.isDone).length,
        },
      },
      { status: 200 }
    );
  }),

  // 목표별 할 일 조회
  http.get(`${MOCK_API_BASE_URL}/task/goal/:goalId`, async ({ params }): Promise<HttpResponse<AllTaskResponse>> => {
    const goalId = params.goalId as string;
    // goal 문자열이 goalName이라고 가정하고 간단 매핑(데모)
    const matched = mockTaskArr.filter((t) => t.goal === goalId || t.goal.includes(goalId));
    return HttpResponse.json(
      {
        ...AllTaskData,
        result: {
          doneTasks: matched.filter((t) => t.isDone),
          undoneTasks: matched.filter((t) => !t.isDone),
          totalCount: matched.length,
          doneCount: matched.filter((t) => t.isDone).length,
          undoneCount: matched.filter((t) => !t.isDone).length,
        },
      },
      { status: 200 }
    );
  }),
];

export default tasksTestHandlers;
