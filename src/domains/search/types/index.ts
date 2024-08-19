import { IProductType } from '@/domains/product/types/productType';

export interface IAllProductsType {
  boards: IProductType[];
  itemAllCount: number;
}

export type SearchKeywordsType = Array<{
  keyword: string;
}>;

export interface RecentSearchKeywordsResultType {
  content: SearchKeywordsType;
}
