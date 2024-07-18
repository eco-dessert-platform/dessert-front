import { atom } from 'recoil';

export const appState = atom<{ isWebviewApp: boolean }>({
  key: 'app',
  default: {
    isWebviewApp: false
  }
});
