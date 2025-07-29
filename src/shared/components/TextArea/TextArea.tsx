import React from 'react';

import { cn } from '@/shared/utils/cn';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const TextArea = ({ className, ...props }: TextAreaProps) => {
  return (
    <textarea
      {...props}
      className={cn(
        'p-4 block  rounded-[20px] w-full outline-[var(--color-gray-300)] h-[192px] resize-none outline  focus:outline-[var(--color-purple-500)] bg-white',
        className
      )}
    />
  );
};

export default TextArea;
