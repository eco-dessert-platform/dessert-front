'use client';

import Loading from '@/shared/components/Loading';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const KakaoLoginLoadingPage = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (!code) return;
    window.opener.postMessage({ code, socialType: 'KAKAO' }, window.location.origin);
  }, [code]);

  return <Loading />;
};

export default KakaoLoginLoadingPage;
