'use client';

import { useParams } from 'next/navigation';
import { useRecoilState } from 'recoil';

import { starRatingState } from '@/domains/review/atoms';
import StarRating from '@/domains/review/components/common/StarRating';
import { RatingType } from '@/domains/review/types/starRating';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import useGetProductOptionQuery from '@/domains/product/queries/useGetProductOptionQuery';

const StarRatingSection = () => {
  const { productId } = useParams<{ productId: string }>();
  const { data } = useGetProductOptionQuery(productId);
  const [rating, setRating] = useRecoilState(starRatingState);

  const handleRatingChange = (newRating: RatingType) => {
    setRating(newRating);
  };

  return (
    <div className="flex flex-col items-center mb-[28px]">
      <PaddingWrapper className="typo-title-16-semibold text-center text-gray-900">
        {data?.products[0].title || 'OOO'}은 만족했나요?
      </PaddingWrapper>
      <StarRating
        name="rating"
        rating={rating}
        onRatingChange={handleRatingChange}
        starSize="large"
        editable
      />
    </div>
  );
};

export default StarRatingSection;
