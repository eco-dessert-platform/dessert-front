import { atom } from 'jotai';

export const fcmTokenAtom = atom<{ data?: string; error?: string }>({
  data: '',
  error: ''
});
