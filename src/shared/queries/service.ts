import { getCookie } from '../actions/cookie';

interface FetchInstance {
  get: (url: string, init?: RequestInit) => Promise<Response>;
  post: (url: string, init?: RequestInit) => Promise<Response>;
  postForm: (url: string, init?: RequestInit) => Promise<Response>;
  put: (url: string, init?: RequestInit) => Promise<Response>;
  patch: (url: string, init?: RequestInit) => Promise<Response>;
  delete: (url: string, init?: RequestInit) => Promise<Response>;
  options: (url: string, init?: RequestInit) => Promise<Response>;
  head: (url: string, init?: RequestInit) => Promise<Response>;
}

class Service {
  public fetchExtend: FetchInstance;

  private readonly baseUrl: string;

  private readonly headers: Record<string, string>;

  constructor() {
    this.baseUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1`;
    this.headers = {
      Referer: this.baseUrl
    };
    this.fetchExtend = {
      get: (url, init) => this.request('GET', url, init),
      delete: (url, init) => this.request('DELETE', url, init),
      head: (url, init) => this.request('HEAD', url, init),
      options: (url, init) => this.request('OPTIONS', url, init),
      post: (url, init) => this.request('POST', url, init),
      postForm: (url, init) => this.request('POST', url, init, true),
      put: (url, init) => this.request('PUT', url, init),
      patch: (url, init) => this.request('PATCH', url, init)
    };
  }

  private async request(method: string, url: string, config?: RequestInit, form: boolean = false) {
    const cookie = await getCookie('accessToken');
    const accessToken = cookie?.value;
    const bearerToken = accessToken ? `Bearer ${accessToken}` : null;
    const fullUrl =
      url.startsWith('http://') || url.startsWith('https://') ? url : `${this.baseUrl}${url}`;

    const res = await fetch(fullUrl, {
      method,
      ...config,
      headers: {
        ...this.headers,
        ...(form ? {} : { 'Content-Type': 'application/json' }),
        ...(bearerToken ? { Authorization: bearerToken } : null),
        ...config?.headers
      }
    });
    return res;
  }
}

export default Service;
