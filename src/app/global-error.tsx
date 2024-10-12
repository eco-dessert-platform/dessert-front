'use client';

import ButtonNewver from '@/shared/components/ButtonNewver';
import { useEffect } from 'react';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import SadBbangleBox from '@/shared/components/SadBbangleBox';
import Link from 'next/link';
import PATH from '@/shared/constants/path';
import { BbangleIcon } from '@/shared/components/icons';
import DefaultLayout from '@/shared/components/DefaultLayout';

const GlobalError = ({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="ko">
      <body>
        <DefaultLayout
          header={
            <PaddingWrapper>
              <Link href={PATH.home}>
                <BbangleIcon shape="horizontal-name" />
              </Link>
            </PaddingWrapper>
          }
          main={
            <PaddingWrapper className="absoulte-center flex flex-col">
              <SadBbangleBox>
                <div>일시적인 오류가 발생했어요.</div>
                <div>다시 시도해주세요.</div>
                <ButtonNewver className="mt-[16px]" onClick={reset} color="black">
                  다시 시도하기
                </ButtonNewver>
              </SadBbangleBox>
            </PaddingWrapper>
          }
        />
      </body>
    </html>
  );
};

export default GlobalError;
