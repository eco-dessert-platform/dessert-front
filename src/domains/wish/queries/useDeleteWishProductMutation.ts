import fetchExtend from '@/shared/utils/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DefaultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';
import { productQueryKey } from '@/shared/queries/queryKey';
import { revalidateTag } from '@/shared/actions/revalidate';
import useToastNewVer from '@/shared/hooks/useToastNewVer';

const useDeleteWishProductMutation = () => {
  const { openToast } = useToastNewVer();
  const queryClient = useQueryClient();

  const mutationFn = async ({ productId }: { productId: string }) => {
    const res = await fetchExtend.put(`/boards/${productId}/cancel`);
    const { success, code, message }: DefaultResponse = await res.json();
    if (!res.ok || !success) throwApiError({ code, message });
  };

  const onSuccess = () => {
    revalidateTag(productQueryKey.all[0]);
    queryClient.invalidateQueries({ queryKey: productQueryKey.all });
    openToast({ message: '💖 찜 해제 되었어요' });
  };

  const onError = ({ message }: Error) => {
    openToast({ message });
  };

  return useMutation({ mutationFn, onSuccess, onError });
};

export default useDeleteWishProductMutation;
