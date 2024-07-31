'use client';

import ButtonNewver from '@/shared/components/ButtonNewver';
import Link from 'next/link';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import SadBbangleBox from '@/shared/components/SadBbangleBox';
import FixedBottom from '@/shared/components/FixedBottom';

const Custom404 = () => (
  <PaddingWrapper className="flex flex-wrap gap-x-[4%] gap-y-4">
    <SadBbangleBox className="h-[80vh]">
      <p>잘못된 경로에요!</p>
      <p>요청한 페이지를 찾을 수 없어요😢</p>
    </SadBbangleBox>
    <FixedBottom>
      <PaddingWrapper className="flex w-full gap-[10px] bg-white">
        <Link href="/" className="w-full">
          <ButtonNewver color="black" className="w-full">
            홈으로 가기
          </ButtonNewver>
        </Link>
      </PaddingWrapper>
    </FixedBottom>
  </PaddingWrapper>
);

export default Custom404;
