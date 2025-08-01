import React from 'react';

import { cn } from '@/shared/utils/cn';

interface TableSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const TableSection = ({ children, title, className }: TableSectionProps) => {
  return (
    <div className={cn('flex items-center whitespace-nowrap gap-5  justify-between', className)}>
      <span className='text-gray-500 font-body3-medium-tight'>{title}</span>
      {children}
    </div>
  );
};

export default TableSection;
