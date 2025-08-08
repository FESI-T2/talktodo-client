export const ERROR_TYPES = [
  // 기본 에러 (백엔드 COMMON 코드)
  'COMMON500', // 서버 에러, 관리자에게 문의 바랍니다.
  'COMMON400', // 잘못된 요청입니다.
  'COMMON401', // 인증이 필요합니다.
  'COMMON403', // 금지된 요청입니다.
  'COMMON404', // 요청하신 리소스를 찾을 수 없습니다.

  // Users 에러 (백엔드 USER 코드)
  'USER404', // 사용자가 존재하지 않습니다.
  'USER401', // 로그인 중 오류가 발생하였습니다. / 아이디 또는 비밀번호가 틀렸습니다.
  'FILE501', // 프로필 이미지 업로드 중 오류가 발생하였습니다.
  'FILE502', // 파일을 찾을 수 없습니다.
  'USER500', // 사용자 삭제에 실패하였습니다.

  // Social 인증 해제 에러 (백엔드 SOCIAL 코드)
  'SOCIAL400', // 지원하지 않는 소셜 플랫폼입니다.
  'SOCIAL501', // 해당 소셜 플랫폼의 해제 기능은 아직 구현되지 않았습니다.
  'SOCIAL502', // 카카오 관리자 인증 해제에 실패했습니다.

  // Task 에러 (백엔드 TASK 코드)
  'TASK404', // 할 일이 존재하지 않습니다.
  'TASK403', // 할 일 권한이 없습니다.
  'TASK400', // 잘못된 우선순위입니다.
  'TASK410', // 잘못된 반복 설정입니다.

  // Memo 에러 (백엔드 MEMO 코드)
  'MEMO404', // 메모가 존재하지 않습니다.

  // Goal 에러 (백엔드 GOAL 코드)
  'GOAL404', // 목표가 존재하지 않습니다.

  // Security 에러 (백엔드 SEC 코드)
  'SEC1001', // 로그인 후 사용해주세요.
  'SEC1002', // 이미 로그아웃 된 사용자입니다.
  'SEC4001', // 잘못된 형식의 토큰입니다.
  'SEC4010', // 인증이 필요합니다.
  'SEC419', // 토큰이 만료되었습니다.
  'SEC4012', // 토큰 서명이 올바르지 않습니다.
  'SEC4030', // 권한이 없습니다.
  'SEC4041', // 토큰이 존재하지 않습니다.
  'SEC6000', // 토큰이 유효하지 않습니다.
  'SEC5000', // 인증 처리 중 서버 에러가 발생했습니다.
  'SEC5001', // 토큰 처리 중 서버 에러가 발생했습니다.

  // 프론트엔드 전용 에러
  'NETWORK_ERROR', // 네트워크 연결 오류
  'UNKNOWN_ERROR', // 알 수 없는 에러
] as const;

export type ErrorType = (typeof ERROR_TYPES)[number];

export class CustomError extends Error {
  public errorType: ErrorType;
  public status: number;
  public message: string;
  constructor(errorType: ErrorType, status: number, message: string) {
    super(message);
    this.errorType = errorType;
    this.status = status;
    this.message = message;
  }
}
