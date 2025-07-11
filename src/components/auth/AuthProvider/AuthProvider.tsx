'use client';
import { createContext, useContext } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  accessUrl: string | null;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  accessUrl: null,
});

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({
  children,
  isLoggedIn,
  accessUrl,
}: {
  children: React.ReactNode;
  isLoggedIn: boolean;
  accessUrl: string | null;
}) {
  return <AuthContext.Provider value={{ isLoggedIn, accessUrl }}>{children}</AuthContext.Provider>;
}
