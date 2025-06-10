'use client';

import ReviewCreateButton from '@/app/main/products/[productId]/review/_blocks/ReviewCreateButton';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { useParams } from 'next/navigation';
import React from 'react';

const HasNoReview = () => {
  const { productId } = useParams<{ productId: string }>();

  return (
    <PaddingWrapper className="text-center">
      <p className="mb-[16px] text-[14px] font-medium text-gray-500">대표 배지가 아직 없어요.</p>
      <ReviewCreateButton productId={Number(productId)} />
    </PaddingWrapper>
  );
};

export default HasNoReview;
