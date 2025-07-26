import API, { HTTPMethod, HTTPHeaders } from './api';

/**
 * API 요청을 생성하는 빌더 클래스입니다.
 * 사용방식 APIBuilder.method.(url, data).
 * 각 메서드는 HTTP 메서드에 해당하며, URL과 데이터를 인자로 받습니다.
 * headers, timeout, withCredentials 등의 설정을 체이닝 방식으로 추가할 수 있습니다.
 * withCredentials: true인 경우, 요청 시 자동으로 엑세스 토큰을 헤더에 추가 및 리프레시를 통한 에러 갱신을 처리합니다.
 * 예시 : APIBuilder.post('/user/kakao-login', {}).headers({ 'Custom-Header': 'value' }).timeout(10000).build();
 */

class APIBuilder {
  private _instance: API;

  constructor(method: HTTPMethod, url: string, data?: unknown) {
    this._instance = new API(method, url);

    this._instance.data = data;
    this._instance.timeout = 5000;
    this._instance.withCredentials = false;

    this._instance.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api';
  }

  static get = (url: string) => new APIBuilder('GET', url);

  static put = (url: string, data: unknown) => new APIBuilder('PUT', url, data);

  static post = (url: string, data: unknown) => new APIBuilder('POST', url, data);

  static delete = (url: string) => new APIBuilder('DELETE', url);

  headers(value: HTTPHeaders): APIBuilder {
    this._instance.headers = {
      ...this._instance.headers,
      ...value,
    };
    return this;
  }

  timeout(value: number): APIBuilder {
    this._instance.timeout = value;
    return this;
  }

  withCredentials(value: boolean): APIBuilder {
    this._instance.withCredentials = value;
    return this;
  }

  baseUrl(value: string): APIBuilder {
    this._instance.baseURL = value;
    return this;
  }

  build(): API {
    return this._instance;
  }
}

export default APIBuilder;
