export interface IStoreType {
  storeId: number;
  storeName: string;
  introduce: string;
  profile: string;
  isWished: boolean;
}

// 요청2) 위 IStoreType 속성명과 동일하게 변경 => 이후 이 타입은 삭제
export interface IStoreInfoType {
  storeId: number;
  storeProfile: string;
  storeTitle: string;
  storeIntroduce: string;
  isWished: boolean;
}

// 요청1-2) IProductType 속성명과 동일하게 변경
export interface IStoreBestProductType {
  boardId: number;
  boardProfile: string;
  boardTitle: string;
  boardPrice: number;
  isWished: boolean;
  isBundled: boolean;
}

// 요청3) IProductType 속성명과 동일하게 변경
export interface IStoreProductType {
  boardId: number;
  boardThumbnail: string;
  boardTitle: string;
  boardPrice: number;
  isWished: boolean;
  isBundled: boolean;
  tags: string[];
  view: number;
}
