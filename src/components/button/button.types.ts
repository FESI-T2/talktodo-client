export type ButtonVariant = 'add' | 'edit' | 'delete';
export type ButtonIconMap = Record<ButtonVariant, { default: React.ReactNode; active?: React.ReactNode }>;
export type ButtonSize = 'small' | 'large';
export type ButtonState = 'default' | 'active';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: ButtonState;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  isIconOnly?: boolean;
}
