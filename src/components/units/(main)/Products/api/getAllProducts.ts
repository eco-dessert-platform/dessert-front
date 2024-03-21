import API from '@/api';
import { IAllProductsType } from '@/components/units/(main)/types';
import { IFilterType } from '@/components/units/(main)/Products/types';
import { transformFilterValueToQueryString } from '@/commons/utils/transformFilterValueToQueryString';

interface GetAllProductsProps {
  query: IFilterType;
  pageParam: number;
}

export const getAllProducts = async ({
  query,
  pageParam
}: GetAllProductsProps): Promise<IAllProductsType> => {
  const queryString = transformFilterValueToQueryString(query);
  const data: IAllProductsType = await API.get(`/boards?${queryString}&page=${pageParam}`);
  return data;
};
