'use client';

import React from 'react';

import Image from 'next/image';

import ButtonNewver from '@/shared/components/ButtonNewver';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { BLUR_DATA_URL } from '@/shared/constants/blurDataUrl';

const Schedule = () => (
  <>
    <Image
      src="/assets/images/landing4.png"
      alt="배너"
      width={600}
      height={160}
      placeholder="blur"
      blurDataURL={BLUR_DATA_URL}
      className="object-contain"
    />

    <PaddingWrapper className="py-[40px] px-0">
      <PaddingWrapper className="bg-[#FCFCFC] text-[24px] flex justify-between m-auto">
        <ButtonNewver
          className="bg-primaryOrangeRed rounded-[10px] py-[24px] w-full m-auto"
          onClick={() => window.open('https://www.instagram.com/bbanggrees_oven/', '_blank')}
        >
          참여하러 가기
        </ButtonNewver>
      </PaddingWrapper>
    </PaddingWrapper>
  </>
);

export default Schedule;
