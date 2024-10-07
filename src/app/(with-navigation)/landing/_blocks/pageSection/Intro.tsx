import React from 'react';

import Image from 'next/image';

import { BLUR_DATA_URL } from '@/shared/constants/blurDataUrl';

const Intro = () => (
  <Image
    src="/assets/images/landing1.png"
    alt="배너"
    width={600}
    height={160}
    placeholder="blur"
    blurDataURL={BLUR_DATA_URL}
    className="object-contain"
  />
);

export default Intro;
