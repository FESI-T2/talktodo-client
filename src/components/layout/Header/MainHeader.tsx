import Image from 'next/image';

import MB_CompletedCharacter from 'public/img/MB_CompletedCharacter.png';
import MB_InCompletedCharacter from 'public/img/MB_InCompletedCharacter.png';
import PC_CompletedCharacter from 'public/img/PC_CompletedCharacter.png';
import PC_InCompletedCharacter from 'public/img/PC_InCompletedCharacter.png';
import TB_CompletedCharacter from 'public/img/TB_CompletedCharacter.png';
import TB_InCompletedCharacter from 'public/img/TB_InCompletedCharacter.png';

import ProgressBar from './_components/ProgressBar';

interface MainHeaderProps {
  percent: number;
  totalTodo: number;
  IncompleteTodo: number;
  completedTodo: number;
}

const MainHeader = ({ percent = 0, totalTodo = 0, IncompleteTodo = 0, completedTodo = 0 }: MainHeaderProps) => {
  const todoItems = [
    { value: totalTodo, label: '총 일정', w: '' },
    { value: IncompleteTodo, label: '미완료', w: '' },
    { value: completedTodo, label: '완료', w: 'w-11' },
  ];

  return (
    <div
      className='flex items-start justify-between flex-col 
      pc:w-[1168px] pc:pt-7 pc:px-11 pc:pb-9 
      tb:w-[600px] tb:py-6 tb:px-8
      w-[343px] pt-6 px-6 pb-5
      rounded-[40px] bg-purple-500'
    >
      <div className='flex pc:gap-11  tb:gap-3'>
        <div
          className='
        flex flex-col 
        pc:w-[860px] tb:w-[384px] w-[295px] 
        pc:gap-[43px] tb:gap-[24px] gap-3
        tb:static relative'
        >
          <div className='flex justify-between'>
            <p className='pc:font-title1-bold tb:font-title2-bold font-title3-bold text-purple-300'>
              오늘
              <br />
              {percent === 100 ? (
                <span className='pc:font-title1-bold tb:font-title2-bold font-title3-bold text-white'>할 일을 모두 완료했어요!</span>
              ) : (
                <>
                  <span className='pc:font-title1-bold tb:font-title2-bold font-title3-bold text-white'>총 {totalTodo}건</span>
                  <span>의 할 일이 있어요</span>
                </>
              )}
            </p>

            {/* MB(768px 미만) */}
            <Image
              src={percent !== 100 ? MB_InCompletedCharacter : MB_CompletedCharacter}
              alt=''
              className='block tb:hidden mb:absolute right-0 w-[80px] h-[82.286px]'
            />

            <div className='hidden pc:flex items-center gap-5'>
              {todoItems.map((item) => (
                <div key={item.label} className={`${item.w} flex flex-col items-center gap-1`}>
                  <div className='text-center text-white font-count'>{item.value}</div>
                  <div className='text-center text-purple-200 text-base font-body2-medium'>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <ProgressBar percent={percent} />
        </div>
        <div data-size='L' data-state='Default' className='flex justify-end items-end relative overflow-hidden'>
          {/* PC(1024px 이상) */}
          <Image
            src={percent !== 100 ? PC_InCompletedCharacter : PC_CompletedCharacter}
            alt=''
            className='hidden pc:block w-[180px] h-[166px]'
          />
          {/* TB(768px 이상 1024px 미만) */}
          <Image
            src={percent !== 100 ? TB_InCompletedCharacter : TB_CompletedCharacter}
            alt=''
            className='hidden tb:block pc:hidden w-[140px] h-[144px]'
          />
        </div>
      </div>

      <div className='flex pc:hidden items-center w-full justify-center tb:gap-13.5 gap-[35px] border-t-2 tb:border-[#A267F6] border-[#9951FF] tb:mt-6 mt-2'>
        {todoItems.map((item) => (
          <div key={item.label} className={`${item.w} flex flex-col items-center tb:pt-3`}>
            <div className='text-center text-white tb:font-count font-title2-bold'>{item.value}</div>
            <div className='text-center text-purple-200 text-base tb:font-body2-medium font-caption-medium'>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainHeader;
