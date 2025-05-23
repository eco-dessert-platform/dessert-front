import { IFilterType } from '@/domains/product/types/filterType';
import { IProductType } from '@/domains/product/types/productType';
import { transformFilterValueToQueryString } from '@/domains/product/utils/transformFilterValueToQueryString';
import { IProductInfoType } from '@/domains/product/types/productInfoType';
import { IReviewBadgeType } from '@/domains/product/types/productDetailType';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import Service from '@/shared/queries/service';
import { Cursor, ResultResponse } from '@/shared/types/response';

class ProductService extends Service {
  async getAllCategoryProducts({
    cursorId,
    filterValue
  }: {
    cursorId: number;
    filterValue: IFilterType;
  }) {
    const cursorIdQueryString = cursorId === INITIAL_CURSOR ? '' : `&cursorId=${cursorId}`;
    const filterValueQueryString = transformFilterValueToQueryString(filterValue);

    const res = await this.fetchExtend.get(
      `/boards?${filterValueQueryString}${cursorIdQueryString}`
    );
    const { success, result, code, message }: ResultResponse<Cursor<Array<IProductType>>> =
      await res.json();

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }

  async getBoardsCount({ filterValue }: { filterValue: Omit<IFilterType, 'sort'> }) {
    const filterValueQueryString = transformFilterValueToQueryString(filterValue);

    const res = await this.fetchExtend.get(`/boards/count?${filterValueQueryString}`);
    const { success, result, code, message }: ResultResponse<number> = await res.json();

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }

  async getProductInfo(productId: number) {
    const res = await this.fetchExtend.get(`/boards/${productId}/new`);
    const { result, success, message, code }: ResultResponse<IProductInfoType> = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));

    return result;
  }

  async getReviewBadge(productId: number) {
    const res = await this.fetchExtend.get(`/boards/${productId}/review`);
    const { result, success, message, code }: ResultResponse<IReviewBadgeType> = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }

  async getSimilarProducts(productId: number) {
    const res = await this.fetchExtend.get(`/boards/${productId}/similar_board`);
    const { result, success, message, code }: ResultResponse<IProductType[]> = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }
}

const productService = new ProductService();
export default productService;
