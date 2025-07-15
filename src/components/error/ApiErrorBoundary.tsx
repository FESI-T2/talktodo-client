'use client';

import React, { Component, ReactNode, useEffect } from 'react';

import { useToast } from '@/hooks/useToast';
import { CustomError } from '@/lib/error/customError';
import { processError, createErrorActions } from '@/lib/error/handleError';

interface Props {
  children: ReactNode;
  level?: 'toast' | 'fallback' | 'page';
}

interface State {
  hasError: boolean;
  error: Error | null;
}

const ErrorHandler = ({ error, level, onReset }: { error: Error; level: 'toast' | 'fallback' | 'page'; onReset: () => void }) => {
  const toast = useToast();

  useEffect(() => {
    if (error instanceof CustomError) processError(error, createErrorActions(toast.error));
  }, []);

  if (level === 'toast') return null;

  if (level === 'fallback') {
    return (
      <div className='text-center p-4 text-red-600 bg-red-50 rounded'>
        <p>일시적인 문제가 발생했습니다</p>
        <button onClick={onReset} className='mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'>
          다시 시도
        </button>
      </div>
    );
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-red-50'>
      <div className='max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center'>
        <h2 className='text-2xl font-bold text-gray-900 mb-2'>문제가 발생했습니다</h2>
        <p className='text-gray-600 mb-6'>서버에서 오류가 발생했습니다.</p>
        <button onClick={onReset} className='w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700'>
          다시 시도
        </button>
      </div>
    </div>
  );
};

class ApiErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      const level = this.props.level || 'toast';

      return (
        <>
          <ErrorHandler error={this.state.error} level={level} onReset={this.resetError} />
          {/* 토스트타입의 경우 자식 컴포넌트를 렌더링 */}
          {level === 'toast' && this.props.children}
        </>
      );
    }

    return this.props.children;
  }
}

export default ApiErrorBoundary;
