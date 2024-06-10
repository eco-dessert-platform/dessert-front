import Service from '@/shared/queries/service';
import { ResultResponse, Cursor } from '@/shared/types/response';
import { INITIAL_CURSOR } from '@/shared/constants/cursor';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import { IProductType } from '@/domains/product/types/productType';
import { IFilterType } from '@/domains/product/types/filterType';
import { transformFilterValueToQueryString } from '@/domains/product/utils/transformFilterValueToQueryString';

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
}

const productService = new ProductService();

export default productService;
