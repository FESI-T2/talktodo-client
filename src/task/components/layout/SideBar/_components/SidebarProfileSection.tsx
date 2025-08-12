import Profile from '@/shared/components/Icons/Profile/Profile';

import SidebarSeparator from './SidebarSeparator';

interface ProfileSectionType {
  isFold: boolean;
  userNickname: string;
  userEmail: string;
}
export default function ProfileSection({ isFold, userNickname, userEmail }: ProfileSectionType) {
  return (
    <div className='w-full px-6 py-5'>
      <SidebarSeparator bottom={4} />
      <div className='flex items-center gap-3'>
        <Profile />
        {!isFold && (
          <div className='flex flex-col items-start self-stretch flex-1'>
            <span className='text-gray-900 font-body3-semibold'>{userNickname}</span>
            <span className='text-gray-600  font-caption-regular pc:font-body3-medium '>{userEmail}</span>
          </div>
        )}
      </div>
    </div>
  );
}
