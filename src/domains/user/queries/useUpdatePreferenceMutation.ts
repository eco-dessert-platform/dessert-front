import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { PreferenceType } from '@/domains/user/types/preference';
import PATH from '@/shared/constants/path';
import userService from '@/domains/user/queries/service';
import useToastNewVer from '@/shared/hooks/useToastNewVer';

const useUpdatePreferenceMutation = () => {
  const { openToast } = useToastNewVer();
  const { push } = useRouter();

  const mutationFn = async (preference: Array<PreferenceType>) => {
    await userService.updatePreference(preference);
  };

  const onSettled = () => {
    push(PATH.home);
  };

  const onSuccess = () => {
    openToast({ message: '맞춤 추천이 수정됐으니, 추천 빵을 구경해봐요!' });
  };

  const onError = ({ message }: Error) => {
    openToast({ message });
  };

  return useMutation({ mutationFn, onSettled, onSuccess, onError });
};

export default useUpdatePreferenceMutation;
