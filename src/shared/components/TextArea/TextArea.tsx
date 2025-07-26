import clsx from 'clsx';
import React from 'react';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const TextArea = ({ className, ...props }: TextAreaProps) => {
  return (
    <textarea
      {...props}
      className={clsx(
        'p-4 block  rounded-[20px] w-full outline-[var(--color-gray-100)] h-[192px] resize-none outline  focus:outline-[var(--color-purple-500)] bg-white',
        className
      )}
    />
  );
};

export default TextArea;
