'use client';

import 'swiper/css/bundle';

import React, { useState } from 'react';

import { BundleBadge } from '@/domains/product/components/ProductCard/ProductImage/BundleBadge';
import ProductImageSlide from '@/domains/product/components/ProductImageSlide';
import ImageCounter from '@/domains/product/components/ProductImageSlide/ImgCounter';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

interface ProductImgProps {
  boardImages: string[];
  isBundled: boolean;
}

const ProductDetailImgs = ({ boardImages, isBundled }: ProductImgProps) => {
  const [swiperIndex, setSwiperIndex] = useState(0);

  return (
    <PaddingWrapper className="py-0">
      <div className="relative">
        <ProductImageSlide boardImages={boardImages} setSwiperIndex={setSwiperIndex} />
        {isBundled && (
          <div className="absolute top-[10px] left-[10px] z-10 ">
            <BundleBadge />
          </div>
        )}
        {boardImages && (
          <div className="absolute bottom-[10px] right-[10px] w-[37px] h-[21px] px-2.5 py-0.5 bg-black bg-opacity-60 rounded-[50px] justify-center items-center gap-2.5 inline-flex z-10">
            <ImageCounter index={swiperIndex} total={boardImages.length} />
          </div>
        )}
      </div>
    </PaddingWrapper>
  );
};

export default ProductDetailImgs;
