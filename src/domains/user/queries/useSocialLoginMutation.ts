import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import PATH from '@/shared/constants/path';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import useAuth from '@/shared/hooks/useAuth';
import userService from './service';
import { LoginResponse, SocialType } from '../types/login';

const useSocialLoginMutation = () => {
  const { openToast } = useToastNewVer();
  const { replace } = useRouter();
  const { login } = useAuth();

  const mutationFn = ({
    socialToken,
    socialType
  }: {
    socialToken: string;
    socialType: SocialType;
  }) => userService.login({ socialToken, socialType });

  const onSuccess = async ({ accessToken, refreshToken }: LoginResponse) => {
    await login({ accessToken, refreshToken });
    const { isFullyAssigned, isPreferenceAssigned } = await userService.getMyPreferenceStatus();

    if (!isPreferenceAssigned) {
      replace(PATH.profileRegistration);
      return;
    }
    if (!isFullyAssigned) {
      replace(PATH.preferenceCreate);
      return;
    }

    openToast({ message: '로그인 되었어요.' });
    replace(PATH.home);
  };

  const onError = () => {
    openToast({ message: '로그인 실패했어요.' });
    replace(PATH.mypage);
  };

  return useMutation({ mutationKey: ['login'], mutationFn, onSuccess, onError });
};

export default useSocialLoginMutation;
