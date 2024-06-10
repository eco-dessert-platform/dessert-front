import { revalidatePath } from '@/shared/actions/revalidate';
import PATH from '@/shared/constants/path';
import fetchExtend from '@/shared/utils/api';
import { useMutation } from '@tanstack/react-query';
import { DefaultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';
import useToastNewVer from '@/shared/hooks/useToastNewVer';

const useUpdateWishFolderMutation = () => {
  const { openToast } = useToastNewVer();

  const mutationFn = async ({ folderId, title }: { folderId: string; title: string }) => {
    const res = await fetchExtend.patch(`/wishLists/${folderId}`, {
      body: JSON.stringify({ title })
    });
    const { success, code, message }: DefaultResponse = await res.json();
    if (!res.ok || !success) throwApiError({ code, message });
  };

  const onSuccess = async () => {
    await revalidatePath(PATH.wishProductList);
    openToast({ message: '폴더 명이 수정되었어요.' });
  };

  const onError = () => {
    openToast({ message: '폴더 명이 수정 중 에러가 발생했어요.' });
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError
  });
};

export default useUpdateWishFolderMutation;
