//import { useRouter } from 'next/navigation';

import { useToast } from '@/shared/hooks/useToast';

import { CustomError } from './customError';
import { getErrorMessage } from './handleError';

export const useError = () => {
  //const router = useRouter();

  const { openToast } = useToast();

  //   const redirectToLogin = () => {
  //     router.push('/login');
  //   };

  const logError = (error: CustomError) => {
    console.error(`[${error.errorType}] ${error.message}`, error);
  };

  const processError = (error: Error) => {
    if (error instanceof CustomError) {
      logError(error);
      openToast(getErrorMessage(error));
    } else {
      logError(new CustomError('UNKNOWN_ERROR', 500, error.message));
      openToast('알 수 없는 오류가 발생했습니다.');
    }

    // // 인증 관련 에러인 경우 로그인 페이지로 리다이렉트
    // const authErrorCodes = ['COMMON401', 'SEC1001', 'SEC4001', 'SEC4010', 'SEC419', 'SEC4012', 'SEC4041', 'SEC6000'];

    // if (authErrorCodes.includes(error.errorType)) {
    //   redirectToLogin();
    //   return;
    // }
  };

  return {
    processError,

    logError,
  };
};
