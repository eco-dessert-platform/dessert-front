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

  return (
    <section className="flex flex-col divide-y divide-gray-200">
      {reviews?.map(
        ({
          isBest,
          id,
          boardId,
          nickname,
          rating,
          comment,
          tags,
          like,
          isLiked,
          date,
          images,
          isMine
        }) => {
          const formattedDate = new Date(date).toLocaleDateString('ko-KR');
          return (
            <Review
              boardId={boardId}
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
              isMine={isMine}
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
