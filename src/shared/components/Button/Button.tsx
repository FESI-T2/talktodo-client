import { cn } from '@/shared/utils/cn';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: ButtonVariant;
  disabled?: boolean;
  className?: string;
}

const Button = ({ variant, children, disabled, className, ...props }: ButtonProps) => {
  const ButtonStyle = {
    primary: {
      enabled: 'bg-[var(--color-purple-600)] text-white hover:bg-[var(--color-purple-700)] active:bg-[var(--color-purple-800)]',
      disabled: 'bg-[var(--color-gray-300)]  cursor-not-allowed',
    },
    secondary: {
      enabled:
        'bg-[var(--color-purple-100)] text-[var(--color-purple-500)] hover:bg-[var(--color-purple-200)] active:bg-[var(--color-purple-300)]',
      disabled: 'bg-[var(--color-gray-100)] text-[var(--color-gray-400)] cursor-not-allowed',
    },
  } as const;

  return (
    <button
      {...props}
      className={cn(
        'rounded-xl py-3.5 px-4 flex w-full h-12 items-center justify-center text-base  cursor-pointer font-body1-bold',
        ButtonStyle[variant][disabled ? 'disabled' : 'enabled'],
        className
      )}
      data-variant={variant}
    >
      {children}
    </button>
  );
};

export default Button;
