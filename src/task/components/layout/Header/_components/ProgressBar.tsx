'use client';

import { useState } from 'react';

import Dropdown from '@/shared/components/Dropdown/Dropdown';
import Kebab from '@/shared/components/Icons/Kebab/Kebab';
import useResponsiveType from '@/shared/hooks/useResponsiveType';

interface ProgressBarProps {
  percent?: number;
  type?: 'Detail' | 'Main';
}
const ProgressBar = ({ type = 'Main', percent = 0 }: ProgressBarProps) => {
  // 0~100 범위 제한 및 최소/최대 너비 보정
  const clampedPercent = Math.min(100, Math.max(0, percent));
  const minWidthPercent = 2;
  const maxWidthPercent = 100;
  const barWidth =
    clampedPercent === 0
      ? minWidthPercent
      : clampedPercent === 100
        ? maxWidthPercent
        : minWidthPercent + (clampedPercent / 100) * (maxWidthPercent - minWidthPercent);

  const [open, setOpen] = useState(false);

  const { kebabType, dropdownType } = useResponsiveType();

  const toggleOpen = () => setOpen(!open);

  return (
    <div className='flex flex-col gap-3 w-full'>
      <div className='flex gap-2 items-center mb-1'>
        <p className='text-center text-purple-300 tb:font-body2-medium font-caption-medium'>오늘의 진행률</p>
        <p className='text-center text-white tb:font-body2-bold font-body3-bold'>{clampedPercent}%</p>
      </div>
      <div className='flex items-center w-full'>
        <div className='relative flex-1'>
          <div className='w-full tb:h-4.5 h-[14px] rounded-full bg-purple-700' />
          <div
            className='absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-[#E0CDFC] to-[#FFF]'
            style={{ width: `${barWidth}%`, zIndex: 2 }}
          />
        </div>
        {type === 'Detail' && (
          <div className='flex-shrink-0 ml-3 relative flex items-center justify-center'>
            <button
              type='button'
              className='flex justify-center items-center overflow-hidden relative transition-colors
                pc:w-10 pc:h-10 pc:rounded-xl pc:hover:bg-purple-600 pc:active:bg-purple-600
                tb:w-8 tb:h-8 tb:rounded-lg 
                w-4 h-4 rounded-sm hover:bg-gray-100 active:bg-gray-100'
              onClick={toggleOpen}
            >
              <Kebab type={kebabType} />
            </button>
            {open && (
              <div className='absolute top-full pc:mt-2.5 tb:mt-1.5 mt-1 z-10'>
                <Dropdown options={['수정하기', '삭제하기']} size={dropdownType} type='default' onSelect={(value) => console.log(value)} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
