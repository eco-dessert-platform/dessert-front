import { IStoreType } from '@/domains/store/types/store';

export interface WishStoreList {
  contents: IStoreType[];
  lastPage: number;
  nextPage: number;
}
