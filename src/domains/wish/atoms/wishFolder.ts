import { atom } from 'recoil';
import { DEFAULT_FOLDER_ID } from '../constants';

export const isWishFolderEditingState = atom({
  key: 'wishFolder',
  default: false
});

export const selectedWishFolderState = atom({
  key: 'selectedWishFolder',
  default: DEFAULT_FOLDER_ID
});
