import { Suspense } from 'react';
import KakaoLoginLoading from './_blocks/KakaoLoginLoading';

const KakaoLoginLoadingPage = () => (
  <Suspense>
    <KakaoLoginLoading />
  </Suspense>
);

export default KakaoLoginLoadingPage;
