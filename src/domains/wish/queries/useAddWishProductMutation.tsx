import { useMutation } from '@tanstack/react-query';
import useModal from '@/shared/hooks/useModal';
import useToast from '@/shared/hooks/useToast';
import fetchExtend from '@/shared/utils/api';
import ToastPop from '@/shared/components/ToastPop';
import { revalidateTag } from '@/shared/actions/revalidate';
import { REAVALIDATE_TAG } from '@/shared/constants/revalidateTags';
import { DefaultResponse } from '@/shared/types/response';
import { throwApiError } from '@/shared/utils/error';
import WishFolderSelectModal from '../components/alert-box/WishFolderSelectModal';

const useAddWishProductMutation = () => {
  const { openToast } = useToast();
  const { openModal } = useModal();

  const mutationFn = async ({ productId, folderId }: { productId: string; folderId: string }) => {
    const res = await fetchExtend.post(`/boards/${productId}/wish`, {
      body: JSON.stringify({ folderId })
    });
    const { success, code, message }: DefaultResponse = await res.json();
    if (!res.ok || !success) throwApiError({ code, message });
  };

  const onSuccess = async () => {
    const openFolderSelectModal = () => openModal(<WishFolderSelectModal />);
    await revalidateTag(REAVALIDATE_TAG.product);
    openToast(
      <ToastPop>
        <div>💖 찜한 상품에 추가했어요</div>
        <button type="button" className="hover:underline" onClick={openFolderSelectModal}>
          편집
        </button>
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

export default useAddWishProductMutation;
