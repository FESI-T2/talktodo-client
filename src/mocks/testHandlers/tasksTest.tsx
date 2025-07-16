import { http, HttpResponse } from 'msw';

import { tasks } from '../todoMockData/todos';

const tasksTestHandlers = [
  // 전체 할일 조회
  http.get('/api/tasks', async () => {
    return HttpResponse.json({ tasks, message: '안녕하세요' }, { status: 200 });
  }),
];

export default tasksTestHandlers;
