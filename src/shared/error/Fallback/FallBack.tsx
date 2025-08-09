'use client';
import React, { useLayoutEffect, useState } from 'react';

import Button from '@/shared/components/Button/Button';
import ErrorLogo from '@/shared/components/Icons/ErrorLogo/ErrorLogo';

import { CustomError } from '@/shared/lib/error/customError';

import { useError } from '../useError';

interface FallbackProps {
  error: Error;
}

export const BoundaryFallback = ({ error }: FallbackProps) => {
  const { showErrorToast } = useError();
  const [errorMessage, setErrorMessage] = useState<string>('데이터를 불러오지 못했습니다.');

  useLayoutEffect(() => {
    if (error instanceof CustomError) {
      if (error.errorType === 'NETWORK_ERROR') setErrorMessage('네트워크 연결에 문제가 있습니다.');
    } else {
      showErrorToast(new CustomError('UNKNOWN_ERROR', 500, '알 수 없는 오류가 발생했습니다.'));
    }
  }, []);

  return (
    <div className='h-screen w-screen bg-white '>
      <FallBack buttonText='다시 시도' errorMessage={errorMessage} handleClick={() => window.location.reload()} />;
    </div>
  );
};

interface FallBackProps {
  handleClick?: () => void;
  buttonText?: string;
  errorMessage: string;
}

export const FallBack = ({ handleClick, buttonText, errorMessage }: FallBackProps) => {
  return (
    <div className='flex m-auto justify-center flex-col gap-10 h-screen  max-w-[420px] w-[90%] items-center'>
      <ErrorLogo size={'L'} />
      <p className='tb:font-title2-bold font-title3-bold text-white'>{errorMessage}</p>
      {buttonText && handleClick && (
        <div className='flex flex-col gap-4 w-full'>
          <Button onClick={handleClick} variant='primary'>
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
};
