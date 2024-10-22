'use client';

import { PropsWithChildren, Suspense, useEffect } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    function isInKakaoInAppBrowser() {
      const userAgent = navigator.userAgent || window.opera;
      return /KAKAOTALK/i.test(userAgent);
    }

    function redirectToExternalBrowser() {
      if (isInKakaoInAppBrowser()) {
        const currentUrl = window.location.href;
        const userAgent = navigator.userAgent || window.opera;
        const isiOS = /iPhone|iPad|iPod/i.test(userAgent);

        if (isiOS) {
          // iOS 기기에서는 window.open 대신 window.location.href를 사용
          window.location.href = currentUrl;
        } else {
          // Android 기기에서는 window.location.href를 사용해 안전하게 리디렉트
          window.location.href = `intent://${currentUrl.replace(/^https?:\/\//, '')}#Intent;scheme=https;package=com.android.chrome;end;`;
        }
      }
    }

    redirectToExternalBrowser();
  }, []);

  return <Suspense>{children}</Suspense>;
};

export default Layout;
