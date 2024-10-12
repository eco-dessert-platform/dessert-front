import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { cn } from '@/shared/utils/cn';
import { BLUR_DATA_URL } from '@/shared/constants/blurDataUrl';
import ImageWithFallback from '@/shared/components/ImageWithFallback';
import SadBbangleBox from '@/shared/components/SadBbangleBox';
import { ArrowIcon } from '@/shared/components/icons';

interface ImgSliderProps {
  boardImages: string[];
  isSoldOut?: boolean;
  onChange: (_: number) => void;
}

const ProductImageSlide = ({ boardImages, isSoldOut, onChange }: ImgSliderProps) => {
  const isMultipleImages = boardImages.length > 1;

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      modules={[Navigation]}
      scrollbar={{ el: '.swiper-scrollbar', draggable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }}
      onActiveIndexChange={(swiperCore) => {
        onChange(swiperCore.activeIndex);
      }}
      className="w-full aspect-square"
    >
      {boardImages.map((image) => (
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
              <SadBbangleBox className="border rounded-[4px] size-full typo-body-12-regular">
                이미지를 불러오지 못 했어요.
              </SadBbangleBox>
            }
          />
        </SwiperSlide>
      ))}

      <button
        type="button"
        aria-label="왼쪽 버튼"
        className={cn('swiper-button-prev after:hidden invisible', isMultipleImages && 'visible')}
      >
        <ArrowIcon shape="left" />
      </button>
      <button
        type="button"
        aria-label="오른쪽 버튼"
        className={cn('swiper-button-next after:hidden invisible', isMultipleImages && 'visible')}
      >
        <ArrowIcon shape="right" />
      </button>
    </Swiper>
  );
};

export default ProductImageSlide;
