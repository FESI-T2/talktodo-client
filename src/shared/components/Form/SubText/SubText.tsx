import clsx from 'clsx';
import React from 'react';

interface SubTextProps {
  text: string;
  children: React.ReactNode;
  className?: string;
}

const SubText = ({ text, children, className }: SubTextProps) => {
  return (
    <div className={clsx('mb-6', className)}>
      <p className='font-body2-semibold mb-3 '>{text}</p>
      {children}
    </div>
  );
};

export default SubText;
