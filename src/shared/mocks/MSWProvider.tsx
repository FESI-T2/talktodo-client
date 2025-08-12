'use client';

import { useEffect, useState } from 'react';

export default function MSWProvider({ children }: { children: React.ReactNode }) {
  const mockEnabled = true; // 또는 process.env.NEXT_PUBLIC_ENABLE_MSW === 'true'

  const [mswReady, setMswReady] = useState(!mockEnabled);

  useEffect(() => {
    if (mockEnabled) {
      const init = async () => {
        const initMsw = await import('./index').then((res) => res.initMsw);
        await initMsw();
        setMswReady(true);
      };
      init();
    }
  }, [mockEnabled]);

  if (!mswReady) return null;
  return <>{children}</>;
}
