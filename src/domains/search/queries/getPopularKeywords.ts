import fetchExtend from '@/shared/utils/api';

interface PopularKeywordResultType {
  content: Array<string>;
}

export const getPopularKeywords = async () => {
  const res = await fetchExtend.get('/search/best-keyword', { next: { revalidate: 60 * 60 } });
  if (!res.ok) {
    console.error('인기 검색어 조회 실패');
    return [];
  }

  const data: PopularKeywordResultType = await res.json();
  return data.content;
};
