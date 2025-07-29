// import '../styles/globals.css';
import AlertContainer from '@/shared/components/Alert/AlertContainer';
import '../shared/styles/globals.css';

import ModalContainer from '@/shared/components/Modal/ModalContainer';
import ToastContainer from '@/shared/components/Toast/ToastContainer';
import ErrorBoundary from '@/shared/error/ErrorBoundary';
import MSWProvider from '@/shared/mocks/MSWProvider';
import QueryProvider from '@/shared/provider/QueryProvider';
import pretendard from '@/shared/styles/pretendard';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={pretendard.className}>
        <div id='toast-root' />
        <div id='modal-root' />
        <div id='alert-root' />
        <ErrorBoundary>
          <ToastContainer />
          <ModalContainer />
          <AlertContainer />
          <MSWProvider>
            <QueryProvider>{children}</QueryProvider>
          </MSWProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
