import { Priority } from '@/shared/types/prioity';

import PriorityDot from './PriorityDot';

export const PRIORITY_STYLES = {
  중요: { label: '중요', color: 'var(--color-priority-high)' },
  보통: { label: '보통', color: 'var(--color-priority-medium)' },
  낮음: { label: '낮음', color: 'var(--color-priority-low)' },
} as const;

interface LabelPriorityProps {
  priority: Priority;
  size: 'S' | 'M' | 'L';
}

export default function LabelPriority({ priority, size }: LabelPriorityProps) {
  const { label, color } = PRIORITY_STYLES[priority];

  // Small : Caption/12 Semibold
  // Medium : Body3/14 Semibold
  // Large : Body2/16 Semibold

  const textSizeClassMap = {
    S: 'font-caption-semibold',
    M: 'font-body3-semibold',
    L: 'font-body2-semibold',
  } as const;

  return (
    <div className='inline-flex items-center gap-1'>
      <PriorityDot color={color} />
      <span className={textSizeClassMap[size]} style={{ color }}>
        {label}
      </span>
    </div>
  );
}
