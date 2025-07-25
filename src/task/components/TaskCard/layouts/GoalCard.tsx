import SvgIconFlag from 'public/icon/Flag';
import SvgIconKebab from 'public/icon/kebab';

import BaseCard from '../../common/Card/BaseCard';
// Update the import path below if the actual file is named differently or located elsewhere
import GoalProgressBar from '../../common/GoalProgressBar/GoalProgressBar';
import { ProgressViewModel } from '../../common/GoalProgressBar/hooks/ProgressViewModel';
import LabelPriority from '../../common/LabelPriority/LabelPriority';
import { GoalBasedProps } from '../TaskCard.types';

export default function GoalCard({ goal, layout = 'goal' }: GoalBasedProps) {
  const { priority } = goal;
  const Progress = new ProgressViewModel(2, 4);
  return (
    <BaseCard layout={layout}>
      <div className='flex flex-col items-start gap-8 grow shrink-0 basis-0'>
        <div className='flex h-[75px] flex-col items-start gap-3 self-stretch'>
          <div className='flex justify-between items-start self-stretch'>
            <div className='flex flex-col items-start gap-0.5'>
              <div className='flex items-center'>
                <SvgIconFlag type='goal' /> {/*결국 size에 따라 만들어야함!*/}
                <div className='font-caption-bold md:font-body3-bold text-purple-500'>목표</div>
              </div>
              <div className='text-gray-900 md:font-title3-bold font-body1-bold'>{'자바스크립트로 웹 서비스 만들기'}</div>
            </div>
            {/* kebab */}
            <button type='button' className='flex w-8 h-8 justify-center items-center'>
              <SvgIconKebab type='M' />
            </button>
          </div>
          <LabelPriority priority={priority} size={'M'} />
        </div>
        <div className='flex items-end gap-8 self-stretch justify-between'>
          <div className='flex flex-col items-start gap-2'>
            <GoalProgressBar viewModel={Progress} />
          </div>
          <div className='flex items-center gap-2'>
            <div className='flex w-10 flex-col items-center'>
              <div className='font-title2-bold text-gray-800 text-center'>{2}</div>
              <div className='font-body3-medium-tight text-gray-500'>미완료</div>
            </div>
            <div className='w-[1px] h-[50px] bg-gray-100'></div>
            <div className='flex w-10 flex-col items-center'>
              <div className='font-title2-bold text-gray-500'>{0}</div>
              <div className='font-body3-medium-tight text-gray-500 text-center'>완료</div>
            </div>
          </div>
        </div>
      </div>
    </BaseCard>
  );
}
