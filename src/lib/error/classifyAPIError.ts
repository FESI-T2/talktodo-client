import { isAxiosError } from 'axios';

import { CustomError, ERROR_TYPES } from './customError';

const classifyAPIError = (error: unknown) => {
  if (isAxiosError(error)) {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) throw new CustomError(ERROR_TYPES.AUTHENTICATION_ERROR, status);
      if (status === 404) throw new CustomError(ERROR_TYPES.NOT_FOUND_ERROR, status);
      if (status >= 500) throw new CustomError(ERROR_TYPES.INTERNAL_SERVER_ERROR, status);
    } else if (error.request) throw new CustomError(ERROR_TYPES.NETWORK_ERROR, 500);
    else throw new CustomError(ERROR_TYPES.UNKNOWN_ERROR, 500);
  } else throw new CustomError(ERROR_TYPES.UNKNOWN_ERROR, 500);
};

export default classifyAPIError;
