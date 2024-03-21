import { IProductType } from '@/commons/types/productType';
import { IStoreType } from '@/commons/types/storeType';

export interface IStoreDetailType {
  store: IStoreType;
  bestProducts: IProductType[];
  allProducts: IProductType[];
}
export interface IStoreDetailAllType {
  content: IProductType[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      unsorted: boolean;
      sorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  size: number;
  number: number;
  sort: {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}
