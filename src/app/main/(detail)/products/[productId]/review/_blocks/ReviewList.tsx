'use client';

import Review from '@/domains/review/components/Review';
import useReviewQuery from '@/domains/review/queries/useReviewQuery';
import Skeleton from '@/shared/components/Skeleton';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ReviewList = () => {
  const { inView, ref } = useInView();
  const { productId } = useParams<{ productId: string }>();
  const { data: reviews, fetchNextPage, hasNextPage } = useReviewQuery(Number(productId));

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  console.log(reviews);

  return (
    <section className="flex flex-col divide-y divide-gray-200">
      {reviews?.map(
        ({ isBest, id, nickname, rating, comment, tags, like, isLiked, date, images }) => {
          const formattedDate = new Date(date).toLocaleDateString('ko-KR');
          return (
            <Review
              key={id}
              id={id}
              nickname={nickname}
              rating={rating}
              comment={comment}
              tags={tags}
              like={like}
              isLiked={isLiked}
              isBest={isBest}
              date={formattedDate}
              images={images}
            />
          );
        }
      )}

      {hasNextPage && (
        <div ref={ref}>
          <Skeleton />
        </div>
      )}
    </section>
  );
};

export default ReviewList;
