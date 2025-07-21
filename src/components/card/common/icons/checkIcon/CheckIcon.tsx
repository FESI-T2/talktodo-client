import { SVGProps } from 'react';

type CheckState = 'on' | 'off';
type CheckSize = 'L' | 'S';

interface CheckIconProps extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> {
  state?: CheckState;
  size?: CheckSize;
}

const icons = {
  on: { L: IconCheckOnL, S: IconCheckOnS },
  off: { L: IconCheckOffL, S: IconCheckOffS },
};

export default function CheckIcon({ state = 'off', size = 'S' }: CheckIconProps) {
  const Svg = icons[state][size];
  return <Svg />;
}
function IconCheckOffS() {
  return (
    <>
      {' '}
      <svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect x='1' y='1' width='26' height='26' rx='13' stroke='#AE7BF6' stroke-width='2' />
        <g clip-path='url(#clip0_1067_15454)'>
          <path
            d='M8.89697 13.9997L12.5428 17.6455L19.8345 10.3539'
            stroke='#AE7BF6'
            stroke-width='2.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_1067_15454'>
            <rect width='17.5' height='17.5' fill='white' transform='translate(5.25 5.25)' />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

function IconCheckOffL() {
  return (
    <>
      <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect x='1' y='1' width='30' height='30' rx='15' stroke='#AE7BF6' stroke-width='2' />
        <g clip-path='url(#clip0_519_17930)'>
          <path
            d='M10.168 15.9997L14.3346 20.1663L22.668 11.833'
            stroke='#AE7BF6'
            stroke-width='2.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_519_17930'>
            <rect width='20' height='20' fill='white' transform='translate(6 6)' />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

function IconCheckOnL() {
  return (
    <>
      <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='32' height='32' rx='16' fill='#E5D6FC' />
        <g clip-path='url(#clip0_519_13433)'>
          <path
            d='M10.168 15.9997L14.3346 20.1663L22.668 11.833'
            stroke='#C8A5F9'
            stroke-width='2.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_519_13433'>
            <rect width='20' height='20' fill='white' transform='translate(6 6)' />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

function IconCheckOnS() {
  return (
    <>
      <svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='28' height='28' rx='14' fill='#E5D6FC' />
        <g clip-path='url(#clip0_1067_15450)'>
          <path
            d='M8.89697 13.9997L12.5428 17.6455L19.8345 10.3539'
            stroke='#C8A5F9'
            stroke-width='2.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_1067_15450'>
            <rect width='17.5' height='17.5' fill='white' transform='translate(5.25 5.25)' />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
