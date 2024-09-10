'use client';

import { useParams } from 'next/navigation';
import { useFormContext } from 'react-hook-form';

import PaddingWrapper from '@/shared/components/PaddingWrapper';
import useGetProductOptionQuery from '@/domains/product/queries/useGetProductOptionQuery';
import StarRating from '@/domains/review/components/common/StarRating';
import { IReviewWriteForm } from '@/domains/review/types/review';

const StarRatingSection = () => {
  const { productId } = useParams<{ productId: string }>();
  const { data } = useGetProductOptionQuery(Number(productId));
  const { register, watch } = useFormContext<IReviewWriteForm>();

  return (
    <div className="flex flex-col items-center mb-[28px]">
      <PaddingWrapper className="typo-title-16-semibold text-center text-gray-900">
        {data?.products[0].title || 'OOO'}은 만족했나요?
      </PaddingWrapper>
      <StarRating
        {...register('rate', { required: true })}
        value={watch('rate')}
        starSize="large"
        editable
      />
    </div>
  );
};

export default StarRatingSection;
