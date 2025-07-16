import { http, HttpResponse } from 'msw';

const errorTestHandlers = [
  http.get('/api/query/auth-error', () => {
    return HttpResponse.json({ error: '잘못된 요청입니다' }, { status: 401 });
  }),

  http.get('/api/not-found', () => {
    return HttpResponse.json({ error: '리소스를 찾을 수 없습니다' }, { status: 404 });
  }),

  http.get('/api/query/server-error', () => {
    return HttpResponse.json({ error: '서버 내부 오류' }, { status: 500 });
  }),

  http.get('/api/query/network-error', () => {
    return HttpResponse.json({ error: '서비스 사용 불가' }, { status: 503 });
  }),
];

export default errorTestHandlers;
