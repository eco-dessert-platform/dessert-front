import Service from '@/shared/queries/service';
import { ResultResponse } from '@/shared/types/response';
import { IAllStoresType } from '@/domains/store/types/allStoresType';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { ERROR_MESSAGE } from '@/shared/constants/error';

class StoreService extends Service {
  async getAllStores(cursorId: number) {
    const params = cursorId === INITIAL_CURSOR ? '' : `?cursorId=${cursorId}`;
    const res = await this.fetchExtend.get(`/stores${params}`);
    const { success, result, code, message }: ResultResponse<IAllStoresType> = await res.json();

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return result;
  }
}

const storeService = new StoreService();

export default storeService;
