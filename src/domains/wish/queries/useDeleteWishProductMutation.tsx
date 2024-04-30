import useToast from '@/shared/hooks/useToast';
import fetchExtend from '@/shared/utils/api';
import { useMutation } from '@tanstack/react-query';
import ToastPop from '@/shared/components/ToastPop';
import { DefaultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';

const useDeleteWishProductMutation = () => {
  const { openToast } = useToast();

  const mutationFn = async ({ productId }: { productId: string }) => {
    const res = await fetchExtend.patch(`/boards/${productId}/wish`);
    if (!res.ok) throw new Error('상품 찜 실패');

    const { success, code, message }: DefaultResponse = await res.json();
    if (!success) throwApiError({ code, message });
  };

  const onSuccess = () => {
    openToast(
      <ToastPop>
        <div>💖 찜 해제 되었어요</div>
      </ToastPop>
    );
  };

  const onError = (error: Error) => {
    openToast(
      <ToastPop>
        <div>{error.message}</div>
      </ToastPop>
    );
  };

  return useMutation({ mutationFn, onSuccess, onError });
};

export default useDeleteWishProductMutation;
