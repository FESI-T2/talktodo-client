import { useRouter } from 'next/navigation';

import { setAccessToken, removeToken } from '@/app/actions/auth/token';
import authApi from '@/auth/lib/authApi';
import { useToast } from '@/shared/hooks/useToast';

import { CustomError } from '../lib/error/customError';
import { getErrorMessage } from '../lib/error/handleError';
export const useError = () => {
  const { openToast } = useToast();

  const router = useRouter();
  const tokenErrorCodes = ['COMMON401', 'SEC1001', 'SEC4001', 'SEC4010', 'SEC419', 'SEC4012', 'SEC4041', 'SEC6000'];

  const logError = (error: CustomError) => {
    console.error(`[${error.errorType}] ${error.message}`, error);
  };

  const showErrorToast = (error: CustomError) => {
    const errorMessage = getErrorMessage(error);
    openToast(errorMessage);
  };

  const handleAuthError = async () => {
    try {
      const response = await authApi.reissue();
      const {
        data: { result },
      } = response;
      await setAccessToken(result);
      window.location.reload();
    } catch {
      await removeToken();
      openToast('다시 로그인 해주세요.');
      const callbackUrl = window.location.pathname + window.location.search;
      router.push(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`);
    }
  };

  return {
    logError,
    showErrorToast,
    handleAuthError,
    tokenErrorCodes,
  };
};
