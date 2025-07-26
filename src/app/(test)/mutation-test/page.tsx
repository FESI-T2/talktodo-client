'use client';

import GlobalErrorTestComponent from '@/shared/test/GlobalErrorTestComponent';

const ErrorTestPage = () => {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }
  return (
    <div className='min-h-screen bg-gray-50'>
      <GlobalErrorTestComponent />
    </div>
  );
};

export default ErrorTestPage;
