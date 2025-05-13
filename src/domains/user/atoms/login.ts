import { atom } from 'recoil';
import { SocialType } from '../types/login';

export const socialLoginPopupState = atom<{ type: SocialType; window: Window } | null>({
  key: 'socialLoginPopupState',
  default: null,
  dangerouslyAllowMutability: true
});
