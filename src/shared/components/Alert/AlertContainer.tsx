'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import useMount from '@/shared/hooks/useMount';

import Alert from './Alert';
import { Alert as AlertType } from './Alert.type';
import { AlertObserver, AlertSubject } from './AlertSubject';

const AlertContainer = () => {
  const [Alerts, setAlerts] = useState<AlertType[]>([]);

  const Alert_LIMIT = 1;
  const Alert_DURATION = 10000000;

  const isMounted = useMount();

  useEffect(() => {
    const alertSubject = AlertSubject.getInstance();

    const handleNewAlert: AlertObserver = ({ id, message, handleClick }) => {
      if (id === -1 && message === '') {
        setAlerts([]);
        return;
      }

      const newAlert = {
        id: id || Date.now(),
        message,
        handleClick,
      };

      setAlerts((prev) => {
        if (prev.length >= Alert_LIMIT) return [...prev.slice(1), newAlert];
        return [...prev, newAlert];
      });

      setTimeout(() => {
        setAlerts((prev) => prev.filter((Alert) => Alert.id !== newAlert.id));
      }, Alert_DURATION);
    };

    alertSubject.subscribe(handleNewAlert);

    return () => {
      alertSubject.unsubscribe(handleNewAlert);
    };
  }, []);

  if (!isMounted) return null;

  // 차후에 Alert 등장 위치 조정 필요
  return createPortal(
    <div className=' fixed z-50 flex bottom-[30px] left-1/2 -translate-x-1/2  w-full  items-center '>
      {Alerts.slice()
        .reverse()
        .map(({ id, message, handleClick }) => (
          <Alert key={id} message={message} handleClick={handleClick} />
        ))}
    </div>,
    document.getElementById('alert-root') || document.body
  );
};

export default AlertContainer;
