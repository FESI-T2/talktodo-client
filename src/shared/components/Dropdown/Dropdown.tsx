'use client';
import { Priority } from '@/shared/types/prioity';
import { cn } from '@/shared/utils/cn';
import LabelPriority from '@/task/components/common/LabelPriority/LabelPriority';

interface DropdownOptions {
  options: string[];
  size?: 'S' | 'M' | 'L';
  type?: 'default' | 'priority';
  onSelect?: (value: Priority) => void;
  className?: string;
}

const Dropdown = ({ options, size = 'M', type = 'default', onSelect, className }: DropdownOptions) => {
  const DropdownType = {
    S: 'w-[90px] p-4 font-body2-regular tracking-[-0.32px]',
    M: 'w-[106px] py-3 px-4 font-body1-regular tracking-[-0.36px]',
    L: 'w-[182px] py-3 px-4 font-body2-regular h-[55px]',
  };
  return (
    <div
      className={cn(
        `bg-white rounded-xl flex py-1 flex-col items-center justify-center shadow-[0px_0px_20px_0px_rgba(52,35,101,0.15)]`,
        className
      )}
    >
      {options.map((option, index) => (
        <button
          type='button'
          key={index}
          className={cn(
            `flex justify-center items-center text-gray-700 cursor-pointer 
           hover:bg-gray-100 active:bg-gray-300 rounded-lg transition-colors  text-center ${DropdownType[size]}`
          )}
          onClick={() => {
            onSelect?.(option as Priority);
          }}
        >
          {type === 'default' && option}
          {type === 'priority' && (
            <div className='flex justify-center items-center'>
              <LabelPriority priority={option as Priority} size='L' />
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default Dropdown;
