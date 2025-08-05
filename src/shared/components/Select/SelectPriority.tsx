import { useState } from 'react';

import { Priority } from '@/shared/types/prioity';
import LabelPriority from '@/task/components/common/LabelPriority/LabelPriority';

import Dropdown from '../Dropdown/Dropdown';

export const DownArrowIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
      <path d='M5 7.5L10 12.5L15 7.5' stroke='#29252B' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  );
};

export const UpArrowIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
      <g opacity='0.4'>
        <path d='M15 12.5L10 7.5L5 12.5' stroke='#29252B' strokeWidth='2.5' strokeLinecap='round' strokeLinejoin='round' />
      </g>
    </svg>
  );
};

export const selectOptions = ['중요', '보통', '낮음'];

interface SelectPriorityProps {
  priority: Priority;
  selectPriority: (value: Priority) => void;
}

export default function SelectPriority({ priority, selectPriority }: SelectPriorityProps) {
  const [open, setOpen] = useState(false);

  const size = 'L';

  const handleSelect = (value: Priority) => {
    selectPriority(value);
    setOpen(false);
  };

  return (
    <div className='relative '>
      <button
        type='button'
        className='flex justify-between items-center base-divider relative px-4 py-[12.5px] w-full h-[44px] cursor-pointer'
        onClick={() => setOpen((openState) => !openState)}
        aria-haspopup='listbox'
        aria-expanded={open}
      >
        <div className={`w-full flex justify-between  ${open ? 'opacity-50' : ''}`}>
          <LabelPriority priority={priority} size={size} />
          {!open ? <DownArrowIcon /> : <UpArrowIcon />}
        </div>
      </button>
      {open && (
        <div className='absolute z-10'>
          <Dropdown options={selectOptions} size='L' type='priority' onSelect={handleSelect} />
        </div>
      )}
    </div>
  );
}
