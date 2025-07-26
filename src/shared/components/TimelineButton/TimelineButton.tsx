'use client';
import { useEffect, useState } from 'react';

import SvgIconClock from 'public/icon/Clock';

interface TimelineButtonProps {
  size: 'L' | 'S';
  active?: boolean;
}

const TimelineButton = ({ size }: TimelineButtonProps) => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const handleMouseUp = () => {
      setActive(true);
    };

    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const buttonSize = size === 'L' ? { width: '40px', height: '40px' } : { width: '32px', height: '32px' };

  return (
    <button
      style={buttonSize}
      onMouseDown={() => setActive(false)}
      className={`
        flex justify-center items-center rounded-full bg-purple-500
        hover:outline-2 hover:outline-white hover:bg-purple-600
        active:bg-purple-700 active:outline-0
        transition-all duration-75
      `}
    >
      <SvgIconClock size={size} active={active} />
    </button>
  );
};

export default TimelineButton;
