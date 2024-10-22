'use client';

import Loading from '@/shared/components/Loading';
import { LOGIN_TYPE } from '@/shared/constants/message';
import { APP_URL } from '@/shared/constants/url';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const KakaoLoginLoadingPage = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (!code) return;

    const message = JSON.stringify({ type: LOGIN_TYPE, data: { code, socialType: 'KAKAO' } });

    // 카카오톡 인앱 브라우저 감지
    const isKakaoInAppBrowser = /KAKAOTALK/i.test(navigator.userAgent);

    if (isKakaoInAppBrowser) {
      // 인앱 브라우저에서 window.opener 사용 없이 리디렉션
      window.location.replace(`${APP_URL}?message=${message}`);
    } else if (window.opener) {
        window.opener.postMessage(message, window.location.origin);
        window.close();
      } else {
        window.location.replace(`${APP_URL}?message=${message}`);
      }
  }, [code]);

  return <Loading />;
};

export default KakaoLoginLoadingPage;
