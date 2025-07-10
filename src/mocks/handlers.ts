import { http, HttpResponse } from 'msw';

export const handlers = [
  // 테스트용 간단한 핸들러
  http.get('/api/test', () => {
    console.log('MSW가 /api/test 요청을 가로챘습니다!');
    return HttpResponse.json({ message: 'MSW 작동 중!' });
  }),

  // 실제 API 핸들러
];
