import { http, HttpResponse } from 'msw';

const mockTestHandlers = [
  // 기본 테스트
  http.get('/api/test', () => {
    return HttpResponse.json({ message: 'MSW 작동 중!' });
  }),

  // 성공 응답 테스트
  http.get('/api/users', () => {
    return HttpResponse.json([
      { id: 1, name: '홍길동', email: 'hong@test.com' },
      { id: 2, name: '김철수', email: 'kim@test.com' },
    ]);
  }),

  // 에러 응답 테스트
  http.get('/api/error', () => {
    return HttpResponse.json({ error: '테스트 에러입니다' }, { status: 500 });
  }),

  // 지연된 응답 테스트
  http.get('/api/slow', async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return HttpResponse.json({ message: '2초 후 응답!' });
  }),

  // POST 요청 테스트
  http.post('/api/login', async ({ request }) => {
    const body = (await request.json()) as { email: string; password: string };

    if (body.email === 'test@test.com' && body.password === '1234') {
      return HttpResponse.json({
        success: true,
        token: 'mock-token-123',
        user: { id: 1, name: '테스트 유저' },
      });
    }

    return HttpResponse.json({ error: '로그인 실패' }, { status: 401 });
  }),
];

export default mockTestHandlers;
