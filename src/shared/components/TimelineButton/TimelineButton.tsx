'use client';

import Clock from '@/shared/components/Icons/Clock/Clock';

interface TimelineButtonProps {
  size: 'L' | 'S';
  active: boolean;
  onClick: (active: boolean) => void;
}

const TimelineButton = ({ size, active, onClick }: TimelineButtonProps) => {
  const buttonSize = size === 'L' ? { width: '40px', height: '40px' } : { width: '32px', height: '32px' };

  return (
    <button
      style={buttonSize}
      onClick={() => onClick(!active)}
      className={`
        flex justify-center items-center rounded-full bg-purple-500
        hover:outline-2 hover:outline-white hover:bg-purple-600
        active:bg-purple-700 active:outline-0
        transition-all duration-75
      `}
    >
      <Clock size={size} active={active} />
    </button>
  );
};

export default TimelineButton;
