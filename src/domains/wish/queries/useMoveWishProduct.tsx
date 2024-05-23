import { useMutation } from '@tanstack/react-query';
import useToast from '@/shared/hooks/useToast';
import ToastPop from '@/shared/components/ToastPop';
import useModal from '@/shared/hooks/useModal';
import { revalidatePath } from '@/shared/actions/revalidate';
import PATH from '@/shared/constants/path';
import wishService from './service';
/** 기획상 순환이 발생 */
// eslint-disable-next-line import/no-cycle
import WishFolderSelectModal from '../components/alert-box/WishFolderSelectModal';

const useMoveWishProduct = () => {
  const { openToast } = useToast();
  const { openModal, closeModal } = useModal();

  const mutationFn = async ({
    productId,
    folderId,
    folderName
  }: {
    productId: string;
    folderId: string;
    folderName: string;
  }) => {
    await wishService.deleteWishProduct({ productId });
    await wishService.addWishProduct({ productId, folderId });
    return { productId, folderName };
  };

  const onSuccess = ({ productId, folderName }: { productId: string; folderName: string }) => {
    revalidatePath(PATH.wishProductList);
    const openFolderSelectModal = () => openModal(<WishFolderSelectModal productId={productId} />);
    closeModal();
    openToast(
      <ToastPop>
        <div>{folderName}에 추가했어요</div>
        <button type="button" className="hover:underline" onClick={openFolderSelectModal}>
          편집
        </button>
      </ToastPop>
    );
  };

  const onError = (error: Error) => {
    closeModal();
    openToast(
      <ToastPop>
        <div>{error.message}</div>
      </ToastPop>
    );
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError
  });
};

export default useMoveWishProduct;
