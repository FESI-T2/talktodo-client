'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import useMount from '@/shared/hooks/useMount';

import Toast from './Toast';
import { Toast as ToastType } from './Toast.Type';
import { ToastObserver, ToastSubject } from './ToastSubject';

const ToastContainer = () => {
  const [toasts, setToasts] = useState<ToastType[]>([]);
  const isMounted = useMount();

  const TOAST_LIMIT = 4;
  const TOAST_DURATION = 3000;

  useEffect(() => {
    const toastSubject = ToastSubject.getInstance();

    const handleNewToast: ToastObserver = ({ message }) => {
      const newToast = {
        id: Date.now(),
        message,
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

  if (!isMounted) return null;

  return createPortal(
    <div className='fixed top-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-3 w-full'>
      {toasts
        .slice()
        .reverse()
        .map(({ id, message }) => (
          <Toast key={id} message={message} />
        ))}
    </div>,
    document.getElementById('toast-root') || document.body
  );
};

export default ToastContainer;
