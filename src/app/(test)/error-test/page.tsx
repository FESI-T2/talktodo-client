import React from 'react';

const page = () => {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }
  throw new Error('Test error for ErrorBoundary');
  return <div>page</div>;
};

export default page;
