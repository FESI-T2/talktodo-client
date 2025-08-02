'use client';

import Image from 'next/image';

import useBreakpoints from '@/shared/hooks/useBreakpoints';

import ProgressBar from './_components/ProgressBar';

interface MainHeaderProps {
  totalTodo: number;
  IncompleteTodo: number;
  completedTodo: number;
}

const MainHeader = ({ totalTodo = 0, IncompleteTodo = 0, completedTodo = 0 }: MainHeaderProps) => {
  const percent = Math.round((completedTodo / totalTodo) * 100);
  const isCompleted = percent === 100;

  const { isMobile, isTablet, isPc } = useBreakpoints();
  const characterImages = {
    mobile: isCompleted ? '/img/MB_CompletedCharacter.png' : '/img/MB_InCompletedCharacter.png',
    tablet: isCompleted ? '/img/TB_CompletedCharacter.png' : '/img/TB_InCompletedCharacter.png',
    pc: isCompleted ? '/img/PC_CompletedCharacter.png' : '/img/PC_InCompletedCharacter.png',
  };

  const todoItems = [
    { value: totalTodo, label: '총 일정' },
    { value: IncompleteTodo, label: '미완료' },
    { value: completedTodo, label: '완료' },
  ];

  return (
    <div className='w-full lg:max-w-[1168px] lg:w-[100%] mx-auto bg-purple-500 rounded-[40px] px-6 py-6 sm:px-8 sm:py-6 lg:px-11 lg:pt-7 lg:pb-9 flex flex-col items-start'>
      <div className='flex flex-row lg:flex-row lg:gap-11 w-full'>
        {/* 왼쪽 영역 */}
        <div className={`flex flex-col gap-3 relative ${isPc ? 'flex-1' : 'w-full'}`}>
          <div className='flex justify-between items-start'>
            <p className='text-purple-300 font-title3-bold sm:font-title2-bold lg:font-title1-bold'>
              오늘
              <br />
              {isCompleted ? (
                <span className='text-white font-title3-bold sm:font-title2-bold lg:font-title1-bold'>할 일을 모두 완료했어요!</span>
              ) : (
                <>
                  <span className='text-white font-title3-bold sm:font-title2-bold lg:font-title1-bold'>총 {totalTodo}건</span>
                  <span>의 할 일이 있어요</span>
                </>
              )}
            </p>

            {isMobile && <Image src={characterImages.mobile} width={80} height={82} alt='mobile character' className='absolute right-0' />}

            {isPc && (
              <div className='flex items-center gap-5'>
                {todoItems.map((item) => (
                  <div key={item.label} className='flex flex-col items-center gap-1'>
                    <div className='text-white font-count text-center'>{item.value}</div>
                    <div className='text-purple-200 text-base font-body2-medium'>{item.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <ProgressBar percent={percent} />
        </div>

        {/* 캐릭터 이미지 영역 */}
        <div className='flex justify-end items-end relative overflow-hidden'>
          {isPc && <Image src={characterImages.pc} width={180} height={166} alt='pc character' />}
          {isTablet && <Image src={characterImages.tablet} width={140} height={144} alt='tablet character' />}
        </div>
      </div>

      {/* 모바일/태블릿용 todo summary 하단 */}
      {!isPc && (
        <div className='flex items-center justify-center w-full gap-[35px] mt-2 pt-3 border-t-2 border-[#9951FF] sm:gap-[54px] sm:mt-6 sm:border-[#A267F6]'>
          {todoItems.map((item) => (
            <div key={item.label} className='flex flex-col items-center sm:pt-3'>
              <div className='text-white font-title2-bold sm:font-count text-center'>{item.value}</div>
              <div className='text-purple-200 text-base font-caption-medium sm:font-body2-medium text-center'>{item.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default MainHeader;
