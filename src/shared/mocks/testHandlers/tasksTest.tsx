import { http, HttpResponse } from 'msw';

import { goals } from '../todoMockData/Goals';
import { tasks } from '../todoMockData/todos';

const tasksTestHandlers = [
  // 전체 할일 조회
  http.get('/api/tasks', async () => {
    return HttpResponse.json({ tasks, message: '안녕하세요' }, { status: 200 });
  }),

  // 목표별 할일 관리 페이지 API
  http.get('/api/goals', async () => {
    return HttpResponse.json({ goals, message: 'goals' }, { status: 200 });
  }),
];

export default tasksTestHandlers;
