'use client';
import { Suspense } from 'react';

import useMount from '@/shared/hooks/useMount';

const SSRSafeSuspense = (props: React.ComponentProps<typeof Suspense>) => {
  const { fallback } = props;
  const isMounted = useMount();

  if (isMounted) {
    return <Suspense {...props} />;
  }
  return <>{fallback}</>;
};

export default SSRSafeSuspense;
