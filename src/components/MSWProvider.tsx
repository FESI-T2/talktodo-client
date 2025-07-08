'use client';

import { useEffect } from 'react';

export default function MSWProvider() {
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      import('../mocks/browser').then(({ worker }) => {
        // 모킹되지 않은 요청은 그대로 통과
        worker.start({
          onUnhandledRequest: 'bypass',
        });
        console.log('🛠️ MSW가 활성화되었습니다!');
      });
    }
  }, []);

  return null;
}
