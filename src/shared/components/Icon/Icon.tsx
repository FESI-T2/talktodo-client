import { cn } from '@/shared/utils/cn';

interface IconProps {
  name: string;
  className?: string;
  ariaLabel?: string;
}

const Icon = ({ name, className, ariaLabel = name }: IconProps) => (
  <svg className={cn('w-6 h-6', className)} aria-label={ariaLabel}>
    <use href={`/sprite.svg#${name}`} />
  </svg>
);

export default Icon;
