import axios, { AxiosResponse } from 'axios';

import { getAccessToken } from '@/utils/token';

export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export type HTTPHeaders = Record<string, string>;

export type HTTPParams = Record<string, string | number | boolean>;

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';

class API {
  readonly method: HTTPMethod;
  readonly url: string;

  headers?: HTTPHeaders;

  params?: HTTPParams;

  data?: unknown;

  timeout?: number;

  withCredentials?: boolean;

  constructor(method: HTTPMethod, url: string) {
    this.method = method;
    this.url = url;
  }

  call<T>(): Promise<AxiosResponse<T>> {
    const http = axios.create({
      baseURL: BASE_URL,
    });

    if (this.withCredentials) {
      http.interceptors.request.use(async (config) => {
        config.headers['Content-Type'] = 'application/json; charset=utf-8';

        const accessToken = await getAccessToken();
        if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`;

        return config;
      });

      http.interceptors.response.use(
        (response) => response,
        (error) => {
          if (error.response?.status === 401) {
            console.error('인증 오류 발생:', error);
          }
          return Promise.reject(error);
        }
      );
    }

    http.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error(error);
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
    });
  }
}

export default API;
