'use client';

import { useMutation } from '@tanstack/react-query';

import APIBuilder from '@/lib/api/apiBuilder';

// 전역 에러 핸들링 테스팅

const GlobalErrorTestComponent = () => {
  const callTestAPI = (url: string) => APIBuilder.post(url, {}).build().call();

  const validationErrorMutation = useMutation({
    mutationFn: () => callTestAPI('/test-validation-error'),
  });

  const authErrorMutation = useMutation({
    mutationFn: () => callTestAPI('/test-auth-error'),
  });

  const notFoundErrorMutation = useMutation({
    mutationFn: () => callTestAPI('/test-not-found-error'),
  });

  const serverErrorMutation = useMutation({
    mutationFn: () => callTestAPI('/test-server-error'),
  });

  const networkErrorMutation = useMutation({
    mutationFn: () => callTestAPI('/test-network-error'),
  });

  const unknownErrorMutation = useMutation({
    mutationFn: () => callTestAPI('/test-unknown-error'),
  });

  return (
    <div className='p-6 max-w-4xl mx-auto'>
      <h2 className='text-2xl font-bold mb-6'>전역 에러 핸들링 테스트</h2>

      <div className='grid grid-cols-2 gap-4 mb-6'>
        <button
          onClick={() => validationErrorMutation.mutate()}
          className='px-4 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 disabled:opacity-50'
          disabled={validationErrorMutation.isPending}
        >
          {validationErrorMutation.isPending ? '테스트 중...' : '유효성 검사 에러'}
        </button>

        <button
          onClick={() => authErrorMutation.mutate()}
          className='px-4 py-3 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50'
          disabled={authErrorMutation.isPending}
        >
          {authErrorMutation.isPending ? '테스트 중...' : '인증 에러 (리다이렉트)'}
        </button>

        <button
          onClick={() => notFoundErrorMutation.mutate()}
          className='px-4 py-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 disabled:opacity-50'
          disabled={notFoundErrorMutation.isPending}
        >
          {notFoundErrorMutation.isPending ? '테스트 중...' : '404 에러'}
        </button>

        <button
          onClick={() => serverErrorMutation.mutate()}
          className='px-4 py-3 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50'
          disabled={serverErrorMutation.isPending}
        >
          {serverErrorMutation.isPending ? '테스트 중...' : '서버 에러 (ErrorBoundary)'}
        </button>

        <button
          onClick={() => networkErrorMutation.mutate()}
          className='px-4 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50'
          disabled={networkErrorMutation.isPending}
        >
          {networkErrorMutation.isPending ? '테스트 중...' : '네트워크 에러'}
        </button>

        <button
          onClick={() => unknownErrorMutation.mutate()}
          className='px-4 py-3 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50'
          disabled={unknownErrorMutation.isPending}
        >
          {unknownErrorMutation.isPending ? '테스트 중...' : '알 수 없는 에러'}
        </button>
      </div>

      <div className='bg-gray-100 p-4 rounded'>
        <h3 className='text-lg font-semibold mb-2'>테스트 설명:</h3>
        <ul className='text-sm space-y-1'>
          <li>
            • <strong>유효성 검사 에러</strong>: Toast에 유효성 에러 메시지 표시
          </li>
          <li>
            • <strong>인증 에러</strong>: Toast 메시지 + 로그인 페이지로 리다이렉트
          </li>
          <li>
            • <strong>404 에러</strong>: Toast에 찾을 수 없음 메시지 표시
          </li>
          <li>
            • <strong>서버 에러</strong>: ErrorBoundary로 전달되어 에러 화면 표시
          </li>
          <li>
            • <strong>네트워크 에러</strong>: Toast에 네트워크 에러 메시지 표시
          </li>
          <li>
            • <strong>알 수 없는 에러</strong>: Toast에 기본 에러 메시지 표시
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GlobalErrorTestComponent;
