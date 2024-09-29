import reviewService from '@/domains/review/queries/service';
import DefaultLayout from '@/shared/components/DefaultLayout';
import Header from '@/shared/components/Header';
import Review from '@/domains/review/components/Review';

interface Props {
  params: { reviewId: string };
}

const ReviewDetailPage = async ({ params: { reviewId } }: Props) => {
  const review = await reviewService.getReviewDetail(Number(reviewId));
  const formattedDate = new Date(review.date).toLocaleDateString('ko-KR');

  return (
    <DefaultLayout
      header={<Header title="리뷰 상세" back />}
      main={<Review {...review} date={formattedDate} usedIn="review-detail" />}
    />
  );
};

export default ReviewDetailPage;
