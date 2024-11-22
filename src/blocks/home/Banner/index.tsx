import Image from 'next/image';

import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { BLUR_DATA_URL } from '@/shared/constants/blurDataUrl';

const Banner = () => (
  <PaddingWrapper className="py-0">
    <Image
      src="/assets/images/new-banner.png"
      alt="배너"
      width={600}
      height={100}
      placeholder="blur"
      blurDataURL={BLUR_DATA_URL}
      className="object-contain rounded-[8px] cursor-pointer"
    />
  </PaddingWrapper>
);

export default Banner;
