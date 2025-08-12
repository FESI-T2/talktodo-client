'use client';

import { useEffect, useState } from 'react';

export default function MSWProvider({ children }: { children: React.ReactNode }) {
  const mockEnabled = true;

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
