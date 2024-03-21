import { IProductType } from '@/commons/types/productType';
import { IStoreType } from '@/commons/types/storeType';

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

type KeywordDataType = {
  keyword: string;
};
export type RecentSearchKeywordsType = Array<KeywordDataType>;
