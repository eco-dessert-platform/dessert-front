'use client';

import React from 'react';

import Image from 'next/image';

import ButtonNewver from '@/shared/components/ButtonNewver';
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
    <ButtonNewver
      className="bg-[#F38269] rounded-[10px] w-[30%] absolute bottom-4 left-0 right-0 m-auto"
      onClick={() => window.open('https://www.instagram.com/bbanggrees_oven/', '_blank')}
    >
      참여하러 가기
    </ButtonNewver>
  </>
);

export default Schedule;
