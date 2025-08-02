import React from 'react';

const TextArea = ({ ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <>
      <textarea
        {...props}
        rows={5}
        placeholder='할 일을 입력해 주세요'
        className='flex-1 resize-none overflow-y-auto outline-none
          font-body2-medium-loose leading-[160%] text-gray-900
          placeholder:text-gray-500'
      />
      <div className='mx-2 h-full border-r border-gray-200' />
    </>
  );
};

export default TextArea;
