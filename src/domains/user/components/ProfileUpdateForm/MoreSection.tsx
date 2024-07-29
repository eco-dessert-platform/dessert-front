'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import useLogout from '@/shared/hooks/useLogout';
import PATH from '@/shared/constants/path';
import useToastNewVer from '@/shared/hooks/useToastNewVer';

interface Props {
  className?: string;
}

const MoreSection = ({ className }: Props) => {
  const { push } = useRouter();
  const { logout } = useLogout();
  const { openToast } = useToastNewVer();
  const handleLogout = async () => {
    await logout();
    openToast({ message: '로그아웃 되었습니다' });
    push(PATH.mypage);
  };

  return (
    <div className={twMerge('flex justify-between typo-body-12-regular', className)}>
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
