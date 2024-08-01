'use client';

import ButtonNewver from '@/shared/components/ButtonNewver';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import SadBbangleBox from '@/shared/components/SadBbangleBox';
import { BbangleIcon } from '@/shared/components/icons';
import PATH from '@/shared/constants/path';
import Link from 'next/link';
import { useEffect } from 'react';

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useEffect(() => {
    console.error(error.message);
  });

  return (
    <>
      <PaddingWrapper>
        <Link href={PATH.home}>
          <BbangleIcon shape="horizontal-name" />
        </Link>
      </PaddingWrapper>
      <PaddingWrapper className="absoulte-center flex flex-col">
        <SadBbangleBox>
          <div>일시적인 오류가 발생했어요.</div>
          <div>다시 시도해주세요.</div>
          <ButtonNewver className="mt-[16px]" onClick={reset} color="black">
            다시 시도하기
          </ButtonNewver>
        </SadBbangleBox>
      </PaddingWrapper>
    </>
  );
};

export default Error;
