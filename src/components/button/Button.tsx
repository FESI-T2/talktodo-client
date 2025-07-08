import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { ButtonProps, ButtonIconMap } from './button.types';
import AddBlackIcon, { AddWhiteIcon } from '../ui/icons/AddIcon';
import CheckIcon from '../ui/icons/CheckIcon';
import DeleteIcon from '../ui/icons/DeleteIcon';

const iconMap: ButtonIconMap = {
  add: {
    default: <AddBlackIcon />,
    active: <AddWhiteIcon />,
  },
  edit: { default: <CheckIcon /> },
  delete: { default: <DeleteIcon />, active: <DeleteIcon /> },
};

const colorMap = {
  add: {
    default: ['bg-[#E2E8F0]', 'text-[#0F172A]'],
    active: ['bg-[#7C3AED]', 'text-white'],
  },
  delete: { default: ['bg-[#F43F5E]', 'text-white'], active: ['bg-[#F43F5E]', 'text-white'] },
  edit: {
    default: ['bg-[#E2E8F0]', 'text-[#0F172A]'],
    active: ['bg-[#BEF264]', 'text-[#0F172A]'],
  },
} as const;

const sizeMap = {
  large: ['w-[164px]', 'h-[52px]'],
  small: ['w-[52px]', 'h-[52px]'],
  icon: ['w-[12px]', 'h-[12px]'],
} as const;

const labelMap = {
  add: '추가하기',
  delete: '삭제하기',
  edit: '수정 완료',
} as const;

export default function Button({
  variant = 'add',
  state = 'default',
  size = 'large',
  icon,
  isIconOnly = false,
  children,
  ...rest
}: ButtonProps) {
  const displayIcon = icon ?? iconMap[variant][state] ?? iconMap[variant].default;
  const showText = size !== 'small' && !isIconOnly;
  const textContent = showText ? (children ?? labelMap[variant]) : null;

  const [bgCls, textCls] = colorMap[variant][state] ?? colorMap[variant].default;
  const [wCls, hCls] = isIconOnly ? sizeMap.icon : sizeMap[size];

  const composed = twMerge(
    clsx(
      'inline-flex items-center justify-center gap-2',
      'border-[3px] border-neutral-900 rounded-full',
      'shadow-[4px_4px_0_0_#000]',

      bgCls,
      textCls,
      wCls,
      hCls,

      isIconOnly && 'px-0'
    )
  );

  return (
    <button className={composed} {...rest}>
      {displayIcon}
      {textContent}
    </button>
  );
}
