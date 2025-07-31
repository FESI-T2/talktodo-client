import Image from 'next/image';

interface ErrorIconProps {
  size?: 'L' | 'S';
}

const ErrorLogo = ({ size }: ErrorIconProps) => {
  return size === 'L' ? (
    <Image src={'/img/PC_ErrorLogo.png'} width={390} height={260} alt='PC error logo' />
  ) : (
    <Image src={'/img/MB_ErrorLogo.png'} width={278} height={190} alt='mobile error logo' />
  );
};
export default ErrorLogo;
