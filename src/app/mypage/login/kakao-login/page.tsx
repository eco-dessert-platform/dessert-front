'use client';

import Loading from '@/shared/components/Loading';
import { LOGIN_TYPE } from '@/shared/constants/message';
import { APP_URL } from '@/shared/constants/url';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const KakaoLoginLoadingPage = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const [isKakaoInAppBrowser, setIsKakaoInAppBrowser] = useState(false);

  useEffect(() => {
    const useragt = navigator.userAgent.toLowerCase();
    const isKakaoInApp = useragt.includes('kakaotalk');

    if (isKakaoInApp) {
      setIsKakaoInAppBrowser(true);
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

  if (isKakaoInAppBrowser) {
    return (
      <div>
        <p>현재 페이지는 카카오톡 인앱 브라우저에서 원활히 작동하지 않습니다.</p>
        {/* 외부 브라우저로 강제 이동 (새 창 열기) */}
        <a href={`${APP_URL}`} target="_blank" rel="noopener noreferrer">
          외부 브라우저로 이동하기
        </a>
        <p>또는 아래 버튼을 클릭하세요:</p>
        <button
          type="button"
          onClick={() => {
            window.open(`${APP_URL}`, '_blank');
          }}
        >
          외부 브라우저로 강제 이동
        </button>
      </div>
    );
  }

  return <Loading />;
};

export default KakaoLoginLoadingPage;
