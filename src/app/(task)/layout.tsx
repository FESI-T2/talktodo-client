import React from 'react';

import FloatingMenu from '@/shared/components/FloatingMenu/FloatingMenu';
import SideBarContainer from '@/task/components/layout/SideBar/SideBarContainer';

export default function Tasklayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='h-screen w-screen '>
      <div className='flex py-5 pl-[18px] h-full w-full'>
        <SideBarContainer />
        {children}
        <FloatingMenu />
      </div>
    </div>
  );
}
