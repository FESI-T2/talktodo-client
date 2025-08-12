import { cva, VariantProps } from 'class-variance-authority';
import type { MouseEventHandler, ReactNode } from 'react';

import { cn } from '@/shared/utils/cn';

export const card = cva('flex bg-white  border border-transparent hover:border hover:border-purple-300 active:opacity-50', {
  variants: {
    layout: {
      square:
        'flex-col shadow-card-shadow shrink-0 w-[166px] h-[156px] p-4 pt-5  rounded-[20px] items-center justify-between  md:w-[184px] md:h-[180px] md:p-5 md:pt-6 md:rounded-3xl',
      rectangle: 'flex-col shadow-card-shadow w-full p-5 items-start gap-4 rounded-[20px]',
      timeline: 'flex-col shadow-card-shadow shrink-0 p-4 pr-3 gap-3 md:gap-0 md:p-5 md:pb-4 items-start rounded-3xl',
    },
  },
});

export type CardVariants = VariantProps<typeof card>;

export default function BaseCard({
  layout,
  children,
  isDone = false,
  onClick,
  className,
}: CardVariants & { children: ReactNode; isDone?: boolean; onClick?: MouseEventHandler<HTMLButtonElement>; className?: string }) {
  return (
    <button onClick={onClick} className={cn(card({ layout }), isDone ? 'bg-purple-100' : 'bg-white', className)}>
      {children}
    </button>
  );
}
