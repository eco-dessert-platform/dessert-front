import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Image from 'next/image';

const Banner = () => (
  <PaddingWrapper className="pb-[0px]">
    <Image
      src="/assets/images/banner.png"
      alt="배너"
      width={600}
      height={160}
      className="object-contain rounded-[10px]"
    />
  </PaddingWrapper>
);

export default Banner;
