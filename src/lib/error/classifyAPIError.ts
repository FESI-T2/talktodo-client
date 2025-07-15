import { isAxiosError } from 'axios';

import { CustomError } from './customError';

const classifyAPIError = (error: unknown) => {
  if (isAxiosError(error)) {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) throw new CustomError('인증 오류가 발생했습니다.', 'AUTHENTICATION_ERROR', status);
      if (status === 404) throw new CustomError('요청한 리소스를 찾을 수 없습니다.', 'NOT_FOUND_ERROR', status);
      if (status >= 500) throw new CustomError('서버 내부 오류가 발생했습니다.', 'INTERNAL_SERVER_ERROR', status);
    } else if (error.request) throw new CustomError('네트워크 오류가 발생했습니다.', 'NETWORK_ERROR', 500);
    else throw new CustomError('알 수 없는 오류가 발생했습니다.', 'UNKNOWN_ERROR', 500);
  } else throw new CustomError('API 호출이 아닌 알 수 없는 오류가 발생했습니다.', 'UNKNOWN_ERROR', 500);
};

export default classifyAPIError;
