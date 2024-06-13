import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import ImgNone from '@/domains/product/components/ProductImageSlide/ImgNone';

interface ImageTypes {
  id: number;
  url: string;
}

interface ImgSliderProps {
  boardImages: ImageTypes[];
  setSwiperIndex: (_: number) => void;
}

const ProductImageSlide = ({ boardImages, setSwiperIndex }: ImgSliderProps) => (
  <Swiper
    spaceBetween={10}
    slidesPerView={1}
    pagination={{ clickable: true }}
    scrollbar={{ el: '.swiper-scrollbar', draggable: true }}
    onActiveIndexChange={(swiperCore) => {
      setSwiperIndex(swiperCore.activeIndex);
    }}
  >
    {boardImages?.map((image) =>
      image.id ? (
        <SwiperSlide key={image.id}>
          <div className="w-full pb-[100%]">
            <Image
              src={image.url}
              alt="img"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </SwiperSlide>
      ) : (
        <ImgNone key={image.id} />
      )
    )}
  </Swiper>
);

export default ProductImageSlide;
