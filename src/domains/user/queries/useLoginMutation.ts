import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import useAuth from '@/shared/hooks/useAuth';
import PATH from '@/shared/constants/path';
import { LoginResponse, SocialType } from '../types/login';
import userService from './service';

export function useSocialLoginMutation() {
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
    const { isFullyAssigned, isPreferenceAssigned, isSurveyed } =
      await userService.getMyRecommendationStatus();

    if (!isFullyAssigned) {
      replace(PATH.profileRegistration);
      return;
    }
    if (!isPreferenceAssigned) {
      replace(PATH.recommendationCreate({ progress: 1 }));
      return;
    }
    if (!isSurveyed) {
      replace(PATH.recommendationCreate({ progress: 2 }));
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
}

export function useKakaoLoginMutation() {
  const { mutate: loginMutate } = useSocialLoginMutation();

  return useMutation({
    mutationFn: async (code: string) => {
      const data = await userService.getKakaoToken(code);
      loginMutate({ socialToken: data.access_token, socialType: 'KAKAO' });
    }
  });
}

export function useGoogleLoginMutation() {
  const { mutate: loginMutate } = useSocialLoginMutation();

  return useMutation({
    mutationFn: async (token: string) => {
      loginMutate({ socialToken: token, socialType: 'GOOGLE' });
    }
  });
}
