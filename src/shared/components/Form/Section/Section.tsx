import React from 'react';

import { cn } from '@/shared/utils/cn';

import SubText from '../SubText/SubText';

interface SectionProps {
  sectionTitle: string;
  children: React.ReactNode;
  className?: string;
}

const Section = ({ sectionTitle, children, className }: SectionProps) => {
  return (
    <div className={cn('mb-6', className)}>
      <SubText text={sectionTitle} className='mb-3' />
      {children}
    </div>
  );
};

export default Section;
