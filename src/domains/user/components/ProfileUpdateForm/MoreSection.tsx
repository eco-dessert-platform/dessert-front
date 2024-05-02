'use client';

import { deleteCookie } from '@/shared/actions/cookie';
import { isLoggedinState } from '@/shared/atoms/login';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import { twMerge } from 'tailwind-merge';

interface Props {
  className?: string;
}

const MoreSection = ({ className }: Props) => {
  const setLogin = useSetRecoilState(isLoggedinState);
  const { push } = useRouter();
  const logout = async () => {
    await Promise.all([deleteCookie('accessToken'), deleteCookie('refreshToken')]);
    setLogin(false);
    push('/mypage');
  };

  return (
    <div className={twMerge('flex justify-between text-gray-600 text-sm', className)}>
      <Link href="/mypage/withdraw">
        <button type="button">회원탈퇴</button>
      </Link>
      <button type="button" onClick={logout}>
        로그아웃
      </button>
    </div>
  );
};

export default MoreSection;
