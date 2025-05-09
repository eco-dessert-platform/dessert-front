import { deleteCookie, setCookie } from '@/shared/actions/cookie';
import { TOKEN } from '@/shared/constants/token';
import { useSetRecoilState } from 'recoil';
import { isLoggedinState } from '@/shared/atoms/login';
import { getExpFromToken } from '@/domains/user/utils/jwt';

const useAuth = () => {
  const setLogin = useSetRecoilState(isLoggedinState);

  const logout = async () => {
    await Promise.all([deleteCookie(TOKEN.accessToken), deleteCookie(TOKEN.refreshToken)]);
    setLogin(false);
  };

  const login = async ({
    accessToken,
    refreshToken
  }: {
    accessToken: string;
    refreshToken?: string;
  }) => {
    const accessTokenExp = getExpFromToken(accessToken);

    const cookiePromises = [
      setCookie({
        name: TOKEN.accessToken,
        value: accessToken,
        expires: accessTokenExp
      })
    ];

    if (refreshToken) {
      const refreshTokenExp = getExpFromToken(refreshToken);
      cookiePromises.push(
        setCookie({
          name: TOKEN.refreshToken,
          value: refreshToken,
          expires: refreshTokenExp
        })
      );
    }

    await Promise.all(cookiePromises);
    setLogin(true);
  };

  return { logout, login };
};

export default useAuth;
