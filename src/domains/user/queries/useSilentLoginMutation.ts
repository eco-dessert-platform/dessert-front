import { useMutation } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';
import { isLoggedinState } from '@/shared/atoms/login';
import { TOKEN } from '@/shared/constants/token';
import { deleteCookie, setCookie } from '@/shared/actions/cookie';
import { getExpFromToken } from '@/domains/user/utils/jwt';
import userService from './service';

interface ResultType {
  accessToken: string;
}

const useSilentLoginMutation = () => {
  const setLogin = useSetRecoilState(isLoggedinState);

  const mutationFn = (refreshToken: string) => userService.extendLogin(refreshToken);

  const onSuccess = async ({ accessToken }: ResultType) => {
    const accessTokenExp = getExpFromToken(accessToken);

    await setCookie({
      name: TOKEN.accessToken,
      value: accessToken,
      expires: accessTokenExp
    });

    setLogin(true);
  };

  const onError = async (error: Error) => {
    await Promise.all([deleteCookie(TOKEN.accessToken), deleteCookie(TOKEN.refreshToken)]);
    setLogin(false);
    console.error(error);
  };

  return useMutation({ mutationFn, onSuccess, onError });
};

export default useSilentLoginMutation;
