import Service from '@/shared/queries/service';
import { ResultResponse, ListResponse, Cursor } from '@/shared/types/response';
import { IStoreType, IStoreProductType } from '@/domains/store/types/store';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';

class StoreService extends Service {
  async getStoreInfo(storeId: number) {
    const res = await this.fetchExtend.get(`/stores/${storeId}`);
    const { result, success, code, message }: ResultResponse<IStoreType> = await res.json();
    console.log('🚀 ~ StoreService ~ getStoreInfo ~ res:', res);

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }

  async getStoreBestProducts(storeId: number) {
    const res = await this.fetchExtend.get(`/stores/${storeId}/boards/best`);
    const { list, success, code, message }: ListResponse<Array<IStoreProductType>> =
      await res.json();

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return list;
  }

  async getStoreAllProducts(storeId: number, cursorId: number) {
    const params = cursorId === INITIAL_CURSOR ? '' : `?cursorId=${cursorId}`;
    const res = await this.fetchExtend.get(`/stores/${storeId}/boards${params}`);
    const { result, success, code, message }: ResultResponse<Cursor<Array<IStoreProductType>>> =
      await res.json();

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }
}

const storeService = new StoreService();

export default storeService;
