import React from 'react';

type Position = 'left' | 'right';

interface ChevronProps {
  direction: Position;
}

const Chevron: React.FC<ChevronProps> = ({ direction }) => {
  return direction === 'left' ? <ChevronLeft /> : <ChevronRight />;
};

const ChevronLeft = () => {
  return <img src='/icon/chevron/chevron-left.svg' alt='Chevron Left' />;
};

const ChevronRight = () => {
  return <img src='/icon/chevron/chevron-right.svg' alt='Chevron Right' />;
};

export default Chevron;
