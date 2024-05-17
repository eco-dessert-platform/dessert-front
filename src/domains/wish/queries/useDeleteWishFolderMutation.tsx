import useToast from '@/shared/hooks/useToast';
import ToastPop from '@/shared/components/ToastPop';
import { revalidatePath } from '@/shared/actions/revalidate';
import PATH from '@/shared/constants/path';
import fetchExtend from '@/shared/utils/api';
import { useMutation } from '@tanstack/react-query';
import { DefaultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';

const useDeleteWishFolderMutation = () => {
  const { openToast } = useToast();

  const mutationFn = async (folderId: string) => {
    const res = await fetchExtend.delete(`/wishLists/${folderId}`, {
      method: 'DELETE'
    });
    const { success, code, message }: DefaultResponse = await res.json();
    if (!res.ok || !success) throwApiError({ code, message });
  };

  const onSuccess = async () => {
    await revalidatePath(PATH.wishProductList);
    openToast(<ToastPop>찜 폴더가 삭제되었습니다.</ToastPop>);
  };

  const onError = (error: Error) => {
    openToast(<ToastPop>{error.message}</ToastPop>);
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError
  });
};

export default useDeleteWishFolderMutation;
