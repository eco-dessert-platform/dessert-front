import Link from 'next/link';
import { useAtom } from 'jotai';
import { isLoggedinAtom } from '@/shared/atoms/login';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import PATH from '@/shared/constants/path';

const useCheckLogin = () => {
  const [isLoggedIn] = useAtom(isLoggedinAtom);
  const { openToast } = useToastNewVer();

  const checkLogin = (): boolean => {
    if (isLoggedIn) return true;

    openToast({
      message: ERROR_MESSAGE.requiredLogin,
      action: (
        <Link href={PATH.login} className="underline">
          로그인
        </Link>
      )
    });
    return false;
  };

  return { checkLogin };
};

export default useCheckLogin;
