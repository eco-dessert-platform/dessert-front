import { checkError, parseJson } from '@/commons/utils/apiUtils';

const serverUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1`;
const TMP_TOKEN =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiYmFuZ2xlYmJhbmdsZSIsImlhdCI6MTcxMDA2MzkyMSwiZXhwIjoxNzEwMDc0NzIxLCJpZCI6MTR9.mz9RqjBHd06sRYA7seuJeM29Go53i3yMTroLughoGPk';

// 아래 모든 함수에서 accessToken 값을 인자로 받아서
async function get(endpoint: string, init?: RequestInit | undefined) {
  const res = await fetch(`${serverUrl}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: TMP_TOKEN // 여기로 넣어줌
    },
    ...init
  });

  await checkError(res);

  const data = await parseJson(res);
  return data;
}

async function post(endpoint: string, init?: RequestInit) {
  const res = await fetch(`${serverUrl}${endpoint}`, {
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
  const res = await fetch(`${serverUrl}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: TMP_TOKEN
    },
    ...init
  });
  await checkError(res);
  const data = await parseJson(res);
  return data;
}

async function put(endpoint: string, init?: RequestInit) {
  const res = await fetch(`${serverUrl}${endpoint}`, {
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
  const res = await fetch(`${serverUrl}${endpoint}`, {
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
  const res = await fetch(`${serverUrl}${endpoint}`, {
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
  const res = await fetch(`${serverUrl}${endpoint}`, {
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
  const res = await fetch(`${serverUrl}${endpoint}`, {
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
