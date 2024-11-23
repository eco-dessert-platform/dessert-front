import React from 'react';
import Image from 'next/image';
import { BLUR_DATA_URL } from '@/shared/constants/blurDataUrl';

const LandingPage = () => (
  <div className="relative">
    <Image
      src="/assets/images/banner-detail.png"
      placeholder="blur"
      blurDataURL={BLUR_DATA_URL}
      unoptimized
      priority
      alt="banner"
      width={600}
      height={600}
    />
  </div>
);

export default LandingPage;
