import useModal from '@/shared/hooks/useModal';
import { cn } from '@/shared/utils/cn';
import { useToggleTaskDone } from '@/task/api/queries/useToggleTaskDone';

import BaseCard from '../../common/Card/BaseCard';
import { CheckIcon, MemoIcon } from '../../common/icons';
import LabelPriority from '../../common/LabelPriority/LabelPriority';
import RepeatLabel from '../../common/RepeatLabel/RepeatLabel';
import { TaskBasedProps } from '../TaskCard.types';

export default function RectangleTaskCard({ task, layout = 'rectangle' }: TaskBasedProps) {
  const { content, priority, goal, isDone, repeatEnabled, repeatTypes, taskId } = task;
  const { mutate: toggle } = useToggleTaskDone(taskId);
  const { openMemoForm } = useModal();

  return (
    <BaseCard layout={layout} isDone={isDone} onClick={openMemoForm} className='cursor-pointer'>
      <div className='flex items-start gap-1.5 self-stretch'>
        <div className='flex flex-col items-start gap-1.5 grow shrink-0 basis-0'>
          <div className={cn('font-body2-medium-tight', isDone ? 'text-gray-400 line-through' : 'text-gray-900')}>{content}</div>
          <div className='text-gray-400 font-caption-medium'>{goal}</div>
        </div>
        <div className='flex items-center gap-5'>
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
      <div className='flex items-start gap-3 self-stretch'>
        <div className='flex items-center self-stretch gap-[3px]'>
          <LabelPriority priority={priority} size='S' />
          <RepeatLabel repeatEnabled={repeatEnabled} repeatTypes={repeatTypes} />
        </div>
      </div>
    </BaseCard>
  );
}
