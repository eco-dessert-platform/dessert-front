import { MutationKey, useMutation } from '@tanstack/react-query';
import useToastNewVer from '../../../shared/hooks/useToastNewVer';
import reviewService from './service';

const useImageUploadMutation = (key: MutationKey) => {
  const { openToast } = useToastNewVer();

  return useMutation({
    mutationKey: key,
    mutationFn: (images: FileList) => reviewService.uploadImage(images),
    onError: (error) => {
      openToast({ message: error.message });
    }
  });
};

export default useImageUploadMutation;
