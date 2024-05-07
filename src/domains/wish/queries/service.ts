import Service from '@/shared/queries/service';
import { Cursor, ResultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';
import { IStoreType } from '@/domains/store/types/store';

class WishService extends Service {
  async getWishStoreList(cursorId: number) {
    const res = await this.fetchExtend.get(`/likes/stores?cursorId=${cursorId}`);
    const { result, success, code, message }: ResultResponse<Cursor<IStoreType>> = await res.json();
    if (!res.ok || !success) throwApiError({ code, message });
    return result;
  }
}

const wishService = new WishService();
export default wishService;
