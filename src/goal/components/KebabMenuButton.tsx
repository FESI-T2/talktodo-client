'use client';

import { useState } from 'react';

import Dropdown from '@/shared/components/Dropdown/Dropdown';
import Icon from '@/shared/components/Icon/Icon';

const kebabOptions = ['수정하기', '삭제하기'] as const;

interface KebabMenuButtonProps {
  onEdit: () => void;
  onDelete: () => void;
}

const KebabMenuButton = ({ onEdit, onDelete }: KebabMenuButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (action: string) => {
    setIsOpen(false);
    if (action === '수정하기') onEdit();
    if (action === '삭제하기') onDelete();
  };

  return (
    <div className='relative'>
      <button
        type='button'
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        className='flex w-8 h-8 justify-center items-center z-10'
      >
        <Icon name='kebab' />
      </button>

      {isOpen && (
        <div role='presentation' className='absolute right-0 top-full z-20' onClick={(e) => e.stopPropagation()}>
          <Dropdown options={[...kebabOptions]} size='M' type='default' onSelect={(value) => handleSelect(value)} />
        </div>
      )}
    </div>
  );
};

export default KebabMenuButton;
