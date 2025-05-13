import { IProductType } from '@/domains/product/types/productType';

export interface IStoreType {
  storeId: number;
  storeName: string;
  introduce: string;
  profile: string;
  isWished: boolean;
}

/**
 * Todo. backend 타입 수정 요청 (IStoreType, INewStoreType) 일치하도록
 */
export interface INewStoreType {
  id: number;
  title: string;
  profile: string;
  isWished: boolean;
}

export type IStoreProductType = Omit<IProductType, 'storeId' | 'storeName'>;
