import '@/global/global.css';
import { ReactNode } from 'react';
import localFont from 'next/font/local';
import KaKaoChatScript from '@/global/KaKaoChatScript';
import RootLayoutProvider from '@/global/RootLayoutProvider';
import SilentLogin from '@/global/SilentLogin';
import GAScript from '@/global/GAScript';
import ReceiveMessageFromApp from '@/global/ReceiveMessageFromApp';
import AlertContainer from '@/global/AlertContainer';
import { getStaticMetadata } from '@/shared/utils/metadata';

const pretendard = localFont({
  src: '../../public/assets/fonts/PretendardVariable.woff2'
});

export const metadata = getStaticMetadata('root');

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="ko">
    <body className={pretendard.className}>
      <RootLayoutProvider>
        <SilentLogin />
        <ReceiveMessageFromApp />
        <div className="shadow-lg max-w-[600px] mx-auto min-h-screen">
          {children}
          <AlertContainer />
        </div>
      </RootLayoutProvider>
      <KaKaoChatScript />
    </body>
    <GAScript />
  </html>
);

export default RootLayout;
