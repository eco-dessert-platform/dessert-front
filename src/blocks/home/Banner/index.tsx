import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Image from 'next/image';

const Banner = () => (
  <PaddingWrapper className="pb-[0px]">
    <div className="relative w-full h-[164px] bg-redGray-30 rounded-[10px] flex justify-center items-center">
      <Image src="/assets/images/banner.png" alt="배너" fill />
    </div>
  </PaddingWrapper>
);

export default Banner;
