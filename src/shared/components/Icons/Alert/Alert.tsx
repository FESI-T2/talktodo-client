import Image from 'next/image';
import React from 'react';

const Alert = () => {
  return <Image src={'/icon/alert.svg'} unoptimized width={22} height={23} alt='Alert Icon' />;
};

export default Alert;
