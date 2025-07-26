'use client';

import clsx from 'clsx';
import { Eye, EyeOff } from 'lucide-react';
import { InputHTMLAttributes, useId, useState } from 'react';

type Preset = 'email' | 'password' | 'nickname';

const presetMap: Record<Preset, { label: string; placeholder: string; type: string }> = {
  email: {
    label: '이메일',
    placeholder: 'example@email.com',
    type: 'email',
  },
  password: {
    label: '비밀번호',
    placeholder: '비밀번호 입력',
    type: 'password',
  },
  nickname: {
    label: '닉네임',
    placeholder: '닉네임을 입력하세요',
    type: 'text',
  },
};

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  preset?: Preset;
  label?: string;
  error?: string;
  hint?: string;
  variant?: 'default' | 'underline' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  showTogglePassword?: boolean;
};

export default function CustomInput({
  preset,
  label,
  placeholder,
  type,
  error,
  hint,
  variant = 'default',
  size = 'md',
  showTogglePassword = false,
  className,
  name,
  id,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const autoId = useId();
  const inputId = id || name || autoId;
  const errorId = error ? `${inputId}-error` : undefined;

  const presetConfig = preset ? presetMap[preset] : undefined;

  const resolvedLabel = label ?? presetConfig?.label;
  const resolvedPlaceholder = placeholder ?? presetConfig?.placeholder;
  const resolvedType = type ?? presetConfig?.type ?? 'text';
  const isPassword = resolvedType === 'password';

  const variantClass = {
    default: 'border border-gray-300',
    underline: 'border-b border-gray-300 rounded-none',
    filled: 'bg-gray-100 border border-gray-200',
  }[variant];

  return (
    <div className='flex flex-col gap-1 w-full'>
      {resolvedLabel && (
        <label htmlFor={inputId} className='text-sm md:text-base font-medium text-gray-700'>
          {resolvedLabel}
        </label>
      )}
      <div className='relative'>
        <input
          {...props}
          id={inputId}
          name={name}
          type={isPassword && showTogglePassword ? (showPassword ? 'text' : 'password') : resolvedType}
          placeholder={resolvedPlaceholder}
          aria-invalid={!!error}
          aria-describedby={errorId}
          className={clsx(
            'w-full pr-10',
            'rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
            {
              'text-sm px-3 py-2': size === 'sm',
              'text-base px-4 py-2': size === 'md',
              'text-lg px-4 py-3': size === 'lg',
            },
            variantClass,
            error && 'border-red-500 ring-red-300 focus:ring-red-500',
            className
          )}
        />
        {isPassword && showTogglePassword && (
          <button
            type='button'
            onClick={() => setShowPassword((prev) => !prev)}
            className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 md:right-3'
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
      <div className='min-h-[1.25rem]'>
        {error && (
          <p id={errorId} className='text-sm text-red-500'>
            {error}
          </p>
        )}
        {!error && hint && <p className='text-sm text-gray-500'>{hint}</p>}
      </div>
    </div>
  );
}
