import Image from 'next/image';
import React from 'react';

import { cn } from '@/shared/utils/cn';

interface AlertProps {
  className?: string;
}

const Alert = ({ className }: AlertProps) => {
  return <Image src={'/icon/alert.svg'} unoptimized width={22} height={23} alt='Alert Icon' className={cn(className)} />;
};

export default Alert;
