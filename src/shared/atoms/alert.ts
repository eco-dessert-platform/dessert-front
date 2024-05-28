import { ReactNode } from 'react';
import { atom } from 'recoil';

export const modalState = atom<ReactNode>({
  key: 'modalState',
  default: null
});

export const popupState = atom<ReactNode>({
  key: 'popupState',
  default: null
});

export const toastState = atom<ReactNode[]>({
  key: 'toastState',
  default: []
});
