'use client';

import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

import { CustomError } from '../lib/error/customError';
import { useError } from '../lib/error/useError';

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  const { processError } = useError();

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5,
            gcTime: 1000 * 60 * 30,
            retry: 0,
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
              processError(error);
            }
          },
        }),
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
