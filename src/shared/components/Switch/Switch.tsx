'use client';

import { useState } from 'react';

import LayoutGrid2 from '@/shared/components/Icons/LayoutGrid/LayoutGrid2';
import LayoutGrid4 from '@/shared/components/Icons/LayoutGrid/LayoutGrid4';

interface SwitchProps {
  type: 'layout' | 'basic';
  size: 'L' | 'S';
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

const Switch = ({
  type = 'basic',
  size = 'L',
  defaultChecked = false,
  checked,
  onChange,
  disabled = false,
  className = '',
}: SwitchProps) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;

  const handleToggle = () => {
    if (disabled) return;

    const newChecked = !isChecked;

    if (!isControlled) {
      setInternalChecked(newChecked);
    }

    onChange?.(newChecked);
  };

  const layoutSizeClasses = {
    L: {
      container: 'w-[88px] h-[48px] p-1.5',
      circle: 'w-[36px] h-[36px]',
      translate: isChecked ? 'translate-x-[40px]' : 'translate-x-[0px]',
      iconPadding: 'px-4',
    },
    S: {
      container: 'w-[66px] h-[36px] p-1',
      circle: 'w-[28px] h-[28px]',
      translate: isChecked ? 'translate-x-[30px]' : 'translate-x-[0px]',
      iconPadding: 'px-2.5',
    },
  };

  const basicSizeClasses = {
    L: {
      container: 'w-[63px] h-[36px] p-[3px]',
      circle: 'w-[30px] h-[30px]',
      translate: isChecked ? 'translate-x-[27px]' : 'translate-x-[0px]',
    },
    S: {
      container: 'w-[48px] h-[28px] p-0.5',
      circle: 'w-[24px] h-[24px]',
      translate: isChecked ? 'translate-x-[20px]' : 'translate-x-[0px]',
    },
  };

  const currentSize = type === 'layout' ? layoutSizeClasses[size] : basicSizeClasses[size];

  return (
    <button
      type='button'
      role='switch'
      aria-checked={isChecked}
      disabled={disabled}
      onClick={handleToggle}
      className={`
        relative inline-flex items-center justify-start
        ${currentSize.container}
        rounded-full
        transition-all duration-300 ease-in-out
        ${disabled ? 'opacity-50' : 'cursor-pointer opacity-100'}
        ${type === 'layout' ? 'bg-purple-200' : isChecked ? 'bg-gradient-to-b from-violet-500 to-violet-500' : 'bg-gray-300'}
        ${className}
      `}
    >
      {type === 'layout' && (
        <div className={`absolute inset-0 flex items-center justify-between ${layoutSizeClasses[size].iconPadding}`}>
          <div className='transition-opacity duration-200'>
            <LayoutGrid4 size={size} active={false} />
          </div>
          <div className='transition-opacity duration-200'>
            <LayoutGrid2 size={size} active={false} />
          </div>
        </div>
      )}

      <div
        className={`
          ${currentSize.circle}
          bg-white
          rounded-full
          transform transition-transform duration-300 ease-in-out
          ${currentSize.translate}
          flex items-center justify-center
          z-10
        `}
      >
        {type === 'layout' && (isChecked ? <LayoutGrid2 size={size} active={true} /> : <LayoutGrid4 size={size} active={true} />)}
      </div>
    </button>
  );
};

export default Switch;
