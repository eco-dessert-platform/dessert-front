import { useMutation } from '@tanstack/react-query';
import useModal from '@/shared/hooks/useModal';
import useToast from '@/shared/hooks/useToast';
import ToastPop from '@/shared/components/ToastPop';
import { revalidateTag } from '@/shared/actions/revalidate';
import { REAVALIDATE_TAG } from '@/shared/constants/revalidateTags';
import WishFolderSelectModal from '../components/alert-box/WishFolderSelectModal';
import wishService from './service';

const useAddWishProductMutation = () => {
  const { openToast } = useToast();
  const { openModal } = useModal();

  const mutationFn = ({ productId, folderId }: { productId: string; folderId: string }) =>
    wishService.addWishProduct({ productId, folderId });

  const onSuccess = async ({ productId }: { productId: string; folderId: string }) => {
    await revalidateTag(REAVALIDATE_TAG.product);
    const openFolderSelectModal = () => openModal(<WishFolderSelectModal productId={productId} />);

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
