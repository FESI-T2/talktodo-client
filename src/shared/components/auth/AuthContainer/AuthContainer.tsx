'use server';

import { getAccessToken } from '@/app/actions/auth';

import AuthProvider from '../AuthProvider/AuthProvider';

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
