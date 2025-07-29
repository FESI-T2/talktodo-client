import Flag from '@/shared/components/Icons/Flag/Flag';
import Kebab from '@/shared/components/Icons/Kebab/Kebab';

import BaseCard from '../../common/Card/BaseCard';
// Update the import path below if the actual file is named differently or located elsewhere
import GoalProgressBar from '../../common/GoalProgressBar/GoalProgressBar';
import { ProgressViewModel } from '../../common/GoalProgressBar/hooks/ProgressViewModel';
import LabelPriority from '../../common/LabelPriority/LabelPriority';
import { GoalBasedProps } from '../TaskCard.types';

export default function GoalCard({ goal, layout = 'goal' }: GoalBasedProps) {
  const { content, priority, doneCount, totalCount } = goal;
  const Progress = new ProgressViewModel(doneCount, totalCount);
  return (
    <BaseCard layout={layout}>
      <div className='flex flex-col items-start md:gap-8 gap-2 md:grow md:shrink-0 md:basis-0'>
        <div className='flex flex-col items-start md:gap-8 gap-3 self-stretch'>
          <div className='flex justify-between items-start self-stretch'>
            <div className='flex flex-col items-start gap-0.5'>
              <div className='flex items-center'>
                <Flag type='goal' /> {/*결국 size에 따라 만들어야함!*/}
                <div className='font-caption-bold md:font-body3-bold text-purple-500'>목표</div>
              </div>
              <div className='text-gray-900 md:font-title3-bold font-body1-bold'>{content}</div>
            </div>
            {/* kebab */}
            <button type='button' className='flex w-8 h-8 justify-center items-center'>
              <Kebab type='M' />
            </button>
          </div>
          <LabelPriority priority={priority} size={'M'} />
        </div>
        <div className='flex items-end md:gap-8 gap-3 self-stretch justify-between'>
          <div className='flex flex-col items-start gap-2'>
            <GoalProgressBar viewModel={Progress} />
          </div>
          <div className='flex items-center md:gap-2 gap-1'>
            <div className='flex w-10 flex-col items-center'>
              <div className='md:font-title2-bold md:text-gray-800 md:text-center font-title3-bold text-gray-800 text-center'>
                {totalCount - doneCount}
              </div>
              <div className='md:font-body3-medium-tight md:text-gray-500 font-caption-medium text-gray-500'>미완료</div>
            </div>
            <div className='w-[1px] md:h-[50px] h-[38px] bg-gray-100'></div>
            <div className='flex w-10 flex-col items-center'>
              <div className='md:font-title2-bold text-gray-500 font-title3-bold'>{doneCount}</div>
              <div className='md:font-body3-medium-tight text-gray-500 md:text-center font-caption-medium'>완료</div>
            </div>
          </div>
        </div>
      </div>
    </BaseCard>
  );
}
