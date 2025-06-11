import { atom } from 'jotai';
import { DEFAULT_FOLDER_ID } from '../constants';

// Atom for editing state of the wish folder
export const isWishFolderEditingAtom = atom(false);

// Atom for selected wish folder
export const selectedWishFolderAtom = atom(DEFAULT_FOLDER_ID);
