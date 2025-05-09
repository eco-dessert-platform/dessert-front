'use client';

import Review from '@/domains/review/components/Review';
import useMyReviewQuery from '@/domains/review/queries/useMyReviewQuery';
import SadBbangleBox from '@/shared/components/SadBbangleBox';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ReviewList = () => {
  const { inView, ref } = useInView();
  const { data: reviews, fetchNextPage, hasNextPage } = useMyReviewQuery();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  if (!reviews || reviews.length === 0)
    return <SadBbangleBox className="absoulte-center">작성된 리뷰가 없어요.</SadBbangleBox>;

  return (
    <section className="flex flex-col divide-y divide-gray-200">
      {reviews?.map(
        ({
          id,
          comment,
          date,
          boardId,
          nickname,
          isBest,
          images,
          rating,
          tags,
          like,
          isLiked,
          isMine
        }) => {
          const formmatedDate = new Date(date).toLocaleDateString('ko-KR');
          return (
            <Review
              boardId={boardId}
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
              isMine={isMine}
              usedIn="review-list"
            />
          );
        }
      )}
      {hasNextPage && (
        <div ref={ref}>
          <Review.Skeleton />
        </div>
      )}
    </section>
  );
};

export default ReviewList;
