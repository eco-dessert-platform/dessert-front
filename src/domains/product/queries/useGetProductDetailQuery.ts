import { useQuery } from '@tanstack/react-query';
import QUERY_KEY from '@/shared/constants/queryKey';
import fetchExtend from '@/shared/utils/api';
import { ResultResponse } from '@/shared/types/response';
import { IProductDetailType } from '@/domains/product/types/productDetailType';
import { throwApiError } from '@/shared/utils/error';

export const useGetProductDetailQuery = (productId: string) => {
  const queryKey = [QUERY_KEY.product, QUERY_KEY.main, { productId }];

  const queryFn = async () => {
    const res = await fetchExtend.get(`/boards/${productId}`);
    const { result, success, message, code }: ResultResponse<IProductDetailType> = await res.json();

    if (!success) {
      throwApiError({ code, message });
    }

    return result;
  };

  return useQuery({ queryKey, queryFn });
};
