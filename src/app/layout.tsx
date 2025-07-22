import '../styles/globals.css';

import ErrorBoundary from '@/components/error/ErrorBoundary';
import QueryProvider from '@/components/QueryProvider';
import ToastContainer from '@/components/toast/ToastContainer';
import MSWProvider from '@/mocks/MSWProvider';
import pretendard from '@/styles/pretendard';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={pretendard.className}>
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
