'use client';

import ButtonNewver from '@/shared/components/ButtonNewver';
import Link from 'next/link';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import SadBbangleBox from '@/shared/components/SadBbangleBox';
import PATH from '@/shared/constants/path';
import { BbangleIcon } from '@/shared/components/icons';
import { useRouter } from 'next/navigation';
import DefaultLayout from '@/shared/components/DefaultLayout';

const Custom404 = () => {
  const { push } = useRouter();

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
            <p>잘못된 경로에요!</p>
            <p>요청한 페이지를 찾을 수 없어요😢</p>
            <ButtonNewver className="mt-[16px]" color="black" onClick={() => push(PATH.home)}>
              홈으로 가기
            </ButtonNewver>
          </SadBbangleBox>
        </PaddingWrapper>
      }
    />
  );
};

export default Custom404;
