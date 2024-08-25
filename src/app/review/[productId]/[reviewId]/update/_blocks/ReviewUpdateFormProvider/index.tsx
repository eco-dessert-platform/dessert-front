'use client';

import { getFormValuesFromReviewType } from '@/domains/review/utils/transformer';
import useReviewDetailQuery from '@/domains/review/queries/useReviewDetailQuery';
import { useParams } from 'next/navigation';
import FormProviderWithDefaultValues from './FormProviderWithDefaultValues';

interface Props {
  children: React.ReactNode;
}

const ReviewFormProvider = ({ children }: Props) => {
  const { reviewId, productId } = useParams();

  if (!productId) throw new Error('productId is invalid');
  if (!reviewId) throw new Error('reviewId is invalid');

  const { data: reviewDetail, isLoading } = useReviewDetailQuery(Number(reviewId));

  if (isLoading) return 'loading';
  if (!reviewDetail) return 'not found data';

  const defaultValues = getFormValuesFromReviewType({
    review: reviewDetail,
    boardId: Number(productId)
  });

  return (
    <FormProviderWithDefaultValues defaultValues={defaultValues}>
      {children}
    </FormProviderWithDefaultValues>
  );
};

export default ReviewFormProvider;
