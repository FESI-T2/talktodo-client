'use client';

import { useRouter } from 'next/navigation';

import Home from '@/shared/components/Icons/Home/Home';

export default function SidebarNavigation({ isFold, type }: { isFold: boolean; type: 'PC' | 'Mobile' }) {
  const router = useRouter();

  // 대시보드로 라우팅
  const handleDashboardClick = () => {
    router.push('/dashboard');
  };

  if (type === 'PC') {
    return (
      <div className='w-full'>
        <div className={`flex gap-1 items-center cursor-pointer  ${isFold ? 'justify-center' : 'mb-3'}`}>
          <div className='w-10 h-10 flex items-center justify-center'>
            <Home type='PC' />
          </div>
          {!isFold && <span className='text-gray-900 font-body1-semibold'>홈</span>}
        </div>
        <div className='flex flex-col'>
          <button
            className='flex w-[230px] pl-0 pr-3 h-[43px] py-2 items-center gap-3 cursor-pointer hover:bg-purple-50 rounded-lg transition-colors duration-200'
            onClick={handleDashboardClick}
          >
            <div className='w-10 h-10 flex items-center justify-center'></div>
            {!isFold && <span className='text-gray-500 font-body2-regular tracking-[-0.32px] hover:text-purple-600'>대시보드</span>}
          </button>
        </div>
      </div>
    );
  }

  if (type === 'Mobile' && !isFold) {
    return (
      <div className='w-full'>
        <button className='flex items-center justify-start w-full h-10 cursor-pointer'>
          <Home type='Mobile' />
          <span className='text-gray-900 font-body1-semibold ml-2'>홈</span>
        </button>
        <button className='flex items-center justify-start w-full h-10 cursor-pointer mt-2' onClick={handleDashboardClick}>
          <span className='text-gray-500 font-body2-regular ml-2'>대시보드</span>
        </button>
      </div>
    );
  }

  return null;
}
