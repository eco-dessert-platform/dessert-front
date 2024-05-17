import { IProductDetailType } from '@/domains/product/types/productDetailType';
import fetchExtend from '@/shared/utils/api';
import { ResultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';

const getProductDetail = async (params: { id: string }) => {
  const res = await fetchExtend.get(`/boards/${params.id}`);
  const { result, success, message, code }: ResultResponse<IProductDetailType> = await res.json();

  if (!success) {
    throwApiError({ code, message });
  }

  return result;
};

export default getProductDetail;
