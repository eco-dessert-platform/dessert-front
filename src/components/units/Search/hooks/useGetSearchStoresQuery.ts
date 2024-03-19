import API from '@/api';
import { useInfiniteQuery } from '@tanstack/react-query';
import { IAllStoreType } from '@/components/units/Search/types';

interface GetSearchStoresProps {
  keyword: string;
  pageParam: number;
}

interface UseGetSearchStoresQueryProps {
  keyword: string;
}

const getSearchStores = async ({
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

export const useGetSearchStoresQuery = ({ keyword }: UseGetSearchStoresQueryProps) => {
  const { data, ...rest } = useInfiniteQuery({
    queryKey: ['searchStores', keyword],
    queryFn: ({ pageParam }: { pageParam: number }) => getSearchStores({ keyword, pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, __, lastPageParam) => {
      const nextPageParam = lastPage.existNextPage ? lastPageParam + 1 : undefined;
      return nextPageParam;
    },
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
  });

  const stores = data?.pages.map(page => page.content).flat();
  const itemCount = data?.pages[0]?.itemAllCount || 0;

  return { stores, itemCount, ...rest };
};
