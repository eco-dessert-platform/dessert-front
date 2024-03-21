import { checkError, parseJson } from '@/commons/utils/apiUtils';

const serverUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}`;
const apiUrl = `${serverUrl}/api/v1`;

const TMP_TOKEN =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiYmFuZ2xlYmJhbmdsZSIsImlhdCI6MTcxMTAyNzE5NCwiZXhwIjoxNzExMDM3OTk0LCJpZCI6MjZ9.uXpxGyqxbt96ZkeKP2OwkpOVnGDLdmOw2R0ML-64XUE';

async function get(endpoint: string, init?: RequestInit | undefined) {
  const res = await fetch(`${apiUrl}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: TMP_TOKEN
    },
    ...init
  });

  await checkError(res);

  const data = await parseJson(res);
  return data;
}

async function post(endpoint: string, init?: RequestInit) {
  const res = await fetch(`${apiUrl}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: TMP_TOKEN
    },
    ...init
  });
  await checkError(res);
  const data = await parseJson(res);
  return data;
}

async function formPost(endpoint: string, init?: RequestInit) {
  const res = await fetch(`${apiUrl}${endpoint}`, {
    method: 'POST',
    headers: {
      Authorization: TMP_TOKEN
    },
    ...init
  });
  await checkError(res);
  const data = await parseJson(res);
  return data;
}

async function put(endpoint: string, init?: RequestInit) {
  const res = await fetch(`${apiUrl}${endpoint}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: TMP_TOKEN
    },
    ...init
  });
  await checkError(res);
  const data = await parseJson(res);
  return data;
}

async function formPut(endpoint: string, init?: RequestInit) {
  const res = await fetch(`${apiUrl}${endpoint}`, {
    method: 'PUT',
    headers: {
      Authorization: TMP_TOKEN
    },
    ...init
  });

  await checkError(res);

  const data = await parseJson(res);
  return data;
}

async function patch(endpoint: string, init?: RequestInit) {
  const res = await fetch(`${apiUrl}${endpoint}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: TMP_TOKEN
    },
    ...init
  });
  await checkError(res);
  const data = await parseJson(res);
  return data;
}

async function formPatch(endpoint: string, init?: RequestInit) {
  const res = await fetch(`${apiUrl}${endpoint}`, {
    method: 'PATCH',
    headers: {
      Authorization: TMP_TOKEN
    },
    ...init
  });
  await checkError(res);
  const data = await parseJson(res);
  return data;
}

async function _delete(endpoint: string, init?: RequestInit) {
  const res = await fetch(`${apiUrl}${endpoint}`, {
    method: 'DELETE',
    headers: {
      Authorization: TMP_TOKEN
    },
    ...init
  });
  await checkError(res);
  const data = await parseJson(res);
  return data;
}

const API = {
  TMP_TOKEN,
  serverUrl,
  apiUrl,
  get,
  post,
  formPost,
  put,
  patch,
  formPatch,
  formPut,
  delete: _delete
};

export default API;
