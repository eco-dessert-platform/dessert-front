import { IFilterType } from '@/domains/product/types/filterType';
import { IProductType } from '@/domains/product/types/productType';
import { transformFilterValueToQueryString } from '@/domains/product/utils/transformFilterValueToQueryString';
import { INewStoreType } from '@/domains/store/types/store';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import Service from '@/shared/queries/service';
import { Cursor, ResultResponse } from '@/shared/types/response';

import {
  IBoardDetailType,
  IReviewBadgeType,
  ProductOptionResponse
} from '../types/productDetailType';

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

  async getStoreInfo(productId: string) {
    const res = await this.fetchExtend.get(`/boards/${productId}/store`);
    const { result, success, message, code }: ResultResponse<INewStoreType> = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }

  async getProductOption(productId: string) {
    const res = await this.fetchExtend.get(`/boards/${productId}/product`);
    const { result, success, message, code }: ResultResponse<ProductOptionResponse> =
      await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));

    const newProducts = result.products.map((product) => ({
      ...product,
      isNotified: false
    }));
    const newResult = { ...result, products: newProducts };
    return newResult;
  }

  async getBoardDetail(productId: string) {
    const res = await this.fetchExtend.get(`/boards/${productId}`);
    const { result, success, message, code }: ResultResponse<IBoardDetailType> = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }

  async getReviewBadge(productId: string) {
    const res = await this.fetchExtend.get(`/boards/${productId}/review`);
    const { result, success, message, code }: ResultResponse<IReviewBadgeType> = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }
}

const productService = new ProductService();
export default productService;
