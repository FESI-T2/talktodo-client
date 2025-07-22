import { useState, useRef, useEffect } from 'react';

import LabelPriority from '@/components/card/common/LabelPriority/LabelPriority';

type PriorityType = '중요' | '보통' | '낮음';

export const priorityOptions: PriorityType[] = ['중요', '보통', '낮음'];

export const DownArrowIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
      <path d='M5 7.5L10 12.5L15 7.5' stroke='#29252B' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' />
    </svg>
  );
};

export const UpArrowIcon = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
      <g opacity='0.4'>
        <path d='M15 12.5L10 7.5L5 12.5' stroke='#29252B' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round' />
      </g>
    </svg>
  );
};

interface SelectPriorityProps {
  label: string;
  options: { label: string; value: string }[];
  onSelect: (value: string) => void;
  selectedValue?: string;
}

export default function SelectPriority({}: SelectPriorityProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [priority, setPriority] = useState<PriorityType>('중요');
  // const [size, setSize] = useState<'S' | 'L'>('L');
  const size = 'L';

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <button
        type='button'
        className='flex w-[182px] h-[44px] py-[10px] px-4 justify-between items-center rounded-xl border-gray-300 border-2 bg-white'
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
        <div className='mt-1  w-[182px] rounded-xl bg-white shadow-lg z-10 border border-violet-200'>
          {priorityOptions.map((opt) => (
            <button
              key={opt}
              className='w-full flex items-center px-4 py-2 hover:bg-purple-100 rounded-xl transition'
              onClick={() => {
                setPriority(opt);
                setOpen(false);
              }}
            >
              <LabelPriority priority={opt} size={size} />
            </button>
          ))}
        </div>
      )}
    </>
  );
}
