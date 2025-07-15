import { match } from 'ts-pattern';

import { CustomError, ERROR_TYPES } from './customError';

const handleError = (error: CustomError) => {
  match(error.errorType)
    .with(ERROR_TYPES.APP_ERROR, () => {
      console.error('Application Error:', error.message);
    })
    .with(ERROR_TYPES.VALIDATION_ERROR, () => {
      console.error('Validation Error:', error.message);
    })
    .with(ERROR_TYPES.AUTHENTICATION_ERROR, () => {
      console.error('Authentication Error:', error.message);
    })
    .with(ERROR_TYPES.NOT_FOUND_ERROR, () => {
      console.error('Not Found Error:', error.message);
    })
    .with(ERROR_TYPES.INTERNAL_SERVER_ERROR, () => {
      console.error('Internal Server Error:', error.message);
    })
    .with(ERROR_TYPES.NETWORK_ERROR, () => {
      console.error('Network Error:', error.message);
    })
    .with(ERROR_TYPES.UNKNOWN_ERROR, () => {
      console.error('Unknown Error:', error.message);
    });
};

export default handleError;
