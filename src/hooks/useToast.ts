import { ToastSubject } from '../components/toast/ToastSubject';

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
    success: (message: string) => {
      toastSubject.addToast({
        id: Date.now(),
        message,
        variant: 'success',
      });
    },
    warning: (message: string) => {
      toastSubject.addToast({
        id: Date.now(),
        message,
        variant: 'warning',
      });
    },
    error: (message: string) => {
      toastSubject.addToast({
        id: Date.now(),
        message,
        variant: 'error',
      });
    },
  };

  return toast;
};
