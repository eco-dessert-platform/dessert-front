import '@/global/global.css';
import { ReactNode } from 'react';
import KaKaoChatScript from '@/global/KaKaoChatScript';
import RootLayoutProvider from '@/global/RootLayoutProvider';
import SilentLogin from '@/global/SilentLogin';
import GAScript from '@/global/GAScript';
import ReceiveMessageFromApp from '@/global/ReceiveMessageFromApp';
import AlertContainer from '@/global/AlertContainer';
import { getStaticMetadata } from '@/shared/utils/metadata';



export const metadata = getStaticMetadata('root');

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="ko">
    <head>
      <meta name="google-site-verification" content="PrpME1IVVESozFHxEKcgSVkL8preaJpDFYJ5Rtsjygk" />
    </head>
    <body>
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

export default RootLayout;
