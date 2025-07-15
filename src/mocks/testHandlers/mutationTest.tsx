import { http, HttpResponse } from 'msw';

const mutationTestHandlers = [
  http.post('/api/test-validation-error', () => {
    return HttpResponse.json(
      {
        errorType: 'VALIDATION_ERROR',
        message: '입력값이 유효하지 않습니다.',
        details: ['이메일 형식이 잘못되었습니다.'],
      },
      { status: 400 }
    );
  }),

  http.post('/api/test-auth-error', () => {
    return HttpResponse.json(
      {
        errorType: 'AUTHENTICATION_ERROR',
        message: '인증 토큰이 만료되었습니다.',
      },
      { status: 401 }
    );
  }),

  http.post('/api/test-not-found-error', () => {
    return HttpResponse.json(
      {
        errorType: 'NOT_FOUND_ERROR',
        message: '사용자를 찾을 수 없습니다.',
      },
      { status: 404 }
    );
  }),

  http.post('/api/test-server-error', () => {
    return HttpResponse.json(
      {
        errorType: 'INTERNAL_SERVER_ERROR',
        message: '데이터베이스 연결에 실패했습니다.',
      },
      { status: 500 }
    );
  }),

  http.post('/api/test-network-error', () => {
    return HttpResponse.json(
      {
        errorType: 'NETWORK_ERROR',
        message: '네트워크 연결이 불안정합니다.',
      },
      { status: 503 }
    );
  }),

  http.post('/api/test-unknown-error', () => {
    return HttpResponse.json(
      {
        errorType: 'UNKNOWN_ERROR',
        message: '알 수 없는 오류가 발생했습니다.',
      },
      { status: 422 }
    );
  }),
];
export default mutationTestHandlers;
