interface iconProps {
  type: 'S' | 'M' | 'L';
}
const Kebab = ({ type }: iconProps) => {
  const renderIconKebab = () => {
    if (type === 'S') {
      return (
        <svg xmlns='http://www.w3.org/2000/svg' width='2' height='8' viewBox='0 0 2 8' fill='none'>
          <circle cx='1' cy='1' r='1' fill='#D5D3DA' />
          <circle cx='1' cy='4' r='1' fill='#D5D3DA' />
          <circle cx='1' cy='7' r='1' fill='#D5D3DA' />
        </svg>
      );
    }

    if (type === 'M') {
      return (
        <svg xmlns='http://www.w3.org/2000/svg' width='4' height='16' viewBox='0 0 4 16' fill='none'>
          <path
            d='M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2Z'
            fill='#D5D3DA'
          />
          <path
            d='M4 8C4 9.10457 3.10457 10 2 10C0.895431 10 0 9.10457 0 8C0 6.89543 0.895431 6 2 6C3.10457 6 4 6.89543 4 8Z'
            fill='#D5D3DA'
          />
          <path
            d='M4 14C4 15.1046 3.10457 16 2 16C0.895431 16 0 15.1046 0 14C0 12.8954 0.895431 12 2 12C3.10457 12 4 12.8954 4 14Z'
            fill='#D5D3DA'
          />
        </svg>
      );
    }

    if (type === 'L') {
      return (
        <svg xmlns='http://www.w3.org/2000/svg' width='6' height='20' viewBox='0 0 6 20' fill='none'>
          <path
            d='M5.5 2.5C5.5 3.88071 4.38071 5 3 5C1.61929 5 0.5 3.88071 0.5 2.5C0.5 1.11929 1.61929 0 3 0C4.38071 0 5.5 1.11929 5.5 2.5Z'
            fill='#D5D3DA'
          />
          <path
            d='M5.5 10C5.5 11.3807 4.38071 12.5 3 12.5C1.61929 12.5 0.5 11.3807 0.5 10C0.5 8.61929 1.61929 7.5 3 7.5C4.38071 7.5 5.5 8.61929 5.5 10Z'
            fill='#D5D3DA'
          />
          <path
            d='M5.5 17.5C5.5 18.8807 4.38071 20 3 20C1.61929 20 0.5 18.8807 0.5 17.5C0.5 16.1193 1.61929 15 3 15C4.38071 15 5.5 16.1193 5.5 17.5Z'
            fill='#D5D3DA'
          />
        </svg>
      );
    }
  };

  return renderIconKebab();
};

export default Kebab;

// import clsx from 'clsx';
// import React from 'react';

// interface KebabProps {
//   className?: string;
// }

// const Kebab = ({ className }: KebabProps) => {
//   return <img className={clsx(className)} src={'/icon/kebab.svg'} alt='Kebab' />;
// };

// export default Kebab;
