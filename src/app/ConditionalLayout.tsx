'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

import useResponsiveType from '@/shared/hooks/useResponsiveType';
import SideBarContainer from '@/task/components/layout/SideBar/SideBarContainer';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

const ConditionalLayout = ({ children }: ConditionalLayoutProps) => {
  const pathname = usePathname();
  const { sidebarType } = useResponsiveType();

  // PC에서 Grid 레이아웃을 위한 스타일 계산
  const getLayoutStyles = () => {
    if (sidebarType === 'MOBILE') {
      return 'w-full flex flex-col';
    }

    // PC/태블릿: Grid 레이아웃으로 사이드바와 메인 비율 분리
    return 'w-full h-screen grid grid-cols-[auto_1fr] gap-4 pl-5';
  };

  const getMainStyles = () => {
    if (sidebarType === 'MOBILE') {
      return 'flex-1 pt-[20px]';
    }

    // PC/태블릿: 메인 콘텐츠 영역 스타일
    return 'overflow-auto px-6 py-4';
  };

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
    <div className={getLayoutStyles()}>
      {sidebarType === 'PC' ? (
        <>
          <SideBarContainer />
          <main className={getMainStyles()}>{children}</main>
        </>
      ) : (
        <>
          <SideBarContainer />
          <main className={getMainStyles()}>{children}</main>
        </>
      )}
    </div>
  );
};

export default ConditionalLayout;
