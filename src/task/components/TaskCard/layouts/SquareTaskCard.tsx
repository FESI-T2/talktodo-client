import BaseCard from '../../common/Card/BaseCard';
import CheckIcon from '../../common/icons/checkIcon/CheckIcon';
import MemoIcon from '../../common/icons/memoIcon/MemoIcon';
import LabelPriority from '../../common/LabelPriority/LabelPriority';
import { TaskBasedProps } from '../TaskCard.types';

export default function SquareTaskCard({ task, layout = 'square' }: TaskBasedProps) {
  const { content, priority, goal, isDone } = task;

  return (
    <BaseCard layout={layout}>
      <div className='flex flex-col items-start gap-1 self-stretch'>
        <div className='text-gray-900 font-sans font-medium text-base leading-[normal] tracking-[-0.32px] self-stretch'>{content}</div>
        <div className='font-caption-medium text-gray-400 self-stretch'>{goal}</div>
      </div>
      <div className='flex flex-col items-center gap-2 self-stretch'>
        <div className='flex items-center self-stretch'>
          <LabelPriority priority={priority} size='S' />
          <div className='font-caption-medium text-gray-500'>・매일</div>
        </div>
        <div className='w-[156px] h-[1px] bg-gray-100'></div>
        <div className='flex justify-between items-center self-stretch'>
          <MemoIcon active='on' /> {/* TODO: hooks */}
          <CheckIcon state={isDone ? 'on' : 'off'} size='L' /> {/* TODO:hooks */}
        </div>
      </div>
    </BaseCard>
  );
}
