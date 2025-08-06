import axios, { AxiosResponse } from 'axios';

import classifyAPIError from '../error/classifyAPIError';
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

        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) config.headers['Authorization'] = `Bearer ${accessToken}`;

        return config;
      });
    }

    http.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('API Error:', error);
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
