import { IProductType } from '@/domains/product/types/productType';
import { IStoreType } from '@/domains/store/types/store';

export interface IAllProductsType {
  content: IProductType[];
  itemAllCount: number; // 전체 개수
  limitItemCount: number; // 아이템 가져오는 최대 개수
  currentItemCount: number; // 몇 개 아이템을 가져왔는지
  pageNumber: number; // 몇 페이지인지
  existNextPage: boolean; // 다음 페이지 유무
}

export interface IAllStoreType {
  content: IStoreType[];
  itemAllCount: number; // 전체 개수
  limitItemCount: number; // 아이템 가져오는 최대 개수
  currentItemCount: number; // 몇 개 아이템을 가져왔는지
  pageNumber: number; // 몇 페이지인지
  existNextPage: boolean; // 다음 페이지 유무
}

export type SearchKeywordsType = Array<{
  keyword: string;
}>;

export interface RecentSearchKeywordsResultType {
  content: SearchKeywordsType;
}

export interface PopularKeywordsResultType {
  content: Array<string>;
}

export interface AutoCompleteResultType {
  content: Array<string>;
}
