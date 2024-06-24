import Header from '@/shared/components/Header';
import ReviewCreateForm from '@/domains/review/components/ReviewCreatForm';
import { notFound } from 'next/navigation';
import reviewService from '@/domains/review/queries/service';
import { getFormValuesFromReviewType } from '@/domains/review/utils/transformer';

interface ReviewUpdatePageProps {
  params: { reviewId: string; productId: string; progress: string };
}

const ReviewUpdatePage = async ({ params }: ReviewUpdatePageProps) => {
  const progress = Number(params.progress);

  if (!(progress === 1 || progress === 2)) notFound();

  const reviewDetail = await reviewService.getReviewDetail(Number(params.reviewId));
  const defaultValues = getFormValuesFromReviewType({
    review: reviewDetail,
    boardId: Number(params.productId)
  });

  return (
    <>
      <Header
        title="리뷰 작성"
        content={<span className="typo-title-16-medium text-gray-500">{progress}/2</span>}
        back
      />
      <ReviewCreateForm progress={progress} defaultValues={defaultValues} />
    </>
  );
};

export default ReviewUpdatePage;
