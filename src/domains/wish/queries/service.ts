import Service from '@/shared/queries/service';
import { Cursor, DefaultResponse, ListResponse, ResultResponse } from '@/shared/types/response';
import { IStoreType } from '@/domains/store/types/store';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import { IProductType } from '@/domains/product/types/productType';
import { INITIAL_CORSOR } from '@/shared/constants/corsor';
import { WishFolderType } from '../types/wishFolder';

class WishService extends Service {
  async getWishStoreList(cursorId: number) {
    const isFirstPage = cursorId === INITIAL_CORSOR;
    const params = isFirstPage ? '' : `cursorId=${cursorId}`;
    const res = await this.fetchExtend.get(`/likes/stores?${params}`);
    const { result, success, code, message }: ResultResponse<Cursor<IStoreType>> = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }

  async getWishFolderList() {
    const res = await this.fetchExtend.get('/wishLists');
    const { list, success, code, message }: ListResponse<WishFolderType[]> = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return list;
  }

  async addWishProduct({ folderId, productId }: { folderId: number; productId: number }) {
    const res = await this.fetchExtend.post(`/boards/${productId}/wish`, {
      body: JSON.stringify({ folderId })
    });
    if (res.status === 401) {
      throw Error(ERROR_MESSAGE.requiredLogin);
    }
    const { success, code, message }: DefaultResponse = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
  }

  async addWishStore({ storeId }: { storeId: number }) {
    const res = await this.fetchExtend.post(`/likes/store/${storeId}`);
    const { success, code, message }: DefaultResponse = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
  }

  async deleteWishProduct({ productId }: { productId: number }) {
    const res = await this.fetchExtend.put(`/boards/${productId}/cancel`);
    const { success, code, message }: DefaultResponse = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
  }

  async deleteWishStore({ productId }: { productId: number }) {
    const res = await this.fetchExtend.delete(`/boards/${productId}/cancel`);
    const { success, code, message }: DefaultResponse = await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
  }

  async getWishProductList({ folderId, cursorId }: { folderId: number; cursorId: number }) {
    const isFirstPage = cursorId === INITIAL_CORSOR;
    const params = isFirstPage ? '' : `cursorId=${cursorId}`;
    const res = await this.fetchExtend.get(`/boards/folders/${folderId}?${params}`);
    const { result, code, message, success }: ResultResponse<Cursor<IProductType>> =
      await res.json();
    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }
}

const wishService = new WishService();
export default wishService;
