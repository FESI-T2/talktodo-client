'use client';
import { useEffect } from 'react';

import classifyAPIError from '@/shared/lib/error/classifyAPIError';
import { CustomError } from '@/shared/lib/error/customError';
import { processError, createErrorActions } from '@/shared/lib/error/handleError';

import { Fallback, PageFallback } from './Fallback/FallBack';
import { Level } from './index.type';
import { useAlert } from '../hooks/useAlert';

interface ApiErrorHandlerProps {
  error: Error;
  level: Level;
  onReset: () => void;
}

const ApiErrorHandler = ({ error, level, onReset }: ApiErrorHandlerProps) => {
  const { openAlert } = useAlert();

  if (error instanceof CustomError) {
    useEffect(() => {
      processError(error, createErrorActions(openAlert));
    }, []);
  } else {
    throw classifyAPIError(error);
  }

  if (level === 'alert') return null;

  if (level === 'fallback') return <Fallback onReset={onReset} />;

  return <PageFallback onReset={onReset} />;
};

export default ApiErrorHandler;
