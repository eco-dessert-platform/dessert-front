import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import FullScreenModal from '@/shared/components/FullScreenModal';
import { BLUR_DATA_URL } from '@/shared/constants/blurDataUrl';
import { ReviewPhoto } from '@/domains/review/types/review';
import { ArrowIcon } from '@/shared/components/icons';

interface Props {
  photos: Array<ReviewPhoto>;
  initSlideIdx?: number;
}

const PhotoSlideModal = ({ photos, initSlideIdx = 0 }: Props) => (
  <FullScreenModal className="flex-center">
    <Swiper
      initialSlide={initSlideIdx}
      modules={[Navigation, Scrollbar]}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }}
      scrollbar={{ draggable: true }}
      cssMode
      className="h-full w-full"
    >
      {photos.map(({ id, url }) => (
        <SwiperSlide key={id} className="h-full w-full bg-white">
          <Image
            src={url}
            alt="리뷰 이미지"
            blurDataURL={BLUR_DATA_URL}
            fill
            className="w-full object-contain"
          />
        </SwiperSlide>
      ))}
      <button type="button" aria-label="왼쪽 버튼" className="swiper-button-prev after:hidden">
        <ArrowIcon shape="left" />
      </button>
      <button type="button" aria-label="오른쪽 버튼" className="swiper-button-next after:hidden">
        <ArrowIcon shape="right" />
      </button>
    </Swiper>
  </FullScreenModal>
);

export default PhotoSlideModal;
