import { atom } from 'recoil';

export const uploadImageUrlsState = atom<Array<string>>({
  key: 'uploadImageUrls',
  default: []
});
