import productService from '@/domains/product/queries/service';
import ReviewBadge from '@/domains/review/components/ReviewBadge';
import { BADGE } from '@/domains/review/constants/badge';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import React from 'react';

interface Props {
  productId: number;
}

const HasReview = async ({ productId }: Props) => {
  const { badges } = await productService.getReviewBadge(productId);

  return (
    <PaddingWrapper className="flex gap-3">
      {badges.map((badge) => (
        <ReviewBadge
          key={badge}
          shape={badge.toLowerCase() as keyof typeof BADGE}
          className="flex-1 max-h-[100px]"
        />
      ))}
    </PaddingWrapper>
  );
};

export default HasReview;
