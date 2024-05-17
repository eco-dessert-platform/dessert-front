import Service from '@/shared/queries/service';
import { Cursor, DefaultResponse, ResultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';
import { IStoreType } from '@/domains/store/types/store';

class WishService extends Service {
  async getWishStoreList(cursorId: number) {
    const isFirstPage = cursorId === -1;
    const params = isFirstPage ? '' : `cursorId=${cursorId}`;
    const res = await this.fetchExtend.get(`/likes/stores?${params}`);
    const { result, success, code, message }: ResultResponse<Cursor<IStoreType>> = await res.json();
    if (!res.ok || !success) throwApiError({ code, message });
    return result;
  }

  async addWishProduct({ folderId, productId }: { folderId: string; productId: string }) {
    const res = await this.fetchExtend.post(`/boards/${productId}/wish`, {
      body: JSON.stringify({ folderId })
    });
    const { success, code, message }: DefaultResponse = await res.json();
    if (!res.ok || !success) throwApiError({ code, message });
    return { productId, folderId };
  }

  async deleteWishProduct({ productId }: { productId: string }) {
    const res = await this.fetchExtend.put(`/boards/${productId}/cancel`);
    const { success, code, message }: DefaultResponse = await res.json();
    if (!res.ok || !success) throwApiError({ code, message });
  }
}

const wishService = new WishService();
export default wishService;
