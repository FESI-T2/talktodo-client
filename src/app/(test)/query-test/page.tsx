'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import APIBuilder from '@/lib/api/apiBuilder';

export default function QueryTestPage() {
  const [endpoint, setEndpoint] = useState<string | null>(null);

  //API 호출 함수
  const callTestAPI = async (url: string) => APIBuilder.get(url).build().call();

  // Query 실행
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['query-test', endpoint],
    queryFn: async () => {
      if (endpoint) return callTestAPI(endpoint);
    },
    enabled: !!endpoint,
  });

  const queryTests = [
    { label: '성공 요청', url: '/users' },
    { label: '404 에러', url: '/not-found' },
    { label: '500 서버 에러', url: '/query/server-error' },
    { label: '인증 에러', url: '/query/auth-error' },
    { label: '네트워크 에러', url: '/query/network-error' },
  ];
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className='p-6 max-w-2xl mx-auto'>
      <h1 className='text-2xl font-bold mb-6'>Query 에러 테스트</h1>
      <div className='grid grid-cols-1 gap-3 mb-6'>
        {queryTests.map((test) => (
          <button
            key={test.url}
            onClick={() => setEndpoint(test.url)}
            className='p-3 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50'
            disabled={isLoading}
          >
            {test.label}
          </button>
        ))}
      </div>

      <div className='mb-4 space-x-2'>
        <button
          onClick={() => refetch()}
          disabled={!endpoint || isLoading}
          className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50'
        >
          다시 요청
        </button>

        <button onClick={() => setEndpoint(null)} className='px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600'>
          리셋
        </button>
      </div>

      {/* 결과 표시 */}
      <div className='bg-gray-100 p-4 rounded min-h-32'>
        <h3 className='font-semibold mb-2'>결과:</h3>

        {!endpoint && <p className='text-gray-500'>테스트할 API를 선택하세요</p>}

        {isLoading && <p className='text-blue-600'>로딩 중...</p>}

        {error && (
          <div className='text-red-600'>
            <p>
              <strong>에러 발생:</strong>
            </p>
            <p>{error.message}</p>
          </div>
        )}

        {data && (
          <div className='text-green-600'>
            <p>
              <strong>성공:</strong>
            </p>
            <pre className='text-sm mt-2 bg-white p-2 rounded overflow-auto'>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>

      <div className='mt-6 p-4 bg-yellow-50 rounded'>
        <h4 className='font-semibold text-yellow-800 mb-2'>테스트 설명:</h4>
        <ul className='text-sm text-yellow-700 space-y-1'>
          <li>
            • <strong>성공 요청</strong>: 정상적인 데이터 반환
          </li>
          <li>
            • <strong>404 에러</strong>: 전역 에러 핸들러에서 Toast 표시
          </li>
          <li>
            • <strong>500 서버 에러</strong>: error.tsx 페이지로 이동
          </li>
          <li>
            • <strong>인증 에러</strong>: Toast + 로그인 페이지 리다이렉트
          </li>
          <li>
            • <strong>네트워크 에러</strong>: Toast 메시지 표시
          </li>
        </ul>
      </div>
    </div>
  );
}
