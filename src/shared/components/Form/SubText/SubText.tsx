import React from 'react';

import { cn } from '@/shared/utils/cn';

interface SubTextProps {
  text: string;
  children: React.ReactNode;
  className?: string;
}

const SubText = ({ text, children, className }: SubTextProps) => {
  return (
    <div className={cn('mb-6', className)}>
      <p className='font-body2-semibold mb-3 '>{text}</p>
      {children}
    </div>
  );
};

export default SubText;
