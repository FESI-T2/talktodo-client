'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import useMount from '@/hooks/useMount';

import Toast from './Toast';
import { ToastObserver, Toast as ToastType, ToastSubject } from './ToastSubject';

const ToastContainer = () => {
  const [toasts, setToasts] = useState<ToastType[]>([]);
  const isMounted = useMount();

  const TOAST_LIMIT = 4;
  const TOAST_DURATION = 3000;

  useEffect(() => {
    const toastSubject = ToastSubject.getInstance();

    const handleNewToast: ToastObserver = ({ message, variant }) => {
      const newToast = {
        id: Date.now(),
        message,
        variant,
      };

      setToasts((prev) => {
        if (prev.length >= TOAST_LIMIT) return [...prev.slice(1), newToast];
        return [...prev, newToast];
      });

      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== newToast.id));
      }, TOAST_DURATION);
    };

    toastSubject.subscribe(handleNewToast);

    return () => {
      toastSubject.unsubscribe(handleNewToast);
    };
  }, []);

  const handleCloseToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  if (!isMounted) {
    return null;
  }

  return createPortal(
    <div className='toast-container'>
      {toasts
        .slice()
        .reverse()
        .map(({ id, message, variant }) => (
          <Toast key={id} message={message} variant={variant} onClose={() => handleCloseToast(id)} />
        ))}
    </div>,
    document.getElementById('toast-root') || document.body
  );
};

export default ToastContainer;
