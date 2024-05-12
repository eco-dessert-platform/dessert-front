'use client';

import { deleteCookie } from '@/shared/actions/cookie';
import { isLoggedinState } from '@/shared/atoms/login';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { twMerge } from 'tailwind-merge';
import { TOKEN } from '@/shared/constants/token';

interface Props {
  className?: string;
}

const MoreSection = ({ className }: Props) => {
  const setLogin = useSetRecoilState(isLoggedinState);
  const { push } = useRouter();
  const logout = async () => {
    await Promise.all([deleteCookie(TOKEN.accessToken), deleteCookie(TOKEN.refreshToken)]);
    setLogin(false);
    push('/mypage');
  };

  return (
    <div className={twMerge('flex justify-between typo-body-12-regular', className)}>
      <Link href="/mypage/withdraw">
        <button type="button" className="text-gray-600">
          회원탈퇴
        </button>
      </Link>
      <button type="button" className="text-gray-900" onClick={logout}>
        로그아웃
      </button>
    </div>
  );
};

export default MoreSection;
