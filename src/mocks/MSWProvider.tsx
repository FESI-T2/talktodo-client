'use client';

import { useEffect, useState } from 'react';

export default function MSWProvider({ children }: { children: React.ReactNode }) {
  const [mswReady, setMswReady] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && !mswReady) {
      const init = async () => {
        const initMsw = await import('./index').then((res) => res.initMsw);
        await initMsw();
        setMswReady(true);
      };
      init();
    }
  }, [mswReady]);
  if (!mswReady) return null;

  if (!mswReady) return null;
  return <>{children}</>;
}
