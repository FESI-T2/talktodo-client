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

  http.post('/api/user/kakao-login', async ({ request }) => {
    const { code } = await request.json();

    // 코드 검증 로직
    if (code !== 'valid_code') {
      return HttpResponse.json({ message: '잘못된 코드' }, { status: 401 });
    }

    return HttpResponse.json(
      {
        access_token: 'mock_access_token',
      },
      {
        status: 200,
        headers: {
          'Set-Cookie': `refresh_token=mock_refresh_token; Path=/; HttpOnly; Secure; SameSite=Strict`,
        },
      }
    );
  }),
];
