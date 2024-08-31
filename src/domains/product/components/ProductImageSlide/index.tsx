import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { cn } from '@/shared/utils/cn';
import { BLUR_DATA_URL } from '@/shared/constants/blurDataUrl';
import ImgNone from '@/domains/product/components/ProductImageSlide/ImgNone';

interface ImgSliderProps {
  boardImages?: string[];
  isSoldOut?: boolean;
  onChange: (_: number) => void;
}

const ProductImageSlide = ({ boardImages, isSoldOut, onChange }: ImgSliderProps) => (
  <Swiper
    spaceBetween={10}
    slidesPerView={1}
    pagination={{ clickable: true }}
    scrollbar={{ el: '.swiper-scrollbar', draggable: true }}
    onActiveIndexChange={(swiperCore) => {
      onChange(swiperCore.activeIndex);
    }}
  >
    {boardImages?.map((image) =>
      image ? (
        <SwiperSlide key={image}>
          <div
            className={cn(
              'w-full pb-[100%]',
              isSoldOut &&
                "after:content-['Sold_Out'] after:size-full after:flex-center after:absolute after:inset-0 after:bg-black/[0.3] after:text-gray-300 after:text-[40px] after:font-semibold after:rounded-[12px]"
            )}
          >
            <Image
              src={image}
              alt="img"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          </div>
        </SwiperSlide>
      ) : (
        <ImgNone key={image} />
      )
    )}
  </Swiper>
);
export default ProductImageSlide;
