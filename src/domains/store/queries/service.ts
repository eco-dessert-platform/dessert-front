import Service from '@/shared/queries/service';
import { ResultResponse, Cursor } from '@/shared/types/response';
import {
  IStoreType,
  IStoreInfoType,
  IStoreBestProductType,
  IStoreProductType
} from '@/domains/store/types/store';
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
    const { result, success, code, message }: ResultResponse<IStoreInfoType> = await res.json();

    // response 수정 후 삭제해야 함
    const rst = {
      storeId: result.storeId,
      storeName: result.storeTitle,
      introduce: result.storeIntroduce,
      profile: result.storeProfile,
      isWished: result.isWished
    };

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return rst;
  }

  async getStoreBestProducts(storeId: number) {
    const res = await this.fetchExtend.get(`/stores/${storeId}/boards/best`);
    const { result, success, code, message }: ResultResponse<Array<IStoreBestProductType>> =
      await res.json();

    // response 수정 후 삭제해야 함
    const rst = result.map((ele) => ({
      storeId,
      boardId: ele.boardId,
      thumbnail: ele.boardProfile,
      storeName: '스토어명',
      title: ele.boardTitle,
      price: ele.boardPrice,
      isWished: ele.isWished,
      isBundled: ele.isBundled
    }));

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message })); // 요청1-1) response body 형식 result -> list로 변경해야할 것 같음
    return rst;
  }

  async getStoreAllProducts(storeId: number) {
    const res = await this.fetchExtend.get(`/stores/${storeId}/boards`);
    const { result, success, code, message }: ResultResponse<Cursor<Array<IStoreProductType>>> =
      await res.json();

    // response 수정 후 삭제해야 함
    const rst = {
      content: result.content.map((ele) => ({
        storeId,
        boardId: ele.boardId,
        storeName: '스토어명',
        thumbnail: ele.boardThumbnail,
        title: ele.boardTitle,
        price: ele.boardPrice,
        isBundled: ele.isBundled,
        isWished: ele.isWished,
        tags: ele.tags
      })),
      nextCursor: result.nextCursor,
      hasNext: result.hasNext
    };

    if (!res.ok || !success) throw new Error(ERROR_MESSAGE.api({ code, message }));
    return rst;
  }
}

const storeService = new StoreService();

export default storeService;
