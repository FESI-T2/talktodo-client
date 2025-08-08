import { isAxiosError } from 'axios';

import { CustomError } from './customError';

const classifyAPIError = (error: unknown) => {
  if (isAxiosError(error)) {
    if (error.response) {
      // Axios 에러가 응답을 포함하고 있는 경우
      const { status, data } = error.response;
      // 백엔드에서 ReasonDTO 형태로 응답이 오는 경우
      if (data && data.code && data.message) {
        throw new CustomError(data.code, status, data.message);
      }
      // 기본 HTTP 상태 코드 기반 에러 처리
      if (status >= 500) {
        throw new CustomError('COMMON500', status, '서버 에러, 관리자에게 문의 바랍니다.');
      } else if (status === 401) {
        throw new CustomError('COMMON401', status, '인증이 필요합니다.');
      } else if (status === 403) {
        throw new CustomError('COMMON403', status, '금지된 요청입니다.');
      } else if (status === 404) {
        throw new CustomError('COMMON404', status, '요청하신 리소스를 찾을 수 없습니다.');
      } else if (status >= 400) {
        throw new CustomError('COMMON400', status, '잘못된 요청입니다.');
      }
    }
    // 2. 서버 응답이 없는 경우 → 네트워크 오류
    if (error.request) {
      throw new CustomError('NETWORK_ERROR', 0, '네트워크 연결에 문제가 있습니다. 인터넷 상태를 확인해주세요.');
    }
    // AXIOS 설정 중 에러가 발생
    throw new CustomError('UNKNOWN_ERROR', 0, `요청 설정 중 오류가 발생했습니다: ${error.message}`);
  }
  throw new CustomError('UNKNOWN_ERROR', 0, '알 수 없는 오류가 발생했습니다.');
};

export default classifyAPIError;
