import React from 'react';

import FloatingMenu from '@/shared/components/FloatingMenu/FloatingMenu';

export default function Tasklayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='h-screen w-screen'>
      <FloatingMenu />
      {children}
    </div>
  );
}
