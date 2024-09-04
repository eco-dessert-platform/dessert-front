'use client';

import Loading from '@/shared/components/Loading';
import useKakaoAuthMutation from '@/domains/user/queries/useKakaoAuthMutation';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const KakaoLoginLoading = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const { mutate: mutateKakaoAuth } = useKakaoAuthMutation();

  useEffect(() => {
    if (!code) return;
    window.opener.postMessage({ code, socialType: 'KAKAO' }, window.location.origin);
  }, [code, mutateKakaoAuth]);

  return <Loading />;
};

export default KakaoLoginLoading;
