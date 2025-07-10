'use client';

import { useEffect } from 'react';

export default function MSWProvider() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      if (typeof window === 'undefined') {
        return;
      }
      import('@/mocks/browser').then(({ worker }) => {
        worker.start({
          onUnhandledRequest: 'bypass',
        });
        console.log('🛠️ MSW가 활성화되었습니다!');
      });
    }
  }, []);

  return null;
}
