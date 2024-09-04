import { useMutation } from '@tanstack/react-query';

import userService from './service';
import useSocialLoginMutation from './useSocialLoginMutation';
import { KakaoAuthResponse } from '../types/login';

const useKakaoAuthMutation = () => {
  const { mutate: loginMutate } = useSocialLoginMutation();

  const mutationFn = async (code: string) => {
    const data = await userService.getKakaoToken(code);
    return data;
  };

  const onSuccess = (data: KakaoAuthResponse) => {
    loginMutate({ socialToken: data.access_token, socialType: 'KAKAO' });
  };

  return useMutation({
    mutationFn,
    onSuccess
  });
};

export default useKakaoAuthMutation;
