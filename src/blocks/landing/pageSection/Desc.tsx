import React from 'react';

import Image from 'next/image';

import { BLUR_DATA_URL } from '@/shared/constants/blurDataUrl';

const Desc = () => (
  <Image
    src="/assets/images/landing2.png"
    alt="배너"
    width={600}
    height={160}
    placeholder="blur"
    blurDataURL={BLUR_DATA_URL}
    className="object-contain"
  />
);

export default Desc;
