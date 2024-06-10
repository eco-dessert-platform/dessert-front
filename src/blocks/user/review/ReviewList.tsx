'use client';

import Review from '@/domains/review/components/Review';
import useMyReviewQuery from '@/domains/review/queries/useMyReviewQuery';

const ReviewList = () => {
  const { data: reviews } = useMyReviewQuery();

  return (
    <section className="flex flex-col divide-y divide-gray-200">
      {reviews?.map(
        ({ id, comment, date, nickname, isBest, images, rating, tags, like, isLiked }) => {
          const formmatedDate = new Date(date).toLocaleDateString('ko-KR');
          return (
            <Review
              key={id}
              id={id}
              nickname={nickname}
              images={images}
              rating={rating}
              comment={comment}
              tags={tags}
              like={like}
              isLiked={isLiked}
              isBest={isBest}
              date={formmatedDate}
            />
          );
        }
      )}
    </section>
  );
};

export default ReviewList;
