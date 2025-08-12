'use client';

import { useRouter, usePathname } from 'next/navigation';

import Home from '@/shared/components/Icons/Home/Home';

// 상수 정의
const ACTIVE_ROUTES = ['/', '/dashboard'] as const;
const DASHBOARD_ROUTE = '/dashboard';
const DASHBOARD_LABEL = '대시보드';

interface SidebarNavigationProps {
  isFold: boolean;
  type: 'PC' | 'Mobile';
}

export default function SidebarNavigation({ isFold, type }: SidebarNavigationProps) {
  const router = useRouter();
  const pathname = usePathname();

  // 현재 경로가 활성 경로인지 확인
  const isActiveRoute = ACTIVE_ROUTES.includes(pathname as typeof ACTIVE_ROUTES[number]);

  // 대시보드로 네비게이션
  const navigateToDashboard = () => {
    router.push(DASHBOARD_ROUTE);
  };

  // PC용 버튼 스타일 계산
  const getButtonStyles = (): string => {
    const baseStyles = 'flex items-center cursor-pointer w-full';
    
    if (isFold) {
      return `${baseStyles} justify-center`;
    }
    
    if (isActiveRoute) {
      return `${baseStyles} border-l-4 border-purple-600 pl-1`;
    }
    
    return baseStyles;
  };

  // 텍스트 스타일 계산
  const getTextStyles = (): string => {
    const baseTextStyles = 'font-body1-semibold ml-1';
    const textColor = isActiveRoute ? 'text-purple-600' : 'text-gray-900';
    
    return `${textColor} ${baseTextStyles}`;
  };

  // PC 버전 렌더링
  const renderPCVersion = () => (
    <div className='w-full flex items-center gap-2.5'>
      <button className={getButtonStyles()} onClick={navigateToDashboard}>
        <Home type='PC' />
        {!isFold && <span className={getTextStyles()}>{DASHBOARD_LABEL}</span>}
      </button>
    </div>
  );

  // 모바일 버전 렌더링
  const renderMobileVersion = () => (
    <button 
      className='flex items-center justify-start w-full h-10 cursor-pointer' 
      onClick={navigateToDashboard}
    >
      <Home type='Mobile' />
      <span className={getTextStyles()}>{DASHBOARD_LABEL}</span>
    </button>
  );

  // 조건부 렌더링
  if (type === 'PC') {
    return renderPCVersion();
  }
  
  if (type === 'Mobile' && !isFold) {
    return renderMobileVersion();
  }
  
  return null;
}
