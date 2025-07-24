import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

export const card = cva(
  'flex flex-col shrink-0 bg-white shadow-card-shadow border border-transparent hover:border hover:border-purple-300 active:opacity-50',
  {
    variants: {
      layout: {
        square:
          'w-[166px] h-[156px] p-4 pt-5  rounded-[20px] items-center justify-between  md:w-[184px] md:h-[180px] md:p-5 md:pt-6 md:rounded-3xl',
        rectangle: ' w-[568px] p-5 items-start gap-4 rounded-[20px]',
        timeline: 'p-4 pr-3 gap-3 md:p-5 md:pb-4 items-start rounded-3xl',
      },
    },
  }
);

export type CardVariants = VariantProps<typeof card>;

export default function BaseCard({ layout, children }: CardVariants & { children: React.ReactNode }) {
  return <div className={cn(card({ layout }))}>{children}</div>;
}
