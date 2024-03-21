import API from '@/api';
import { IAllStoreType } from '@/components/units/Search/types';

interface GetSearchStoresProps {
  keyword: string;
  pageParam: number;
}

export const getSearchStores = async ({
  keyword,
  pageParam
}: GetSearchStoresProps): Promise<IAllStoreType> => {
  if (!keyword)
    return {
      content: [],
      itemAllCount: 0,
      limitItemCount: 0,
      currentItemCount: 0,
      pageNumber: 0,
      existNextPage: false
    };
  const data: IAllStoreType = await API.get(`/search/stores?keyword=${keyword}&page=${pageParam}`);
  return data;
};
