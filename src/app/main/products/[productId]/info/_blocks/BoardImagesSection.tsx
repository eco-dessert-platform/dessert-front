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
  const imageArray = [boardDetail?.boardProfile, ...(boardDetail?.boardImages ?? [])].filter(
    (item): item is string => item !== undefined && item !== null
  );

  const haveBoardImages = imageArray.length > 0;
  const isAllProductSoldOut = productOption?.every((product) => product.isSoldout);

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
        {boardDetail?.isBundled && (
          <div className="absolute top-[10px] left-[10px] z-10 ">
            <Badge type="bundle">묶음상품</Badge>
          </div>
        )}
        {haveBoardImages && (
          <div className="absolute bottom-[10px] right-[10px] w-[37px] h-[21px] px-2.5 py-0.5 bg-black/60  rounded-[50px] justify-center items-center gap-2.5 inline-flex z-10">
            <ImageCounter index={swiperIndex} total={imageArray.length} />
          </div>
        )}
      </div>
    </PaddingWrapper>
  );
};

export default BoardImagesSection;
