import useToast from '@/shared/hooks/useToast';
import ToastPop from '@/shared/components/ToastPop';
import { revalidatePath } from '@/shared/actions/revalidate';
import PATH from '@/shared/constants/path';
import fetchExtend from '@/shared/utils/api';
import { useMutation } from '@tanstack/react-query';
import { DefaultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';

const useCreateWishFolderMutation = () => {
  const { openToast } = useToast();

  const mutationFn = async (title: string) => {
    const res = await fetchExtend.post('/wishLists', {
      body: JSON.stringify({ title })
    });
    const { success, code, message }: DefaultResponse = await res.json();
    if (!res.ok || !success) throwApiError({ code, message });
  };

  const onSuccess = async () => {
    await revalidatePath(PATH.wishProductList);
    openToast(<ToastPop>찜 폴더가 추가되었습니다.</ToastPop>);
  };

  const onError = () => {
    openToast(<ToastPop>오류가 발생했습니다.</ToastPop>);
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError
  });
};

export default useCreateWishFolderMutation;
