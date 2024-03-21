import { useQuery } from '@tanstack/react-query';
import { RecentSearchKeywordsType } from '@/components/units/Search/types';
import { getRecentSearchKeywords } from '@/components/units/Search/api/getRecentSearchKeywords';

export const useGetRecentSearchKeywordsQuery = () => {
  return useQuery<RecentSearchKeywordsType, Error>({
    queryKey: ['recentSearchKeywords'],
    queryFn: getRecentSearchKeywords
  });
};
