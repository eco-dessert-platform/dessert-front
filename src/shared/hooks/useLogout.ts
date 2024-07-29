import { deleteCookie } from '@/shared/actions/cookie';
import { TOKEN } from '@/shared/constants/token';
import { useSetRecoilState } from 'recoil';
import { isLoggedinState } from '@/shared/atoms/login';

const useLogout = () => {
  const setLogin = useSetRecoilState(isLoggedinState);

  const logout = async () => {
    await Promise.all([deleteCookie(TOKEN.accessToken), deleteCookie(TOKEN.refreshToken)]);
    setLogin(false);
  };

  return { logout };
};

export default useLogout;
