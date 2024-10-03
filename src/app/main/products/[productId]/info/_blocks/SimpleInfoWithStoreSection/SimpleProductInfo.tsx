'use client';

import React from 'react';

import { IBoardDetailType } from '@/domains/product/types/productDetailType';
import { StarIcon } from '@/shared/components/icons';
import ArrowIcons from '@/shared/components/icons/ArrowIcons';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Link from 'next/link';
import PATH from '@/shared/constants/path';
import { useParams } from 'next/navigation';

import { BoardReviewRateResponse } from '@/domains/review/types/review';

interface Props {
  boardData: IBoardDetailType;
  ratingData: BoardReviewRateResponse;
}

const SimpleProductInfo = ({ boardData, ratingData }: Props) => {
  const { productId } = useParams<{ productId: string }>();
  if (!ratingData) return <PaddingWrapper>스토어 정보를 찾을 수 없어요.</PaddingWrapper>;
  return (
    <PaddingWrapper>
      <div className="typo-title-16-regular leading-130 font-normal text-gray-800 mb-[2px]">
        {boardData.title}
      </div>
      <div className="flex justify-between items-center">
        <div className="typo-heading-18-semibold">
          <span className="text-secondaryOrangeRed mr-[4px]">{boardData.discountRate || null}</span>
          {boardData.price.toLocaleString()}
          <span className="typo-title-16-semibold">원</span>
        </div>
        <Link
          href={PATH.mainProductListReview(Number(productId))}
          className="flex items-center gap-[2px]"
        >
          <StarIcon size="md" color="yellow" />
          <span className="typo-title-14-medium text-gray-800">{ratingData?.rating}</span>
          <span className="typo-body-12-regular text-gray-500">({ratingData?.count}) </span>
          <ArrowIcons shape="forward-12" />
        </Link>
      </div>
    </PaddingWrapper>
  );
};

export default SimpleProductInfo;
