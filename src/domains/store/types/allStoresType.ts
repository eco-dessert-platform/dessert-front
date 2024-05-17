import { IStoreType } from '@/domains/store/types/store';

export interface IAllStoresType {
  content: IStoreType[];
  nextCursor: number;
  hasNext: boolean;
}
