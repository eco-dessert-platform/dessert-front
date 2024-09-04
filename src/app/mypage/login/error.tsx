'use client';

import ButtonNewver from '@/shared/components/ButtonNewver';
import SadBbangleBox from '@/shared/components/SadBbangleBox';

const Error = () => (
  <SadBbangleBox className="absoulte-center">
    <div>로그인 시도 중 에러가 발생했어요.</div>
    <div>창을 닫고 로그인을 다시 시도해주세요.</div>
    <ButtonNewver color="black" onClick={() => window.close()}>
      창 닫기
    </ButtonNewver>
  </SadBbangleBox>
);

export default Error;
