import { useEffect, useState } from 'react';

import SvgIconKebab from '../Icons/Kebab';
import ProgressBar from './_components/ProgressBar';

interface DetailHeaderProps {
  percent: number;
  category: string;
  IncompleteTodo: number;
  completedTodo: number;
}

const DetailHeader = ({ percent = 0, category = '', IncompleteTodo = 0, completedTodo = 0 }: DetailHeaderProps) => {
  const todoItems = [
    { value: IncompleteTodo, label: '미완료' },
    { value: completedTodo, label: '완료' },
  ];

  // 화면 너비 상태
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    // 초기값 세팅
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 브레이크포인트에 따른 type 결정 함수
  const getTypeByWidth = (width: number): 'pc' | 'tb' | 'mb' => {
    if (width >= 1024) return 'pc'; // PC: 1024px 이상
    if (width >= 768) return 'tb'; // Tablet: 768px 이상 1023 이하
    if (width <= 480) return 'mb'; // Mobile: 480px 이하
    return 'tb'; // 기본 Tablet
  };

  const kebabType = getTypeByWidth(windowWidth);

  return (
    <div
      className='flex items-start justify-between bg-purple-500
        pc:w-[1168px] pc:pt-7 pc:px-11 pc:pb-11 pc:rounded-[28px]
        tb:w-[600px] tb:py-7 tb:pr-5 tb:pl-8 tb:rounded-[24px]
        w-[343px] pt-6 pr-4 pb-5 pl-6 rounded-[20px]'
    >
      <div className='flex flex-col pc:gap-8 tb:gap-6 gap-4 w-full'>
        <div className='flex justify-between'>
          <span className='pc:font-title1-bold tb:font-title2-bold font-title3-bold text-white tracking-[-0.4px]'>{category}</span>
          <div className='flex items-center pc:divide-x divide-purple-400 pc:gap-0 tb:gap-2'>
            {todoItems.map((item) => (
              <div key={item.label} className={`flex flex-col items-center tb:w-[45px] first-of-type:pc:pr-5 last-of-type:pc:pl-5`}>
                <div
                  className='flex items-center justify-center text-white 
                pc:font-count pc:tracking-[-0.8px]
                tb:font-title1-bold tb:tracking-[-0.64px] tb:w-[45px]
                font-title2-bold tracking-[-0.56px] w-10 h-[33px]'
                >
                  {item.value}
                </div>
                <div
                  className='flex items-center justify-center text-purple-200 
                pc:font-body2-medium-tight
                tb:font-body2-medium-tight tb:w-[45px]
                font-caption-medium tracking-[-0.24px]'
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex items-end pc:gap-4 gap-1'>
          <ProgressBar percent={percent} />
          <div data-size='L' data-state='Default' className='tb:w-10 tb:h-10 w-7 h-7 inline-flex justify-center items-end overflow-hidden'>
            <SvgIconKebab type={kebabType} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailHeader;
