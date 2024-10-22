'use client';

import { PropsWithChildren, useEffect, useState, Suspense } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  // isKakaoInAppBrowser 상태 선언
  const [isKakaoInAppBrowser, setIsKakaoInAppBrowser] = useState(false);

  useEffect(() => {
    const useragt = navigator.userAgent.toLowerCase();
    const isKakaoInApp = useragt.match(/kakaotalk/i);

    if (isKakaoInApp) {
      setIsKakaoInAppBrowser(true);
      setTimeout(() => {
        const currentUrl = window.location.href;
        window.location.href = currentUrl;
      }, 5000);
    }
  }, []);

  if (isKakaoInAppBrowser) {
    // 카카오 인앱 브라우저일 때 사용자에게 안내 메시지와 링크를 표시
    return (
      <div>
        <p>현재 페이지는 카카오톡 인앱 브라우저에서 원활히 작동하지 않습니다.</p>
        <a href={window.location.href} target="_blank" rel="noopener noreferrer">
          외부 브라우저에서 열기
        </a>
      </div>
    );
  }

  return <Suspense>{children}</Suspense>;
};

export default Layout;
