import Service from '@/shared/queries/service';
import { ResultResponse, ListResponse, Cursor } from '@/shared/types/response';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import {
  RecentSearchKeywordsResultType,
  IAllProductsType,
  IAllStoreType
} from '@/domains/search/types';
import { IFilterType } from '@/domains/product/types/filterType';
import { transformFilterValueToQueryString } from '@/domains/product/utils/transformFilterValueToQueryString';

class SearchService extends Service {
  async getPopularKeywords() {
    const res = await this.fetchExtend.get('/search/best-keyword', {
      next: { revalidate: 60 * 60 }
    });
    const { success, code, message, list }: ListResponse<Array<string>> = await res.json();

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
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
    pageParam
  }: {
    keyword: string;
    filterValue: IFilterType;
    pageParam: number;
  }) {
    const queryString = transformFilterValueToQueryString(filterValue);
    const res = await this.fetchExtend.get(
      `/search/boards?keyword=${keyword}&${queryString}&page=${pageParam}`
    );
    const { result, code, message, success }: ResultResponse<Cursor<IAllProductsType>> =
      await res.json();

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }

  async getSearchStores({ keyword, pageParam }: { keyword: string; pageParam: number }) {
    const res = await this.fetchExtend.get(`/search/stores?keyword=${keyword}&page=${pageParam}`);
    const { result, code, message, success }: ResultResponse<IAllStoreType> = await res.json();

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }
}

const searchService = new SearchService();

export default searchService;
