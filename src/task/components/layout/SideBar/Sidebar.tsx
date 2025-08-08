import FoldLeft from '@/shared/components/Icons/Fold/FoldLeft';
import FoldRight from '@/shared/components/Icons/Fold/FoldRight';
import MainLogo from '@/shared/components/Icons/MainLogo/MainLogo';
import Plus from '@/shared/components/Icons/Plus/Plus';

import SidebarNavigation from './_components/SidebarNavigation';
import SidebarPanel from './_components/SidebarPanel';
import ProfileSection from './_components/SidebarProfileSection';
import SidebarSeparator from './_components/SidebarSeparator';

const NewGoalButton = ({ isFold }: { isFold: boolean }) =>
  !isFold ? (
    <button className='flex items-center justify-center gap-2 mt-6 py-3 pl-7 pr-8 rounded-[12px] cursor-pointer bg-white border-[1.5px] border-purple-400 hover:bg-purple-50 active:bg-purple-100 transition-colors duration-200'>
      <Plus />
      <span className='text-purple-500 font-body2-semibold'>새 목표</span>
    </button>
  ) : (
    <button className='flex items-center justify-center mt-6 p-[10px] rounded-[12px] cursor-pointer bg-white border-[1.5px] border-purple-400 hover:bg-purple-50 active:bg-purple-100 transition-colors duration-200'>
      <Plus />
    </button>
  );

interface SidebarProps {
  isFold: boolean;
  onFoldToggle: () => void;
  userNickname: string;
  userEmail: string;
  goals: string[];
}

const Sidebar = ({ isFold, onFoldToggle, userNickname, userEmail, goals }: SidebarProps) => (
  <aside
    className={`box-border h-full bg-white rounded-[20px] shadow-[0px_0px_12px_0px_rgba(235,235,235,1.00)]
    inline-flex flex-col justify-between items-center
    transition-all duration-300 overflow-visible  
    ${isFold ? 'w-20' : 'w-64'}
 
  `}
  >
    {/* content */}
    <div className='box-border w-full p-5 flex flex-col'>
      {/* 1. 헤더 */}
      <div className={`pb-5 flex self-stretch items-center justify-between ${isFold ? 'justify-center' : ''}`}>
        <button className='cursor-pointer flex items-center justify-center'>
          <MainLogo type='PC' />
        </button>
        <button className='cursor-pointer relative' onClick={onFoldToggle}>
          {!isFold && <FoldLeft />}

          {isFold && (
            <div className='flex w-10 h-10 justify-center items-center aspect-square absolute right-[-46px] top-[-20px] rounded-full border-2 border-gray-200 bg-white shadow-[0px_0px_12px_0px_rgba(235,235,235,1.00)]'>
              <FoldRight />
            </div>
          )}
        </button>
      </div>
      <SidebarSeparator bottom={4} />

      {/* 2. 네비 */}
      <SidebarNavigation isFold={isFold} type='PC' />
      <SidebarSeparator top={4} bottom={4} />

      {/* 3. 사이드바 패널 */}
      <SidebarPanel isFold={isFold} goals={goals} type='PC' />
      <NewGoalButton isFold={isFold} />
    </div>
    {/* 4. 프로필 (하단) */}
    <ProfileSection isFold={isFold} userNickname={userNickname} userEmail={userEmail} />
  </aside>
);

export default Sidebar;
