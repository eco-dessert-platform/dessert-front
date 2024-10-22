'use client';

import Loading from '@/shared/components/Loading';
import { LOGIN_TYPE } from '@/shared/constants/message';
import { APP_URL } from '@/shared/constants/url';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const KakaoLoginLoadingPage = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  // 인앱 브라우저 감지를 위한 상태 선언
  const [isKakaoInAppBrowser, setIsKakaoInAppBrowser] = useState(false);

  useEffect(() => {
    const useragt = navigator.userAgent.toLowerCase();
    const isKakaoInApp = useragt.match(/kakaotalk/i);

    // 카카오톡 인앱 브라우저 감지 시
    if (isKakaoInApp) {
      setIsKakaoInAppBrowser(true);

      // 5초 후에 리디렉션
      setTimeout(() => {
        const currentUrl = window.location.href;
        window.location.href = currentUrl;
      }, 5000);
    }
  }, []);

  useEffect(() => {
    if (!code) return;

    const message = JSON.stringify({ type: LOGIN_TYPE, data: { code, socialType: 'KAKAO' } });

    if (!window.opener) {
      window.location.replace(`${APP_URL}?message=${message}`);
      return;
    }
    window.opener.postMessage(message, window.location.origin);
    window.close();
  }, [code]);

  // 인앱 브라우저에서 접근 시 안내 메시지 표시
  if (isKakaoInAppBrowser) {
    return (
      <div>
        <p>현재 페이지는 카카오톡 인앱 브라우저에서 원활히 작동하지 않습니다.</p>
        <a href={window.location.href} target="_blank" rel="noopener noreferrer">
          외부 브라우저에서 열기
        </a>
      </div>
    );
  }

  return <Loading />;
};

export default KakaoLoginLoadingPage;
