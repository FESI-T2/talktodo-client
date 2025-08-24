import { useRouter } from 'next/navigation';

import Icon from '@/shared/components/Icon/Icon';
import useResponsiveType from '@/shared/hooks/useResponsiveType';

import SidebarSeparator from './SidebarSeparator';

interface ProfileSectionType {
  isFold: boolean;
  userNickname: string;
  userEmail: string;
}

export default function ProfileSection({ isFold, userNickname, userEmail }: ProfileSectionType) {
  const { sidebarType } = useResponsiveType();
  const isMobile = sidebarType === 'MOBILE';
  const router = useRouter();
  // 마이페이지로 이동하는 라우팅
  const handleProfileClick = () => {
    router.push('/mypage');
  };

  return (
    <div className={`w-full ${isMobile ? 'px-0 py-3' : 'px-6 py-5'}`}>
      <SidebarSeparator bottom={4} />
      <button className='flex items-center gap-3 cursor-pointer' onClick={handleProfileClick}>
        <Icon name='profile' />
        {!isFold && (
          <div className='flex flex-col items-start self-stretch flex-1'>
            <span className='text-gray-900 font-body3-semibold'>{userNickname}</span>
            <span className='text-gray-600  font-caption-regular pc:font-body3-medium '>{userEmail}</span>
          </div>
        )}
      </button>
    </div>
  );
}
