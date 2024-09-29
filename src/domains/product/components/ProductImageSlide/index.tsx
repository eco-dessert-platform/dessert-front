import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { cn } from '@/shared/utils/cn';
import { BLUR_DATA_URL } from '@/shared/constants/blurDataUrl';
import ImageWithFallback from '@/shared/components/ImageWithFallback';
import SadBbangleBox from '@/shared/components/SadBbangleBox';

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
    className="w-full aspect-square"
  >
    {boardImages?.map((image) => (
      <SwiperSlide
        key={image}
        className={cn(
          'relative size-full',
          isSoldOut &&
            "after:content-['Sold_Out'] after:size-full after:flex-center after:absolute after:inset-0 after:bg-black/[0.3] after:text-gray-300 after:text-[40px] after:font-semibold after:rounded-[4px]"
        )}
      >
        <ImageWithFallback
          src={image}
          alt="상품 이미지"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          fill
          className="size-full rounded-[4px] object-cover"
          fallback={
            <SadBbangleBox className="border rounded-[4px] size-full">
              이미지를 불러오지 못 했어요.
            </SadBbangleBox>
          }
        />
      </SwiperSlide>
    ))}
  </Swiper>
);
export default ProductImageSlide;
