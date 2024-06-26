import { atom } from 'recoil';
import { PreferenceType } from '../types/preference';

export const preferenceState = atom<Array<PreferenceType>>({
  key: 'preference',
  default: []
});
