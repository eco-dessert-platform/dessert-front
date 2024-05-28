import { revalidatePath } from '@/shared/actions/revalidate';
import PATH from '@/shared/constants/path';
import fetchExtend from '@/shared/utils/api';
import { useMutation } from '@tanstack/react-query';
import { DefaultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';
import useToastNewVer from '@/shared/hooks/useToastNewVer';

const useCreateWishFolderMutation = () => {
  const { openToast } = useToastNewVer();

  const mutationFn = async (title: string) => {
    const res = await fetchExtend.post('/wishLists', {
      body: JSON.stringify({ title })
    });
    const { success, code, message }: DefaultResponse = await res.json();
    if (!res.ok || !success) throwApiError({ code, message });
  };

  const onSuccess = async () => {
    await revalidatePath(PATH.wishProductList);
    openToast({ message: '찜 폴더가 추가되었습니다.' });
  };

  const onError = () => {
    openToast({ message: '오류가 발생했습니다.' });
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError
  });
};

export default useCreateWishFolderMutation;
