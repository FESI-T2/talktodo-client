import { Task } from '@/mocks/todoMockData/todos';

import CheckIcon from '../../common/icons/checkIcon/CheckIcon';
import MemoIcon from '../../common/icons/memoIcon/MemoIcon';
import LabelPriority from '../../common/LabelPriority/LabelPriority';

type TaskCardState = 'default' | 'hover' | 'press' | 'complete';
type TaskCardLayout = 'square' | 'rectangle';
type TaskCardSize = 'L' | 'S';

interface TaskCardProps {
  task: Task;
  state: TaskCardState;
  layout: TaskCardLayout;
  size: TaskCardSize;
}

export default function TaskCard({ task, size }: TaskCardProps) {
  const { content, priority, goal } = task;

  // content class
  // 상위 div class

  return (
    <div className='flex w-[184px] h-[180px] pt-6 p-5 flex-col justify-between items-center shrink-0 rounded-3xl bg-white shadow-[0_0_20px_0_rgba(52,35,101,0.05)]'>
      <div className='flex flex-col items-start gap-1 self-stretch'>
        <div className='text-gray-900 font-sans font-medium text-base leading-[normal] tracking-[-0.32px] self-stretch'>{content}</div>
        <div className='font-caption-medium text-gray-400 self-stretch'>{goal}</div>
      </div>
      <div className='flex flex-col items-center gap-2 self-stretch'>
        <div className='flex items-center self-stretch'>
          <LabelPriority priority={priority} size={size} />
          <div className='font-caption-medium text-gray-500'>・매일</div>
        </div>
        <div className='w-[156px] h-[1px] bg-gray-100'></div>
        <div className='flex justify-between items-center self-stretch'>
          <MemoIcon active='on' />
          <CheckIcon size={size} />
        </div>
      </div>
    </div>
  );
}
