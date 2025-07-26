import { match } from 'ts-pattern';

import { CustomError, ERROR_TYPES } from './customError';

export const getErrorMessage = (error: CustomError): string => {
  return match(error.errorType)
    .with(ERROR_TYPES.APP_ERROR, () => '앱에서 문제가 발생했습니다.')
    .with(ERROR_TYPES.VALIDATION_ERROR, () => '입력값이 올바르지 않습니다.')
    .with(ERROR_TYPES.AUTHENTICATION_ERROR, () => '인증에 실패했습니다.')
    .with(ERROR_TYPES.NOT_FOUND_ERROR, () => '리소스를 찾을 수 없습니다.')
    .with(ERROR_TYPES.INTERNAL_SERVER_ERROR, () => '서버에서 문제가 발생했습니다.')
    .with(ERROR_TYPES.NETWORK_ERROR, () => '네트워크에 문제가 발생했습니다.')
    .with(ERROR_TYPES.UNKNOWN_ERROR, () => '알 수 없는 오류가 발생했습니다.')
    .exhaustive();
};

export const createErrorActions = (showErrorToast: (message: string) => void) => ({
  showToast: (error: CustomError) => {
    const message = getErrorMessage(error);
    showErrorToast(message);
  },

  redirectToLogin: () => {
    window.location.href = '/login';
  },

  logError: (error: CustomError) => {
    console.error(`[${error.errorType}] ${error.message}`, error);
  },
});

// 분기를 처리해주는 유틸
// 차후에 에러에 맞춰 수정
export const processError = (error: CustomError, actions: ReturnType<typeof createErrorActions>) => {
  actions.showToast(error);
};
