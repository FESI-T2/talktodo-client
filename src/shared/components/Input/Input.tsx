import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
}

const Input = ({ className, disabled, ...props }: InputProps) => {
  const baseStyles = 'px-4 py-[12.5px] w-full h-[44px] focus:outline-[var(--color-purple-500)] rounded-xl';
  const enabledStyles = 'base-divider bg-white';
  const disabledStyles = 'bg-gray-100 border border-gray-200 text-gray-400';

  return <input className={`${baseStyles} ${disabled ? disabledStyles : enabledStyles} ${className}`} disabled={disabled} {...props} />;
};

export default Input;
