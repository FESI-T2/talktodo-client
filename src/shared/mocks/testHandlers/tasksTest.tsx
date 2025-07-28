import { http, HttpResponse } from 'msw';

import { GetAllTaskData, GetTaskData } from '@/shared/mocks/mockData/taskMockData';

import { MOCK_API_BASE_URL } from '../constants';

const tasksTestHandlers = [
  // 다건 할일 조회
  http.get(`${MOCK_API_BASE_URL}/task`, async () => {
    return HttpResponse.json(GetAllTaskData, { status: 200 });
  }),

  // 단건 할일 조회
  http.get(`${MOCK_API_BASE_URL}/task/:taskid`, async ({ params }) => {
    const { taskid } = params;
    console.log(`Fetching task with ID: ${taskid}`);

    return HttpResponse.json(GetTaskData, { status: 200 });
  }),

  // 단건 할일 생성
  http.post(`${MOCK_API_BASE_URL}/task`, async () => {
    return HttpResponse.json(GetAllTaskData, { status: 200 });
  }),

  // // 목표별 할일 관리 페이지 API
  // http.get('/api/goals', async () => {
  //   return HttpResponse.json({ goals, message: 'goals' }, { status: 200 });
  // }),
];

export default tasksTestHandlers;
