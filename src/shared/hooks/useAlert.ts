import { AlertProps } from '../components/Alert/Alert.type';
import { AlertSubject } from '../components/Alert/AlertSubject';

/**
 * 알림을 호출 하는 훅입니다.
 * 사용 예시:
 * const { openAlert } = useAlert();
 * openAlert({ message: '테스트 알림', handleClick: () => console.log('Alert Clicked') });
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

    closeAlert: (id?: number) => {
      alertSubject.removeAlert(id);
    },
  };

  return alert;
};
