import useModal from '@/shared/hooks/useModal';
import { cn } from '@/shared/utils/cn';
import { useToggleTaskDone } from '@/task/api/queries/useToggleTaskDone';

import BaseCard from '../../common/Card/BaseCard';
import { CheckIcon, MemoIcon } from '../../common/icons';
import LabelPriority from '../../common/LabelPriority/LabelPriority';
import RepeatLabel from '../../common/RepeatLabel/RepeatLabel';
import { TaskBasedProps } from '../TaskCard.types';

export default function SquareTaskCard({ task, layout = 'square' }: TaskBasedProps) {
  const { content, priority, goal, isDone, repeatEnabled, repeatTypes, taskId } = task;
  const { mutate: toggle } = useToggleTaskDone(taskId);
  const { openMemoForm } = useModal();

  return (
    <BaseCard layout={layout} isDone={isDone} onClick={openMemoForm} className='cursor-pointer'>
      <div className='flex flex-col items-start gap-1 self-stretch'>
        <div
          className={cn(
            'font-body2-medium-tight text-base leading-[normal] tracking-[-0.32px] self-stretch',
            isDone ? 'text-gray-400 line-through' : 'text-gray-900 '
          )}
        >
          {content}
        </div>
        <div className='font-caption-medium text-gray-400 self-stretch'>{goal}</div>
      </div>
      <div className='flex flex-col items-center gap-2 self-stretch'>
        <div className='flex items-center self-stretch gap-[3px]'>
          <LabelPriority priority={priority} size='S' />
          <RepeatLabel repeatEnabled={repeatEnabled} repeatTypes={repeatTypes} />
        </div>
        <div className={'w-[156px] h-[1px] bg-gray-100'} />
        <div className='flex justify-between items-center self-stretch'>
          <MemoIcon active='on' />
          <CheckIcon
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
            state={isDone ? 'on' : 'off'}
            size='L'
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </BaseCard>
  );
}
