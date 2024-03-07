import * as API from '@/api';
import { IProductType } from '@/commons/types/productType';
import { IFilterType } from '@/components/units/(main)/Products/types';
import { transformFilterValueToQueryString } from '@/commons/utils/transformFilterValueToQueryString';

interface GetAllProductsProps {
  query: IFilterType;
  pageParam: number;
}

interface AllProductsType {
  content: Array<IProductType>;
  last: boolean;
}

export const getAllProducts = async ({
  query,
  pageParam
}: GetAllProductsProps): Promise<AllProductsType> => {
  const queryString = transformFilterValueToQueryString(query);
  const res = await API.get(`/boards?${queryString}&page=${pageParam}`);
  const data: AllProductsType = await res.json();
  return data;
};
