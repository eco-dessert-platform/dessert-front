import ReviewFormProvider from '@/domains/review/components/ReviewFormProvider';
import reviewService from '@/domains/review/queries/service';
import { getFormValuesFromReviewType } from '@/domains/review/utils/transformer';
import { Suspense } from 'react';

interface Props {
  params: { productId: string; reviewId: string };
  children: React.ReactNode;
}

const Layout = async ({ children, params }: Props) => {
  const reviewDetail = await reviewService.getReviewDetail(Number(params.reviewId));
  const defaultValues = getFormValuesFromReviewType({
    review: reviewDetail,
    boardId: Number(params.productId)
  });

  return (
    <Suspense>
      <ReviewFormProvider defaultValues={defaultValues}>{children}</ReviewFormProvider>
    </Suspense>
  );
};

export default Layout;
