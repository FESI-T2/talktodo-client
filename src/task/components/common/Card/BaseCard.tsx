import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/utils/cn';

export const card = cva('flex bg-white  border border-transparent hover:border hover:border-purple-300 active:opacity-50', {
  variants: {
    layout: {
      square:
        'flex-col shadow-card-shadow shrink-0 w-full h-[156px] p-4 pt-5  rounded-[20px] items-center justify-between md:h-[180px] md:p-5 md:pt-6 md:rounded-3xl',
      rectangle: 'flex-col shadow-card-shadow w-full p-5 items-start gap-4 rounded-[20px]',
      timeline: 'flex-col shadow-card-shadow shrink-0 p-4 pr-3 gap-3 md:gap-0 md:p-5 md:pb-4 items-start rounded-3xl',
      goal: 'w-[340px] pt-5 pl-5 pb-7 pr-4 gap-3 rounded-[20px] border border-purple-150 bg-white md:rounded-3xl md:w-[548px] md:pt-7 md:pr-7 md:pl-8 md:pb-8 md:gap-1 justify-end items-end',
    },
  },
});

export type CardVariants = VariantProps<typeof card>;

export default function BaseCard({ layout, children, isDone = false }: CardVariants & { children: React.ReactNode; isDone?: boolean }) {
  return <div className={cn(card({ layout }), isDone ? 'bg-purple-100' : 'bg-white')}>{children}</div>;
}
