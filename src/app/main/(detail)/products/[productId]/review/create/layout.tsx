'use client';

import { useParams, useSearchParams } from 'next/navigation';
import Header from '@/shared/components/Header';
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { ReviewCreateForm } from '@/domains/review/types/review';

interface ReviewCreateLayoutProps {
  badgeSelect: React.ReactNode;
  starRatingSelect: React.ReactNode;
}

const ReviewCreateLayout = ({ badgeSelect, starRatingSelect }: ReviewCreateLayoutProps) => {
  const { productId } = useParams<{ productId: string }>();
  const searchParams = useSearchParams();
  const progress = searchParams.get('progress');
  const methods = useForm<ReviewCreateForm>({
    defaultValues: {
      rate: 1,
      badges: {
        texture: undefined,
        brix: undefined,
        taste: undefined
      },
      content: '',
      boardId: Number(productId),
      urls: []
    }
  });
  const { handleSubmit } = methods;

  const onValidSubmit: SubmitHandler<ReviewCreateForm> = () => {
    // TODO: mutate 함수 호출
  };

  const onInvalidSubmit: SubmitErrorHandler<ReviewCreateForm> = () => {};

  if (progress !== '1' && progress !== '2') throw new Error('비정상적인 접근입니다.');

  return (
    <>
      <Header
        title="리뷰 작성"
        content={<span className="typo-title-16-medium text-gray-500">{progress}/2</span>}
        back
      />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onValidSubmit, onInvalidSubmit)}>
          {progress === '1' && badgeSelect}
          {progress === '2' && starRatingSelect}
        </form>
      </FormProvider>
    </>
  );
};

export default ReviewCreateLayout;
