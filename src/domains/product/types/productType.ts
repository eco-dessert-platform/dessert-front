export interface IProductListType {
  content: IProductType[];
}

export interface IProductType {
  boardId: number;
  storeId: number;
  storeName: string;
  thumbnail: string;
  title: string;
  price: number;
  isBundled: boolean;
  isWished: boolean;
  tags?: string[];
  reviewRate?: number;
  reviewCount?: number;
  isBbangcketing: boolean;
  isSoldOut: boolean;
  discountRate: number;
}
