import { IProductDetailType } from '@/domains/product/types/productDetailType';
import fetchExtend from '@/shared/utils/api';
import { ResultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';

const getProductDetail = async (productId: string) => {
  const res = await fetchExtend.get(`/boards/${productId}`);
  const { result, success, message, code }: ResultResponse<IProductDetailType> = await res.json();

  if (!success) {
    throwApiError({ code, message });
  }

  return result;
};

export default getProductDetail;
