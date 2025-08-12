'use client';

import { useRouter } from 'next/navigation';

import FoldRight from '@/shared/components/Icons/Fold/FoldRight';
import Hamburger from '@/shared/components/Icons/Hamburger/Hamburger';
import MainLogo from '@/shared/components/Icons/MainLogo/MainLogo';
import Plus from '@/shared/components/Icons/Plus/Plus';
import useModal from '@/shared/hooks/useModal';

import SidebarNavigation from './_components/SidebarNavigation';
import SidebarPanel from './_components/SidebarPanel';
import ProfileSection from './_components/SidebarProfileSection';
import SidebarSeparator from './_components/SidebarSeparator';

interface MobileSidebarProps {
  isFold: boolean;
  onFoldToggle: () => void;
  userNickname: string;
  userEmail: string;
  goals: string[];
}

const MobileSidebar = ({ isFold, onFoldToggle, userNickname, userEmail, goals }: MobileSidebarProps) => {
  const router = useRouter();
  const { openAddGoalForm } = useModal();

  // 메인 페이지로 라우팅
  const handleLogoClick = () => {
    router.push('/');
  };

  // 새 목표 모달 열기
  const handleNewGoalClick = () => {
    openAddGoalForm();
  };
  return (
    <aside
      className={`box-border  max-h-[812px] bg-white shadow-[0px_0px_12px_0px_rgba(235,235,235,1.00)]
        flex  py-4 px-5 justify-between items-center
        transition-all duration-300
        ${
          isFold
            ? '`w`-full min-w-[375px] h-[56px] rounded-none'
            : 'w-51 h-screen rounded-tl-2xl rounded-tr-none rounded-bl-2xl rounded-br-none flex-col'
        }
        overflow-visible
        `}
    >
      <div className={`w-full ${isFold ? 'flex justify-between items-center' : 'flex-col'}`}>
        {!isFold && (
          <button className='w-full pb-4 cursor-pointer' onClick={onFoldToggle}>
            <FoldRight />
          </button>
        )}
        {isFold && (
          <>
            <button className='cursor-pointer' onClick={handleLogoClick}>
              <MainLogo type='Mobile' />
            </button>
            <button className='cursor-pointer' onClick={onFoldToggle}>
              <Hamburger />
            </button>
          </>
        )}
        <SidebarNavigation isFold={isFold} type='Mobile' />
        {!isFold && <SidebarSeparator top={2} bottom={2} />}
        <SidebarPanel isFold={isFold} goals={goals} type='Mobile' />
        {!isFold && (
          <button
            className='w-full flex items-center justify-center gap-2 mt-4 py-2 rounded-[8px] cursor-pointer bg-white border-[1.5px] border-purple-400 hover:bg-purple-50 active:bg-purple-100 transition-colors duration-200'
            onClick={handleNewGoalClick}
          >
            <Plus />
            <span className='text-purple-500 font-body3-semibold'>새 목표</span>
          </button>
        )}
      </div>
      {!isFold && <ProfileSection isFold={isFold} userNickname={userNickname} userEmail={userEmail} />}
    </aside>
  );
};

export default MobileSidebar;
