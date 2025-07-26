import '../styles/globals.css';

import ErrorBoundary from '@/components/error/ErrorBoundary';
import ModalContainer from '@/components/modal/ModalContainer';
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
        <div id='modal-root' />
        <ErrorBoundary>
          <ToastContainer />
          <ModalContainer />
          <MSWProvider>
            <QueryProvider>{children}</QueryProvider>
          </MSWProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
