import { useRouter } from 'next/navigation';

import KebabMenuButton from '@/goal/components/KebabMenuButton';

import { GoalWithCount } from '@/goal/types';

import Flag from '@/shared/components/Icons/Flag/Flag';

import GoalProgressBar from '../../common/GoalProgressBar/GoalProgressBar';

import { ProgressViewModel } from '../../common/GoalProgressBar/hooks/ProgressViewModel';

export default function GoalCard({ goal }: { goal: GoalWithCount }) {
  const router = useRouter();

  const { goalName, completedTaskCount, incompleteTaskCount, goalId } = goal;

  const Progress = new ProgressViewModel(completedTaskCount ?? 0, incompleteTaskCount ?? 0);
  const CardClick = () => {
    router.push(`/goal/${goalId}`);
  };
  return (
    <div
      role='button'
      tabIndex={0}
      onClick={CardClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          CardClick();
        }
      }}
      className='flex hover:border hover:border-purple-300 active:opacity-50 pt-5 pl-5 pb-7 pr-4 gap-3 rounded-[20px] border border-purple-150 bg-white md:rounded-3xl md:w-[548px] md:pt-7 md:pr-7 md:pl-8 md:pb-8 md:gap-1 justify-end items-end z-0'
    >
      <div className='flex flex-col items-start md:gap-8 gap-2 md:grow md:shrink-0 md:basis-0'>
        <div className='flex flex-col items-start md:gap-8 gap-3 self-stretch'>
          <div className='flex justify-between items-start self-stretch'>
            <div className='flex flex-col items-start gap-0.5'>
              <div className='flex items-center'>
                <Flag type='goal' /> {/*결국 size에 따라 만들어야함!*/}
                <div className='font-caption-bold md:font-body3-bold text-purple-500'>목표</div>
              </div>
              <div className='text-gray-900 md:font-title3-bold font-body1-bold'>{goalName}</div>
            </div>

            <KebabMenuButton
              onEdit={() => {
                console.log('수정 모달 열기');
              }}
              onDelete={() => {
                console.log('삭제 확인 모달 열기');
              }}
            />
          </div>
        </div>
        <div className='flex items-end md:gap-8 gap-3 self-stretch justify-between'>
          <div className='flex flex-col items-start gap-2'>
            <GoalProgressBar viewModel={Progress} />
          </div>
          <div className='flex items-center md:gap-2 gap-1'>
            <div className='flex w-10 flex-col items-center'>
              <div className='md:font-title2-bold md:text-gray-800 md:text-center font-title3-bold text-gray-800 text-center'>
                {incompleteTaskCount}
              </div>
              <div className='md:font-body3-medium-tight md:text-gray-500 font-caption-medium text-gray-500'>미완료</div>
            </div>
            <div className='w-[1px] md:h-[50px] h-[38px] bg-gray-100'></div>
            <div className='flex w-10 flex-col items-center'>
              <div className='md:font-title2-bold text-gray-500 font-title3-bold'>{completedTaskCount}</div>
              <div className='md:font-body3-medium-tight text-gray-500 md:text-center font-caption-medium'>완료</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
