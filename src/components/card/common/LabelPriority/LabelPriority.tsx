import PriorityDot from './PriorityDot';

export const PRIORITY_STYLES = {
  HIGH: {
    label: '중요',
    color: 'var(--color-label-red)',
  },
  MEDIUM: {
    label: '보통',
    color: 'var(--color-label-yellow)',
  },
  LOW: {
    label: '낮음',
    color: 'var(--color-label-green)',
  },
} as const;

type PriorityType = keyof typeof PRIORITY_STYLES;

interface LabelPriorityProps {
  priority: PriorityType;
  size: 'S' | 'L';
}

export default function LabelPriority({ priority, size }: LabelPriorityProps) {
  const { label, color } = PRIORITY_STYLES[priority];

  // Small : Caption/12 Semibold
  // Large : Body3/14 Semibold

  const textsizeClass = size === 'L' ? 'font-body3-semibold' : 'font-caption-semibold';

  return (
    <div className='inline-flex items-center gap-1'>
      <PriorityDot color={color} />
      <span className={textsizeClass} style={{ color }}>
        {label}
      </span>
    </div>
  );
}
