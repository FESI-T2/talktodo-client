// axiosClient.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // .env에서 설정
  withCredentials: true, // 쿠키 인증 등 필요한 경우
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 예시
axiosInstance.interceptors.request.use(
  (config) => {
    // 예: 토큰이 있을 경우 헤더에 추가
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 예시
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // 예: 인증 만료시 처리
      console.warn('Unauthorized - redirecting to login');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
