import React from 'react';

interface OverlayProps {
  children: React.ReactNode;
}

const Overlay = ({ children }: OverlayProps) => {
  return (
    <>
      <div className='fixed inset-0 bg-black/50 z-40 flex items-center justify-center '>
        <div className='max-w-[480px] w-[90%]'>{children}</div>
      </div>
    </>
  );
};

export default Overlay;
