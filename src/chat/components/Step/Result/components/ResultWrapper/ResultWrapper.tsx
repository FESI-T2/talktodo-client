import React from 'react';

interface ResultWrapperProps {
  children: React.ReactNode;
}

const ResultWrapper = ({ children }: ResultWrapperProps) => {
  return (
    <div
      className='
        flex flex-col items-start rounded-4xl
        border border-solid border-gray-200
        bg-white shadow-[0_0_40px_0_rgba(52,35,101,0.15)]
        tb:px-8 tb:pt-10 tb:pb-12 tb:gap-5
        px-5 py-6 gap-4 w-full 
      '
    >
      {children}
    </div>
  );
};

export default ResultWrapper;
