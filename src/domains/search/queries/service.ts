import Service from '@/shared/queries/service';
import { ResultResponse } from '@/shared/types/response';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import { PopularKeywordResultType } from '@/domains/search/types';

class SearchService extends Service {
  async getPopularKeywords() {
    const res = await this.fetchExtend.get('/search/best-keyword', {
      next: { revalidate: 60 * 60 }
    });
    const { success, code, message, result }: ResultResponse<PopularKeywordResultType> =
      await res.json();

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result.content;
  }
}

const searchService = new SearchService();

export default searchService;
