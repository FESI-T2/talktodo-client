import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={`font-body2-regular bg-[var(--color-gray-100)] rounded-xl text-body2 p-3 w-full   focus:outline-[var(--color-purple-500)] ${className}`}
      {...props}
    />
  );
};

export default Input;
