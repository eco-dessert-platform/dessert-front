'use server';

import { redirect as _redirect } from 'next/navigation';

export const redirect = async (path: string) => {
  _redirect(path);
};
