import { useQuery } from '@tanstack/react-query';
import searchService from '@/domains/search/queries/service';
import { searchQueryKey, autoCompleteQueryKey } from '@/domains/search/queries/queryKey';

export const useGetAutoCompleteSearchTextsQuery = (keyword: string) => {
  const queryKey = [...searchQueryKey.all, ...autoCompleteQueryKey.all, { keyword }];

  const queryFn = async () => {
    if (!keyword) return [];
    const data = await searchService.getAutoCompleteSearchTexts(keyword);
    return data;
  };

  return useQuery({
    queryKey,
    queryFn,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: Infinity
  });
};
