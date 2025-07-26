'use client';

import MSWTestComponent from '@/shared/components/MSWTestComponent';

const MSWTestPage = () => {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }
  return (
    <div className='min-h-screen bg-gray-50'>
      <MSWTestComponent />
    </div>
  );
};

export default MSWTestPage;
