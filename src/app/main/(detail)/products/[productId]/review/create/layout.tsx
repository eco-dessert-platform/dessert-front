'use client';

import { useSearchParams } from 'next/navigation';
import Header from '@/shared/components/Header';
import ReviewFormProvider from './_blocks/ReviewFormProvider';
import ReviewCreateForm from './_blocks/ReviewCreateForm';

interface ReviewCreateLayoutProps {
  badgeSelect: React.ReactNode;
  starRatingSelect: React.ReactNode;
}

const ReviewCreateLayout = ({ badgeSelect, starRatingSelect }: ReviewCreateLayoutProps) => {
  const searchParams = useSearchParams();
  const progress = searchParams.get('progress');

  if (progress !== '1' && progress !== '2') throw new Error('비정상적인 접근입니다.');

  return (
    <>
      <Header
        title="리뷰 작성"
        content={<span className="typo-title-16-medium text-gray-500">{progress}/2</span>}
        back
      />
      <ReviewFormProvider>
        <ReviewCreateForm>
          {progress === '1' && badgeSelect}
          {progress === '2' && starRatingSelect}
        </ReviewCreateForm>
      </ReviewFormProvider>
    </>
  );
};

export default ReviewCreateLayout;
