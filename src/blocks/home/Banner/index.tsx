import Image from 'next/image';

import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { BLUR_DATA_URL } from '@/shared/constants/blurDataUrl';
import Link from 'next/link';

const Banner = () => (
  <Link href="/landing" passHref>
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
  </Link>
);

export default Banner;
