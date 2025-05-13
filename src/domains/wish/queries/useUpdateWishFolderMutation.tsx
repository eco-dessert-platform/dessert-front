import { useMutation, useQueryClient } from '@tanstack/react-query';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import wishService from './service';
import { wishQueryKey } from './queryKey';

const useUpdateWishFolderMutation = () => {
  const { openToast } = useToastNewVer();
  const queryClient = useQueryClient();

  const mutationFn = async ({ folderId, title }: { folderId: number; title: string }) =>
    wishService.updateWishFolder({ folderId, title });

  const onSuccess = async () => {
    queryClient.invalidateQueries({ queryKey: wishQueryKey.folders() });
    openToast({ message: '폴더 명이 수정되었어요.' });
  };

  const onError = () => {
    openToast({ message: '폴더 명이 수정 중 에러가 발생했어요.' });
  };

  return useMutation({
    mutationFn,
    onSuccess,
    onError
  });
};

export default useUpdateWishFolderMutation;
