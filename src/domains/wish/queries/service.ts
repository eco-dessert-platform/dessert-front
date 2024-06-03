import Service from '@/shared/queries/service';
import { Cursor, DefaultResponse, ResultResponse } from '@/shared/types/response';
import { IStoreType } from '@/domains/store/types/store';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import { IProductType } from '@/domains/product/types/productType';

class WishService extends Service {
  async getWishStoreList(cursorId: number) {
    const isFirstPage = cursorId === -1;
    const params = isFirstPage ? '' : `cursorId=${cursorId}`;
    const res = await this.fetchExtend.get(`/likes/stores?${params}`);
    const { result, success, code, message }: ResultResponse<Cursor<IStoreType>> = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }

  async addWishProduct({ folderId, productId }: { folderId: string; productId: string }) {
    const res = await this.fetchExtend.post(`/boards/${productId}/wish`, {
      body: JSON.stringify({ folderId })
    });
    if (res.status === 401) {
      throw Error(ERROR_MESSAGE.requiredLogin);
    }
    const { success, code, message }: DefaultResponse = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
  }

  async deleteWishProduct({ productId }: { productId: string }) {
    const res = await this.fetchExtend.put(`/boards/${productId}/cancel`);
    const { success, code, message }: DefaultResponse = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
  }

  async getWishProductList({ folderId, cursor }: { folderId: string; cursor: number }) {
    const res = await this.fetchExtend.get(`/boards/folders/${folderId}?page=${cursor}`);
    const { result, code, message, success }: ResultResponse<Cursor<IProductType>> =
      await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }
}

const wishService = new WishService();
export default wishService;
