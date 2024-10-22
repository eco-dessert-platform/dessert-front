import '@/global/global.css';
import { ReactNode, useEffect } from 'react';
import localFont from 'next/font/local';
import KaKaoChatScript from '@/global/KaKaoChatScript';
import RootLayoutProvider from '@/global/RootLayoutProvider';
import SilentLogin from '@/global/SilentLogin';
import GAScript from '@/global/GAScript';
import ReceiveMessageFromApp from '@/global/ReceiveMessageFromApp';
import AlertContainer from '@/global/AlertContainer';
import { getStaticMetadata } from '@/shared/utils/metadata';

const pretendard = localFont({
  src: '../../public/assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920'
});

export const metadata = getStaticMetadata('root');

const RootLayout = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // 카카오톡 인앱 브라우저 감지
    const userAgent = navigator.userAgent || window.opera;
    const isKakaoInAppBrowser = /KAKAOTALK/i.test(userAgent);

    if (isKakaoInAppBrowser) {
      // 현재 접속한 URL을 가져와 외부 브라우저로 리디렉션
      const currentUrl = window.location.href;
      window.location.href = `kakaotalk://web/openExternal?url=${  encodeURIComponent(currentUrl)}`;
    }
  }, []);

  return (
    <html lang="ko">
      <head>
        <meta
          name="google-site-verification"
          content="PrpME1IVVESozFHxEKcgSVkL8preaJpDFYJ5Rtsjygk"
        />
      </head>
      <body className={pretendard.className}>
        <RootLayoutProvider>
          <SilentLogin />
          <ReceiveMessageFromApp />
          {children}
          <AlertContainer />
        </RootLayoutProvider>
        <KaKaoChatScript />
        <GAScript />
      </body>
    </html>
  );
};

export default RootLayout;
