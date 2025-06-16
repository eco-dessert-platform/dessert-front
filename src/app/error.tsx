'use client';

import ButtonNewver from '@/shared/components/ButtonNewver';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import SadBbangleBox from '@/shared/components/SadBbangleBox';
import { BbangleIcon } from '@/shared/components/icons';
import PATH from '@/shared/constants/path';
import Link from 'next/link';
import { startTransition, useEffect } from 'react';
import DefaultLayout from '@/shared/components/DefaultLayout';
import { useRouter } from 'next/navigation';

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useEffect(() => {
    console.error(error.digest);
  });

  const router = useRouter();

  const handleReset = () => {
    // todo 이부분 애러처리 바꿔야 할거 같다. > 일괄적으로 reset 만으로 동작하게끔
    startTransition(() => {
      reset();
      router.refresh();
    });
  };

  return (
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
            <ButtonNewver className="mt-[16px]" onClick={handleReset} color="black">
              다시 시도하기
            </ButtonNewver>
          </SadBbangleBox>
        </PaddingWrapper>
      }
    />
  );
};

export default Error;
