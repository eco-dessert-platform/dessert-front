import { IProductType } from '@/domains/product/types/productType';

export interface DefaultResponse {
  success: boolean;
  code: number;
  message: string;
  fieldErrors?: [
    {
      field: string;
      msg: string;
    }
  ];
}

export interface ListResponse<T> extends DefaultResponse {
  list: T;
}

export interface ResultResponse<T> extends DefaultResponse {
  result: T;
}

export interface Cursor<T> {
  nextCursor: number;
  hasNext: boolean;
  totalCount: number;
  content: T;
}

export interface IResponse extends Cursor<IProductType[]> {
  totalCount: number;
}
