import { clsx } from 'clsx';

import Close from '../Icons/Close/Close';

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

const Toast = ({ message, variant = 'success', onClose }: ToastProps) => {
  const ToastStyle: ToastStyle = Object.freeze({
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
  });

  return (
    <div className={clsx('relative flex items-center h-18 w-100 p-6 rounded-lg text-white text-xl shadow-md', ToastStyle[variant])}>
      <span className='flex-1 text-center'>{message}</span>
      <button onClick={onClose} className='cursor-pointer'>
        <Close />
      </button>
    </div>
  );
};

export default Toast;
