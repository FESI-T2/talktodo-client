import { useState } from 'react';

const MSWTestComponent = () => {
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const testAPI = async (endpoint: string) => {
    setLoading(true);
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setResult(`에러: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const testLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'test@test.com', password: '1234' }),
      });
      const data = await response.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setResult(`에러: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='p-6 max-w-2xl mx-auto'>
      <h2 className='text-2xl font-bold mb-4'>MSW 테스트</h2>

      <div className='space-y-2 mb-4'>
        <button
          onClick={() => testAPI('/api/test')}
          className='px-4 py-2 bg-blue-500 text-white rounded mr-2 hover:bg-blue-600'
          disabled={loading}
        >
          기본 테스트
        </button>

        <button
          onClick={() => testAPI('/api/users')}
          className='px-4 py-2 bg-green-500 text-white rounded mr-2 hover:bg-green-600'
          disabled={loading}
        >
          사용자 목록
        </button>

        <button
          onClick={() => testAPI('/api/error')}
          className='px-4 py-2 bg-red-500 text-white rounded mr-2 hover:bg-red-600'
          disabled={loading}
        >
          에러 테스트
        </button>

        <button
          onClick={() => testAPI('/api/slow')}
          className='px-4 py-2 bg-yellow-500 text-white rounded mr-2 hover:bg-yellow-600'
          disabled={loading}
        >
          지연 테스트
        </button>

        <button onClick={testLogin} className='px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600' disabled={loading}>
          로그인 테스트
        </button>
      </div>

      {loading && <p className='text-blue-500'>로딩 중...</p>}

      {result && (
        <div className='mt-4'>
          <h3 className='text-lg font-semibold mb-2'>결과:</h3>
          <pre className='bg-gray-100 p-4 rounded overflow-auto text-sm'>{result}</pre>
        </div>
      )}
    </div>
  );
};

export default MSWTestComponent;
