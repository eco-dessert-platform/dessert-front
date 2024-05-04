import fetchExtend from '@/shared/utils/api';
import { ResultResponse } from '@/shared/types/response';

interface PopularKeywordResultType {
  content: Array<string>;
}

export const getPopularKeywords = async () => {
  const res = await fetchExtend.get('/search/best-keyword', { next: { revalidate: 60 * 60 } });
  const { success, code, message, result }: ResultResponse<PopularKeywordResultType> =
    await res.json();

  if (!res.ok || !success) {
    console.error(`[ERROR ${code}] ${message}`);
    return [];
  }

  return result.content;
};
