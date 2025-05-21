// atoms/modalAtoms.ts
import { atom } from 'jotai';
import { ReactNode } from 'react';

export const modalState = atom<ReactNode>(null);
export const fullScreenModalState = atom<ReactNode>(null);
export const popupState = atom<ReactNode>(null);

/**
 * @deprecated
 * toastStateNewVer을 사용해주세요.
 */
export const toastState = atom<ReactNode[]>([]);

export const toastStateNewVer = atom<{ message: string; id: string; action: ReactNode }[]>([]);

export const tooltipState = atom<ReactNode>(null);
