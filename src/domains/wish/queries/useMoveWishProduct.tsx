import { useMutation } from '@tanstack/react-query';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import useModal from '@/shared/hooks/useModal';
import { revalidatePath } from '@/shared/actions/revalidate';
import PATH from '@/shared/constants/path';
import wishService from './service';
/** 기획상 순환이 발생 */
// eslint-disable-next-line import/no-cycle
import WishFolderSelectModal from '../components/alert-box/WishFolderSelectModal';

const useMoveWishProduct = () => {
  const { openToast } = useToastNewVer();
  const { openModal, closeModal } = useModal();

  const mutationFn = async ({
    productId,
    folderId,
    folderName
  }: {
    productId: number;
    folderId: number;
    folderName: string;
  }) => {
    await wishService.deleteWishProduct({ productId });
    await wishService.addWishProduct({ productId, folderId });
    return { productId, folderName };
  };

  const onSuccess = ({ productId, folderName }: { productId: number; folderName: string }) => {
    revalidatePath(PATH.wishProductList);
    const openFolderSelectModal = () => openModal(<WishFolderSelectModal productId={productId} />);
    closeModal();
    openToast({
      message: `${folderName}에 추가했어요`,
      action: (
        <button type="button" className="hover:underline" onClick={openFolderSelectModal}>
          편집
        </button>
      )
    });
  };

  const onError = ({ message }: Error) => {
    closeModal();
    openToast({ message });
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError
  });
};

export default useMoveWishProduct;
