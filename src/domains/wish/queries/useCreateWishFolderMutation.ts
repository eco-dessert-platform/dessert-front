import { useMutation, useQueryClient } from '@tanstack/react-query';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import wishService from './service';
import { wishQueryKey } from './queryKey';

const useCreateWishFolderMutation = () => {
  const { openToast } = useToastNewVer();
  const queryClient = useQueryClient();

  const mutationFn = (title: string) => wishService.createWishFolder(title);

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: wishQueryKey.folders() });
    openToast({ message: '찜 폴더가 추가되었습니다.' });
  };

  const onError = () => {
    openToast({ message: '오류가 발생했습니다.' });
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError
  });
};

export default useCreateWishFolderMutation;
