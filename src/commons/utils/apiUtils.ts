import { redirect as redirectAction } from '@/action';

import { ErrorResponse } from '../types/errorType';
import { redirect } from 'next/navigation';

export async function checkError(res: Response) {
  if (res.ok) return;
  const isServerSide = typeof window === 'undefined';

  if (res.status === 401 && !isServerSide) {
    await redirectAction('/mypage/login');
  }
  if (res.status === 401 && isServerSide) {
    redirect('/mypage/login');
  }

  try {
    const errorData: ErrorResponse = await res.json();
    throw new Error(errorData.message);
  } catch (e) {
    throw new Error(`[${res.status}] failed to fetch`);
  }
}

export async function parseJson(res: Response) {
  try {
    const data = await res.json();
    return data;
  } catch {
    return null;
  }
}
