'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import PATH from '@/shared/constants/path';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import useAuth from '@/shared/hooks/useAuth';

interface Props {
  className?: string;
}

const MoreSection = ({ className }: Props) => {
  const { push } = useRouter();
  const { logout } = useAuth();
  const { openToast } = useToastNewVer();
  const handleLogout = async () => {
    await logout();
    openToast({ message: '로그아웃 되었습니다' });
    push(PATH.mypage);
  };

  return (
    <div className={twMerge('typo-body-12-regular flex justify-between', className)}>
      <Link href={PATH.withdraw}>
        <button type="button" className="text-gray-600">
          회원탈퇴
        </button>
      </Link>
      <button type="button" className="text-gray-900" onClick={handleLogout}>
        로그아웃
      </button>
    </div>
  );
};

export default MoreSection;
