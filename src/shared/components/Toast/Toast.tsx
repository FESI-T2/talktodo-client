import { clsx } from 'clsx';
import { X, CheckCircle, AlertTriangle, AlertCircle } from 'lucide-react';

interface ToastProps {
  message: string;
  variant: 'success' | 'warning' | 'error';
  onClose: () => void;
}

interface ToastStyle {
  success: string;
  warning: string;
  error: string;
}

interface ToastIconComponent {
  success: React.ReactNode;
  warning: React.ReactNode;
  error: React.ReactNode;
}

const Toast = ({ message, variant = 'success', onClose }: ToastProps) => {
  const ToastStyle: ToastStyle = Object.freeze({
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
  });

  const ToastIconComponent: ToastIconComponent = Object.freeze({
    success: <CheckCircle />,
    warning: <AlertTriangle />,
    error: <AlertCircle />,
  });

  return (
    <div className={clsx('relative flex items-center h-18 w-100 p-6 rounded-lg text-white text-xl shadow-md', ToastStyle[variant])}>
      {ToastIconComponent[variant]}
      <span className='flex-1 text-center'>{message}</span>
      <X onClick={onClose} className='cursor-pointer' />
    </div>
  );
};

export default Toast;
