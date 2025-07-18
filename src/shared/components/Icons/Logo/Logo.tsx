import clsx from 'clsx';

interface LogoProps {
  isRotate?: boolean;
  className?: string;
}

const Logo = ({ isRotate = false, className }: LogoProps) => {
  return <img src='/icon/logo.svg' alt='Logo' className={clsx({ 'scale-x-[-1]': isRotate }, className)} />;
};

export default Logo;
