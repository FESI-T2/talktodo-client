'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

import SideBarContainer from '@/task/components/layout/SideBar/SideBarContainer';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

const ConditionalLayout = ({ children }: ConditionalLayoutProps) => {
  const pathname = usePathname();

  // 사이드바를 제외할 경로들
  const excludePaths = [
    '/login',
    '/register',
    '/chat',
    '/mypage',
    // 테스트 페이지들도 제외 (필요에 따라)
    // '/error-test',
    // '/msw-test',
    // '/mutation-test',
    // '/query-test',
    // '/tasks-test',
    // '/user-test',
  ];

  // 현재 경로가 제외 경로에 포함되는지 확인
  const shouldExcludeSidebar = excludePaths.some((path) => pathname.startsWith(path));

  // 사이드바가 필요 없는 페이지
  if (shouldExcludeSidebar) {
    return <div className='w-full'>{children}</div>;
  }

  // 사이드바가 필요한 페이지
  return (
    <div className='w-full flex'>
      <SideBarContainer />
      <main className='flex-1'>{children}</main>
    </div>
  );
};

export default ConditionalLayout;
