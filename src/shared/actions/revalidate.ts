'use server';

import { revalidateTag as _revalidateTag, revalidatePath as _revalidatePath } from 'next/cache';

export const revalidateTag = async (tag: string) => {
  _revalidateTag(tag);
};

export const revalidatePath = async (path: string) => {
  _revalidatePath(path);
};
