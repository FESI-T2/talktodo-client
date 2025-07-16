import '../styles/globals.css';

import ErrorBoundary from '@/components/error/ErrorBoundary';
import QueryProvider from '@/components/QueryProvider';
import ToastContainer from '@/components/toast/ToastContainer';
import MSWProvider from '@/mocks/MSWProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <div id='toast-root' />
        <ErrorBoundary>
          <ToastContainer />
          <QueryProvider>
            <MSWProvider>{children}</MSWProvider>
          </QueryProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
