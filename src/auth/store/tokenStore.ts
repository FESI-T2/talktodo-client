'use client';
import { create } from 'zustand';

import { getAccessToken, removeAccessToken, setAccessToken } from '@/app/actions/auth/token';

interface TokenStore {
  token: string | null;
  setToken: (token: string) => Promise<void>;
  clearToken: () => Promise<void>;
  initToken: () => Promise<void>;
}
export const useTokenStore = create<TokenStore>((set) => ({
  token: null,

  setToken: async (token: string) => {
    await setAccessToken(token);
    set({ token });
  },

  clearToken: async () => {
    await removeAccessToken();
    set({ token: null });
  },

  initToken: async () => {
    const token = await getAccessToken();
    if (token) set({ token });
  },
}));
