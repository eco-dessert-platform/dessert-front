import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { isLoggedinState } from '@/shared/atoms/login';
import searchService from '@/domains/search/queries/service';
import { searchQueryKey, recentKeywordQueryKey } from '@/domains/search/queries/queryKey';

export const useGetRecentSearchKeywordsQuery = () => {
  const isLoggedIn = useRecoilValue(isLoggedinState);
  const queryKey = [...searchQueryKey.all, ...recentKeywordQueryKey.all];

  const queryFn = async () => {
    const data = await searchService.getRecentSearchKeywords();
    return data;
  };

  const meta = {
    errorMessage: '최근 검색어 조회에 실패했습니다'
  };

  return useQuery({ queryKey, queryFn, meta, enabled: isLoggedIn });
};
