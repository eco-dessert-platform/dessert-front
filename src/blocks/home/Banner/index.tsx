import Image from 'next/image'; // next/image가 필요하므로 import 추가
import Link from 'next/link';

import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { BLUR_DATA_URL } from '@/shared/constants/blurDataUrl';

const Banner = () => (
  <PaddingWrapper className="py-0">
    <Link href="/landing">
      <Image
        src="/assets/images/launching-event.png"
        alt="배너"
        width={600}
        height={160}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        className="object-contain rounded-[10px] cursor-pointer"
      />
    </Link>
  </PaddingWrapper>
);

export default Banner;
