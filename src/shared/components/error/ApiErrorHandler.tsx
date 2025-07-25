'use client';
import { useEffect } from 'react';

import classifyAPIError from '@/lib/error/classifyAPIError';
import { CustomError } from '@/lib/error/customError';
import { processError, createErrorActions } from '@/lib/error/handleError';
import { useToast } from '@/shared/hooks/useToast';

import { Fallback, PageFallback } from './Fallback/FallBack';

interface ApiErrorHandlerProps {
  error: Error;
  level: 'toast' | 'fallback' | 'page';
  onReset: () => void;
}

const ApiErrorHandler = ({ error, level, onReset }: ApiErrorHandlerProps) => {
  const toast = useToast();

  if (error instanceof CustomError) {
    useEffect(() => {
      processError(error, createErrorActions(toast.error));
    }, []);
  } else {
    throw classifyAPIError(error);
  }

  if (level === 'toast') return null;

  if (level === 'fallback') return <Fallback onReset={onReset} />;

  return <PageFallback onReset={onReset} />;
};

export default ApiErrorHandler;
