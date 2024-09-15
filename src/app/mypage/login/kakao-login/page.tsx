'use client';

import Loading from '@/shared/components/Loading';
import { MessageType } from '@/shared/types/message';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const KakaoLoginLoadingPage = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (!code) return;

    const data = JSON.stringify({ code, socialType: 'KAKAO' });
    const message: MessageType = { type: 'login', data };
    window.opener.postMessage(message, window.location.origin);
  }, [code]);

  return <Loading />;
};

export default KakaoLoginLoadingPage;
