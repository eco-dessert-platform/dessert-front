import { useMutation } from '@tanstack/react-query';
import useModal from '@/shared/hooks/useModal';
import useToast from '@/shared/hooks/useToast';
import ToastPop from '@/shared/components/ToastPop';
import { revalidateTag } from '@/shared/actions/revalidate';
import { REAVALIDATE_TAG } from '@/shared/constants/revalidateTags';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import RequiredLoginToast from '@/shared/components/RequiredLoginToast';
import wishService from './service';
import WishFolderSelectModal from '../components/alert-box/WishFolderSelectModal';

const useAddWishProductMutation = () => {
  const { openToast } = useToast();
  const { openModal } = useModal();

  const mutationFn = async ({ productId, folderId }: { productId: string; folderId: string }) => {
    await wishService.addWishProduct({ productId, folderId });
    return { productId };
  };

  const onSuccess = async ({ productId }: { productId: string }) => {
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

  const onError = ({ message }: Error) => {
    switch (message) {
      case ERROR_MESSAGE.requiredLogin:
        openToast(<RequiredLoginToast />);
        break;

      default:
        openToast(
          <ToastPop>
            <div>{message}</div>
          </ToastPop>
        );
        break;
    }
  };

  return useMutation({ mutationFn, onSuccess, onError });
};

export default useAddWishProductMutation;
