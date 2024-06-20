import { useMutation } from '@tanstack/react-query';
import useToastNewVer from '../../../shared/hooks/useToastNewVer';
import reviewService from './service';

const useImageUploadMutation = () => {
  const { openToast } = useToastNewVer();

  return useMutation({
    mutationFn: (images: FileList) => reviewService.uploadImage(images),
    onError: (error) => {
      openToast({ message: error.message });
    }
  });
};

export default useImageUploadMutation;
