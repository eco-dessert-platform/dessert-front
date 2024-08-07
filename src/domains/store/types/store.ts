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

export interface IStoreBestProductType {
  boardId: number;
  thumbnail: string;
  title: string;
  price: number;
  isWished: boolean;
  isBundled: boolean;
  isBbangcketing: boolean;
  isSoldOut: boolean;
  discountRate: number;
}

export interface IStoreProductType extends IStoreBestProductType {
  tags: string[];
  reviewRate?: number;
  reviewCount?: number;
}
