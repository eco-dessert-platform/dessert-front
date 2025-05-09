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
      className="bg-[#2A51FF] text-[3.2vw] md:text-[2.1vw] lg:text-[2vw] w-[80%] absolute bottom-5 left-0 right-0 rounded-[10px] py-[28px] m-auto"
      onClick={() => window.open('https://www.instagram.com/bbanggrees_oven/', '_blank')}
    >
      참여하러 가기
    </ButtonNewver>
  </>
);

export default Schedule;
