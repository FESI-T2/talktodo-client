import { match } from 'ts-pattern';

import { CustomError } from './customError';

export const getErrorMessage = (error: CustomError): string => {
  return (
    match(error.errorType)
      // 기본 에러
      .with('COMMON500', () => '서버 에러, 관리자에게 문의 바랍니다.')
      .with('COMMON400', () => '잘못된 요청입니다.')
      .with('COMMON401', () => '인증이 필요합니다.')
      .with('COMMON403', () => '금지된 요청입니다.')
      .with('COMMON404', () => '요청하신 리소스를 찾을 수 없습니다.')

      // Users 에러
      .with('USER404', () => '사용자가 존재하지 않습니다.')
      .with('USER401', () => '로그인 중 오류가 발생하였습니다.')
      .with('FILE501', () => '프로필 이미지 업로드 중 오류가 발생하였습니다.')
      .with('FILE502', () => '파일을 찾을 수 없습니다.')
      .with('USER500', () => '사용자 삭제에 실패하였습니다.')

      // Social 인증 해제 에러
      .with('SOCIAL400', () => '지원하지 않는 소셜 플랫폼입니다.')
      .with('SOCIAL501', () => '해당 소셜 플랫폼의 해제 기능은 아직 구현되지 않았습니다.')
      .with('SOCIAL502', () => '카카오 관리자 인증 해제에 실패했습니다.')

      // Task 에러
      .with('TASK404', () => '할 일이 존재하지 않습니다.')
      .with('TASK403', () => '할 일 권한이 없습니다.')
      .with('TASK400', () => '잘못된 우선순위입니다.')
      .with('TASK410', () => '잘못된 반복 설정입니다.')

      // Memo 에러
      .with('MEMO404', () => '메모가 존재하지 않습니다.')

      // Goal 에러
      .with('GOAL404', () => '목표가 존재하지 않습니다.')

      // Security 에러
      .with('SEC1001', () => '로그인 후 사용해주세요.')
      .with('SEC1002', () => '이미 로그아웃 된 사용자입니다.')
      .with('SEC4001', () => '잘못된 형식의 인증입니다.')
      .with('SEC4010', () => '인증이 필요합니다.')
      .with('SEC419', () => '인증 만료되었습니다.')
      .with('SEC4012', () => '인증 서명이 올바르지 않습니다.')
      .with('SEC4030', () => '권한이 없습니다.')
      .with('SEC4041', () => '인증 정보가 존재하지 않습니다.')
      .with('SEC6000', () => '인증이 유효하지 않습니다.')
      .with('SEC5000', () => '인증 처리 중 서버 에러가 발생했습니다.')
      .with('SEC5001', () => '인증 처리 중 서버 에러가 발생했습니다.')

      // 프론트엔드 전용 에러
      .with('NETWORK_ERROR', () => '네트워크 연결에 문제가 있습니다. 인터넷 상태를 확인해주세요.')
      .with('UNKNOWN_ERROR', () => '알 수 없는 오류가 발생했습니다.')
      .exhaustive()
  );
};
