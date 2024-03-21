export interface IProductType {
  boardId: number;
  storeId: number;
  storeName: string;
  thumbnail: string;
  title: string;
  price: number;
  isBundled: boolean;
  isWished: boolean;
  tags: string[];
  view: number;
}
