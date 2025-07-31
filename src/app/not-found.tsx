'use client';

import ErrorLogo from '@/shared/components/Icons/ErrorLogo/ErrorLogo';
import useResponsiveType from '@/shared/hooks/useResponsiveType';

export default function NotFound() {
  const { iconTwoType } = useResponsiveType();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-purple-50 p-4'>
      <div className='flex flex-col items-center gap-6 max-w-[410px] w-full'>
        <ErrorLogo size={iconTwoType} />
        <div className='flex flex-col items-center gap-3'>
          <p className='tb:font-title2-bold font-title3-bold text-gray-900'>요청하신 페이지를 찾을 수 없습니다</p>
          <p className='tb:font-body2-medium-loose font-body3-medium-loose text-gray-500 text-center'>
            페이지의 주소가 변경 혹은 삭제되었을 수 있습니다
            <br />
            입력하신 주소를 다시 확인해주세요
          </p>
        </div>
      </div>
    </div>
  );
}
