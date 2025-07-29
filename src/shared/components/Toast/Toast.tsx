import { motion } from 'framer-motion';

import { Toast as ToastType } from './Toast.Type';

type ToastProps = Omit<ToastType, 'id'>;

const Toast = ({ message }: ToastProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={
        'font-body1-semibold text-white rounded-3xl py-[20px] px-[41.5px] bg-[#29252B]/80 flex items-center justify-center max-w-[240px] text-nowrap w-[90%] m-auto'
      }
    >
      <span>{message}</span>
    </motion.div>
  );
};

export default Toast;
