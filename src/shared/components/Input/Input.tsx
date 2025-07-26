import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={`base-divider focus:outline-[var(--color-purple-500)] bg-white ${className} px-4 py-[12.5px] w-full h-[44px]`}
      {...props}
    />
  );
};

export default Input;
