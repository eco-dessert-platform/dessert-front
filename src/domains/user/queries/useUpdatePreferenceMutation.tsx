import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { PreferenceType } from '@/domains/user/types/profile';
import { preferenceQueryKey } from '@/domains/user/queries/queryKey';
import { revalidateTag } from '@/shared/actions/revalidate';
import PATH from '@/shared/constants/path';
import userService from '@/domains/user/queries/service';
import useToast from '@/shared/hooks/useToast';
import ToastPop from '@/shared/components/ToastPop';

const useUpdatePreferenceMutation = () => {
  const { openToast } = useToast();
  const { push } = useRouter();

  const mutationFn = async (preference: Array<PreferenceType>) => {
    await userService.updatePreference(preference);
  };

  const onSettled = () => {
    push(PATH.home);
  };

  const onSuccess = () => {
    revalidateTag(preferenceQueryKey.all[0]);
    openToast(<ToastPop>맞춤 추천이 수정됐으니, 추천 빵을 구경해봐요!</ToastPop>);
  };

  const onError = (e: Error) => {
    openToast(<ToastPop>{e.message}</ToastPop>);
  };

  return useMutation({ mutationFn, onSettled, onSuccess, onError });
};

export default useUpdatePreferenceMutation;
