// useMoveWishProduct.tsx
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import wishService from './service';
import { wishQueryKey } from './queryKey';

const useMoveWishProduct = () => {
  const { openToast } = useToastNewVer();
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

  const onSuccess = ({  folderName }: {  folderName: string }) => {
    queryClient.invalidateQueries({ queryKey: wishQueryKey.folders() });

    openToast({
      message: `${folderName}에 추가했어요`,
      action: (
        <button type="button" className="hover:underline">
          편집
        </button>
      )
    });
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

export default useMoveWishProduct;
