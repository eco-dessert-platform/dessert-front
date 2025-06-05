'use server';

import { cookies } from 'next/headers';

export const getCookie = async (name: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(name);
};

export const setCookie = async ({
  name,
  value,
  expires
}: {
  name: string;
  value: string;
  expires?: number; // 단위: ms
}) => {
  (await cookies()).set({
    name,
    value,
    httpOnly: true,
    path: '/',
    expires
  });
};

export const deleteCookie = async (key: string) => {
  (await cookies()).delete(key);
};
