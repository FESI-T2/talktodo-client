'use client';
import React, { useState } from 'react';

import useGetAllGoal from '@/goal/hooks/quries/goal/useGetAllGoal';

import Sidebar from './Sidebar';

const SideBarContainer = () => {
  const [isFold, setIsFold] = useState(false);
  const toggleFold = () => setIsFold((prev) => !prev);

  const { data: goals, isLoading } = useGetAllGoal();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const goalList = goals?.data?.result?.map((goal) => goal.goalName) ?? [];

  return (
    <div className='ml-[18px] h-screen fixed py-5'>
      <Sidebar goals={goalList} userNickname='즐겁다' userEmail='안녕하세요' onFoldToggle={toggleFold} isFold={isFold} />
    </div>
  );
};

export default SideBarContainer;
