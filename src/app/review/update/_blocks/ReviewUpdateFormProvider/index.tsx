'use client';

import { getFormValuesFromReviewType } from '@/domains/review/utils/transformer';
import useReviewDetailQuery from '@/domains/review/queries/useReviewDetailQuery';
import { useSearchParams } from 'next/navigation';
import FormProviderWithDefaultValues from './FormProviderWithDefaultValues';

interface Props {
  children: React.ReactNode;
}

const ReviewFormProvider = ({ children }: Props) => {
  const searchParams = useSearchParams();
  const reviewId = searchParams.get('reviewId');
  const productId = searchParams.get('productId');

  if (!productId) throw new Error('productId is invalid');
  if (!reviewId) throw new Error('reviewId is invalid');

  const { data: reviewDetail } = useReviewDetailQuery(Number(reviewId));

  if (!reviewDetail) return 'loading';

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
