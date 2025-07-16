import React from 'react';

const page = () => {
  throw new Error('Test error for ErrorBoundary');
  return <div>page</div>;
};

export default page;
