'use client';

import Button from '@/shared/components/Button';
import { useEffect } from 'react';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import SadBbangleBox from '@/shared/components/SadBbangleBox';
import Link from 'next/link';
import PATH from '@/shared/constants/path';

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
        <PaddingWrapper className="flex flex-wrap gap-x-[4%] gap-y-4">
          <SadBbangleBox className="h-[80vh]">
            <p>에러가 발생했어요!</p>
            <p>{error.message}</p>
          </SadBbangleBox>
          <div className="justify-evenly bg-white w-full max-w-[600px] mx-auto p-[16px] fixed flex gap-[10px] left-0 right-0 bottom-0 z-[5000]">
            <div className="flex-1">
              <Button onClick={reset} variants="primary-black">
                다시 시도하기
              </Button>
            </div>
            <div className="flex-1">
              <Link href={PATH.home}>
                <Button variants="primary-white">홈으로 가기</Button>
              </Link>
            </div>
          </div>
        </PaddingWrapper>
      </body>
    </html>
  );
};

export default GlobalError;
