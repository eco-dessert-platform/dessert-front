import Service from '@/shared/queries/service';
import { ResultResponse } from '@/shared/types/response';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import { PopularKeywordsResultType, RecentSearchKeywordsResultType } from '@/domains/search/types';

class SearchService extends Service {
  async getPopularKeywords() {
    const res = await this.fetchExtend.get('/search/best-keyword', {
      next: { revalidate: 60 * 60 }
    });
    const { success, code, message, result }: ResultResponse<PopularKeywordsResultType> =
      await res.json();

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result.content;
  }

  async getRecentSearchKeywords() {
    const res = await this.fetchExtend.get('/search/recency');
    const { success, code, message, result }: ResultResponse<RecentSearchKeywordsResultType> =
      await res.json();

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result.content;
  }

  async addRecentSearchKeyword(keyword: string) {
    const res = await this.fetchExtend.post(`/search?keyword=${keyword}`);
    const { success, code, message } = await res.json();

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
  }

  async deleteRecentSearchKeyword(keyword: string) {
    const res = await this.fetchExtend.delete(`/search/recency?keyword=${keyword}`);
    const { success, code, message } = await res.json();

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
  }
}

const searchService = new SearchService();

export default searchService;
