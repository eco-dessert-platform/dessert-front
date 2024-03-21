import API from '@/api';
import { RecentSearchKeywordsType } from '@/components/units/Search/types';

export const getRecentSearchKeywords = async (): Promise<RecentSearchKeywordsType> => {
  const data: { content: RecentSearchKeywordsType } = await API.get('/search/recency');
  return data.content;
};
