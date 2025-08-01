import { ToastSubject } from '../components/Toast/ToastSubject';

/**
 * 토스트를 호출 하는 훅입니다.
 * 사용 예시:
 * const { success, warning, error } = useToast();
 * success('성공 메시지');
 * warning('경고 메시지');
 * error('오류 메시지');
 */

export const useToast = () => {
  const toastSubject = ToastSubject.getInstance();

  const toast = {
    openToast: (message: string) => {
      toastSubject.addToast({
        id: Date.now(),
        message,
      });
    },
  };

  return toast;
};
