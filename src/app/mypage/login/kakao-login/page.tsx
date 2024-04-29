import KakaoLoginLoading from '@/blocks/user/login/KakaoLoginLoading';
import { Suspense } from 'react';

const KakaoLoginLoadingPage = () => (
  <Suspense>
    <KakaoLoginLoading />
  </Suspense>
);

export default KakaoLoginLoadingPage;
