import Service from '@/shared/queries/service';
import { ResultResponse, ListResponse, Cursor } from '@/shared/types/response';
import { IStoreType, IStoreBestProductType, IStoreProductType } from '@/domains/store/types/store';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { ERROR_MESSAGE } from '@/shared/constants/error';

class StoreService extends Service {
  async getAllStores(cursorId: number) {
    const params = cursorId === INITIAL_CURSOR ? '' : `?cursorId=${cursorId}`;
    const res = await this.fetchExtend.get(`/stores${params}`);
    const { result, success, code, message }: ResultResponse<Cursor<Array<IStoreType>>> =
      await res.json();

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }

  async getStoreInfo(storeId: number) {
    const res = await this.fetchExtend.get(`/stores/${storeId}`);
    const { result, success, code, message }: ResultResponse<IStoreType> = await res.json();

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }

  async getStoreBestProducts(storeId: number) {
    const res = await this.fetchExtend.get(`/stores/${storeId}/boards/best`);
    const { list, success, code, message }: ListResponse<Array<IStoreBestProductType>> =
      await res.json();

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return list;
  }

  async getStoreAllProducts(storeId: number) {
    const res = await this.fetchExtend.get(`/stores/${storeId}/boards`);
    const { result, success, code, message }: ResultResponse<Cursor<Array<IStoreProductType>>> =
      await res.json();

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }
}

const storeService = new StoreService();

export default storeService;
