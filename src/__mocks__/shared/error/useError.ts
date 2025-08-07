export const useError = () => ({
  processError: (error: Error) => {
    console.log('Mocked processError:', error);
  },
  logError: (error: Error) => {
    console.log('Mocked logError:', error);
  },
  handleAuthError: () => {
    console.log('Mocked handleAuthError');
  },
  tokenErrorCodes: ['COMMON401', 'SEC1001'],
});
