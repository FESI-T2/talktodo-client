'use server';
import { cookies } from 'next/headers';

const getAccessToken = async () => {
  const cookieStore = await cookies();
  return cookieStore.get('accessToken')?.value || null;
};

const setAccessToken = async (token: string) => {
  const cookieStore = await cookies();
  cookieStore.set({
    name: 'accessToken',
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7,
  });
};

const removeAccessToken = async () => {
  const cookieStore = await cookies();
  cookieStore.delete('accessToken');
};

export { getAccessToken, setAccessToken, removeAccessToken };
