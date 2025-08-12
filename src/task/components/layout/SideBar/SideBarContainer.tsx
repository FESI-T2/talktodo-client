'use client';
import React, { useState } from 'react';

import { useGetUserProfile } from '@/auth/lib/queries';
import { UserProfileResult } from '@/auth/types/response/userProfile-response';
import useGetAllGoal from '@/goal/hooks/quries/goal/useGetAllGoal';
import useResponsiveType from '@/shared/hooks/useResponsiveType';

import MobileSidebar from './MobileSidebar';
import Sidebar from './Sidebar';

const SideBarContainer = () => {
  const [isFold, setIsFold] = useState(false);
  const toggleFold = () => setIsFold((prev) => !prev);

  const { sidebarType } = useResponsiveType();
  const { data: goals } = useGetAllGoal();

  const { data: userProfileData } = useGetUserProfile() as {
    data: UserProfileResult | undefined;
    isLoading: boolean;
  };

  // 목표 리스트 추출 - goalName만 추출하여 문자열 배열로 변환
  const goalList: string[] = goals?.data?.result?.map((goal) => goal.goalName) ?? [];
  // const goalList = goals?.data?.result ?? [];

  // 사용자 정보 추출 (기본값 설정)
  const userInfo = userProfileData?.data?.data?.result;
  const userNickname = userInfo?.nickname || '사용자';
  const userEmail = userInfo?.email || 'user@example.com';

  // 공통 props
  const sidebarProps = {
    goals: goalList,
    userNickname,
    userEmail,
    onFoldToggle: toggleFold,
    isFold,
  };

  return (
    <div className={
      sidebarType === 'PC' 
        ? 'py-5'  // PC: Grid 레이아웃에서 자연스러운 배치
        : `fixed z-50 ${  // Mobile: fixed 포지션 유지
            isFold 
              ? 'top-0 left-0 w-full'  // Mobile fold: 맨 위 고정
              : 'top-0 right-0 h-screen'  // Mobile unfold: 오른쪽 고정
          }`
    }>
      {sidebarType === 'PC' ? (
        <Sidebar {...sidebarProps} />
      ) : (
        <MobileSidebar {...sidebarProps} />
      )}
    </div>
  );
};

export default SideBarContainer;
