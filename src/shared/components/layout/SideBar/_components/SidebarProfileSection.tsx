import Profile from '@/shared/components/Icons/Profile/Profile';

import SidebarSeparator from './SidebarSeparator';

interface ProfileSectionType {
  isFold: boolean;
  userNickname: string;
  userEmail: string;
  type: 'PC' | 'Mobile';
}
export default function ProfileSection({ isFold, userNickname, userEmail, type }: ProfileSectionType) {
  return (
    <div className={`w-full ${type === 'PC' ? 'pc:px-5 pc:pb-6' : 'pb-2'}`}>
      <SidebarSeparator bottom={4} />
      <div className='flex items-center pc:gap-3 gap-2 justify-center'>
        <Profile />
        {type === 'PC' && !isFold && (
          <div className='flex flex-col items-start self-stretch'>
            <span className='text-gray-900 font-body3-semibold'>{userNickname}</span>
            <span className='text-gray-600 font-body3-medium'>{userEmail}</span>
          </div>
        )}
        {type === 'Mobile' && !isFold && (
          <div className='flex flex-col items-start self-stretch'>
            <span className='text-gray-900 font-caption-semibold'>{userNickname}</span>
            <span className='text-gray-600 font-caption-regular'>{userEmail}</span>
          </div>
        )}
      </div>
    </div>
  );
}
