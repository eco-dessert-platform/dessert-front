import useToast from '@/shared/hooks/useToast';
import fetchExtend from '@/shared/utils/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import ToastPop from '@/shared/components/ToastPop';
import QUERY_KEY from '@/shared/constants/queryKey';
import { DefaultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';

const useDeleteWishStoreMutation = () => {
  const { openToast } = useToast();
  const queryClient = useQueryClient();

  const mutationFn = async ({ storeId }: { storeId: string }) => {
    const res = await fetchExtend.patch(`/likes/store/${storeId}`);
    const { code, message, success }: DefaultResponse = await res.json();
    if (!res.ok || !success) throwApiError({ code, message });
  };

  const onSuccess = async () => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY.store] });

    openToast(
      <ToastPop>
        <div>💖 찜한 스토어에서 삭제했어요</div>
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

export default useDeleteWishStoreMutation;
