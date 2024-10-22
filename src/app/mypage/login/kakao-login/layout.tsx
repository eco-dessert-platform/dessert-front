'use client';

import { PropsWithChildren, useEffect, Suspense } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const useragt = navigator.userAgent.toLowerCase();
    const isKakaoInAppBrowser = useragt.match(/kakaotalk/i);

    if (isKakaoInAppBrowser) {
      const currentUrl = window.location.href;

      // 외부 브라우저로 리디렉션 시도
      setTimeout(() => {
        window.location.replace(
          `kakaotalk://web/openExternal?url=${  encodeURIComponent(currentUrl)}`
        );
      }, 100); // 약간의 지연 후 리디렉션 시도
    }
  }, []);

  return <Suspense>{children}</Suspense>;
};

export default Layout;
