import { revalidatePath } from '@/shared/actions/revalidate';
import PATH from '@/shared/constants/path';
import fetchExtend from '@/shared/utils/api';
import { useMutation } from '@tanstack/react-query';
import { DefaultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';
import useToastNewVer from '@/shared/hooks/useToastNewVer';

const useDeleteWishFolderMutation = () => {
  const { openToast } = useToastNewVer();

  const mutationFn = async (folderId: string) => {
    const res = await fetchExtend.delete(`/wishLists/${folderId}`, {
      method: 'DELETE'
    });
    const { success, code, message }: DefaultResponse = await res.json();
    if (!res.ok || !success) throwApiError({ code, message });
  };

  const onSuccess = async () => {
    await revalidatePath(PATH.wishProductList);
    openToast({ message: '찜 폴더가 삭제되었습니다.' });
  };

  const onError = ({ message }: Error) => {
    openToast({ message });
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError
  });
};

export default useDeleteWishFolderMutation;
