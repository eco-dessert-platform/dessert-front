import { ERROR_MESSAGE } from '@/shared/constants/error';
import Service from '@/shared/queries/service';
import { ResultResponse } from '@/shared/types/response';

import {
  IBoardType,
  IDetailProductType,
  INewStoreType,
  IReviewBadgeType
} from '../types/productDetailType';

class ProductService extends Service {
  async getStoreInfo(productId: string) {
    const res = await this.fetchExtend.get(`/boards/${productId}/store`);
    const { result, success, message, code }: ResultResponse<INewStoreType> = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }

  async getProductDetail(productId: string) {
    const res = await this.fetchExtend.get(`/boards/${productId}/product`);
    const { result, success, message, code }: ResultResponse<IDetailProductType> = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }

  async getBoardDetail(productId: string) {
    const res = await this.fetchExtend.get(`/boards/${productId}`);
    const { result, success, message, code }: ResultResponse<IBoardType> = await res.json();
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
