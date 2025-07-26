export const ERROR_TYPES = {
  APP_ERROR: 'APP_ERROR',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  AUTHENTICATION_ERROR: 'AUTHENTICATION_ERROR',
  NOT_FOUND_ERROR: 'NOT_FOUND_ERROR',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
} as const;

export type ErrorType = keyof typeof ERROR_TYPES;

export class CustomError extends Error {
  public errorType: ErrorType;
  public status: number;

  constructor(errorType: ErrorType, status: number) {
    super();
    this.errorType = errorType;
    this.status = status;
  }
}
