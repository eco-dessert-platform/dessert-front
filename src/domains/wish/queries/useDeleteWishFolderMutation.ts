import { useMutation, useQueryClient } from '@tanstack/react-query';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import wishService from './service';
import { wishQueryKey } from './queryKey';

const useDeleteWishFolderMutation = () => {
  const { openToast } = useToastNewVer();
  const queryClient = useQueryClient();

  const mutationFn = async (folderId: number) => wishService.deleteWishFolder(folderId);

  const onSuccess = async () => {
    queryClient.invalidateQueries({ queryKey: wishQueryKey.folders() });
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
