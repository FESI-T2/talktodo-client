'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { cn } from '@/shared/utils/cn';

import Overlay from './Overlay/Overlay';

// Modal 컴포넌트의 props 인터페이스 정의
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  disableBackdropClick?: boolean;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) {
    return null;
  }

  return createPortal(
    <Overlay>
      <motion.div
        className={cn(isOpen ? 'scale-100' : 'scale-95', className)}
        onClick={(e) => e.stopPropagation()}
        aria-hidden='true'
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: -30 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </Overlay>,
    document.getElementById('modal-root') || document.body
  );
};

export default Modal;
