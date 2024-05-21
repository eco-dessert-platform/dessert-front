'use client';

import { FormEvent } from 'react';
import Header from '@/shared/components/Header';
import BadgeSelectPage from '@/blocks/review/BadgeSelectPage';
import StarRatingSelectPage from '@/blocks/review/StarRatingSelectPage';

interface ReviewCreatePageProps {
  searchParams: {
    progress: '1' | '2';
  };
}

const ReviewCreatePage = ({ searchParams: { progress } }: ReviewCreatePageProps) => {
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: mutate 함수 호출
  };

  if (progress !== '1' && progress !== '2') throw new Error();

  return (
    <>
      <Header
        title="리뷰 작성"
        content={<span className="typo-title-16-medium text-gray-500">{progress}/2</span>}
        back
      />
      <form onSubmit={handleFormSubmit}>
        {progress === '1' ? <BadgeSelectPage /> : <StarRatingSelectPage />}
      </form>
    </>
  );
};

export default ReviewCreatePage;
