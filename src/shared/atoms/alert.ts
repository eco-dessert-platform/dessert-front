import { ReactNode } from 'react';
import { atom } from 'recoil';

export const modalState = atom<ReactNode>({
  key: 'modalState',
  default: null
});

export const fullScreenModalState = atom<ReactNode>({
  key: 'fullScreenModalState',
  default: null
});

export const popupState = atom<ReactNode>({
  key: 'popupState',
  default: null
});

/**
 * @deprecated
 * toastStateNewVer을 사용해주세요.
 */
export const toastState = atom<ReactNode[]>({
  key: 'toastState',
  default: []
});

export const toastStateNewVer = atom<{ message: string; id: number; action: ReactNode }[]>({
  key: 'toastStateNewVer',
  default: []
});

export const tooltipState = atom<ReactNode>({
  key: 'tooltipState',
  default: null
});
