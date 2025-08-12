import { RepeatDay } from '@/task/types';

type RepeatLabelProps = {
  repeatEnabled?: boolean;
  repeatTypes?: RepeatDay[];
  className?: string;
};

export default function RepeatLabel({ repeatEnabled, repeatTypes, className }: RepeatLabelProps) {
  if (!repeatEnabled || !repeatTypes || repeatTypes.length === 0) return null;

  const WEEK_DAYS: RepeatDay[] = ['월', '화', '수', '목', '금', '토', '일'];
  const hasAllDays = WEEK_DAYS.every((d) => repeatTypes.includes(d));
  const label = hasAllDays ? '매일' : repeatTypes.join(' ・ ');

  return <div className={className ?? 'font-caption-medium text-gray-500'}> ・ {label}</div>;
}
