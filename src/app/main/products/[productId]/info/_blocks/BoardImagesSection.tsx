'use client';

import 'swiper/css/bundle';

import React, { useState } from 'react';

import Badge from '@/shared/components/Badge';
import ProductImageSlide from '@/domains/product/components/ProductImageSlide';
import ImageCounter from '@/domains/product/components/ProductImageSlide/ImgCounter';
import useGetBoardDetailQuery from '@/domains/product/queries/useGetBoardDetailQuery';
import useGetProductOptionQuery from '@/domains/product/queries/useGetProductOptionQuery';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ImgNone from '@/domains/product/components/ProductImageSlide/ImgNone';

const BoardImagesSection = ({ productId }: { productId: number }) => {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const { data: boardDetail } = useGetBoardDetailQuery(productId);
  const { data: productOption } = useGetProductOptionQuery(productId);
  const imageArray = [boardDetail?.profile, ...(boardDetail?.boardImages ?? [])].filter(
    (item): item is string => item !== undefined && item !== null
  );

  const haveBoardImages = imageArray.length > 0;
  const isAllProductSoldOut = productOption?.products.every((product) => product.isSoldout);

  return (
    <PaddingWrapper className="pb-0">
      <div className="relative">
        {haveBoardImages ? (
          <ProductImageSlide
            boardImages={imageArray}
            isSoldOut={isAllProductSoldOut}
            onChange={setSwiperIndex}
          />
        ) : (
          <ImgNone />
        )}
        {productOption?.boardIsBundled && (
          <div className="absolute top-[10px] left-[10px] z-10">
            <Badge type="bundle">묶음상품</Badge>
          </div>
        )}
        {haveBoardImages && (
          <div className="absolute right-[10px] bottom-[10px] z-10 inline-flex h-[21px] w-[37px] items-center justify-center gap-2.5 rounded-[50px] bg-black/60 px-2.5 py-0.5">
            <ImageCounter index={swiperIndex} total={imageArray.length} />
          </div>
        )}
      </div>
    </PaddingWrapper>
  );
};

export default BoardImagesSection;
