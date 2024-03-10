import API from '@/api';

type PopularKeywordsType = Array<string>;

export const fetchPopularKeywords = async (): Promise<PopularKeywordsType> => {
  const data: { content: PopularKeywordsType } = await API.get('/search/best-keyword', {
    cache: 'no-store'
  });
  return data.content;
};
