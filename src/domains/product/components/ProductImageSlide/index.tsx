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
      className="aspect-square w-full"
    >
      {boardImages.map((image) => (
        <SwiperSlide
          key={image}
          className={cn(
            'relative size-full',
            isSoldOut &&
              "after:flex-center after:absolute after:inset-0 after:size-full after:rounded-[4px] after:bg-black/[0.3] after:text-[40px] after:font-semibold after:text-gray-300 after:content-['Sold_Out']"
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
              <SadBbangleBox className="typo-body-12-regular size-full rounded-[4px] border">
                이미지를 불러오지 못 했어요.
              </SadBbangleBox>
            }
          />
        </SwiperSlide>
      ))}

      <button
        type="button"
        aria-label="왼쪽 버튼"
        className={cn('swiper-button-prev invisible after:hidden', isMultipleImages && 'visible')}
      >
        <ArrowIcon shape="left" />
      </button>
      <button
        type="button"
        aria-label="오른쪽 버튼"
        className={cn('swiper-button-next invisible after:hidden', isMultipleImages && 'visible')}
      >
        <ArrowIcon shape="right" />
      </button>
    </Swiper>
  );
};
export default ProductImageSlide;
