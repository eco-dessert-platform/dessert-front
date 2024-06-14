import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import Service from '@/shared/queries/service';
import { Cursor, ResultResponse } from '@/shared/types/response';

import { IFilterType } from '../types/filterType';
import {
  IBoardDetailType,
  INewStoreType,
  IProductDetailType,
  IReviewBadgeType
} from '../types/productDetailType';
import { IProductType } from '../types/productType';
import { transformFilterValueToQueryString } from '../utils/transformFilterValueToQueryString';

class ProductService extends Service {
  async getAllProducts({ cursorId, filterValue }: { cursorId: number; filterValue: IFilterType }) {
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

  async getStoreInfo(productId: string) {
    const res = await this.fetchExtend.get(`/boards/${productId}/store`);
    const { result, success, message, code }: ResultResponse<INewStoreType> = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }

  async getProductDetail(productId: string) {
    const res = await this.fetchExtend.get(`/boards/${productId}/product`);
    const { result, success, message, code }: ResultResponse<IProductDetailType> = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
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
