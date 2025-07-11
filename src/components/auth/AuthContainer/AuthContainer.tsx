'use server';

import AuthProvider from '../AuthProvider/AuthProvider';

import { getAccessToken } from '@/app/actions/auth';

interface AuthContainerProps {
  children: React.ReactNode;
}

const AuthContainer = async ({ children }: AuthContainerProps) => {
  const accessUrl = await getAccessToken();
  const isLoggedIn = accessUrl !== null;

  return (
    <AuthProvider isLoggedIn={isLoggedIn} accessUrl={accessUrl}>
      {children}
    </AuthProvider>
  );
};

export default AuthContainer;
