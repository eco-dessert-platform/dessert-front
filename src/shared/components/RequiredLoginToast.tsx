'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import PATH from '../constants/path';

const RequiredLoginToast = () => {
  const redirectPath = usePathname();
  const searchParams = useSearchParams();

  const queryString = searchParams.toString();
  const fullPath = queryString ? `${redirectPath}?${queryString}` : redirectPath;
  const encodedPath = encodeURIComponent(fullPath);

  return (
    <Link className="hover:underline" href={`${PATH.login}?from=${encodedPath}`}>
      로그인
    </Link>
  );
};

export default RequiredLoginToast;
