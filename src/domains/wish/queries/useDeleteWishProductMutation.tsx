import useToast from '@/shared/hooks/useToast';
import fetchExtend from '@/shared/utils/api';
import { useMutation } from '@tanstack/react-query';
import ToastPop from '@/shared/components/ToastPop';

const useDeleteWishProductMutation = () => {
  const { openToast } = useToast();

  const mutationFn = async ({ productId }: { productId: string }) => {
    const res = await fetchExtend.patch(`/boards/${productId}/wish`);

    const contentType = res.headers.get('Content-Type');
    if (!res.ok && contentType && contentType.includes('application/json')) {
      const errorData = await res.json();
      throw new Error(errorData.message);
    }
    if (!res.ok) {
      throw new Error('찜 삭제 실패');
    }
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
