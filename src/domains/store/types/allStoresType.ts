import { IStoreType } from '@/domains/store/types/store';

export interface IAllStoresType {
  content: IStoreType[];
  requestCursor: number;
  hasNext: boolean;
}
