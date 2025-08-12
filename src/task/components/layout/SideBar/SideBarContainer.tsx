'use client';
import React, { useState } from 'react';

import { useGetUserProfile } from '@/auth/lib/queries';
import { UserProfileResult } from '@/auth/types/response/userProfile-response';
import useGetAllGoal from '@/goal/hooks/quries/goal/useGetAllGoal';

import Sidebar from './Sidebar';

const SideBarContainer = () => {
  const [isFold, setIsFold] = useState(false);
  const toggleFold = () => setIsFold((prev) => !prev);

  // 목표 데이터 가져오기
  const { data: goals, isLoading: isGoalsLoading } = useGetAllGoal();

  // 사용자 프로필 데이터 가져오기
  const { data: userProfileData, isLoading: isUserLoading } = useGetUserProfile() as {
    data: UserProfileResult | undefined;
    isLoading: boolean;
  };

  // 로딩 상태 처리
  if (isGoalsLoading || isUserLoading) {
    return (
      <div className='fixed left-[18px] top-0 h-screen py-5 z-50 flex items-center justify-center w-[280px] bg-white border-r shadow-sm'>
        <div className='text-center'>
          <div className='animate-spin w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-2'></div>
          <div className='text-sm text-gray-500'>사이드바 로딩 중...</div>
        </div>
      </div>
    );
  }

  // 목표 리스트 추출 - goalName만 추출하여 문자열 배열로 변환
  const goalList: string[] = goals?.data?.result?.map((goal) => goal.goalName) ?? [];

  // 사용자 정보 추출 (기본값 설정)
  const userInfo = userProfileData?.data?.data?.result;
  const userNickname = userInfo?.nickname || '사용자';
  const userEmail = userInfo?.email || 'user@example.com';

  console.log('🏠 SideBarContainer - 렌더링 정보:', {
    goalCount: goalList.length,
    userNickname,
    userEmail,
    isFold,
    goals: goalList,
  });

  return (
    <div className='fixed left-[18px] top-0 h-screen py-5 z-50'>
      <Sidebar goals={goalList} userNickname={userNickname} userEmail={userEmail} onFoldToggle={toggleFold} isFold={isFold} />
    </div>
  );
};

export default SideBarContainer;
