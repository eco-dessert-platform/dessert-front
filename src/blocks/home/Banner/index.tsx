import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Image from 'next/image';
import { BLUR_DATA_URL } from '@/shared/constants/blurDataUrl';

const Banner = () => (
  <PaddingWrapper>
    <Image
      src="/assets/images/banner.png"
      alt="배너"
      width={600}
      height={160}
      placeholder="blur"
      blurDataURL={BLUR_DATA_URL}
      className="object-contain rounded-[10px]"
    />
  </PaddingWrapper>
);

export default Banner;
