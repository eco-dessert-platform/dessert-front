'use client';

import Review from '@/domains/review/components/Review';
import useMyReviewQuery from '@/domains/review/queries/useMyReviewQuery';

const ReviewList = () => {
  const { data: reviews } = useMyReviewQuery();

  return (
    <section className="flex flex-col divide-y divide-gray-200">
      {reviews?.map((review) => {
        const formmatedDate = new Date(review.date).toLocaleDateString('ko-KR');
        return <Review key={review.id} {...review} date={formmatedDate} />;
      })}
    </section>
  );
};

export default ReviewList;
