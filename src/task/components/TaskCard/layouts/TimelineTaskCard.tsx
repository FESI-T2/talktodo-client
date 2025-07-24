import BaseCard from '../../common/Card/BaseCard';
import { CheckIcon, MemoIcon } from '../../common/icons';
import LabelPriority from '../../common/LabelPriority/LabelPriority';
import { TaskCardProps } from '../TaskCard.types';

export default function TimelineTaskCard({ task, layout = 'timeline' }: TaskCardProps) {
  const { content, goal, isDone, priority } = task;
  return (
    <BaseCard layout={layout}>
      <div className='flex flex-col items-start gap-2 self-stretch'>
        <div className='flex flex-col items-start gap-3 self-stretch'>
          <div className='flex items-start gap-1.5 self-stretch'>
            <div className='flex flex-col items-start gap-1.5 grow shrink-0 basis-0'>
              <div className='text-gray-900 font-body2-semibold'>{content}</div>
              <div className='text-gray-400 font-caption-medium'>{goal}</div>
            </div>
            <CheckIcon state={isDone ? 'on' : 'off'} size='L' /> {/* TODO:hooks */}
          </div>
          <div className='w-[146px] h-[1px] bg-gray-100'></div>
          <div className='flex justify-between items-center self-stretch'>
            <div className='flex items-center gap-[1px]'>
              <LabelPriority priority={priority} size='S' />
              <div className='font-caption-medium text-gray-500'>・매일</div>
            </div>
            <MemoIcon active='on' />
          </div>
        </div>
      </div>
    </BaseCard>
  );
}
