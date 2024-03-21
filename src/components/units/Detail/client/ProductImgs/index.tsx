'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import 'swiper/css/bundle';

import { BundleBadge } from '@/components/commons/badge/BundleBadge';
import PaddingWrapper from '@/components/commons/PaddingWrapper';
import ImgSlider from './ImgSlider';
import ImageCounter from './ImgCounter';

interface Image {
  id: number;
  url: string;
}

interface ProductImgProps {
  boardImages: Image[];
  isBundled: boolean;
}

const ProductImgs = ({ boardImages, isBundled }: ProductImgProps) => {
  const [swiperIndex, setSwiperIndex] = useState(0);

  return (
    <PaddingWrapper>
      <div className="relative">
        <ImgSlider boardImages={boardImages} setSwiperIndex={setSwiperIndex} />
        {isBundled && (
          <div className="absolute top-[10px] left-[10px] z-10 ">
            <BundleBadge />
          </div>
        )}
        {boardImages[0].url && (
          <div className="absolute bottom-[10px] right-[10px] w-[37px] h-[21px] px-2.5 py-0.5 bg-black bg-opacity-60 rounded-[50px] justify-center items-center gap-2.5 inline-flex z-10">
            <ImageCounter index={swiperIndex} total={boardImages.length} />
          </div>
        )}
      </div>
    </PaddingWrapper>
  );
};

export default ProductImgs;
