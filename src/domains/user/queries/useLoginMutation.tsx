import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { useMutation } from '@tanstack/react-query';
import { isLoggedinState } from '@/shared/atoms/login';
import fetchExtend from '@/shared/utils/api';
import PATH from '@/shared/constants/path';
import useToast from '@/shared/hooks/useToast';
import ToastPop from '@/shared/components/ToastPop';
import { setCookie } from '@/shared/actions/cookie';
import { ResultResponse } from '@/shared/types/response';
import { expToDate, parseJwt } from '../utils/jwt';

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

interface ParsedJWT {
  exp: number;
  iat: number;
  id: number;
  iss: number;
}

const useLoginMutation = () => {
  const { openToast } = useToast();
  const setLogin = useSetRecoilState(isLoggedinState);
  const { replace } = useRouter();

  const mutationFn = async (accessToken: string) => {
    const res = await fetchExtend.get(`/oauth/login/kakao?token=${accessToken}`);
    const { success, result, message }: ResultResponse<LoginResponse> = await res.json();

    if (!res.ok || !success) throw new Error(message);
    return result;
  };

  const onSuccess = async ({ accessToken, refreshToken }: LoginResponse) => {
    const { exp: accessTokenExp }: ParsedJWT = parseJwt(accessToken);
    const { exp: refreshTokenExp }: ParsedJWT = parseJwt(refreshToken);

    const accessTokenExpireDate = expToDate(accessTokenExp);
    const refreshTokenExpireDate = expToDate(refreshTokenExp);

    await Promise.all([
      setCookie({
        name: 'accessToken',
        value: accessToken,
        expires: accessTokenExpireDate
      }),
      setCookie({
        name: 'refreshToken',
        value: refreshToken,
        expires: refreshTokenExpireDate
      })
    ]);
    openToast(<ToastPop>로그인 되었어요.</ToastPop>);

    setLogin(true);
    replace(PATH.home);
  };

  const onError = () => {
    openToast(<ToastPop>로그인 실패했어요.</ToastPop>);
    replace(PATH.mypage);
  };

  return useMutation({ mutationFn, onSuccess, onError });
};

export default useLoginMutation;
