// import '../styles/globals.css';
import '../shared/styles/globals.css';

import ErrorBoundary from '@/shared/components/error/ErrorBoundary';
import QueryProvider from '@/shared/components/QueryProvider';
import ToastContainer from '@/shared/components/toast/ToastContainer';
import MSWProvider from '@/shared/mocks/MSWProvider';
import pretendard from '@/shared/styles/pretendard';

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
          <MSWProvider>
            <QueryProvider>{children}</QueryProvider>
          </MSWProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
