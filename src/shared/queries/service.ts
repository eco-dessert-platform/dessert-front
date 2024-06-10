import { getCookie } from '../actions/cookie';

interface FetchInstance {
  get: (url: string, init?: RequestInit) => Promise<Response>;
  post: (url: string, init?: RequestInit) => Promise<Response>;
  put: (url: string, init?: RequestInit) => Promise<Response>;
  patch: (url: string, init?: RequestInit) => Promise<Response>;
  delete: (url: string, init?: RequestInit) => Promise<Response>;
  options: (url: string, init?: RequestInit) => Promise<Response>;
  head: (url: string, init?: RequestInit) => Promise<Response>;
}

class Service {
  public fetchExtend: FetchInstance;

  protected baseUrl: string;

  protected headers: Record<string, string>;

  constructor() {
    this.baseUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1`;
    this.headers = {
      csrf: 'token',
      Referer: this.baseUrl
    };
    this.fetchExtend = {
      get: this.get.bind(this),
      delete: this.delete.bind(this),
      head: this.head.bind(this),
      options: this.options.bind(this),
      post: this.post.bind(this),
      put: this.put.bind(this),
      patch: this.patch.bind(this)
    };
  }

  protected async request(method: string, url: string, config?: RequestInit) {
    const cookie = await getCookie('accessToken');
    const accessToken = cookie?.value;
    const bearerToken = `Bearer ${accessToken}`;
    const fullUrl =
      url.startsWith('http://') || url.startsWith('https://') ? url : `${this.baseUrl}${url}`;

    const res = await fetch(fullUrl, {
      method,
      headers: {
        ...this.headers,
        'Content-Type': 'application/json',
        Authorization: bearerToken,
        ...config?.headers
      },
      ...config
    });
    return res;
  }

  protected get(url: string, init?: RequestInit) {
    return this.request('GET', url, init);
  }

  protected post(url: string, init?: RequestInit) {
    return this.request('POST', url, init);
  }

  protected put(url: string, init?: RequestInit) {
    return this.request('PUT', url, init);
  }

  protected patch(url: string, init?: RequestInit) {
    return this.request('PATCH', url, init);
  }

  protected delete(url: string, init?: RequestInit) {
    return this.request('DELETE', url, init);
  }

  protected options(url: string, init?: RequestInit) {
    return this.request('OPTIONS', url, init);
  }

  protected head(url: string, init?: RequestInit) {
    return this.request('HEAD', url, init);
  }
}

export default Service;
