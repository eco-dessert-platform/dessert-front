import { atom } from 'recoil';

export const fcmTokenState = atom<{ data?: string; error?: string }>({
  key: 'fcmToken',
  default: {
    data: '',
    error: ''
  }
});
