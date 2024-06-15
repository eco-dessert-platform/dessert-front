export interface IStoreType {
  storeId: number;
  storeName: string;
  introduce: string;
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
}

export interface IStoreProductType extends IStoreBestProductType {
  tags: string[];
}
