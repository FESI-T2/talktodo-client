import BaseCard from '../../common/Card/BaseCard';
import { CheckIcon, MemoIcon } from '../../common/icons';
import LabelPriority from '../../common/LabelPriority/LabelPriority';
import { TaskBasedProps } from '../TaskCard.types';

export default function RectangleTaskCard({ task, layout = 'rectangle' }: TaskBasedProps) {
  const { content, priority, goal, isDone } = task;
  return (
    <BaseCard layout={layout}>
      <div className='flex items-start gap-1.5 self-stretch'>
        <div className='flex flex-col items-start gap-1.5 grow shrink-0 basis-0'>
          <div className='text-gray-900 font-body2-medium-tight'>{content}</div>
          <div className='text-gray-400 font-caption-medium'>{goal}</div>
        </div>
        <div className='flex items-center gap-5'>
          <MemoIcon active='on' />
          <CheckIcon state={isDone ? 'on' : 'off'} size='L' />
        </div>
      </div>
      <div className='flex items-start gap-3 self-stretch'>
        <div className='flex items-center self-stretch'>
          <LabelPriority priority={priority} size='S' />
          <div className='font-caption-medium text-gray-500'>・매일</div>
        </div>
      </div>
    </BaseCard>
  );
}
