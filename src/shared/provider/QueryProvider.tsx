'use client';

import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { useError } from '@/shared/error/useError';

import { BoundaryFallback } from '../error/Fallback/FallBack';
import { CustomError } from '../lib/error/customError';

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  const { handleAuthError, tokenErrorCodes, logError, showErrorToast } = useError();

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5,
            gcTime: 1000 * 60 * 30,
            retry: 1,
            refetchOnWindowFocus: false,
            throwOnError: false,
          },
          mutations: {
            throwOnError: false,
          },
        },
        queryCache: new QueryCache({
          onError: (error: Error) => {
            if (error instanceof CustomError) {
              if (tokenErrorCodes.includes(error.errorType)) {
                handleAuthError();
                return;
              }
              showErrorToast(error);
              logError(error);
            }
            throw new CustomError('UNKNOWN_ERROR', 500, '알 수 없는 오류가 발생했습니다.');
          },
        }),
      })
  );

  return (
    <ErrorBoundary fallbackRender={({ error }) => <BoundaryFallback error={error} />}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
