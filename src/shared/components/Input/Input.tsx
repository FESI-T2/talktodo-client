import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={`p-3 font-body2-regular border-[1px] bg-white border-[var(--color-gray-100)] rounded-xl  focus:outline-[var(--color-purple-500)] bg-wite ${className} w-full h-[43px] `}
      {...props}
    />
  );
};

export default Input;
