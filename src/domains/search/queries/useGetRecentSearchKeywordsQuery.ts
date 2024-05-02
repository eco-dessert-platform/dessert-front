import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { isLoggedinState } from '@/shared/atoms/login';
import { SearchResultType } from '@/domains/search/types';
import fetchExtend from '@/shared/utils/api';
import QUERY_KEY from '@/shared/constants/queryKey';

export const useGetRecentSearchKeywordsQuery = () => {
  const isLoggedIn = useRecoilValue(isLoggedinState);
  const queryKey = [QUERY_KEY.search, QUERY_KEY.keyword];

  const queryFn = async () => {
    if (!isLoggedIn) return [];

    const res = await fetchExtend.get('/search/recency');
    if (!res.ok) throw new Error('최근 검색어 조회 실패');

    const data: SearchResultType = await res.json();
    return data.content;
  };

  const meta = {
    errorMessage: '최근 검색어 조회에 실패했습니다'
  };

  return useQuery({
    queryKey,
    queryFn,
    meta,
    enabled: isLoggedIn
  });
};
