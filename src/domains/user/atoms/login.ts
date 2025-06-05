import { atom } from 'jotai';
import { SocialType } from '../types/login';

export const socialLoginPopupAtom = atom<{ type: SocialType; window: Window } | null>(null);
