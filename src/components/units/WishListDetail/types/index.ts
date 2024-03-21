import { IProductType } from '@/commons/types/productType';

export interface IWishProductList {
  content: IProductType[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface IWishStoreList {
  contents: IWishStore[];
  lastPage: number;
  nextPage: number;
}

export interface IWishStore {
  storeId: number;
  storeName: string;
  introduce: string;
  profile: string;
}
