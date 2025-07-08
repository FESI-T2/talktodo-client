import { http, HttpResponse } from 'msw';

export const handlers = [
  // 예시: GET /api/user 요청을 모킹 --> 수정 예정
  http.get('/api/user', () => {
    return HttpResponse.json({
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
    });
  }),

  // 예시: POST /api/user 요청을 모킹 --> 수정 예정
  http.post('/api/user', async ({ request }) => {
    const newUser = await request.json();
    return HttpResponse.json(
      {
        id: Date.now(),
        ...newUser,
      },
      { status: 201 }
    );
  }),
];
