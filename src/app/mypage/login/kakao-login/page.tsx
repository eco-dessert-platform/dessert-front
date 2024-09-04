'use client';

import Loading from '@/shared/components/Loading';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const KakaoLoginLoadingPage = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (!code) throw new Error('카카오 로그인 시도 중 에러가 발생했어요.');
    window.opener.postMessage({ code, socialType: 'KAKAO' }, window.location.origin);
  }, [code]);

  return <Loading />;
};

export default KakaoLoginLoadingPage;
