import Service from '@/shared/queries/service';
import { ResultResponse, ListResponse, Cursor } from '@/shared/types/response';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import { RecentSearchKeywordsResultType, IAllProductsType } from '@/domains/search/types';
import { IFilterType } from '@/domains/product/types/filterType';
import { transformFilterValueToQueryString } from '@/domains/product/utils/transformFilterValueToQueryString';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { IProductType } from '@/domains/product/types/productType';

class SearchService extends Service {
  async getPopularKeywords() {
    const res = await this.fetchExtend.get('/search/best-keyword');
    const { success, code, message, list }: ListResponse<Array<string>> = await res.json();

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));

    // 임의로 오류 발생
    // const isSuccess = Math.random() < 0.5;
    // if (!res.ok || !success || isSuccess) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return list;
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

  async getAutoCompleteSearchTexts(keyword: string) {
    const res = await this.fetchExtend.get(`/search/auto-keyword?keyword=${keyword}`);
    const { success, code, message, list }: ListResponse<Array<string>> = await res.json();

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return list;
  }

  async getSearchProducts({
    keyword,
    filterValue,
    cursorId
  }: {
    keyword: string;
    filterValue: IFilterType;
    cursorId: number;
  }) {
    const cursorIdQueryString = cursorId === INITIAL_CURSOR ? '' : `&cursorId=${cursorId}`;
    const filterValueQueryString = transformFilterValueToQueryString(filterValue);

    const res = await this.fetchExtend.get(
      `/search/boards?keyword=${keyword}&${filterValueQueryString}${cursorIdQueryString}`
    );
    const { result, code, message, success }: ResultResponse<Cursor<IAllProductsType>> =
      await res.json();

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));

    const content: IProductType[] = Array.isArray(result.content) ? result.content : [];

    return {
      totalCount: result.totalCount,
      nextCursor: result.nextCursor,
      hasNext: result.hasNext,
      content
    };
  }
}

const searchService = new SearchService();

export default searchService;
