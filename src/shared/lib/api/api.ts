import axios, { AxiosResponse } from 'axios';

import { getAccessToken } from '@/app/actions/auth/token';
import { useTokenStore } from '@/auth/store/tokenStore';

import classifyAPIError from '../error/classifyError';
export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export type HTTPHeaders = Record<string, string>;

export type HTTPParams = Record<string, string | number | boolean>;

class API {
  readonly method: HTTPMethod;
  readonly url: string;

  headers?: HTTPHeaders;

  params?: HTTPParams;

  data?: unknown;

  timeout?: number;

  withCredentials?: boolean;

  baseURL?: string;

  constructor(method: HTTPMethod, url: string) {
    this.method = method;
    this.url = url;
  }

  call<T>(): Promise<AxiosResponse<T>> {
    const http = axios.create();

    if (this.withCredentials) {
      http.interceptors.request.use(async (config) => {
        config.headers['Content-Type'] = 'application/json; charset=utf-8';

        if (typeof window !== 'undefined') {
          // 클라이언트 환경
          const tokenStore = useTokenStore.getState();
          const accessToken = tokenStore.token || (await getAccessToken());
          config.headers['Authorization'] = `Bearer ${accessToken}`;
        } else {
          // 서버 환경
          const { cookies } = await import('next/headers');
          const accessToken = (await cookies()).get('accessToken')?.value || null;

          config.headers['Authorization'] = `Bearer ${accessToken}`;
        }

        return config;
      });
    }

    http.interceptors.response.use(
      (response) => response,
      (error) => {
        classifyAPIError(error);
        return Promise.reject(error);
      }
    );

    return http.request({
      method: this.method,
      url: this.url,
      headers: this.headers,
      params: this.params,
      data: this.data,
      timeout: this.timeout,
      withCredentials: this.withCredentials,
      baseURL: this.baseURL,
    });
  }
}

export default API;
