import React from 'react';

import { cn } from '@/shared/utils/cn';

interface SubTextProps {
  text: string;
  className?: string;
}

const SubText = ({ text, className }: SubTextProps) => {
  return <p className={cn('font-body2-semibold', className)}>{text}</p>;
};

export default SubText;
