import { AlertProps } from '../components/Alert/Alert';
import { AlertSubject } from '../components/Alert/AlertSubject';

/**
 * 알림을 호출 하는 훅입니다.
 * 사용 예시:
 * const { success, warning, error } = useAlert();
 * success('성공 메시지');
 * warning('경고 메시지');
 * error('오류 메시지');
 */

export const useAlert = () => {
  const alertSubject = AlertSubject.getInstance();

  const alert = {
    openAlert: ({ message, handleClick }: AlertProps) => {
      alertSubject.addAlert({
        id: Date.now(),
        message,
        handleClick,
      });
    },
  };

  return alert;
};
