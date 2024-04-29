import { getCookie } from '../actions/cookie';
import { API_URL } from '../constants/api';

const API_V1_URL = `${API_URL}/api/v1`;

const getAccessToken = async () => {
  const accessToken = await getCookie('accessToken');
  return accessToken?.value;
};

const getApiUrl = (endpoint: string) => {
  if (endpoint.startsWith('https://') || endpoint.startsWith('http://')) return endpoint;
  return `${API_V1_URL}${endpoint}`;
};

const fetchExtend = {
  get: async (endpoint: string, init?: RequestInit | undefined) => {
    const accessToken = await getAccessToken();
    const bearerToken = `Bearer ${accessToken}`;

    return fetch(getApiUrl(endpoint), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: bearerToken
      },
      ...init
    });
  },

  post: async (endpoint: string, init?: RequestInit) => {
    const accessToken = await getAccessToken();
    const bearerToken = `Bearer ${accessToken}`;

    return fetch(getApiUrl(endpoint), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: bearerToken
      },
      ...init
    });
  },
  formPost: async (endpoint: string, init?: RequestInit) => {
    const accessToken = await getAccessToken();
    const bearerToken = `Bearer ${accessToken}`;

    return fetch(getApiUrl(endpoint), {
      method: 'POST',
      headers: {
        Authorization: bearerToken
      },
      ...init
    });
  },

  put: async (endpoint: string, init?: RequestInit) => {
    const accessToken = await getAccessToken();
    const bearerToken = `Bearer ${accessToken}`;

    return fetch(getApiUrl(endpoint), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: bearerToken
      },
      ...init
    });
  },
  patch: async function patch(endpoint: string, init?: RequestInit) {
    const accessToken = await getAccessToken();
    const bearerToken = `Bearer ${accessToken}`;

    return fetch(getApiUrl(endpoint), {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: bearerToken
      },
      ...init
    });
  },
  formPatch: async (endpoint: string, init?: RequestInit) => {
    const accessToken = await getAccessToken();
    const bearerToken = `Bearer ${accessToken}`;

    return fetch(getApiUrl(endpoint), {
      method: 'PATCH',
      headers: {
        Authorization: bearerToken
      },
      ...init
    });
  },

  formPut: async (endpoint: string, init?: RequestInit) => {
    const accessToken = await getAccessToken();
    const bearerToken = `Bearer ${accessToken}`;

    return fetch(getApiUrl(endpoint), {
      method: 'PUT',
      headers: {
        Authorization: bearerToken
      },
      ...init
    });
  },
  delete: async (endpoint: string, init?: RequestInit) => {
    const accessToken = await getAccessToken();
    const bearerToken = `Bearer ${accessToken}`;

    return fetch(getApiUrl(endpoint), {
      method: 'DELETE',
      headers: {
        Authorization: bearerToken
      },
      ...init
    });
  }
};

export default fetchExtend;
