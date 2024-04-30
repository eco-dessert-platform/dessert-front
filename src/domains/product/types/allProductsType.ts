import { IProductType } from './productType';

export interface IAllProductsType {
  content: IProductType[];
  nextCursor: number;
  hasNext: boolean;
  boardCount: number;
  storeCount: number;
  cursorScore: number;
}
