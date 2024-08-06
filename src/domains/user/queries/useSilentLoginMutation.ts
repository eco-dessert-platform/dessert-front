import { useMutation } from '@tanstack/react-query';
import useAuth from '@/shared/hooks/useAuth';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { useRouter } from 'next/navigation';
import PATH from '@/shared/constants/path';
import userService from './service';

interface ResultType {
  accessToken: string;
}

const useSilentLoginMutation = () => {
  const { logout, login } = useAuth();
  const { push } = useRouter();
  const { openToast } = useToastNewVer();

  const mutationFn = async (refreshToken: string) => {
    const accessToken = await userService.extendLogin(refreshToken);
    return accessToken;
  };

  const onSuccess = async ({ accessToken }: ResultType) => {
    await login({ accessToken });
    const { isPreferenceAssigned, isFullyAssigned } = await userService.getMyPreferenceStatus();
    if (!isPreferenceAssigned) {
      openToast({ message: '약관 동의를 완료해주세요.' });
      push(PATH.profileRegistration);
      return;
    }
    if (!isFullyAssigned) {
      openToast({ message: '맞춤 추천 설문을 완료해주세요.' });
      push(PATH.preferenceCreate);
    }
  };

  const onError = async (error: Error) => {
    await logout();
    console.error(error);
  };

  return useMutation({ mutationFn, onSuccess, onError });
};

export default useSilentLoginMutation;
