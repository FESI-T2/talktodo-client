import clsx from 'clsx';
import React from 'react';

interface KebabProps {
  className?: string;
}

const Kebab = ({ className }: KebabProps) => {
  return <img className={clsx(className)} src={'/icon/kebab.svg'} alt='Kebab' />;
};

export default Kebab;
