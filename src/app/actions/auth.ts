'use server';

import { cookies } from 'next/headers';

export const getAccessToken = async (): Promise<string | null> => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('accessToken');
    return token?.value || null;
  } catch (error) {
    console.error('토큰 읽기 실패:', error);
    return null;
  }
};

export const setAccessToken = async (token: string): Promise<void> => {
  try {
    const cookieStore = await cookies();
    cookieStore.set('accessToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 7일
    });
  } catch (error) {
    console.error('토큰 저장 실패:', error);
    throw error;
  }
};

export const removeAccessToken = async (): Promise<void> => {
  try {
    const cookieStore = await cookies();
    cookieStore.delete('accessToken');
  } catch (error) {
    console.error('토큰 삭제 실패:', error);
    throw error;
  }
};
