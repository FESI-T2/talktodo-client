import { cn } from '@/shared/utils/cn';

interface LogoProps {
  isRotate?: boolean;
  className?: string;
}

const Logo = ({ isRotate = false, className }: LogoProps) => {
  return <img src='/icon/logo.svg' alt='Logo' className={cn({ 'scale-x-[-1]': isRotate }, className)} />;
};

export default Logo;
