import { LoginOption } from '../types/index';

const setCurrentLogin = (option: LoginOption) => {
  localStorage.setItem('currentLogin', option);
};

const getCurrentLogin = () => {
  return localStorage.getItem('currentLogin');
};

export { setCurrentLogin, getCurrentLogin };
