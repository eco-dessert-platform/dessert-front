import { useMutation, useQueryClient } from '@tanstack/react-query';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import useModal from '@/shared/hooks/useModal';
import wishService from './service';
/** 기획상 순환이 발생 */
// eslint-disable-next-line import/no-cycle
import WishFolderSelectModal from '../components/alert-box/WishFolderSelectModal';
import { wishQueryKey } from './queryKey';

const useMoveWishProduct = () => {
  const { openToast } = useToastNewVer();
  const { openModal, closeModal } = useModal();
  const queryClient = useQueryClient();

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
    const openFolderSelectModal = () => openModal(<WishFolderSelectModal productId={productId} />);
    closeModal();
    queryClient.invalidateQueries({ queryKey: wishQueryKey.folders() });

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
